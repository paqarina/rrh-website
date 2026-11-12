# Current website audit: what to keep

**Site audited:** https://www.rootriverhardwoods.com/
**Date:** November 11, 2026
**Purpose:** We're building a new site with a new design and new assets. This audit lists what on the current site is still worth carrying over, and what should be fixed or dropped.

---

## Summary

The current site is built on **Webflow** and has about **1,250 pages** in its sitemap. Almost all of them (1,190) are individual moulding profile pages. The design and most photos can be replaced. These are worth keeping:

1. **The moulding profile library**: 1,190 profiles (RR numbers) with technical drawings and specs. This is the most valuable thing on the site, both for customers and for search traffic.
2. **Customer proof**: four named testimonials and a wall of client logos.
3. **The company story**: the history from 1968 onward and the "family-led" positioning.
4. **SEO groundwork**: page titles, meta descriptions, the sitemap, and the URLs that search engines already know. If those URLs change, set up redirects.
5. **Trust content**: the FAQ, the careers page, and the service-area copy.

Several facts on the site contradict each other (years in business, address, phone numbers, profile count). **Settle these before writing copy for the new site.** See "Inconsistencies to resolve" below.

---

## Site map

| Section | Pages | In main menu? | Recommendation |
|---|---|---|---|
| Home | 1 | Yes | Rebuild (new design) |
| Custom Millworks | 1 | Yes ("Millworks") | Keep content, rewrite for new design |
| Moulding profiles (index + 12 categories) | 13 | Yes ("Our Profiles") | **Keep, high priority** |
| Individual profiles (`/product/RR…`) | 1,190 | No (reached from profiles) | **Keep data and URLs** |
| Profile category tags (`/category/…`) | 22 | No | Drop or merge (thin, duplicate pages) |
| Lumber | 1 | Yes | Keep short version that points to Bennett Hardwoods |
| Our Story | 1 | Yes (under About) | **Keep content** |
| Careers + open roles | 5 | Yes (top banner, About) | Keep |
| Contact | 1 | Yes | Keep (form + details) |
| FAQ | 1 | No | Keep content, update |
| Blog (1 post) | 2 | No | Keep the post, move it to the new Astro blog |
| Forestry | 1 | No | Decide: still a service? |
| Sawmill | 1 | No | Decide: still a service? |
| Live edge slabs (index + 11 species) | 12 | No | Decide: still selling slabs? |

> Forestry, Sawmill, Live Edge and FAQ are not in the main menu, but they are in the sitemap and are probably still indexed by Google. Decide which services the new site covers, then keep or redirect these pages.

---

## Keep: high priority

### 1. Moulding profile library
- **What it is:** 1,190 profile pages, each with an RR number, a CAD-style cross-section drawing (width × height, dimensions), the profile type, width and height, the available species and lengths, and related profiles. The index page has filters by category (12 categories), a width slider, and search by profile number.
- **Why keep it:** The new site's message ("we cut new knives to match yours") depends on this library. These pages also bring in search traffic for specific profile types (for example "Door & Window Casings | Custom Hardwood Trim | Twin Cities, MN").
- **How to carry it over:**
  - Export the profile data from the Webflow CMS (CSV export of the Products collection) and download the drawing images.
  - Rebuild the pages as an Astro content collection, generated from the exported data.
  - **Keep the same URLs** (`/product/RR1000` and so on), or redirect old URLs to the new ones.
  - Keep filters by category and width, plus search by RR number.
- **Fix while moving:**
  - Pages show **"$0.01 USD"**, a **"Buy now"** button and **"This product is out of stock"**. These come from the Webflow shop template and confuse visitors. Replace them with a "Request a quote" call to action.
  - Some profiles have no drawing (RR1000 shows a placeholder image and "No more images found"). Check how many are missing.
  - Drawings vary in scale and cropping (RR2124 is much smaller than the others). If possible, redraw or recrop them to one consistent frame.
  - Page titles include stray numbers ("Moulding Profile RR1000 | 2.25 |Root River Hardwoods").
  - Drawing images have no alt text. Add "RR1259 casing profile, 2.75 in wide".

### 2. Testimonials (named, with company)
Keep all four. They're specific and credible. Ask each person's permission again before reusing them, and ask for a photo or project image if possible.

| Person | Company | Highlight |
|---|---|---|
| John Kraemer | John Kraemer & Sons | Many years of millwork and doors; "easy to work with, accessible" |
| Mike Mills | Ryan Companies | Worked on the **42-story Eleven Condo project** |
| Molly Zwettler | Hendel Homes | "Knowledgeable… product quality is fantastic" |
| (Homeowner) | — | Built their dream home; names Marty and the team |

The Eleven Condo project is a strong case study. Consider a dedicated project page with photos.

### 3. Client logo wall ("You're in good company")
The logos shown include **Ryan Companies, Quanex, Tasler Inc., Towmaster, Streeter Custom Builder, Bennett Hardwoods** and a few others (round seals that couldn't be identified from the screenshot).
- Keep the **list of clients**, but get **clean vector logo files** from each company rather than reusing the current PNGs (they're named "image 16.png" to "image 25.png" and have no alt text).
- Check that each company is still OK being listed. For the new positioning (custom homes, architects, designers), lead with residential builders and architects. Industrial clients (Quanex, Towmaster) fit the sawmill and lumber business better.

### 4. Company story
The "Our Story" page has real history worth keeping:
- 1968: Webster Lumber Company bought Hewitt Sawmill and renamed it Root River Hardwoods.
- Early leaders: Dick Bahl, Mike Merritt, Jeff Wand.
- Grew from 1.5 million board feet a year to "8m+" today.
- Moved into kiln-drying and custom millwork. It is now "still family-led".
- Includes a quote from Jeff Wand about new investment and the next generation.

Rewrite it in the new voice, but keep the facts, the names and the Jeff Wand quote. **Old photos** (for example the staff photo `Old-Staff.avif` on the home page) are worth keeping as heritage images, even with a new design.

### 5. SEO setup
| Item | Current state | Recommendation |
|---|---|---|
| Page titles and meta descriptions | Written for most main pages, with location keywords (Minnesota, Twin Cities, Wisconsin, Iowa) | Reuse as a starting point |
| Sitemap and robots.txt | Present | The Astro sitemap integration replaces it |
| URLs | Short and clear (`/custom-millworks`, `/moulding-profiles`, `/product/RR1000`) | Keep them, or create a full redirect map before launch |
| Structured data | Organization schema present | Keep, but fix it (see below) |
| Social sharing image | **None** on the home page | Add one per page in the new site |
| Analytics | Google Tag Manager, Google Ads, HubSpot, Ahrefs | Move the same tags over so tracking and ad conversions continue |

**Before launch:** export the full list of current URLs and map every one to a new page, so search rankings and old links don't break.

---

## Keep: content to reuse or rewrite

- **Contact details:** address in Preston, MN, phone, and the "we respond by the next working day" promise.
- **Contact form fields:** first and last name, phone, email, company, and a topic choice (Custom Millwork / Lumber Supply / Other). The form sends to **HubSpot**. Keep that connection so leads keep flowing to the same place.
- **Service area copy:** Minnesota, Wisconsin and Iowa, especially the **Wayzata and Lake Minnetonka** lake communities. There's also nationwide delivery for large or specialty orders, and pickup in Preston. This matches the new site's high-end residential focus well.
- **Custom Millworks page:** service list (mouldings, architectural woodwork, **curved millwork**, interior and exterior doors, bespoke designs) and the audience list (luxury builders, architects and designers, homeowners). This maps directly onto the new design.
- **FAQ:** good questions (sourcing, timber appraisals, live edge, pickup locations, commercial clients). Update the answers once the service lineup is final.
- **Careers page:** open roles and benefits. It's well written and current. Keep the "We're hiring" banner idea if hiring continues.
- **Blog post:** "The Ultimate Guide to Lumber Grading" (about 1,000 words). Move it into the new Astro blog. It's also the only post, so plan more.
- **Stats:** "50+ years", "8m+ board feet annually", "50+ skilled craftsmen", "1,300+ happy customers". Keep them only after checking they're still accurate (see below).

---

## Replace or drop

| Item | Why |
|---|---|
| **Home page hero video** (aerial forest) | It's a **Shutterstock stock clip**. It also tells the sawmill/forestry story, not the custom millwork one. The new design uses an interior photo instead. |
| Other stock photos (for example `shutterstock_585368258`) | Generic. Replace with Root River's own project and shop photos. |
| Current logo files | The structured data points to an **old WordPress logo URL that returns a 404 error**. Use the new logo from the Figma design everywhere. |
| Visual design: fonts, orange buttons, layout | Being replaced by the new design. |
| Profile category tag pages (`/category/…`) | 22 thin pages, titled just "Root River Hardwoods" and repeating "Forestry" headings. Redirect them to the matching profile category pages. |
| Webflow shop elements (prices, "Buy now", stock messages) | The business sells by quote and phone, not online checkout. |
| Lumber detail content | Lumber is now handled by sister company **Bennett Hardwoods**. A short page that links there is enough. |

---

## Inconsistencies to resolve

These contradict each other on the current site. Confirm the right answer with the team before writing new copy.

| Topic | What the site says |
|---|---|
| **Founding year / age** | "In 1968…" (Our Story); founded **1974** by **John Kiehne** (structured data); "over **47 years**" (home, contact); "**50+** years" (home stats, schema); "nearly five decades" (home) |
| **Address** | "1300 **Highway 52 N**, Preston" (footer) vs "1300 **Energy Drive**, Preston" (structured data) |
| **Phone numbers** | 507-765-2284 (header, contact) vs **507-377-8781** (all profile pages, "for price and availability"). If the second is the millwork line, label it as such. |
| **Number of profiles** | "1,000+" (Custom Millworks page) vs **1,190** profile pages in the sitemap vs **"1,500+"** in the new Figma design |
| **Locations** | The FAQ and live edge pages mention **Albert Lea** (millworks and pickup), but the footer and contact page list only Preston |
| **Business focus** | The structured data and FAQ still describe a forestry and sawmill company. The home page and new design focus on custom architectural millwork. |

---

## Suggested next steps

1. **Settle the facts** above (years, address, phones, profile count, locations, which services stay).
2. **Export from Webflow:** the CMS collections (profiles, categories, blog, live edge, open roles) as CSV, plus all profile drawing images.
3. **Collect real photography** of projects, shop, team and heritage photos, to replace the stock images.
4. **Build a redirect map** from every current URL to its new page.
5. **Move tracking:** GTM, Google Ads, HubSpot form connection, Ahrefs.
6. **Confirm testimonial and logo permissions**, and request vector logos.
