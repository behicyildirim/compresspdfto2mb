import Link from "next/link";

export const metadata = {
  title: "PDF Upload Requirements: Size, Format & Page Limits",
  description:
    "PDF upload requirements checklist: file size limits, formats, page limits, and scan settings. Learn how to prepare and compress PDFs for strict portals.",
};

export default function PdfUploadRequirementsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">PDF Upload Requirements</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Many portals reject PDFs due to size limits, format rules, or page restrictions.
          Use this checklist to prepare your file before uploading.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
            { href: "/compress-pdf-to-1mb", label: "Compress to 1MB" },
            { href: "/compress-pdf-to-500kb", label: "Compress to 500KB" },
          ].map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
            >
              {i.label}
            </a>
          ))}
        </div>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">1) File size limits</h2>
            <p className="mt-2">
              Many websites cap uploads at 2MB or lower. If you’re unsure, compress to 2MB first.
              If it fails, try 1MB or 500KB.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2) Accepted format & PDF rules</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Use a standard PDF (avoid unusual converters)</li>
              <li>Avoid password-protected / encrypted PDFs unless the portal allows it</li>
              <li>Keep text selectable when possible (scans are image-heavy)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3) Page limits</h2>
            <p className="mt-2">
              Some systems limit page count. If allowed, split into multiple PDFs or remove unnecessary pages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4) Scan settings (if your PDF is a scan)</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Prefer grayscale over color</li>
              <li>Use 150–300 DPI</li>
              <li>Remove blank pages before exporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Quick checklist before upload</h2>
            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>File size meets the portal’s limit</li>
                <li>PDF is not password-protected (unless allowed)</li>
                <li>Pages are within limits and in the correct order</li>
                <li>Scans are optimized (grayscale, reasonable DPI)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related help</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-failed-on-website"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Upload Failed on Website</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Common reasons and fixes.
                </p>
              </a>

              <a
                href="/pdf-too-large-for-website-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Too Large for Website Upload</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce size fast for strict portals.
                </p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Need to compress right now?
            </h2>
            <p className="mt-2 text-gray-700">
              Start with a safe target like 2MB, then go smaller if required.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-semibold">What’s the safest target size?</h3>
                <p className="mt-1 text-gray-700">
                  2MB is a common safe target. If a portal is strict, 1MB or 500KB is safer.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Why does a portal reject my PDF even after compression?</h3>
                <p className="mt-1 text-gray-700">
                  It may be due to page limits, encryption, or an incompatible PDF export. Re-export as a standard PDF and try again.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}