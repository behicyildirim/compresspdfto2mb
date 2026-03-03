import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import InternalLinks from "@/app/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compress PDF for Visa Application (Meet Upload Limits) | CP2",
  description:
    "Compress PDF files for visa applications. Hit common upload limits (2MB → 1MB → 500KB) fast, while keeping documents readable.",
  alternates: { canonical: "/compress-pdf-for-visa" },
  openGraph: {
    title: "Compress PDF for Visa Application (Meet Upload Limits) | CP2",
    description:
      "Compress PDF files for visa applications. Hit common upload limits (2MB → 1MB → 500KB) fast, while keeping documents readable.",
    url: "/compress-pdf-for-visa",
    siteName: "CP2 - CompressPDFto2MB",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CP2" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PDF for Visa Application (Meet Upload Limits) | CP2",
    description:
      "Compress PDF files for visa applications. Hit common upload limits (2MB → 1MB → 500KB) fast, while keeping documents readable.",
    images: ["/og.png"],
  },
};

export default function CompressPdfForVisaPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Compress PDF for Visa Application
        </h1>

        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/immigration-pdf-upload-guide", label: "Immigration upload guide" },
            { href: "/compress-pdf-for-visa", label: "Compress PDF for visa" },
          ]}
        />

        <p className="mt-4 text-lg text-gray-600 text-center">
          Visa portals often reject documents because of size limits. Use safe targets to upload successfully.
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
          (or{" "}
          <Link href="/compress-pdf-to-500kb" className="font-medium text-blue-700 hover:underline">
            500KB
          </Link>
          ).
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xl font-semibold text-gray-900">Pick a safe visa upload size</h2>
            <p className="mt-2 text-sm text-gray-700">
              If the portal doesn’t clearly show a limit, staying under{" "}
              <span className="font-semibold">2MB</span> is usually a safe baseline.
              Some VAC/embassy systems require smaller uploads, so{" "}
              <span className="font-semibold">1MB</span> or{" "}
              <span className="font-semibold">500KB</span> may be needed.
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
                Still getting an error? Check{" "}
                <Link href="/pdf-upload-failed" className="font-semibold text-blue-700 hover:underline">
                  PDF upload failed fixes
                </Link>{" "}
                for password protection, corrupted exports, and portal rules.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why visa uploads fail</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File size exceeds the portal limit (often 2MB, sometimes 1MB or 500KB).</li>
              <li>Scans are image-heavy (high DPI / color scans).</li>
              <li>Password-protected or encrypted PDFs.</li>
              <li>Corrupted exports (printer drivers, bad “print to PDF”).</li>
              <li>Unstable connection/timeouts during upload.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How to compress a PDF for a visa portal</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>
                Start with{" "}
                <Link href="/compress-pdf-to-2mb" className="font-semibold text-blue-700 hover:underline">
                  2MB
                </Link>
                .
              </li>
              <li>If the portal rejects it, compress to 1MB.</li>
              <li>If it’s still rejected, compress to 500KB.</li>
              <li>Re-upload. If it fails again, re-export the PDF and try once more.</li>
            </ol>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress right now</h2>
            <p className="mt-2 text-gray-700">Start with 2MB and step down only if needed.</p>
            <Link
              href="/compress-pdf-to-2mb"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress PDF to 2MB
            </Link>
          </section>

          <Script
            id="faq-visa-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What PDF size should I use for visa uploads?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "If you’re unsure, start with 2MB. If the portal is strict or rejects your upload, try 1MB or 500KB.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why does my visa portal reject my PDF?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Common reasons include size limits, image-heavy scans, password protection, corrupted exports, or portal rules. Compressing to a smaller target and re-exporting often fixes it.",
                    },
                  },
                ],
              }),
            }}
          />
        </div>

        <InternalLinks />
      </div>
    </main>
  );
}