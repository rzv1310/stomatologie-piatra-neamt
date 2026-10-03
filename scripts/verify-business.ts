// Eșuează dacă telefonul, adresa, programul, coordonatele sau emailul clinicii apar scrise
// direct în afara src/config/business.ts. Rulare: npx tsx scripts/verify-business.ts
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { BUSINESS } from "../src/config/business";

const needles = [
  BUSINESS.phone.display, BUSINESS.phone.e164, "0333630005", "333 630 005",
  BUSINESS.whatsapp.e164.replace("+", ""), BUSINESS.email, BUSINESS.address.street,
  String(BUSINESS.geo.lat), "46.9310", "09:00 - 19:00", "09:00-19:00", "Sâmbătă: 09",
];
const allowed = new Set(["src/config/business.ts"]);
const walk = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
const files = [...walk("src"), ...walk("public"), "index.html"].filter(
  (f) => /\.(tsx?|html|txt|md|json|xml)$/.test(f) && !allowed.has(f),
);

let failed = 0;
for (const f of files) {
  readFileSync(f, "utf8").split("\n").forEach((line, i) => {
    for (const n of needles) {
      if (line.includes(n)) {
        failed++;
        console.log(`FAIL ${f}:${i + 1} conține „${n}”`);
      }
    }
  });
}
console.log(failed ? `${failed} valori scrise direct` : `OK: ${files.length} fișiere, nicio dată a clinicii scrisă direct`);
process.exit(failed ? 1 : 0);
