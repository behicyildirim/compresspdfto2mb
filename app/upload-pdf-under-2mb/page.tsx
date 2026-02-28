import Link from "next/link";

export const metadata = {
  title: "Upload PDF Under 2MB (Quick Steps + Fixes)",
  description:
    "Need to upload a PDF under 2MB? Compress to a safe size and follow quick steps to avoid portal upload errors.",
};

export default function UploadPdfUnder2MbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Upload PDF Under 2MB</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Many portals require files under 2MB. If your upload fails, compress first, then re-upload.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Fast path</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Compress your PDF to 2MB</li>
              <li>Check it opens and looks readable</li>
              <li>Upload again</li>
              <li>If it still fails, try 1MB (some portals are stricter)</li>
            </ol>

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
                Try 1MB
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">If your PDF is a scan</h2>
            <p className="mt-2">
              Scanned PDFs can be huge. For smaller files, scan in grayscale and use 150–300 DPI.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Grayscale / black &amp; white</li>
              <li>150–300 DPI</li>
              <li>Remove blank pages</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Upload still failing?</h2>
            <p className="mt-2 text-gray-700">Use the troubleshooting guide and portal rules checklist.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link
                href="/pdf-upload-failed"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                PDF Upload Failed fixes
              </Link>
              <Link
                href="/pdf-upload-requirements"
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                PDF Upload Requirements
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Related guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/reduce-pdf-size-for-online-application", label: "Online application upload tips" },
                { href: "/immigration-pdf-upload-guide", label: "Immigration upload guide" },
                { href: "/pdf-size-limit-for-email", label: "Email attachment limits" },
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
        </div>
      </div>
    </main>
  );
}