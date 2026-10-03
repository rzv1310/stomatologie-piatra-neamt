// Verifică faptul că dimensiunile declarate în index.html (icons, OG, logo schema)
// sunt egale cu dimensiunile reale ale fișierelor din public/. Rulare: npx tsx scripts/verify-images.ts
import { readFileSync } from "node:fs";
import sharp from "sharp";

const html = readFileSync("index.html", "utf8");
const real = async (file: string) => {
  const m = await sharp(`public/${file}`).metadata();
  return [m.width ?? 0, m.height ?? 0];
};
const checks: [string, number, number][] = [];
for (const m of html.matchAll(/<link[^>]*sizes="(\d+)x(\d+)"[^>]*href="\/([^"]+)"/g)) checks.push([m[3], +m[1], +m[2]]);
const og = html.match(/og:image" content="[^"]*\/([^"/]+)"/)?.[1];
const w = html.match(/og:image:width" content="(\d+)"/)?.[1];
const h = html.match(/og:image:height" content="(\d+)"/)?.[1];
if (og && w && h) checks.push([og, +w, +h]);
const logo = html.match(/"logo":\s*\{[^}]*"url":\s*"[^"]*\/([^"/]+)"[^}]*"width":\s*(\d+)[^}]*"height":\s*(\d+)/);
if (logo) checks.push([logo[1], +logo[2], +logo[3]]);

let failed = 0;
for (const [file, dw, dh] of checks) {
  const [rw, rh] = await real(file);
  const ok = rw === dw && rh === dh;
  if (!ok) failed++;
  console.log(`${ok ? "OK  " : "FAIL"} ${file} declarat ${dw}x${dh}, real ${rw}x${rh}`);
}
process.exit(failed ? 1 : 0);
