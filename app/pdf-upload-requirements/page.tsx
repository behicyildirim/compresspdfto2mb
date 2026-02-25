import Link from "next/link";

export const metadata = {
  title: "PDF Upload Requirements (File Size & Format Guide)",
  description:
    "Learn common PDF upload requirements including file size limits, formats, and tips to avoid upload errors.",
};

export default function PdfUploadRequirementsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          PDF Upload Requirements
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Most websites and portals require PDFs to meet specific size and format
          requirements. Understanding these rules helps avoid upload failures.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold">
              Common PDF Upload Requirements
            </h2>

            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File size usually must be under 2MB or 5MB</li>
              <li>Standard PDF format required</li>
              <li>No password protection</li>
              <li>Clear and readable text</li>
              <li>Limited number of pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Typical File Size Limits
            </h2>

            <p className="mt-2">
              Most upload systems require documents under a specific size limit.
              Common limits include:
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              <a href="/compress-pdf-to-2mb"
              className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition">
              Compress to 2MB
              </a>

              <a href="/compress-pdf-to-1mb"
              className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition">
              Compress to 1MB
              </a>

              <a href="/compress-pdf-to-500kb"
              className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition">
              Compress to 500KB
              </a>

            </div>

          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Why Uploads Fail
            </h2>

            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File size exceeds allowed limits</li>
              <li>PDF contains large images</li>
              <li>Incorrect file format</li>
              <li>Corrupted files</li>
              <li>Slow internet connection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Related Upload Guides
            </h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <a href="/pdf-upload-failed"
              className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition">
                <h3 className="font-semibold text-blue-700">
                  PDF Upload Failed
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Common upload errors explained.
                </p>
              </a>

              <a href="/pdf-too-large-to-upload"
              className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition">
                <h3 className="font-semibold text-blue-700">
                  PDF Too Large to Upload
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Fix file size issues quickly.
                </p>
              </a>

            </div>

          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">

            <h2 className="text-xl font-semibold">
              Compress your PDF now
            </h2>

            <p className="mt-2">
              Start with a safe size like 2MB.
            </p>

            <Link
            href="/"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Go to PDF Compressor
            </Link>

          </section>

        </div>
      </div>
    </main>
  );
}