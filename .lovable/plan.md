# Fix the structured data properties

## What changes for you
- **Chinese medicine label:** already removed in the previous step. The plan only re-checks that it is gone everywhere.
- **Search box declared to Google:** removed. The Services page does not search, so Google should not be told it does.
- **Specialties and procedure types:** replaced with standard values Google recognises, such as Dentistry, Orthodontics and Surgical. The Romanian names stay as the readable label.
- **Rating 5.0 and reviews:** no longer sent to Google, on any page. The reviews stay visible on the homepage.
- **Article dates:** each article has one date, taken from the blog list (25 Oct to 15 Nov 2025). The blog list, the homepage "recent articles" box, each article page, its social-sharing data and the Google data all read from it.
- **FAQ answers:** the text sent to Google is pulled out correctly even from complex answers that contain links, lists or bold text.

## Technical details
- `index.html`: delete the WebSite `potentialAction`. Delete `aggregateRating` from the organization node.
- `src/pages/Index.tsx`: remove `useAggregateRatingSchema`. Delete `src/hooks/use-aggregate-rating-schema.tsx` if nothing else uses it. In `use-local-business-schema.tsx`, also strip any rating.
- MedicalProcedure (`use-seo-schema.tsx`):
  - `procedureType` accepts only the schema.org enum: `Surgical`, `NoninvasiveProcedure`, `PercutaneousProcedure`, mapped as `https://schema.org/...` URLs.
  - The free text moves to `name`/`alternateName`.
  - A typed union in TS stops invalid values; each of the 13 service pages gets a mapped value. Surgery and implant pages are Surgical. Most others are Noninvasive.
- Specialty (`use-local-business-schema.tsx`):
  - `specialty` uses `MedicalSpecialty` enum URLs: `Dentistry` for most pages, `https://schema.org/Surgical` for surgery and implants, and `Radiography` for CBCT.
  - The Romanian name is kept as `name` on a sibling `MedicalSpecialty` object only when valid; otherwise it is dropped. The TS union is enforced.
- Article dates:
  - New `src/config/blog-articles.ts`: one entry per article with slug, title, excerpt, an ISO `datePublished`/`dateModified` and a Romanian display formatter.
  - Consumers: `Blog.tsx`, `recentArticles` in `related-content.ts`, the 6 article pages (`useSEOSchema` article + PageSEO `publishedTime`/`modifiedTime`).
  - `src/data/schema/blog-list.json` is replaced by an ItemList generated from that config.
- `extractTextFromNode`:
  - Handles top-level arrays, `0`, booleans, null/undefined, nested fragments and elements.
  - Joins with whitespace normalisation and trims.
- Verification:
  - Run Playwright on Home, Blog, one article and one service page.
  - Confirm the JSON-LD has no rating, no SearchAction and no TraditionalChinese, uses only enum values and shows matching dates.
  - Then validate the JSON-LD output against the schema.org vocabulary using a script check of the enum URLs.
- Add an `AGENTS.md` rule: article dates come from one config, and schema enum values are typed.
