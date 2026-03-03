import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Reduce PDF Size for Online Application (Fast & Simple) | CP2",
  description:
    "Reduce PDF size for online applications. Meet upload limits for forms, portals, universities, jobs, and visas with quick compression targets.",
  alternates: { canonical: "/reduce-pdf-size-for-online-application" },

  openGraph: {
    title: "Reduce PDF Size for Online Application (Fast & Simple) | CP2",
    description:
      "Reduce PDF size for online applications. Meet upload limits for forms, portals, universities, jobs, and visas with quick compression targets.",
    url: "/reduce-pdf-size-for-online-application",
    siteName: "CP2 - CompressPDFto2MB",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CP2" }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reduce PDF Size for Online Application (Fast & Simple) | CP2",
    description:
      "Reduce PDF size for online applications. Meet upload limits for forms, portals, universities, jobs, and visas with quick compression targets.",
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
    { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
    { href: "/reduce-pdf-size-for-online-application", label: "Online application" },
  ]}
/>

<div className="mt-4 flex flex-wrap justify-center gap-2">
  <Link
    href="/immigration-pdf-upload-guide"
    className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
  >
    Immigration upload guide
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
          Online portals often reject large PDFs. Pick a target size below and
          upload without errors.
        </p>
        <p className="mt-3 text-sm text-gray-600 text-center">
  Start here:{" "}
  <Link href="/compress-pdf-to-2mb" className="font-medium text-blue-700 hover:underline">
    2MB
  </Link>{" "}
  works for most portals. If it still fails, try{" "}
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
          <section>
            <h2 className="text-2xl font-semibold">Recommended target sizes</h2>
            <p className="mt-2 text-gray-700">
              Most portals accept 2MB. Some applications require 1MB or even
              500KB.
              {" "}
For visa/immigration portals, see the{" "}
<Link href="/immigration-pdf-upload-guide" className="font-medium text-blue-700 hover:underline">
  immigration PDF upload guide
</Link>
.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                2MB (Most common)
              </Link>

              <Link
                href="/compress-pdf-to-1mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                1MB (Stricter portals)
              </Link>

              <Link
                href="/compress-pdf-to-500kb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                500KB (Very strict)
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">What to do if it still fails</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
              <li>Split the PDF into two smaller files (if allowed).</li>
              <li>Remove blank pages and re-export.</li>
              <li>Re-scan in grayscale (150–300 DPI).</li>
              <li>Try a smaller target size (1MB → 500KB).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Popular application types</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/compress-pdf-for-job-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Job Applications</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Make your resume and documents fit common upload limits.
                </p>
              </Link>

              <Link
                href="/compress-pdf-for-government-forms"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Government Forms</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce PDFs to meet strict official portal limits.
                </p>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related help</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pdf-upload-failed"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Upload Failed</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Fix upload errors quickly with a checklist.
                </p>
              </Link>

              <Link
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">
                  PDF Too Large to Upload
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  The quickest ways to reduce PDF file size.
                </p>
              </Link>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Use the main tool and choose a target size that your portal accepts.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>

          {/* ✅ FIXED: high-contrast related links block */}
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
          name: "What PDF size works best for online application portals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "2MB works for most portals. If the upload fails, try 1MB. For very strict limits, compress to 500KB.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my PDF rejected even after compression?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Common reasons include password protection, invalid PDF exports, unsupported file type, excessive image resolution, or portal-specific requirements. Re-exporting and choosing a smaller target size usually helps.",
          },
        },
        {
          "@type": "Question",
          name: "Should I reduce the PDF quality to meet a strict limit?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if needed. First compress to 2MB or 1MB. If still rejected, reduce to 500KB and keep text readable. Avoid making scans too blurry.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if the portal says PDF too large to upload?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Compress to a smaller target (1MB or 500KB), remove blank pages, and re-export. If allowed, splitting into multiple PDFs can also work.",
          },
        },
      ],
    }),
  }}
/>

<section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
  <h2 className="text-xl font-semibold text-gray-900">FAQ</h2>

  <div className="mt-4 space-y-5">
    <div>
      <h3 className="font-semibold text-gray-900">
        What PDF size works best for online application portals?
      </h3>
      <p className="mt-1 text-sm text-gray-700">
        Start with{" "}
        <Link href="/compress-pdf-to-2mb" className="font-medium text-blue-700 hover:underline">
          2MB
        </Link>
        . If it still fails, try{" "}
        <Link href="/compress-pdf-to-1mb" className="font-medium text-blue-700 hover:underline">
          1MB
        </Link>{" "}
        or{" "}
        <Link href="/compress-pdf-to-500kb" className="font-medium text-blue-700 hover:underline">
          500KB
        </Link>
        .
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Why is my PDF rejected even after compression?
      </h3>
      <p className="mt-1 text-sm text-gray-700">
        It can happen due to password protection, invalid exports, unsupported
        file type, too-high image resolution, or portal-specific rules. If
        needed, follow the{" "}
        <Link href="/pdf-upload-failed" className="font-medium text-blue-700 hover:underline">
          upload failed checklist
        </Link>
        .
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Should I reduce PDF quality to meet a strict limit?
      </h3>
      <p className="mt-1 text-sm text-gray-700">
        Only if needed. Try compressing to 2MB or 1MB first. If still rejected,
        reduce to 500KB and keep text readable.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        What should I do if the portal says “PDF too large to upload”?
      </h3>
      <p className="mt-1 text-sm text-gray-700">
        Compress to a smaller target, remove blank pages, and re-export. If the
        portal allows it, splitting the PDF into two files can also work. See{" "}
        <Link href="/pdf-too-large-to-upload" className="font-medium text-blue-700 hover:underline">
          PDF too large fixes
        </Link>
        .
      </p>
    </div>
  </div>
</section>
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-base font-semibold text-gray-900">
              Related PDF upload fixes
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              If your portal rejects the file, check the limit first (1MB/500KB)
              and common upload rules.
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/immigration-pdf-upload-guide"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Immigration PDF upload guide (limits, format & rules)
                </Link>
              </li>
              <li>
                <Link
                  href="/compress-pdf-to-1mb"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Compress PDF to 1MB
                </Link>
              </li>
              <li>
                <Link
                  href="/compress-pdf-to-500kb"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Compress PDF to 500KB
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf-too-large-to-upload"
                  className="font-medium text-blue-700 hover:underline"
                >
                  PDF too large to upload? Fix it
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf-upload-failed"
                  className="font-medium text-blue-700 hover:underline"
                >
                  PDF upload failed: common reasons & solutions
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}