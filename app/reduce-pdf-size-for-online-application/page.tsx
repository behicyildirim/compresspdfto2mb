import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reduce PDF Size for Online Application (Fast & Simple) | CP2",
  description:
    "Reduce PDF size for online applications. Meet upload limits for forms, portals, universities, jobs, and visas with safe targets (2MB → 1MB → 500KB).",
  alternates: { canonical: "/reduce-pdf-size-for-online-application" },

  openGraph: {
    title: "Reduce PDF Size for Online Application (Fast & Simple) | CP2",
    description:
      "Meet strict upload limits for forms, universities, jobs, and visas. Use safe targets: 2MB → 1MB → 500KB.",
    url: "/reduce-pdf-size-for-online-application",
    siteName: "CP2 - CompressPDFto2MB",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CP2" }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reduce PDF Size for Online Application (Fast & Simple) | CP2",
    description:
      "Meet strict upload limits for forms, universities, jobs, and visas. Use safe targets: 2MB → 1MB → 500KB.",
    images: ["/og.png"],
  },
};

export default function ReducePdfSizeForOnlineApplicationPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Reduce PDF Size for Online Application
        </h1>

        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            {
              href: "/reduce-pdf-size-for-online-application",
              label: "Online application PDF",
            },
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
            href="/pdf-upload-requirements"
            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
          >
            Upload requirements
          </Link>
          <Link
            href="/immigration-pdf-upload-guide"
            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
          >
            Immigration guide
          </Link>
        </div>

        <p className="mt-4 text-lg text-gray-600 text-center">
          If an online form rejects your PDF, it’s usually a strict size limit.
          Use the targets below (2MB → 1MB → 500KB) and a quick checklist to
          upload successfully.
        </p>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h2 className="text-xl font-semibold text-gray-900">Pick a safe target size</h2>
          <p className="mt-2 text-sm text-gray-700">
            If you don’t know the portal limit, start with{" "}
            <Link href="/compress-pdf-to-2mb" className="font-semibold text-blue-700 hover:underline">
              2MB
            </Link>
            . If the upload is rejected, try{" "}
            <Link href="/compress-pdf-to-1mb" className="font-semibold text-blue-700 hover:underline">
              1MB
            </Link>{" "}
            or{" "}
            <Link href="/compress-pdf-to-500kb" className="font-semibold text-blue-700 hover:underline">
              500KB
            </Link>
            .
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

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Why portals reject PDFs</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File exceeds the upload limit (commonly 1–2MB).</li>
              <li>Scanned pages are image-heavy (high DPI, color scans).</li>
              <li>Password-protected/encrypted PDFs are blocked.</li>
              <li>Corrupted exports or unsupported PDF versions.</li>
              <li>Timeouts from slow connection or portal errors.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Fast checklist before uploading</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Use grayscale scans when possible.</li>
              <li>Scan at 150–300 DPI (higher = much bigger files).</li>
              <li>Remove blank/duplicate pages.</li>
              <li>Avoid password protection unless the portal allows it.</li>
              <li>After compressing, open the PDF and check readability.</li>
            </ul>

            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm text-gray-700">
                Seeing a generic error? Use{" "}
                <Link href="/pdf-upload-failed" className="font-semibold text-blue-700 hover:underline">
                  PDF upload failed fixes
                </Link>{" "}
                or the{" "}
                <Link href="/pdf-upload-requirements" className="font-semibold text-blue-700 hover:underline">
                  upload requirements checklist
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Start with 2MB. If rejected, go smaller.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>
        </div>

        <Script
          id="faq-online-application-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What PDF size should I use for an online application?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "If the portal doesn’t say, start with 2MB. If it still fails, try 1MB. For very strict portals, use 500KB.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why do scanned PDFs fail uploads more often?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Scanned PDFs are image-heavy, especially in color or high DPI. Re-scan in grayscale at 150–300 DPI, remove blank pages, then compress.",
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </main>
  );
}