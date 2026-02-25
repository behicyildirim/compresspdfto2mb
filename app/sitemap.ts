import type { MetadataRoute } from "next";
import { SITEMAP_PATHS } from "@/app/lib/sitePaths";

function normalizePath(p: string) {
  if (!p) return "/";
  if (p.length > 1 && p.endsWith("/")) return p.slice(0, -1);
  return p;
}

function toAbsoluteUrl(baseUrl: string, path: string) {
  if (path === "/") return baseUrl;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function getPriority(path: string) {
  if (path === "/") return 1;
  if (path.includes("immigration")) return 0.9;
  if (path.includes("reduce-pdf-size")) return 0.9;
  if (path.includes("pdf-upload")) return 0.85;
  if (path.includes("pdf-too-large")) return 0.85;
  return 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://compresspdfto2mb.com";

  const uniquePaths = Array.from(
    new Set(
      (SITEMAP_PATHS ?? [])
        .map(normalizePath)
        .filter(Boolean)
    )
  );

  const now = new Date();

  return uniquePaths.map((path) => ({
    url: toAbsoluteUrl(baseUrl, path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: getPriority(path),
  }));
}