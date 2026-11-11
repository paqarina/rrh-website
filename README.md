# RRH Website

Static HTML/CSS build of the Root River Hardwoods site, translated from Figma
(`KXDhdWztjMAqt1O1QI1ZNG`). Sections are self-contained modules so they can be
rebuilt in Webflow one at a time.

| Page | File | Figma node |
| --- | --- | --- |
| Home | `index.html` | 71:3462 |
| Millwork › Trim & Mouldings | `trim-mouldings.html` | 121:1417 |

- `styles.css` holds the tokens, shared components (header, buttons, cards, footer) and every module.
- `js/site.js` runs the smart topbar, the mobile menu and the slideshows.
- `assets/` holds images (`img/`), logos (`logo/`), icons (`icons/`) and client logos (`brands/`).

## Topbar behaviour

The topbar sits at the top of the page and scrolls away with it. Scrolling up
slides it back down as a fixed bar; scrolling down slides it out again. Small
movements are ignored (10px up / 16px down, set at the top of `js/site.js`).
On the home page the pinned bar takes the inner-page background, and fades
back to transparent when it returns to the top.

## Images

Pages use WebP renditions in `assets/img` with `srcset`/`sizes`, so each
browser downloads the smallest file that is sharp at its screen size. The
full-resolution Figma exports live in `assets/_source/` (git-ignored).

To add or replace an image: drop the original into `assets/_source/img`, add
its name and target widths to `tools/optimize-images.js`, then run:

```bash
npm install
```

```bash
npm run images
```

## Run locally

```bash
npm start
```

Copy marked `[CONFIRM]` is placeholder text waiting on the content doc.
