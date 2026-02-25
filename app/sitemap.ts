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

  return uniquePaths.map((path) => {
  const p = path.toLowerCase();

  const isHome = p === "/";
  const isSizePage = p.includes("/compress-pdf-to-");
  const isUseCase =
    p.includes("/compress-pdf-for-") ||
    p.includes("/reduce-pdf-size") ||
    p.includes("/immigration") ||
    p.includes("/visa") ||
    p.includes("/whatsapp") ||
    p.includes("/email");

  const isSupport =
    p.includes("/pdf-upload") ||
    p.includes("/pdf-too-large") ||
    p.includes("/pdf-file-too-large") ||
    p.includes("/pdf-password") ||
    p.includes("/timeout") ||
    p.includes("/requirements");

  const priority = isHome
    ? 1
    : isSupport
      ? 0.9
      : isUseCase
        ? 0.85
        : isSizePage
          ? 0.8
          : 0.7;

  const changeFrequency = isHome ? "weekly" : "monthly";

  return {
    url: toAbsoluteUrl(baseUrl, path),
    lastModified: now,
    changeFrequency,
    priority,
  };
});
}