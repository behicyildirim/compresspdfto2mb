import Link from "next/link";
import Script from "next/script";
import InternalLinks from "@/app/components/InternalLinks";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schengen Visa PDF Size Limit (2025 Guide) | CP2",
  description:
    "Schengen visa uploads can fail due to strict size limits. Learn common embassy/VAC portal rules and compress your PDF to a safe target.",
  alternates: { canonical: "/schengen-visa-pdf-size-limit" },

  openGraph: {
    title: "Schengen Visa PDF Size Limit (2025 Guide) | CP2",
    description:
      "Schengen visa uploads can fail due to strict size limits. Learn common embassy/VAC portal rules and compress your PDF to a safe target.",
    url: "/schengen-visa-pdf-size-limit",
    siteName: "CP2 - CompressPDFto2MB",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CP2" }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Schengen Visa PDF Size Limit (2025 Guide) | CP2",
    description:
      "Schengen visa uploads can fail due to strict size limits. Learn common embassy/VAC portal rules and compress your PDF to a safe target.",
    images: ["/og.png"],
  },
};

export default function SchengenVisaPdfLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Schengen Visa PDF Size Limit (2025 Guide)
        </h1>

        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/immigration-pdf-upload-guide", label: "Immigration upload guide" },
            { href: "/schengen-visa-pdf-size-limit", label: "Schengen visa PDF limit" },
          ]}
        />

        <div className="mt-4 flex flex-wrap justify-center gap-2">
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
          <Link
            href="/immigration-pdf-upload-guide"
            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
          >
            Immigration guide
          </Link>
        </div>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Reduce your PDF under common Schengen visa upload limits quickly and safely.
        </p>

        <p className="mt-3 text-sm text-gray-600 text-center">
          Quick start: compress to{" "}
          <Link
            href="/compress-pdf-to-2mb"
            className="font-medium text-blue-700 hover:underline"
          >
            2MB
          </Link>{" "}
          first. If the portal is strict, try{" "}
          <Link
            href="/compress-pdf-to-1mb"
            className="font-medium text-blue-700 hover:underline"
          >
            1MB
          </Link>{" "}
          or{" "}
          <Link
            href="/compress-pdf-to-500kb"
            className="font-medium text-blue-700 hover:underline"
          >
            500KB
          </Link>
          .
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xl font-semibold text-gray-900">
              What is the Schengen visa document upload limit?
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Schengen visa portals (embassy systems or visa application centers)
              can have strict file size limits. Many applicants keep documents under{" "}
              <strong>2MB</strong> to avoid upload errors. If your file exceeds the
              allowed size, the upload may fail or the portal may reject it without a clear message.
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              How to compress a PDF for Schengen visa upload
            </h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your Schengen visa document to the PDF compressor.</li>
              <li>Select a safe target size (2MB is a common starting point).</li>
              <li>Download the optimized file.</li>
              <li>Upload it to the embassy/VAC portal.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Tips for successful upload</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scan in grayscale instead of color (smaller files).</li>
              <li>Use 150–300 DPI to avoid oversized scans.</li>
              <li>Remove blank pages and duplicates.</li>
              <li>Preview the compressed PDF for readability.</li>
              <li>Avoid password protection unless the portal explicitly allows it.</li>
            </ul>
          </section>

          <section className="mt-6 bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">
              Compress Your Schengen Visa PDF Now
            </h3>
            <Link
              href="/compress-pdf-to-2mb"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress PDF to 2MB
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why compressing helps</h2>
            <p className="mt-2">
              Upload failures can slow down your application. Compressing your PDF
              reduces portal errors and helps you submit documents smoothly.
            </p>
          </section>

          {/* FAQ JSON-LD */}
          <Script
            id="faq-schengen-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the safest file size for Schengen visa uploads?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "If the portal does not specify, compressing under 2MB is usually safe. If rejected, try 1MB or 500KB.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why does the Schengen visa portal reject my PDF?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Rejections often occur due to size limits, image-heavy scans, password protection, or corrupted exports. Compressing and re-exporting usually fixes the issue.",
                    },
                  },
                ],
              }),
            }}
          />

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">
                  What is the safest file size for Schengen visa uploads?
                </h3>
                <p className="mt-1">
                  Most applicants start with{" "}
                  <Link
                    href="/compress-pdf-to-2mb"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    under 2MB
                  </Link>
                  . If the portal rejects it, try 1MB or 500KB.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Why does the Schengen visa portal reject my PDF?
                </h3>
                <p className="mt-1">
                  Rejections often happen due to strict size limits, image-heavy scans,
                  password protection, or corrupted exports.
                </p>
              </div>
            </div>
                  <Link href="/compress-pdf-to-2mb" className="text-blue-700 underline ml-1">
compress your PDF online
</Link>
          </section>
        </div>

        <p className="mt-10 text-sm text-gray-500 text-center">
          Looking for a different file size? Try compressing to 100KB, 200KB, 500KB or 2MB depending on your needs.
        </p>
        <InternalLinks />
      </div>
    </main>
  );
}