// Genera public/sitemap.xml y completa public/robots.txt cuando se define VITE_SITE_URL.
// Se ejecuta automáticamente antes de `npm run build`.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function readEnvFile() {
  const file = resolve(process.cwd(), ".env");
  if (!existsSync(file)) return {};
  const out = {};
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return out;
}

const siteUrl = (process.env.VITE_SITE_URL || readEnvFile().VITE_SITE_URL || "")
  .trim()
  .replace(/\/+$/, "");

const robotsPath = resolve(process.cwd(), "public/robots.txt");
const sitemapPath = resolve(process.cwd(), "public/sitemap.xml");

if (!siteUrl) {
  console.log("[seo] VITE_SITE_URL no definido: se omite sitemap.xml.");
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
writeFileSync(sitemapPath, sitemap);
writeFileSync(
  robotsPath,
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);
console.log(`[seo] sitemap.xml y robots.txt generados para ${siteUrl}`);
