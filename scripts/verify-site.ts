/**
 * Site verification, split into independent checks:
 *   fallback  – direct HTTP GET of every real route returns 200 + HTML + #root
 *   render    – in a browser: no page error, an <h1>, not the NotFound screen
 *   metadata  – canonical equals SITE_URL + path; title non-empty and unique
 *   redirects – legacy paths end at their target (client-side, not HTTP 301)
 *   notfound  – unknown URL shows NotFound with noindex; HTTP status reported honestly
 *               (200 = SOFT-404 warning, never counted as a pass)
 * Run: BASE_URL=http://localhost:8080 npm run verify:site
 * One-time setup: npx playwright install chromium
 */
import { pathToFileURL } from "node:url";
import { chromium, type Page } from "playwright";
import { ROUTE_REGISTRY, SITE_URL } from "../src/config/route-registry";

const BASE_URL = (process.env.BASE_URL || SITE_URL).replace(/\/$/, "");
type Status = "PASS" | "FAIL" | "WARN";
const results: { check: string; target: string; status: Status; detail?: string }[] = [];
const record = (check: string, target: string, status: Status, detail?: string) => {
  results.push({ check, target, status, detail });
  console.log(`${status.padEnd(4)} [${check}] ${target}${detail ? `  ${detail}` : ""}`);
};

const pages = ROUTE_REGISTRY.filter((r) => r.page && r.path !== "*");
const redirects = ROUTE_REGISTRY.filter((r) => r.redirectTo);

async function checkFallback() {
  for (const r of [...pages, ...redirects]) {
    try {
      const res = await fetch(`${BASE_URL}${r.path}`, { headers: { Accept: "text/html" } });
      const html = await res.text();
      const ok = res.status === 200 && /text\/html/.test(res.headers.get("content-type") || "") && html.includes('id="root"');
      record("fallback", r.path, ok ? "PASS" : "FAIL", ok ? undefined : `HTTP ${res.status}`);
    } catch (e) {
      record("fallback", r.path, "FAIL", String(e));
    }
  }
}

async function open(page: Page, path: string) {
  const errors: string[] = [];
  const onErr = (e: Error) => errors.push(e.message);
  page.on("pageerror", onErr);
  const res = await page.goto(`${BASE_URL}${path}`, { waitUntil: "networkidle" });
  await page.waitForSelector("h1", { timeout: 10000 }).catch(() => {});
  page.off("pageerror", onErr);
  return { res, errors };
}

const canonicalOf = (page: Page) => page.locator('link[rel="canonical"]').first().getAttribute("href").catch(() => null);
const isNotFound = async (page: Page) => (await page.locator('[data-page="not-found"]').count()) > 0;

async function checkRenderAndMeta(page: Page) {
  const titles = new Map<string, string>();
  for (const r of pages) {
    const { errors } = await open(page, r.path);
    const h1 = await page.locator("h1").count();
    const nf = await isNotFound(page);
    const renderOk = !errors.length && h1 > 0 && !nf;
    record("render", r.path, renderOk ? "PASS" : "FAIL",
      renderOk ? undefined : [errors[0], !h1 && "no h1", nf && "NotFound shown"].filter(Boolean).join("; "));

    const canonical = await canonicalOf(page);
    const title = (await page.title()).trim();
    const problems: string[] = [];
    if (canonical !== `${SITE_URL}${r.path}`) problems.push(`canonical=${canonical}`);
    for (const sel of ['link[rel="canonical"]','meta[name="robots"]','meta[name="description"]','meta[property="og:url"]','meta[name="author"]','meta[name="publisher"]']) {
      const n = await page.locator(sel).count();
      if (n !== 1) problems.push(`${sel} x${n}`);
    }
    if (!title) problems.push("empty title");
    else if (titles.has(title)) problems.push(`title duplicates ${titles.get(title)}`);
    else titles.set(title, r.path);
    record("metadata", r.path, problems.length ? "FAIL" : "PASS", problems.join("; ") || undefined);
  }
}

async function checkRedirects(page: Page) {
  for (const r of redirects) {
    await open(page, r.path);
    const finalPath = new URL(page.url()).pathname;
    const canonical = await canonicalOf(page);
    const ok = finalPath === r.redirectTo && canonical === `${SITE_URL}${r.redirectTo}` && !(await isNotFound(page));
    record("redirects", `${r.path} -> ${r.redirectTo}`, ok ? "PASS" : "FAIL",
      ok ? "(client-side, not HTTP 301)" : `ended at ${finalPath}, canonical=${canonical}`);
  }
}

async function checkNotFound(page: Page) {
  const path = `/verificare-404-${Date.now()}`;
  const { res } = await open(page, path);
  const status = res?.status() ?? 0;
  const nf = await isNotFound(page);
  const robotsCount = await page.locator('meta[name="robots"]').count();
  record("notfound", `${path} single robots`, robotsCount === 1 ? "PASS" : "FAIL", `count=${robotsCount}`);
  const robots = (await page.locator('meta[name="robots"]').first().getAttribute("content").catch(() => "")) || "";
  record("notfound", `${path} screen`, nf ? "PASS" : "FAIL", nf ? undefined : "NotFound screen not shown");
  record("notfound", `${path} noindex`, robots.includes("noindex") ? "PASS" : "FAIL", `robots="${robots}"`);
  if (status === 404 || status === 410) record("notfound", `${path} HTTP status`, "PASS", `HTTP ${status}`);
  else if (status === 200) record("notfound", `${path} HTTP status`, "WARN", "SOFT-404: server answers 200 (SPA hosting cannot send a real 404)");
  else record("notfound", `${path} HTTP status`, "FAIL", `HTTP ${status}`);
}

export async function main(): Promise<number> {
  console.log(`Verifying ${BASE_URL}\n`);
  await checkFallback();
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await checkRenderAndMeta(page);
    await checkRedirects(page);
    await checkNotFound(page);
  } finally {
    await browser.close();
  }
  console.log("\nSummary:");
  for (const check of ["fallback", "render", "metadata", "redirects", "notfound"]) {
    const rs = results.filter((r) => r.check === check);
    const c = (s: Status) => rs.filter((r) => r.status === s).length;
    console.log(`  ${check.padEnd(10)} ${c("PASS")} pass, ${c("FAIL")} fail, ${c("WARN")} warn`);
  }
  return results.some((r) => r.status === "FAIL") ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().then((code) => process.exit(code));
}
