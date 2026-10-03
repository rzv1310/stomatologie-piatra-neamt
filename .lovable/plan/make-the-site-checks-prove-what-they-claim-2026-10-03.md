# Make the site checks prove what they claim

## What changes for you
The current check tools can report "all good" without actually checking. Two of them never even start in this project. They will be replaced by five separate checks, and each one only passes on real evidence:

1. **Every page opens on direct access:** each real address loads the app.
2. **Each page shows the right content:**
   - the page actually renders, with a heading and no crash
   - it is not the "page not found" screen
   - its title and canonical address match that page
3. **Old addresses forward correctly:**
   - each old article address ends on its new article
   - the old general-dentistry address ends on the endodontics page
4. **Sitemap addresses are clean:** any error answer (4xx/5xx) fails. Any address that forwards elsewhere also fails, and the full forwarding chain is shown.
5. **Missing pages:** this check reports honestly what the server answers.
   - On Lovable hosting, a missing address answers "OK" (200) and then shows the "page not found" screen. The check reports that as a "soft 404" warning, never as a pass.
   - It still requires the screen to show and to tell Google not to index it.

Limitation, stated plainly: Lovable hosting cannot send a real 404 code or a real 301 redirect for a single-page site. Forwarding happens in the browser. The checks state this instead of hiding it.

## Fixes found while checking
- The old address `/servicii/stomatologie-generala` is forwarded only by a file that Lovable hosting ignores, so it likely shows "page not found" today. It will be added to the site's own page list.
- That ignored file (`public/_redirects`) will be deleted so it doesn't suggest protection that isn't there.

## Technical details
- Runner:
  - The scripts run with `tsx` (already declared).
  - Replace `require.main === module` with an ESM guard: `import.meta.url === pathToFileURL(process.argv[1]).href`.
  - Exit code is non-zero on any failure.
- `scripts/check-sitemap-urls.ts`:
  - Fetch with `redirect: 'manual'` and follow `Location` up to 10 hops.
  - Record the chain. Fail on non-2xx, on any redirect, on loops and on timeouts.
  - Read the sitemap from `buildSitemapXml()` instead of `dist/`, so no build is needed.
- New `scripts/verify-site.ts` uses the Playwright Node package (devDependency `playwright`; one-time local `npx playwright install chromium`). `BASE_URL` comes from the environment and defaults to the published URL.
  - **fallback:** HTTP GET on each registry path expects 200 + HTML + `#root`.
  - **render:** for each page in the browser:
    - no `pageerror` and an `h1` is present
    - the NotFound marker is absent (`data-page="not-found"` added to NotFound)
    - `link[rel=canonical]` equals `SITE_URL + path`, and `document.title` is non-empty and unique across routes
  - **redirects:** each registry entry with `redirectTo` must end at that path with the target's canonical.
  - **not-found:** a random path records its HTTP status. It expects the NotFound marker and `meta[name=robots]` containing `noindex`. A 200 status prints a SOFT-404 warning and is not counted as a pass for status.
  - Output is a per-check summary.
- Delete `scripts/test-spa-fallback.ts`, which `verify-site` replaces.
- `package.json` scripts: `check:sitemap`, `verify:site`.
- Update `scripts/README.md`.
- Add an `AGENTS.md` rule: verification is split into fallback, render, redirects, metadata and not-found checks. Soft-404 is never reported as pass.
- Run `verify:site` against the local preview before finishing.
