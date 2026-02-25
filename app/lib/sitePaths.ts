export type Item = { href: string; label: string };

// ✅ Size pages (used in InternalLinks + sitemap)
export const SIZE_PAGES: Item[] = [
  { href: "/compress-pdf-to-100kb", label: "Compress PDF to 100KB" },
  { href: "/compress-pdf-to-200kb", label: "Compress PDF to 200KB" },
  { href: "/compress-pdf-to-300kb", label: "Compress PDF to 300KB" },
  { href: "/compress-pdf-to-500kb", label: "Compress PDF to 500KB" },
  { href: "/compress-pdf-to-1mb", label: "Compress PDF to 1MB" },
  { href: "/compress-pdf-to-2mb", label: "Compress PDF to 2MB" },
  { href: "/compress-pdf-to-3mb", label: "Compress PDF to 3MB" },
  { href: "/compress-pdf-to-5mb", label: "Compress PDF to 5MB" },
  { href: "/compress-pdf-to-10mb", label: "Compress PDF to 10MB" },
];

// ✅ Use cases (used in InternalLinks + sitemap)
export const USE_CASE_PAGES: Item[] = [
  // Highest-value long-tail pages (keep at top)
  { href: "/immigration-pdf-upload-guide", label: "Immigration PDF upload guide (visa & portal limits)" },
  { href: "/reduce-pdf-size-for-online-application", label: "Reduce PDF size for online applications" },

  // Core cluster pages
  { href: "/compress-pdf-for-visa", label: "Compress PDF for Visa Application" },

  // Secondary use cases
  { href: "/compress-pdf-for-job-application", label: "Compress PDF for Job Application" },
  { href: "/compress-pdf-for-government-forms", label: "Compress PDF for Government Forms" },
  { href: "/compress-pdf-for-email", label: "Compress PDF for Email" },
  { href: "/compress-pdf-for-whatsapp", label: "Compress PDF for WhatsApp" },
];

// ✅ Support/problem pages (sitemap only, also useful for UX)
export const SUPPORT_PAGES: Item[] = [
  { href: "/pdf-upload-failed", label: "PDF upload failed: common reasons & fixes" },
  { href: "/pdf-too-large-to-upload", label: "PDF too large to upload? Fix it fast" },
  { href: "/upload-pdf-under-2mb", label: "Upload PDF under 2MB" },
  { href: "/reduce-pdf-under-2mb", label: "Reduce PDF under 2MB" },
  
  { href: "/pdf-upload-requirements", label: "PDF upload requirements (size, format, page limits)" },
  { href: "/pdf-too-large-for-website-upload", label: "PDF too large for website upload? Fix it" },
  { href: "/compress-pdf-for-government-application", label: "Compress PDF for government application" },

  { href: "/reduce-pdf-size-for-online-application", label: "Reduce PDF size for online applications" },
  { href: "/immigration-pdf-upload-guide", label: "Immigration PDF upload guide" },
];

// ✅ Extra long-tail pages (add future long tails here)
export const LONG_TAIL_PAGES: Item[] = [
  // keep your new long-tails here
  // (we already included the two main ones above in USE_CASE_PAGES for site-wide priority)
];

// ✅ Single source of truth for sitemap
export const SITEMAP_PATHS: string[] = [
  "/", // homepage
  ...SIZE_PAGES.map((i) => i.href),
  ...USE_CASE_PAGES.map((i) => i.href),
  ...SUPPORT_PAGES.map((i) => i.href),
  ...LONG_TAIL_PAGES.map((i) => i.href),
];