import type { MetadataRoute } from "next";
import { SITEMAP_PATHS } from "@/app/lib/sitePaths";

function toAbsoluteUrl(baseUrl: string, path: string) {
  if (path === "/") return baseUrl;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://compresspdfto2mb.com";

  const uniquePaths = Array.from(
    new Set(
      SITEMAP_PATHS.map((p) => (p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p))
    )
  );

  const now = new Date();

  return uniquePaths.map((path) => ({
    url: toAbsoluteUrl(baseUrl, path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : path.includes("immigration") ? 0.9 : 0.8,
  }));
}