// Usage: npm run images   (or: node tools/optimize-images.js .)
// Reads originals from assets/_source/{img,brands}, writes WebP renditions to assets/{img,brands}.
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const root = process.argv[2] || path.join(__dirname, '..');
const src = (d, f) => path.join(root, 'assets/_source', d, f);
const out = (d, f) => path.join(root, 'assets', d, f);

// name -> target widths (capped at the source width). Sized for 1x and 2x of
// the largest rendered width at the 1920px design size.
const photos = {
  'hero-home': [960, 1920],
  'hero-trim': [960, 1920],
  'home-what-we-do': [800, 1600],
  'project-01': [820, 1640],
  'project-02': [820, 1640],
  'project-03': [820, 1640],
  'project-04': [820, 1640],
  'who-builders': [480, 960],
  'who-architects': [480, 960],
  'who-designers': [480, 960],
  'service-doors': [480, 960],
  'service-trim': [480, 960],
  'service-beams': [480, 960],
  'service-stairs': [480, 960],
  'service-paneling': [480, 960],
  'service-architectural': [480, 800, 1254],
  'resource-styles': [480, 960],
  'resource-architectural': [480, 960],
  'resource-beams': [480, 960],
  'trim-casing': [480, 800, 1254],
  'trim-baseboard': [800, 1254],
  'profile-approve': [480, 960],
  'profile-make': [480, 960],
};

(async () => {
  const report = [];
  const files = fs.readdirSync(path.join(root, 'assets/_source/img'));
  for (const [name, widths] of Object.entries(photos)) {
    const file = files.find(f => path.parse(f).name === name);
    if (!file) throw new Error('missing source ' + name);
    const input = src('img', file);
    const meta = await sharp(input).metadata();
    const done = new Set();
    for (const w of widths) {
      const width = Math.min(w, meta.width);
      // Skip a rendition that is barely smaller than the source itself.
      if (width < meta.width && meta.width < width * 1.25 && widths.some(x => x > w)) continue;
      if (done.has(width)) continue;
      done.add(width);
      const dest = out('img', `${name}-${width}.webp`);
      const info = await sharp(input)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 78, effort: 6, smartSubsample: true })
        .toFile(dest);
      report.push(`${name}-${width}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
    }
  }
  // Client logos: keep at most 2x their 80px-tall slot, near-lossless with alpha.
  for (const f of fs.readdirSync(path.join(root, 'assets/_source/brands'))) {
    const name = path.parse(f).name;
    const info = await sharp(src('brands', f))
      .resize({ height: 160, withoutEnlargement: true })
      .webp({ quality: 90, alphaQuality: 100, effort: 6 })
      .toFile(out('brands', `${name}.webp`));
    report.push(`${name}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(1)}KB`);
  }
  console.log(report.join('\n'));
})().catch(e => { console.error(e); process.exit(1); });
