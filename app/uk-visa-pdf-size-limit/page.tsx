import Link from "next/link";
import Script from "next/script";
import InternalLinks from "@/app/components/InternalLinks";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Visa PDF Size Limit (2025 Guide) | CP2",
  description:
    "UK visa uploads can fail due to strict size limits. Learn common UKVI limits and compress your PDF to a safe target.",
  alternates: { canonical: "/uk-visa-pdf-size-limit" },
  openGraph: {
    title: "UK Visa PDF Size Limit (2025 Guide) | CP2",
    description:
      "UK visa uploads can fail due to strict size limits. Learn common UKVI limits and compress your PDF to a safe target.",
    url: "/uk-visa-pdf-size-limit",
    siteName: "CP2 - CompressPDFto2MB",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CP2" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Visa PDF Size Limit (2025 Guide) | CP2",
    description:
      "UK visa uploads can fail due to strict size limits. Learn common UKVI limits and compress your PDF to a safe target.",
    images: ["/og.png"],
  },
};

export default function UkVisaPdfLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          UK Visa PDF Size Limit (2025 Guide)
        </h1>

        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/immigration-pdf-upload-guide", label: "Immigration upload guide" },
            { href: "/uk-visa-pdf-size-limit", label: "UK visa PDF limit" },
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
          Reduce your PDF under common UK visa upload limits quickly and safely.
        </p>

        <p className="mt-3 text-sm text-gray-600 text-center">
          Quick start: compress to{" "}
          <Link href="/compress-pdf-to-2mb" className="font-medium text-blue-700 hover:underline">
            2MB
          </Link>{" "}
          first. If the portal is strict, try{" "}
          <Link href="/compress-pdf-to-1mb" className="font-medium text-blue-700 hover:underline">
            1MB
          </Link>{" "}
          or{" "}
          <Link href="/compress-pdf-to-500kb" className="font-medium text-blue-700 hover:underline">
            500KB
          </Link>
          .
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xl font-semibold text-gray-900">
              What is the UK visa document upload limit?
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              UK visa application portals (UKVI) often enforce strict file upload limits.
              Many applicants aim to keep documents under <strong>2MB</strong> to avoid rejection.
              If your file exceeds the allowed size, the upload may fail without a detailed explanation.
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
              How to compress a PDF for UK visa upload
            </h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your visa document to the PDF compressor.</li>
              <li>Select a safe target size (2MB is usually recommended).</li>
              <li>Download the optimized file.</li>
              <li>Re-upload to the UK visa portal.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Tips for successful upload</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scan in grayscale instead of color.</li>
              <li>Use 150–300 DPI to avoid oversized files.</li>
              <li>Remove duplicate or blank pages.</li>
              <li>Preview the compressed file before submission.</li>
              <li>Avoid password protection unless explicitly allowed.</li>
            </ul>
          </section>

          <section className="mt-6 bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">
              Compress Your UK Visa PDF Now
            </h3>
            <Link
              href="/compress-pdf-to-2mb"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress PDF to 2MB
            </Link>
            <Link
  href="/compress-pdf-to-2mb"
  className="inline-block mt-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
>
Compress your PDF to under 2MB
</Link>
          </section>

          <Script
            id="faq-ukvisa-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the safest file size for UK visa uploads?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "If the portal does not specify, compressing under 2MB is usually safe. If rejected, try 1MB or 500KB.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why does the UK visa portal reject my PDF?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Rejections often occur due to size limits, image-heavy scans, password protection, or unsupported formats. Compressing and re-exporting usually fixes the issue.",
                    },
                  },
                ],
              }),
            }}
          />
        </div>

        <p className="mt-10 text-sm text-gray-500 text-center">
          Looking for a different file size? Try compressing to 100KB, 200KB, 500KB or 2MB depending on your needs.
        </p>

        <InternalLinks />
      </div>
    </main>
  );
}