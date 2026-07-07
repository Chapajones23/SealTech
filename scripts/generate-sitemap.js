import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PUBLIC_DIR = path.join(__dirname, "../public");
const DATA_FILE = path.join(PUBLIC_DIR, "data/blog-posts.json");
const SITEMAP_FILE = path.join(PUBLIC_DIR, "sitemap.xml");

const BASE_URL = "https://sealtech.co.tz";

// Static pages
const staticPages = [
  { loc: "/", lastmod: "2026-06-17" },
  { loc: "/about", lastmod: "2026-06-17" },
  { loc: "/blog", lastmod: "2026-06-17" },
  { loc: "/careers", lastmod: "2026-06-17" },
  { loc: "/contact", lastmod: "2026-06-17" },
  { loc: "/press", lastmod: "2026-06-17" },
  { loc: "/security", lastmod: "2026-06-17" },
  { loc: "/privacy", lastmod: "2026-06-17" },
  { loc: "/terms", lastmod: "2026-06-17" }
];

try {
  const posts = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static pages
  staticPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${page.loc}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += '  </url>\n';
  });

  // Add dynamic blog posts
  posts.forEach(post => {
    xml += '  <url>\n';
    // Match route format. Since our router supports both, we use clean URL structure.
    xml += `    <loc>${BASE_URL}/post?slug=${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.publishDate}</lastmod>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  fs.writeFileSync(SITEMAP_FILE, xml, "utf-8");
  console.log("Sitemap generated successfully at:", SITEMAP_FILE);
} catch (error) {
  console.error("Error generating sitemap:", error);
  process.exit(1);
}
