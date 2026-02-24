import Link from "next/link";

export const metadata = {
  title: "Reduce PDF Size for Online Application (Fast & Simple)",
  description:
    "Reduce PDF size for online applications. Meet upload limits for forms, portals, universities, jobs, and visas with quick compression targets.",
};

export default function ReducePdfSizeForOnlineApplicationPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Reduce PDF Size for Online Application
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Online portals often reject large PDFs. Pick a target size below and
          upload without errors.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Recommended target sizes</h2>
            <p className="mt-2">
              Most portals accept 2MB. Some applications require 1MB or even
              500KB.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                2MB (Most common)
              </a>
              <a
                href="/compress-pdf-to-1mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                1MB (Stricter portals)
              </a>
              <a
                href="/compress-pdf-to-500kb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                500KB (Very strict)
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">What to do if it still fails</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Split the PDF into two smaller files (if allowed).</li>
              <li>Remove blank pages and re-export.</li>
              <li>Re-scan in grayscale (150–300 DPI).</li>
              <li>Try a smaller target size (1MB → 500KB).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Popular application types</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/compress-pdf-for-job-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Job Applications</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Make your resume and documents fit common upload limits.
                </p>
              </a>

              <a
                href="/compress-pdf-for-government-forms"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Government Forms</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce PDFs to meet strict official portal limits.
                </p>
              </a>
            </div>
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
                  Fix upload errors quickly with a checklist.
                </p>
              </a>

              <a
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Too Large to Upload</h3>
                <p className="text-sm text-gray-600 mt-1">
                  The quickest ways to reduce PDF file size.
                </p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Use the main tool and choose a target size that your portal accepts.
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
      <section className="mt-10 rounded-2xl border p-5">
  <h2 className="text-lg font-semibold">Related PDF upload fixes</h2>
  <p className="mt-2 text-sm opacity-80">
    If your portal rejects the file, check the limit first (1MB/500KB) and common upload rules.
  </p>

  <ul className="mt-4 grid gap-2 text-sm">
    <li>
      <Link className="underline" href="/immigration-pdf-upload-guide">
        Immigration PDF upload guide (limits, format & rules)
      </Link>
    </li>
    <li>
      <Link className="underline" href="/compress-pdf-to-1mb">
        Compress PDF to 1MB
      </Link>
    </li>
    <li>
      <Link className="underline" href="/compress-pdf-to-500kb">
        Compress PDF to 500KB
      </Link>
    </li>
    <li>
      <Link className="underline" href="/pdf-too-large-to-upload">
        PDF too large to upload? Fix it
      </Link>
    </li>
    <li>
      <Link className="underline" href="/pdf-upload-failed">
        PDF upload failed: common reasons & solutions
      </Link>
    </li>
  </ul>
</section>
    </main>
  );
}