import { SITEMAP_PATHS } from "@/app/lib/sitePaths";

function toAbsoluteUrl(baseUrl: string, path: string) {
  if (path === "/") return baseUrl;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://compresspdfto2mb.com";

  const uniquePaths = Array.from(
    new Set(
      SITEMAP_PATHS.map((p) => {
        if (p.length > 1 && p.endsWith("/")) return p.slice(0, -1);
        return p;
      })
    )
  );

  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniquePaths
  .map((path) => {
    const loc = toAbsoluteUrl(baseUrl, path);
    const priority =
      path === "/" ? "1.0" : path.includes("immigration") ? "0.9" : "0.8";

    return `<url>
  <loc>${loc}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>${priority}</priority>
</url>`;
  })
  .join("\n")}
</urlset>`;

  rreturn new Response(xml.trim(), {
  status: 200,
  headers: {
    "Content-Type": "text/xml",
  },
});
}