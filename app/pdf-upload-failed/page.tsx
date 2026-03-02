import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF Upload Failed? Common Reasons & Fixes | CP2",
  description:
    "Fix 'PDF upload failed' errors: size limits, corrupted files, password protection, and scan settings. Quick solutions.",
  alternates: { canonical: "/pdf-upload-failed" },

  openGraph: {
    title: "PDF Upload Failed? Common Reasons & Fixes | CP2",
    description:
      "Fix 'PDF upload failed' errors: size limits, corrupted files, password protection, and scan settings. Quick solutions.",
    url: "/pdf-upload-failed",
    siteName: "CP2 - CompressPDFto2MB",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CP2" }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PDF Upload Failed? Common Reasons & Fixes | CP2",
    description:
      "Fix 'PDF upload failed' errors: size limits, corrupted files, password protection, and scan settings. Quick solutions.",
    images: ["/og.png"],
  },
};

export default function PdfUploadFailedPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Upload Failed? Here’s How to Fix It
        </h1>

        {/* Breadcrumbs + mini nav */}
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/pdf-upload-failed", label: "PDF upload failed" },
          ]}
        />

        <div className="mt-4 flex flex-wrap justify-center gap-2">
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
          <Link
            href="/reduce-pdf-size-for-online-application"
            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
          >
            Online application tips
          </Link>
        </div>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Upload errors usually happen because of file size limits, scan quality,
          or portal restrictions. Use the steps below to solve it fast.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          {/* Contextual links (strong internal linking) */}
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Start here (most portal rejections)
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              If the portal rejects your file, it’s usually a strict size limit.
              Start with{" "}
              <Link
                href="/compress-pdf-to-2mb"
                className="font-semibold text-blue-700 hover:underline"
              >
                2MB
              </Link>{" "}
              and go smaller if needed:{" "}
              <Link
                href="/compress-pdf-to-1mb"
                className="font-semibold text-blue-700 hover:underline"
              >
                1MB
              </Link>{" "}
              or{" "}
              <Link
                href="/compress-pdf-to-500kb"
                className="font-semibold text-blue-700 hover:underline"
              >
                500KB
              </Link>
              .
            </p>
            <p className="mt-2 text-sm text-gray-700">
              For visa/immigration portals, follow the{" "}
              <Link
                href="/immigration-pdf-upload-guide"
                className="font-semibold text-blue-700 hover:underline"
              >
                immigration upload guide
              </Link>{" "}
              (limits, common rules, what size to choose). For forms/universities/jobs,
              use the{" "}
              <Link
                href="/reduce-pdf-size-for-online-application"
                className="font-semibold text-blue-700 hover:underline"
              >
                online application step-by-step page
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Most Common Reasons</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Your PDF is larger than the portal’s allowed limit (often 1–2MB).</li>
              <li>The file is image-heavy (scanned documents at high resolution).</li>
              <li>The PDF is corrupted or incorrectly exported.</li>
              <li>The portal only accepts specific formats or page limits.</li>
              <li>Your upload timed out due to slow connection.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Quick Fix: Compress to a Safe Size</h2>
            <p className="mt-2">
              If you don’t know the exact limit, start by compressing to 2MB.
              For stricter portals, try 1MB. If it still fails, try 500KB.
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
                Seeing “PDF too large” specifically? Use{" "}
                <Link
                  href="/pdf-too-large-to-upload"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  PDF too large to upload fixes
                </Link>{" "}
                (fast checklist + best practices).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Fix Scanned PDFs</h2>
            <p className="mt-2">
              Scanned PDFs often fail because they’re image-heavy. Re-scan in{" "}
              <span className="font-semibold">grayscale</span> and{" "}
              <span className="font-semibold">150–300 DPI</span>. Remove blank pages,
              then compress again (2MB → 1MB → 500KB).
            </p>
          </section>

          <section>
  <h2 className="text-2xl font-semibold">Portal-Specific Help</h2>
  <p className="mt-2">Some systems have strict rules. Use these guides:</p>

  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <a
      href="/pdf-too-large-to-upload"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">PDF Too Large to Upload</h3>
      <p className="text-sm text-gray-600 mt-1">Quick fixes for large PDFs.</p>
    </a>

    <a
      href="/reduce-pdf-size-for-online-application"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">Online Application PDF Help</h3>
      <p className="text-sm text-gray-600 mt-1">Meet strict upload limits fast.</p>
    </a>

    <a
      href="/pdf-too-large-for-website-upload"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">PDF Too Large for Website Upload</h3>
      <p className="text-sm text-gray-600 mt-1">Fix strict website size limits.</p>
    </a>

    <a
      href="/compress-pdf-for-government-application"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">Government Application PDF</h3>
      <p className="text-sm text-gray-600 mt-1">Compress for strict form portals.</p>
    </a>

    <a
      href="/pdf-upload-requirements"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">PDF Upload Requirements</h3>
      <p className="text-sm text-gray-600 mt-1">Size, format, and page limits checklist.</p>
    </a>

    <a
      href="/pdf-size-limit-for-email"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">Email Attachment Limits</h3>
      <p className="text-sm text-gray-600 mt-1">Gmail and Outlook size limits explained.</p>
    </a>

    <a
      href="/immigration-pdf-upload-guide"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">Immigration Upload Guide</h3>
      <p className="text-sm text-gray-600 mt-1">Visa, USCIS, IRCC portal limit tips.</p>
    </a>
  </div>
</section>

          {/* FAQ schema + FAQ section */}
          <Script
            id="faq-upload-failed-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Why does my portal say PDF upload failed?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Common reasons include file size limits, password-protected PDFs, corrupted exports, unsupported formats, or connection timeouts. Compressing to 2MB or 1MB and re-exporting often fixes the issue.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What PDF size should I use if I’m not sure about the limit?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Start with 2MB because many portals accept it. If the upload still fails, try 1MB. For very strict portals, use 500KB.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why are scanned PDFs more likely to fail uploads?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Scanned PDFs are image-heavy and can exceed size limits. Re-scan in grayscale at 150–300 DPI, remove blank pages, then compress to a smaller target size.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What should I do if the error says PDF too large to upload?",
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
<section>
  <h2 className="text-2xl font-semibold">Related guides</h2>
  <p className="mt-2 text-gray-700">
    These pages help if your portal has strict size limits or special upload rules.
  </p>

  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <a
      href="/pdf-size-limit-for-uscis"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">USCIS PDF size limit</h3>
      <p className="text-sm text-gray-600 mt-1">
        Common USCIS limits and the safest upload sizes.
      </p>
    </a>

    <a
      href="/reduce-pdf-size-for-online-application"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">Online application PDF help</h3>
      <p className="text-sm text-gray-600 mt-1">
        Best target sizes for portals, forms, universities, and jobs.
      </p>
    </a>

    <a
      href="/compress-pdf-to-1mb"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">Compress PDF to 1MB</h3>
      <p className="text-sm text-gray-600 mt-1">
        For stricter portals that reject 2MB uploads.
      </p>
    </a>

    <a
      href="/compress-pdf-to-500kb"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">Compress PDF to 500KB</h3>
      <p className="text-sm text-gray-600 mt-1">
        For very strict upload limits.
      </p>
    </a>
  </div>
</section>
          <section className="mt-2 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">FAQ</h2>
            <div className="mt-4 space-y-5 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Why does my portal say “PDF upload failed”?
                </h3>
                <p className="mt-1">
                  Size limits, password protection, corrupted exports, unsupported formats,
                  or timeouts are common causes. Try compressing (2MB → 1MB → 500KB) and
                  re-exporting.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  What PDF size should I use if I’m not sure about the limit?
                </h3>
                <p className="mt-1">
                  Start with{" "}
                  <Link href="/compress-pdf-to-2mb" className="font-semibold text-blue-700 hover:underline">
                    2MB
                  </Link>
                  . If it still fails, try{" "}
                  <Link href="/compress-pdf-to-1mb" className="font-semibold text-blue-700 hover:underline">
                    1MB
                  </Link>{" "}
                  or{" "}
                  <Link href="/compress-pdf-to-500kb" className="font-semibold text-blue-700 hover:underline">
                    500KB
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Why are scanned PDFs more likely to fail uploads?
                </h3>
                <p className="mt-1">
                  They’re image-heavy. Re-scan in grayscale at 150–300 DPI, remove blank pages,
                  then compress.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  What if the portal says “PDF too large to upload”?
                </h3>
                <p className="mt-1">
                  Use{" "}
                  <Link href="/pdf-too-large-to-upload" className="font-semibold text-blue-700 hover:underline">
                    the “PDF too large” fixes
                  </Link>{" "}
                  and compress to 1MB or 500KB.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Need to compress right now?
            </h2>
            <p className="mt-2 text-gray-700">
              Use the main tool and start with a safe target like 2MB.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}