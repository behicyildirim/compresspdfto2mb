import Link from "next/link";

export const metadata = {
  title: "PDF Too Large for Website Upload? Fix It Fast",
  description:
    "PDF too large for website upload? Learn quick fixes to reduce file size and meet portal limits (2MB/1MB/500KB) without upload errors.",
};

export default function PdfTooLargeForWebsiteUploadPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Too Large for Website Upload?
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Many website forms have strict upload limits. If your PDF is rejected as “too large”,
          use these quick fixes and safe target sizes.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Fastest fix: compress to a safe size</h2>
            <p className="mt-2 text-gray-700">
              If you don’t know the exact limit, start with 2MB. For stricter forms, try 1MB
              or 500KB.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
                { href: "/compress-pdf-to-1mb", label: "Compress to 1MB" },
                { href: "/compress-pdf-to-500kb", label: "Compress to 500KB" },
              ].map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 transition hover:bg-blue-50"
                >
                  {i.label}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why website uploads reject PDFs</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>The PDF exceeds the form’s file size limit</li>
              <li>The PDF is scan-heavy (high resolution images)</li>
              <li>Too many pages in one file</li>
              <li>Password-protected/encrypted PDF</li>
              <li>Upload timeout due to slow connection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Quick ways to reduce PDF size</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Remove blank pages and re-export</li>
              <li>Re-scan in grayscale (150–300 DPI)</li>
              <li>Lower image quality slightly (keep text readable)</li>
              <li>Split into two smaller PDFs (if the form allows)</li>
              <li>Compress again to a smaller target size</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related upload help</h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50"
              >
                <h3 className="font-semibold text-blue-700">PDF upload requirements</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Size limits, format rules, and portal restrictions.
                </p>
              </a>

              <a
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50"
              >
                <h3 className="font-semibold text-blue-700">PDF too large to upload?</h3>
                <p className="mt-1 text-sm text-gray-600">
                  The fastest general fixes for oversized PDFs.
                </p>
              </a>

              <a
                href="/pdf-upload-failed"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50"
              >
                <h3 className="font-semibold text-blue-700">PDF upload failed</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Troubleshoot upload errors step-by-step.
                </p>
              </a>

              <a
                href="/reduce-pdf-size-for-online-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50"
              >
                <h3 className="font-semibold text-blue-700">
                  Reduce PDF size for online applications
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Step-by-step target sizes for portals and forms.
                </p>
              </a>
            </div>
          </section>

          <section className="rounded-lg bg-blue-50 p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Use the main tool and choose a target size that your website form accepts.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              Go to PDF Compressor
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}