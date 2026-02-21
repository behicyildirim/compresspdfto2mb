export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://compresspdfto2mb.com";

  const paths = [
    "/",

    // Size pages
    "/compress-pdf-to-500kb",
    "/compress-pdf-to-1mb",
    "/compress-pdf-to-2mb",

    // Use case pages
    "/compress-pdf-for-email",
    "/compress-pdf-for-whatsapp",
    "/compress-pdf-for-visa",
    "/compress-pdf-for-job-application",

    // Informational pages
    "/reduce-pdf-size-without-losing-quality",
    "/uscis-pdf-size-limit",
    "/canada-immigration-pdf-size-limit",
    "/uk-visa-pdf-size-limit",
    "/schengen-visa-pdf-size-limit",

    // Legal
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