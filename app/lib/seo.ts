import type { Metadata } from "next";

const SITE_URL = "https://compresspdfto2mb.com";

type SizeKey =
  | "100kb"
  | "200kb"
  | "300kb"
  | "500kb"
  | "1mb"
  | "2mb"
  | "3mb"
  | "5mb"
  | "10mb";

const labelMap: Record<SizeKey, string> = {
  "100kb": "100KB",
  "200kb": "200KB",
  "300kb": "300KB",
  "500kb": "500KB",
  "1mb": "1MB",
  "2mb": "2MB",
  "3mb": "3MB",
  "5mb": "5MB",
  "10mb": "10MB",
};

export function createCompressSizeMetadata(size: SizeKey): Metadata {
  const label = labelMap[size];
  const path = `/compress-pdf-to-${size}`;
  const absoluteUrl = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: `Compress PDF to ${label} Online Free | CP2`,
    description: `Compress PDF to ${label} instantly online. Free, secure and no registration required.`,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `Compress PDF to ${label} Online Free | CP2`,
      description: `Compress PDF to ${label} instantly online. Free, secure and no registration required.`,
      url: absoluteUrl, // ✅ sayfaya özel
      siteName: "CP2 - CompressPDFto2MB",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "CP2 - Compress PDF to Under 2MB",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Compress PDF to ${label} Online Free | CP2`,
      description: `Compress PDF to ${label} instantly online. Free, secure and no registration required.`,
      images: ["/og.png"],
    },
  };
}