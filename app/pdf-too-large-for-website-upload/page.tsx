import Link from "next/link";

export const metadata = {
  title: "Compress PDF for Government Application (Meet File Limits)",
  description:
    "Compress PDF for government applications. Reduce PDF size to meet strict portal limits for forms, documents, and submissions.",
};

export default function CompressPdfForGovernmentApplicationPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Compress PDF for Government Application
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Government portals often have strict upload limits. Compress your PDF to a safe size and upload without errors.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Recommended target sizes</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li><b>2MB</b>: common safe target when the limit is unclear.</li>
              <li><b>1MB</b>: for stricter portals.</li>
              <li><b>500KB</b>: for very strict forms and older systems.</li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/compress-pdf-to-2mb" className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition">
                Compress to 2MB
              </a>
              <a href="/compress-pdf-to-1mb" className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition">
                Compress to 1MB
              </a>
              <a href="/compress-pdf-to-500kb" className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition">
                Compress to 500KB
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why government portals reject PDFs</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File size is above the allowed limit.</li>
              <li>Scanned documents are high-DPI and image-heavy.</li>
              <li>Password-protected PDFs are blocked.</li>
              <li>Uploads time out on slow networks.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Before you upload</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Use grayscale scans where possible.</li>
              <li>Scan at 150–300 DPI.</li>
              <li>Remove blank pages.</li>
              <li>Compress, then upload again.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Upload Requirements</h3>
                <p className="text-sm text-gray-600 mt-1">Checklist for size + format rules.</p>
              </a>

              <a
                href="/reduce-pdf-size-for-online-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Online Application Upload Tips</h3>
                <p className="text-sm text-gray-600 mt-1">Meet strict limits fast.</p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">Use the main tool and start with 2MB.</p>
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