# SEO audit: rootriverhardwoods.com

**Date:** November 11, 2026
**Audit type:** Full site audit (keywords, on-page, content gaps, technical, competitors)
**Site:** https://www.rootriverhardwoods.com/ (Webflow, about 1,250 indexed URLs)
**Competitors benchmarked:** [Ferche Millwork](https://www.ferche.com/) (Rice, MN) and [Mason's Mill & Lumber](https://masonsmillandlumber.com/) (national moulding supplier)

> **How this was measured:** I crawled 16 key pages, checked every non-profile page in the sitemap and a sample of 42 profile pages, read the structured data, and measured home page load in a real browser. No SEO tool was connected, so **search volume, difficulty and current rankings are estimates**, not measured data. The site already runs Ahrefs analytics, so connecting the Ahrefs connector (or exporting Google Search Console data) would replace the estimates with real numbers.

---

## Executive summary

The site has a **solid technical base**: every page loads (no broken pages in the sitemap), the home page is fast (main content appears in about 1.1 s, no layout jumping), every page has a canonical tag, and most main pages have good keyword-led titles. **The biggest strength is the 1,190-page moulding profile library**, a long-tail asset few regional competitors have.

The **top three priorities**:
1. **Fix the profile pages**: they carry Webflow shop leftovers ("$0.01 USD", "Buy now", "out of stock"), titles with stray numbers, no structured data, and no alt text on the drawings. Fixing the template fixes all 1,190 pages at once.
2. **Repair the broken FAQ structured data**: a missing quote mark makes the whole FAQ schema invalid, so Google ignores it.
3. **Build content for the new positioning**: the site still ranks itself as a sawmill and lumber company. There are almost no pages for what the new site sells (custom doors, profile matching, historic restoration, curved millwork, architect resources), and the blog has one post.

**Overall assessment: strong foundation, but the content no longer matches the business.** The redesign is the right moment to fix both. Because the new site moves to Astro, the biggest risk is **losing existing rankings during migration**. A full URL redirect map is essential.

---

## Keyword opportunity table

Estimates are relative (high / medium / low) and should be checked in Ahrefs or Search Console. "Current ranking" is unknown without those tools.

| Keyword | Est. difficulty | Opportunity | Current ranking | Intent | Recommended content type |
|---|---|---|---|---|---|
| custom millwork minnesota | Moderate | **High** | Unknown | Commercial | Service page (Custom Millwork) |
| custom moulding minneapolis | Moderate | **High** | Unknown | Commercial | Service page + profile library |
| custom trim moulding near me / twin cities | Moderate | **High** | Unknown | Transactional | Service page + Google Business Profile |
| moulding profile matching / match existing trim | Easy | **High** | Unknown | Transactional | Dedicated "Match your profile" page with process |
| hardwood moulding profiles | Moderate | **High** | Unknown | Commercial | Profile library index |
| custom interior wood doors minnesota | Moderate | **High** | Unknown | Commercial | Doors service page |
| architectural millwork minneapolis | Moderate | **High** | Unknown | Commercial | Service page + project case studies |
| historic trim replication / restoration millwork minnesota | Easy | **High** | Unknown | Commercial | Landing page + case study |
| white oak trim / white oak baseboard | Moderate | Medium | Unknown | Commercial | Species page + blog |
| custom crown moulding | Hard | Medium | Unknown | Commercial | Category page (Crowns) |
| casing profiles / door casing styles | Moderate | Medium | Unknown | Informational | Visual style guide (blog) |
| baseboard styles for luxury homes | Moderate | Medium | Unknown | Informational | Blog guide with profile links |
| curved millwork / radius moulding | Easy | Medium | Unknown | Commercial | Service section + gallery |
| custom stair parts / handrails minnesota | Moderate | Medium | Unknown | Commercial | Service page (Stairs) |
| wood beams custom / timber beams interior | Moderate | Medium | Unknown | Commercial | Service page (Beams) |
| millwork for architects / AWI millwork specs | Easy | Medium | Unknown | Commercial | Architect resources page (CAD/PDF downloads) |
| paint grade vs stain grade trim | Easy | Medium | Unknown | Informational | Blog post |
| what is millwork vs trim carpentry | Easy | Medium | Unknown | Informational | Blog post |
| how much does custom trim cost | Moderate | Medium | Unknown | Commercial | Blog post / pricing guide |
| lumber grading (FAS, select, #1 common) | Moderate | Medium | Likely ranking (existing guide) | Informational | Keep and update existing post |
| live edge slabs minnesota | Moderate | Low* | Unknown | Transactional | Keep only if slabs are still sold |
| timber buyers minnesota / sell timber | Moderate | Low* | Unknown | Transactional | Keep only if forestry stays |
| sawmill minnesota | Moderate | Low* | Unknown | Navigational | Keep only if sawmill services stay |
| RR profile numbers (e.g. "RR1259") | Easy | Low | Likely ranking | Navigational | Profile pages (keep URLs) |

\* Low only because these services may be leaving the new site. If they stay, they're medium-to-high, since the current pages are already targeted at them.

**Question keywords to answer** (good for FAQ and blog, People Also Ask): *What wood is best for interior trim? Can you match old trim profiles? How long does custom millwork take? What's the difference between casing and moulding? Is white oak good for baseboards? Paint grade vs stain grade?*

---

## On-page issues table

| Page | Issue | Severity | Recommended fix |
|---|---|---|---|
| All 1,190 profile pages (`/product/…`) | Show "$0.01 USD", "Buy now" and "This product is out of stock" (Webflow e-commerce leftovers) | **Critical** | Remove price and cart; add "Request a quote" and phone CTA |
| All profile pages | Titles contain stray width numbers: "Moulding Profile RR1091 \| 4.56 \|Root River Hardwoods" | **High** | Pattern: "RR1091 Casing Moulding Profile, 4.56 in \| Root River Hardwoods" |
| All profile pages | Same generic meta description on every page | **High** | Template it with type, width and species: "RR1091 hardwood casing, 4.56 in wide…" |
| All profile pages | No structured data | **High** | Add `Product` schema (name, image, category, brand) without price, plus `BreadcrumbList` |
| All profile pages | Drawing images have no alt text | **High** | Alt: "RR1091 casing profile drawing, 4.56 in wide" |
| Some profile pages (e.g. RR1000) | No drawing (placeholder image) | **High** | Add drawings or hide these profiles until drawings exist |
| `/faq` | FAQ schema is **invalid JSON** (`"@type": "Answer,` is missing a quote), so the whole FAQ schema is ignored | **Critical** | Fix the quote mark; validate with Google's Rich Results Test |
| `/faq` | Title is just "FAQ" (3 characters); no meta description; no H2s | **High** | Title: "Millwork & Lumber FAQ \| Root River Hardwoods"; add description; questions as H2/H3 |
| 22 `/category/…` pages | Title is just "Root River Hardwoods"; no description; no Open Graph; 100+ H2s repeating "Forestry" | **High** | Redirect to matching profile category pages, or noindex |
| `/live-edge-wood-slabs` | Title "Live Edge Wood Slabs" (20 chars), no meta description | **Medium** | Add location and intent: "Live Edge Wood Slabs in Minnesota \| Walnut, Oak & More" |
| Live edge species pages | Copy-pasted moulding description ("Explore 1,000+ custom-milled moulding…") | **Medium** | Unique descriptions per species |
| Blog post (lumber grading) | Two H1s (second is empty); 533-character meta description; no Article schema; no Open Graph tags | **Medium** | One H1, description ≤160 chars, add `Article` schema and OG tags |
| Home page | 38 of 40 images have no alt text | **Medium** | Alt text on all meaningful images; `alt=""` only for decoration |
| All main pages | No social sharing image (`og:image`) except Careers | **Medium** | Add a per-page share image |
| Home, Our Story, Custom Millworks, Contact | Titles over 60 characters (62–73) | **Low** | Shorten; they will be cut off in search results |
| Home | H1 "From forest to finish…" leads with forestry, not millwork | **Medium** | New H1 aligned to new positioning (the Figma hero does this) |
| Main pages | H1s are one word ("Lumber", "Sawmill", "Forestry", "Custom Millworks") | **Low** | Add the keyword and place: "Custom Millwork for Minnesota Homes" |
| Site-wide | Organization schema has wrong logo URL (404), conflicting address (Energy Drive vs Highway 52 N) and founding date (1974 vs 1968 on Our Story) | **High** | Correct facts; use `LocalBusiness` with real address, phone and hours |
| Site-wide | Two phone numbers (507-765-2284 and 507-377-8781) | **Medium** | Consistent NAP (name, address, phone) everywhere, including Google Business Profile |
| Forestry, Sawmill, Live Edge, FAQ, Blog | Not in main menu; reachable only via footer or sitemap | **Medium** | Link them from relevant pages, or retire and redirect them |
| Profile index and categories | 50+ cards per page with H2 per card | **Low** | Use H3 or plain text for card titles; keep H2s for sections |

---

## Content gap recommendations

| Topic / keyword | Why it matters | Format | Priority | Effort |
|---|---|---|---|---|
| **Custom doors** (interior, entry, arched) | Core product in the new positioning; no page exists; high-value searches | Service page + gallery | High | Moderate |
| **Profile matching / "bring us your trim"** | High intent, low competition; a strong differentiator ("we cut new knives to match yours") | Landing page with step-by-step process and photo examples | High | Moderate |
| **Project case studies** (e.g. Eleven Condo with Ryan Companies, lake homes) | Proof for builders and architects; earns links from partners; image search | Project pages (new Figma has a Projects section) | High | Substantial |
| **Architect & designer resources** (CAD/DXF drawings, spec sheets, species guide) | Ferche ranks with a CAD library; architects search for downloadable profiles | Resource hub with downloads | High | Moderate |
| **Historic restoration / trim replication** | Twin Cities has many older homes; few competitors target it | Landing page + case study | High | Moderate |
| **Stairs, beams, curved millwork** | Listed in the new hero copy but no dedicated pages | Service pages (one each) | Medium | Moderate |
| **Species guides** (white oak, walnut, cherry, maple for trim) | Informational demand; links naturally to profile library | Blog series / pillar page | Medium | Moderate |
| **Trim style guides** (casing styles, baseboard styles, crown styles) | Image-heavy searches; Mason's Mill has 56 posts in this space | Blog posts linking into the profile catalog | Medium | Moderate |
| **Cost and timeline** ("how much does custom millwork cost", "lead times") | Decision-stage questions buyers ask before calling | Blog post or FAQ section | Medium | Quick win |
| **Service-area pages** (Wayzata, Minnetonka, Edina, Rochester) | Local search; the current site mentions Wayzata only in passing | Location pages with local projects | Medium | Moderate |
| **Blog cadence** | 1 post total vs 56 at Mason's Mill | 2 posts a month, tied to the topics above | Medium | Ongoing |

**Funnel gaps:** the site covers awareness (story) and decision (contact) but has almost nothing for **consideration**: no project galleries, no comparisons, no resources for architects, no process explanation.

**Suggested topic cluster:** a pillar page "Custom Trim & Moulding Guide" linking to style guides (casings, base, crowns), species guides, the matching process and the profile library.

---

## Technical SEO checklist

| Check | Status | Details |
|---|---|---|
| HTTPS | Pass | Served over HTTPS |
| XML sitemap | Pass | Present; 1,251 URLs; referenced in robots.txt |
| robots.txt | Pass | Blocks only `/templates/` and `/unused-pages/` |
| Broken pages in sitemap | Pass | All 62 non-profile pages and 42 sampled profile pages return 200 |
| Canonical tags | Pass | Present and self-referencing on every page checked |
| Viewport / mobile | Pass | Viewport tag present; responsive layout |
| Page speed (home) | Pass | Main content visible ~1.1 s (LCP), server response ~0.4 s, full load ~3.2 s |
| Layout stability (CLS) | Pass | 0.00 on home page |
| Page weight (home) | Warning | 174 requests, ~800 KB transferred; background video plus many third-party scripts (Google Ads, GTM, HubSpot, Ahrefs) |
| Structured data: Organization / Service | Warning | Present, but logo URL is a 404 and facts conflict |
| Structured data: FAQ | **Fail** | Invalid JSON, ignored by Google |
| Structured data: Product, Article, Breadcrumb | **Fail** | Missing on profile pages and blog post |
| Open Graph image | **Fail** | Missing on all main pages except Careers |
| Image alt text | **Fail** | 80–98% of images on key pages have no alt text |
| URL case consistency | Warning | 1,030 profile URLs are uppercase (`/product/RR1091`) and 160 are lowercase (`/product/rr1259`). The other case returns a 404. Keep exact cases when redirecting. |
| Thin / duplicate pages | Warning | 22 `/category/` tag pages duplicate the profile categories |
| Orphan-ish pages | Warning | Forestry, Sawmill, Live Edge, FAQ, Blog not linked from main menu |
| Language attribute | Pass | `lang="en"` |

---

## Competitor comparison summary

| Dimension | Root River | Ferche Millwork | Mason's Mill & Lumber | Winner |
|---|---|---|---|---|
| Indexed pages (sitemap) | ~1,250 | ~405 | ~6,000 | Mason's |
| Profile / product pages | 1,190 | 348 | ~5,470 | Mason's |
| Profile drawings with specs | Yes (most) | Yes, plus **CAD downloads** | Yes | Ferche (CAD) |
| Blog posts | 1 | News page only | 56 | Mason's |
| Project / portfolio pages | 0 | 0 | 13 projects + 63 portfolio items | Mason's |
| Home page title targeting | Location + services | Brand + product | Generic ("Homepage – …") | Root River |
| Structured data | Organization, Service (with errors) | None found | Present (Yoast/WordPress) | Tie |
| Image alt text | Mostly missing | 28 of 29 present | 59 of 76 present | Ferche |
| Social share image | Missing | Present | Present | Ferche / Mason's |
| Local focus (MN/WI/IA) | Strong | Minnesota-based, national reach | National | Root River |
| Speed / layout stability | Fast, stable | Not measured | Not measured | — |
| Backlinks / authority | Unknown | Unknown | Unknown | Needs Ahrefs data |

**Takeaways:**
- Root River's **local targeting is already better** than both competitors. Keep the location keywords in the new site.
- **Mason's Mill wins on volume** (catalog size, blog, projects). Root River can't match the catalog size, but can match the content habits: projects and a regular blog.
- **Ferche's CAD library** is the feature most worth copying for architects.

Other local names that came up in search (no website benchmarked): Trademark Wood Products (Minneapolis/Shakopee), A&A Millwork (Minneapolis, historic matching), Great Northern Door Company (Savage, doors).

---

## Prioritized action plan

### Quick wins (this week, on the current Webflow site)

| Action | Impact | Effort | Dependencies |
|---|---|---|---|
| Fix the FAQ schema quote mark and validate it | High | 15 min | Webflow access |
| Remove price, "Buy now" and stock messages from the profile template; add a quote CTA | High | 1–2 h | Webflow access |
| Fix the profile title and description templates | High | 1 h | — |
| Give the FAQ, Live Edge and category pages real titles and descriptions | Medium | 1 h | — |
| Fix the Organization schema: logo URL, address, founding date, one phone | High | 30 min | Agree the facts (see current-site-audit.md) |
| Add a default share image (`og:image`) site-wide | Medium | 30 min | One brand image |
| Add alt text to profile drawings via the CMS template (from RR number + type) | Medium | 1 h | — |
| Claim or update the Google Business Profile with the same name, address and phone | High | 1 h | Agreed facts |

### Strategic investments (this quarter, with the new Astro site)

| Action | Impact | Effort | Dependencies |
|---|---|---|---|
| **Redirect map:** every current URL to its new page, keeping exact profile URL case; load into Cloudflare redirects | High | 1–2 days | URL export (sitemap), final site structure |
| **Rebuild the profile library** as an Astro collection with Product + Breadcrumb schema, alt text, filters and quote CTA | High | Multi-day | Webflow CMS export |
| **Service pages** for doors, profile matching, stairs, beams, curved millwork and restoration | High | 3–5 days | Copy and photos |
| **Projects section** with 4–6 case studies (start with Eleven Condo) | High | Multi-day | Photos, client permission |
| **Architect resources hub** with downloadable CAD/PDF profile drawings | Medium–High | 2–3 days | Drawing files |
| **Blog program:** 2 posts a month from the content gap list, built as a trim and species topic cluster | Medium | Ongoing | Writer, photos |
| **Location pages** for key service areas (Wayzata/Minnetonka, Edina, Rochester) | Medium | 2 days | Local project examples |
| **Structured data on every template:** LocalBusiness, Service, Product, Article, FAQPage, BreadcrumbList | Medium | 1 day | — |
| **Performance budget:** load third-party tags through GTM only, lazy-load below-fold images, use Astro's image optimization | Medium | 1 day | — |
| **Connect Ahrefs and Search Console** to measure rankings before and after launch | High | 1 h | Account access |

---

## Sources
- [rootriverhardwoods.com](https://www.rootriverhardwoods.com/) (live crawl, Nov 11, 2026)
- [ferche.com](https://www.ferche.com/) (live crawl)
- [masonsmillandlumber.com](https://masonsmillandlumber.com/) (live crawl)
- Competitor discovery: [Houzz: Ferche Millwork](https://www.houzz.com/professionals/building-supplies/ferche-millwork-pfvwus-pf~311432310), [Houzz: Trademark Wood Products](https://www.houzz.com/professionals/building-supplies/trademark-wood-products-pfvwus-pf~1737141952), [MNHS directory: A&A Millwork](https://www.mnhs.org/preservation/directory/2989), [Yellow Pages: MN millwork](https://www.yellowpages.com/mn/millwork), [village.ai: Ferche](https://village.ai/company/ferche-millwork), [Ferche profile brochure](https://res.cloudinary.com/hdi/image/upload/v1637254008/Suppliers/Ferche%20Millwork/Brochures/Ferche_Millwork_Profile_Line_drawings_Rugby.pdf), [Houzz: Minneapolis doors](https://www.houzz.com/professionals/doors/minneapolis-mn-us-probr0-bo~t_11827~r_5037649), [Mason's Mill: moulding styles](https://masonsmillandlumber.com/2026/06/shop-by-architectural-moulding-style/)
