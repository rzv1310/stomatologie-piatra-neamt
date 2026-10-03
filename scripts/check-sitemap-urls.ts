/**
 * Sitemap URL check: every sitemap URL must answer 2xx directly.
 * Any 4xx/5xx, network error, timeout, redirect or redirect loop is a failure.
 * The redirect chain is followed manually (up to MAX_HOPS) and printed.
 * Run: npm run check:sitemap   (BASE_URL overrides the host, default SITE_URL)
 */
import { pathToFileURL } from "node:url";
import { SITE_URL, sitemapRoutes } from "../src/config/route-registry";

const BASE_URL = (process.env.BASE_URL || SITE_URL).replace(/\/$/, "");
const TIMEOUT_MS = 10000;
const MAX_HOPS = 10;

interface Hop { url: string; status: number }
interface Result { url: string; chain: Hop[]; ok: boolean; reason?: string }

async function fetchOnce(url: string): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { redirect: "manual", signal: ctrl.signal, headers: { "User-Agent": "Sitemap-Check/2.0" } });
  } finally {
    clearTimeout(t);
  }
}

export async function checkUrl(start: string): Promise<Result> {
  const chain: Hop[] = [];
  const seen = new Set<string>();
  let url = start;
  try {
    for (let i = 0; i <= MAX_HOPS; i++) {
      if (seen.has(url)) return { url: start, chain, ok: false, reason: "redirect loop" };
      seen.add(url);
      const res = await fetchOnce(url);
      chain.push({ url, status: res.status });
      if (res.status >= 300 && res.status < 400) {
        const loc = res.headers.get("location");
        if (!loc) return { url: start, chain, ok: false, reason: "redirect without Location" };
        url = new URL(loc, url).href;
        continue;
      }
      if (chain.length > 1) return { url: start, chain, ok: false, reason: "sitemap URL redirects" };
      if (res.status < 200 || res.status >= 300) return { url: start, chain, ok: false, reason: `HTTP ${res.status}` };
      return { url: start, chain, ok: true };
    }
    return { url: start, chain, ok: false, reason: `more than ${MAX_HOPS} redirects` };
  } catch (e) {
    return { url: start, chain, ok: false, reason: e instanceof Error ? (e.name === "AbortError" ? "timeout" : e.message) : String(e) };
  }
}

export async function main(): Promise<number> {
  const urls = sitemapRoutes().map((r) => `${BASE_URL}${r.path}`);
  console.log(`Checking ${urls.length} sitemap URLs on ${BASE_URL}`);
  const results: Result[] = [];
  for (const u of urls) {
    const r = await checkUrl(u);
    results.push(r);
    const chain = r.chain.map((h) => `${h.status} ${h.url}`).join(" -> ");
    console.log(`${r.ok ? "PASS" : "FAIL"}  ${chain || u}${r.reason ? `  (${r.reason})` : ""}`);
  }
  const failed = results.filter((r) => !r.ok).length;
  console.log(`\n${results.length - failed} passed, ${failed} failed`);
  return failed ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().then((code) => process.exit(code));
}
