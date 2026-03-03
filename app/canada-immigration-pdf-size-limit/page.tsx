import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canada Immigration PDF Size Limit (IRCC Upload Guide) | CP2",
  description:
    "Learn the Canada immigration PDF size limit and how to reduce PDF file size for IRCC portal uploads.",
  alternates: { canonical: "/canada-immigration-pdf-size-limit" },
  openGraph: {
    title: "Canada Immigration PDF Size Limit (IRCC Upload Guide) | CP2",
    description:
      "Learn the Canada immigration PDF size limit and how to reduce PDF file size for IRCC portal uploads.",
    url: "/canada-immigration-pdf-size-limit",
    siteName: "CP2 - CompressPDFto2MB",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CP2" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada Immigration PDF Size Limit (IRCC Upload Guide) | CP2",
    description:
      "Learn the Canada immigration PDF size limit and how to reduce PDF file size for IRCC portal uploads.",
    images: ["/og.png"],
  },
};

export default function CanadaImmigrationPdfPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Canada Immigration PDF Size Limit
        </h1>

        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/immigration-pdf-upload-guide", label: "Immigration upload guide" },
            { href: "/canada-immigration-pdf-size-limit", label: "Canada IRCC PDF limit" },
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
          IRCC portals may reject uploads due to strict size limits, scan settings, or PDF export issues.
          Use the checklist below to choose a safe target size and upload successfully.
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
            <h2 className="text-xl font-semibold text-gray-900">
              What is the Canada (IRCC) PDF size limit?
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              The exact limit can vary by application and upload field, but many IRCC uploads are safest
              when kept under <span className="font-semibold">2MB</span>. If your file exceeds the limit,
              the portal may reject it or show a generic upload error.
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
                If you see a generic error message, follow{" "}
                <Link href="/pdf-upload-failed" className="font-semibold text-blue-700 hover:underline">
                  PDF upload failed fixes
                </Link>{" "}
                (corruption, password protection, timeouts, portal rules).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Common IRCC upload errors</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>PDF exceeds the allowed size limit (often 2MB or less).</li>
              <li>High-resolution scanned documents (image-heavy pages).</li>
              <li>Color scans instead of grayscale.</li>
              <li>Password-protected or encrypted PDFs.</li>
              <li>Corrupted or improperly exported PDF files.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How to reduce PDF size for IRCC upload</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Start by compressing to 2MB.</li>
              <li>If the portal is strict, compress to 1MB.</li>
              <li>If it still fails, use 500KB.</li>
              <li>Re-upload. If rejected again, re-export the PDF and try once more.</li>
            </ol>
          </section>

          <section className="mt-2 rounded-lg bg-blue-50 p-6 text-center">
            <Link
              href="/compress-pdf-to-2mb"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              Compress PDF to 2MB for IRCC
            </Link>
          </section>

          <Script
            id="faq-ircc-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the maximum file size for IRCC uploads?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "The exact limit can vary, but many IRCC uploads work best under 2MB. If your upload is rejected, try 1MB or 500KB.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why does IRCC reject my PDF?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Rejections often happen due to file size limits, image-heavy scans, password protection, corrupted exports, or portal rules. Compressing to a smaller target and re-exporting often fixes it.",
                    },
                  },
                ],
              }),
            }}
          />

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Related guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/immigration-pdf-upload-guide", label: "Immigration upload guide" },
                { href: "/pdf-size-limit-for-uscis", label: "USCIS PDF size limit" },
                { href: "/uk-visa-pdf-size-limit", label: "UK visa PDF size limit" },
                { href: "/schengen-visa-pdf-size-limit", label: "Schengen visa PDF limit" },
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
    </main>
  );
}