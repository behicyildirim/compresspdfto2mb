import Link from "next/link";

export const metadata = {
  title: "PDF Too Large for Website Upload? Reduce Size Fast",
  description:
    "PDF too large for website upload? Fix file size limits quickly by compressing scanned PDFs and meeting strict portal requirements.",
};

export default function PdfTooLargeForWebsiteUploadPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Too Large for Website Upload?
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Many websites reject PDFs because of strict file size limits (often 1–2MB).
          Use the quick fixes below to reduce size and upload successfully.
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
            <h2 className="text-2xl font-semibold">Why PDFs become too large</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scanned documents saved as high-resolution images</li>
              <li>Color scans instead of grayscale</li>
              <li>Extra blank pages included</li>
              <li>Large embedded photos/screenshots</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Fastest fix</h2>
            <p className="mt-2">
              If you don’t know the exact website limit, start with <b>2MB</b>. If it still fails,
              try <b>1MB</b> or <b>500KB</b>.
            </p>
            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <ol className="list-decimal pl-6 space-y-2">
                <li>Compress your PDF to a safe target (2MB → 1MB → 500KB).</li>
                <li>Re-upload to the website.</li>
                <li>If it fails again, check portal rules (page limit, password, format).</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Best practices for scanned PDFs</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Use grayscale scans when possible</li>
              <li>Scan at 150–300 DPI</li>
              <li>Remove blank pages</li>
              <li>Re-export as a standard PDF (avoid weird converters)</li>
            </ul>
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
                  Common causes and quick fixes.
                </p>
              </a>

              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Upload Requirements</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Size, format, and page limit checklist.
                </p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Compress now and upload again
            </h2>
            <p className="mt-2 text-gray-700">
              Start with 2MB. If the portal is strict, go smaller.
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