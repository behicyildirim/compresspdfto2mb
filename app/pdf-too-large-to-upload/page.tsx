import Link from "next/link";

export const metadata = {
  title: "PDF Too Large to Upload? Fix File Size in Minutes",
  description:
    "PDF too large to upload? Learn the quickest ways to reduce PDF size for portals, forms, email, and visa applications.",
};

export default function PdfTooLargeToUploadPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Too Large to Upload?
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Most upload failures happen because portals have strict size limits (often 1–2MB).
          Use these quick fixes to reduce your PDF and upload successfully.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Fastest Fix</h2>
            <p className="mt-2">
              If you don’t know the exact limit, start by compressing to 2MB. For stricter portals, try 1MB.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 2MB
              </a>
              <a
                href="/compress-pdf-to-1mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 1MB
              </a>
              <a
                href="/compress-pdf-to-500kb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 500KB
              </a>
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related help</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-failed"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Upload Failed</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Common errors and fixes for portal uploads.
                </p>
              </a>

              <a
                href="/immigration-pdf-upload-guide"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Immigration Upload Guide</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Visa, USCIS, IRCC upload limits and tips.
                </p>
              </a>
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