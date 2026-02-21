import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://compresspdfto2mb.com";

  const paths = [
    "/",
    "/compress-pdf-for-email",
    "/compress-pdf-for-job-application",
    "/compress-pdf-for-government-forms",
    "/privacy",
    "/terms",
    "/contact",
  ];

  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) => `  <url>
    <loc>${baseUrl}${p}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}