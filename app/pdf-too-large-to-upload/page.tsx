import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata = {
  title: "PDF Too Large to Upload? Fix File Size in Minutes",
  description:
    "PDF too large to upload? Learn the quickest ways to reduce PDF size for portals, forms, email, and visa applications.",
};

export default function PdfTooLargeToUploadPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">PDF Too Large to Upload?</h1>

        {/* Breadcrumbs + mini nav */}
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/pdf-too-large-to-upload", label: "PDF too large" },
          ]}
        />
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Link
            href="/pdf-upload-failed"
            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
          >
            Upload failed?
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
          Most upload failures happen because portals have strict size limits (often 1–2MB).
          Use these quick fixes to reduce your PDF and upload successfully.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          {/* Contextual links (strong internal linking) */}
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xl font-semibold text-gray-900">Pick a target size</h2>
            <p className="mt-2 text-sm text-gray-700">
              If you don’t know the exact limit, start with{" "}
              <Link
                href="/compress-pdf-to-2mb"
                className="font-semibold text-blue-700 hover:underline"
              >
                2MB
              </Link>
              . If the portal is strict, use{" "}
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
              For visa/immigration uploads, follow the{" "}
              <Link
                href="/immigration-pdf-upload-guide"
                className="font-semibold text-blue-700 hover:underline"
              >
                immigration PDF upload guide
              </Link>
              . For forms/universities/jobs, use{" "}
              <Link
                href="/reduce-pdf-size-for-online-application"
                className="font-semibold text-blue-700 hover:underline"
              >
                the online application step-by-step page
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Fastest Fix</h2>
            <p className="mt-2">
              Compress to a safe target size first. If you still get rejected, try a smaller target.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 2MB
              </Link>
              <Link
                href="/compress-pdf-to-1mb"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 1MB
              </Link>
              <Link
                href="/compress-pdf-to-500kb"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 500KB
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why is my PDF so big?</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scanned PDFs saved at high resolution (image-heavy pages).</li>
              <li>Color scans instead of grayscale.</li>
              <li>Unnecessary blank pages included.</li>
              <li>Embedded images/screenshots are large.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Best practices before uploading</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Use grayscale scans when possible.</li>
              <li>Scan at 150–300 DPI (clear but not oversized).</li>
              <li>Remove blank pages.</li>
              <li>Compress, then re-upload.</li>
            </ul>

            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm text-gray-700">
                If you see a generic error message, also check{" "}
                <Link
                  href="/pdf-upload-failed"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  PDF upload failed fixes
                </Link>
                .
              </p>
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
                  Common errors and fixes for portal uploads.
                </p>
              </Link>

              <Link
                href="/immigration-pdf-upload-guide"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Immigration Upload Guide</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Visa, USCIS, IRCC upload limits and tips.
                </p>
              </Link>
            </div>
          </section>

          {/* FAQ schema + FAQ section */}
          <Script
            id="faq-too-large-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What PDF size should I use if I don’t know the portal limit?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Start with 2MB because many portals accept it. If the upload is still rejected, try 1MB. For very strict portals, use 500KB.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why are scanned PDFs so large?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Scans are image-heavy, especially in color or high DPI. Re-scan in grayscale at 150–300 DPI, remove blank pages, then compress.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How can I reduce PDF size quickly for visa or immigration uploads?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Compress to 2MB as a safe start, then 1MB if needed. Use the immigration upload guide to match common portal rules and limits.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What if the portal still rejects my PDF after compression?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Try a smaller target (1MB → 500KB), remove blank pages, re-export the PDF, and avoid password protection. If allowed, split into multiple files.",
                    },
                  },
                ],
              }),
            }}
          />

          <section className="mt-2 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">FAQ</h2>
            <div className="mt-4 space-y-5 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">
                  What PDF size should I use if I don’t know the portal limit?
                </h3>
                <p className="mt-1">
                  Start with{" "}
                  <Link href="/compress-pdf-to-2mb" className="font-semibold text-blue-700 hover:underline">
                    2MB
                  </Link>
                  . If rejected, try{" "}
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
                <h3 className="font-semibold text-gray-900">Why are scanned PDFs so large?</h3>
                <p className="mt-1">
                  Scans are image-heavy. Use grayscale and 150–300 DPI, remove blank pages, then compress.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  How can I reduce PDF size quickly for visa or immigration uploads?
                </h3>
                <p className="mt-1">
                  Compress (2MB → 1MB) and follow the{" "}
                  <Link href="/immigration-pdf-upload-guide" className="font-semibold text-blue-700 hover:underline">
                    immigration upload guide
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  What if the portal still rejects my PDF after compression?
                </h3>
                <p className="mt-1">
                  Try 500KB, remove blank pages, re-export, and avoid password protection.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
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