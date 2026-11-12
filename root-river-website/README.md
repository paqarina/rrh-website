# root-river-website
Root River’s website: the landing page and blog, built with [Astro](https://astro.build) and hosted on Cloudflare Workers.

Started from Cloudflare's [astro-blog-starter-template](https://github.com/cloudflare/templates/tree/main/astro-blog-starter-template).

## Where things are

| Path | What it is |
| --- | --- |
| `src/pages/index.astro` | Landing page (built from the Figma "Home" frame) |
| `src/pages/blog/` | Blog list and post pages |
| `src/content/blog/` | Blog posts, as Markdown or MDX files |
| `src/consts.ts` | Site name and description |
| `public/assets/` | Landing page images and logo |

## Commands

Requires Node.js 22 or newer. Run these from the project folder.

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start a local dev server at `http://localhost:4321` |
| `npm run build` | Build the site into `./dist/` |
| `npm run preview` | Build, then run it locally in the Cloudflare Workers runtime |
| `npm run deploy` | Deploy to Cloudflare (needs `npx wrangler login` first) |
