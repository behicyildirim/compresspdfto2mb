import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://compresspdfto2mb.com";

  const paths = [
    "/",
    "/compress-pdf-for-email",
    "/compress-pdf-for-job-application",
    "/compress-pdf-for-government-forms",
    "/uscis-pdf-size-limit",
    "/canada-immigration-pdf-size-limit",
    "/uk-visa-pdf-size-limit",
    "/compress-pdf-to-1mb",
    "/schengen-visa-pdf-size-limit",
    "/reduce-pdf-size-without-losing-quality",
    "/compress-pdf-for-whatsapp",
    "/reduce-pdf-to-500kb",
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