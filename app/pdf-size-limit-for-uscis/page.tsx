import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF Size Limit for USCIS (Upload Rules + Fixes) | CP2",
  description:
    "USCIS uploads may fail due to strict file size limits. Learn typical rules and compress your PDF to pass.",
  alternates: { canonical: "/pdf-size-limit-for-uscis" },
  openGraph: {
    title: "PDF Size Limit for USCIS (Upload Rules + Fixes) | CP2",
    description:
      "USCIS uploads may fail due to strict file size limits. Learn typical rules and compress your PDF to pass.",
    url: "/pdf-size-limit-for-uscis",
    siteName: "CP2 - CompressPDFto2MB",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CP2" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Size Limit for USCIS (Upload Rules + Fixes) | CP2",
    description:
      "USCIS uploads may fail due to strict file size limits. Learn typical rules and compress your PDF to pass.",
    images: ["/og.png"],
  },
};

export default function UscisPdfSizeLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">USCIS PDF Size Limit</h1>

        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/immigration-pdf-upload-guide", label: "Immigration upload guide" },
            { href: "/pdf-size-limit-for-uscis", label: "USCIS PDF size limit" },
          ]}
        />

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Link
            href="/immigration-pdf-upload-guide"
            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
          >
            Immigration guide
          </Link>
          <Link
            href="/pdf-upload-failed"
            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
          >
            Upload failed fixes
          </Link>
          <Link
            href="/pdf-too-large-to-upload"
            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
          >
            PDF too large?
          </Link>
        </div>

        <p className="mt-4 text-lg text-gray-600 text-center">
          USCIS portals can reject uploads due to strict file size limits, scan settings, or PDF export issues.
          Use the checklist below to avoid delays.
        </p>

        <p className="mt-3 text-sm text-gray-600 text-center">
          Quick start: compress to{" "}
          <Link href="/compress-pdf-to-2mb" className="font-medium text-blue-700 hover:underline">
            2MB
          </Link>{" "}
          first. If it’s still rejected, try{" "}
          <Link href="/compress-pdf-to-1mb" className="font-medium text-blue-700 hover:underline">
            1MB
          </Link>{" "}
          (or{" "}
          <Link href="/compress-pdf-to-500kb" className="font-medium text-blue-700 hover:underline">
            500KB
          </Link>
          ).
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xl font-semibold text-gray-900">Pick a safe USCIS target size</h2>
            <p className="mt-2 text-sm text-gray-700">
              USCIS upload limits can vary by portal and document type. If you don’t see a clear limit,
              staying under <span className="font-semibold">2MB</span> is usually the safest baseline.
              For stricter uploads, <span className="font-semibold">1MB</span> (or <span className="font-semibold">500KB</span>) can help.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
                { href: "/compress-pdf-to-1mb", label: "Compress to 1MB" },
                { href: "/compress-pdf-to-500kb", label: "Compress to 500KB" },
              ].map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
                >
                  {i.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-700">
                If you see a generic error, follow{" "}
                <Link href="/pdf-upload-failed" className="font-semibold text-blue-700 hover:underline">
                  PDF upload failed fixes
                </Link>{" "}
                to check corruption, password protection, timeouts, and portal rules.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why USCIS uploads get rejected</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File size exceeds the portal limit.</li>
              <li>Scanned PDFs are image-heavy (high DPI / color scans).</li>
              <li>Multiple pages saved as large photo-based PDFs.</li>
              <li>Corrupted or incorrectly exported PDF files.</li>
              <li>Password-protected / encrypted PDFs (often rejected).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How to reduce PDF size for USCIS upload</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>
                Start with{" "}
                <Link href="/compress-pdf-to-2mb" className="font-semibold text-blue-700 hover:underline">
                  2MB compression
                </Link>
                .
              </li>
              <li>If the upload still fails, compress to 1MB.</li>
              <li>If the portal is very strict, compress to 500KB.</li>
              <li>Re-upload. If it still fails, re-export the PDF and try again.</li>
            </ol>

            <p className="mt-3">
              Image-heavy scans usually compress well. If your PDF is already optimized, lower scan resolution
              and remove blank pages before re-compressing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Best scan settings that usually work</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Grayscale (or black &amp; white) instead of color</li>
              <li>150–300 DPI (higher can explode size)</li>
              <li>Remove blank pages</li>
              <li>Export as standard PDF (avoid “images inside a PDF wrapper”)</li>
              <li>Avoid password protection unless the portal explicitly allows it</li>
            </ul>
          </section>

          <section className="mt-2 rounded-lg bg-blue-50 p-6 text-center">
            <Link
              href="/compress-pdf-to-2mb"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              Compress PDF to 2MB Now
            </Link>
          </section>

          <Script
            id="faq-uscis-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the safest file size for USCIS uploads?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "If you don’t see a clear limit, compressing to under 2MB is a common safe target. If the portal is strict, try 1MB or 500KB.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why does USCIS reject my PDF file?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Rejections usually happen due to size limits, image-heavy scans, corrupted exports, password protection, or portal rules. Compressing to a smaller target and re-exporting often fixes it.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I upload multiple smaller PDFs instead?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Some portals allow splitting documents into smaller files. If compression isn’t enough, splitting can help if the system supports multiple uploads.",
                    },
                  },
                ],
              }),
            }}
          />

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Related immigration guides</h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/immigration-pdf-upload-guide", label: "Immigration upload guide" },
                { href: "/compress-pdf-for-visa", label: "Compress PDF for visa" },
                { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
                { href: "/pdf-too-large-to-upload", label: "PDF too large to upload" },
              ].map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 transition hover:bg-blue-50"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Link href="/compress-pdf-to-2mb" className="text-blue-700 underline ml-1">
compress your PDF online
</Link>
    </main>
  );
}