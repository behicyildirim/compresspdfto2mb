import Link from "next/link";

export const metadata = {
  title: "Compress PDF Under 2MB (Quick & Upload-Friendly)",
  description:
    "Compress PDF under 2MB to meet upload limits. Try 2MB first, then 1MB or 500KB for stricter portals and websites.",
};

export default function CompressPdfUnder2mbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Compress PDF Under 2MB</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          If your portal requires a file under 2MB, compress your PDF to a safe target and upload without errors.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Best targets to try</h2>
            <p className="mt-2 text-gray-700">
              Start with 2MB. If the upload still fails, try 1MB. For very strict forms, use 500KB.
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
                  className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
                >
                  {i.label}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why your PDF won’t fit under 2MB</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scanned documents saved in color at high DPI</li>
              <li>Large images/screenshots embedded in the PDF</li>
              <li>Extra blank pages</li>
              <li>Too many pages in one file</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Quick fixes before compressing</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Remove blank pages</li>
              <li>Re-scan in grayscale (150–300 DPI)</li>
              <li>Export as “optimized PDF” if available</li>
              <li>Split into smaller PDFs if allowed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related upload guides</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/reduce-pdf-under-2mb"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Reduce PDF under 2MB</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Best targets and scan settings.
                </p>
              </a>

              <a
                href="/upload-pdf-under-2mb"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Upload PDF under 2MB</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Pass strict portal limits without errors.
                </p>
              </a>

              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload requirements</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Size limits, formats, and portal rules.
                </p>
              </a>

              <a
                href="/pdf-too-large-for-website-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Website upload fix</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Fix “file too large” website form uploads.
                </p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Use the main tool and start with a 2MB target.
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