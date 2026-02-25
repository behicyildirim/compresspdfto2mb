import Link from "next/link";

export const metadata = {
  title: "PDF Upload Requirements (Size, Format, Page Limits & Rules)",
  description:
    "PDF upload requirements: file size limits (2MB/1MB/500KB), accepted formats, page limits, and portal rules. Fix common upload errors fast.",
};

export default function PdfUploadRequirementsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">PDF Upload Requirements</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Most upload failures happen due to size limits, scan settings, or portal rules.
          Use this checklist to upload your PDF successfully.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Most common requirements</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li><b>File size limit:</b> often 2MB (sometimes 1MB or 500KB).</li>
              <li><b>Format:</b> standard PDF (avoid password-protected/encrypted files).</li>
              <li><b>Page limits:</b> some portals cap total pages or number of uploads.</li>
              <li><b>Scan quality:</b> high DPI scans create oversized PDFs.</li>
              <li><b>Compatibility:</b> corrupted or non-standard exports may be rejected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Typical size limits (safe targets)</h2>
            <p className="mt-2">
              If you don’t know the exact limit, start with <b>2MB</b>. If it still fails,
              try <b>1MB</b> or <b>500KB</b>.
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

            <p className="mt-4 text-sm text-gray-600">
              Tip: For scanned documents, grayscale + 150–300 DPI usually keeps files readable and small.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Scan settings that help</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Use <b>grayscale</b> instead of color when possible.</li>
              <li>Use <b>150–300 DPI</b> (higher DPI makes files huge).</li>
              <li>Remove blank pages before exporting.</li>
              <li>If allowed, split one large PDF into smaller parts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">If your upload still fails</h2>
            <p className="mt-2">
              Use these problem-specific guides (these cover the most common portal errors):
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-failed"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Upload Failed</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reasons and quick fixes for rejected uploads.
                </p>
              </a>

              <a
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Too Large to Upload</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce file size fast and retry.
                </p>
              </a>

              <a
                href="/pdf-too-large-for-website-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Website Upload Fix</h3>
                <p className="text-sm text-gray-600 mt-1">
                  File too big for a website form? Fix it.
                </p>
              </a>

              <a
                href="/upload-pdf-under-2mb"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Upload PDF Under 2MB</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Meet strict 2MB upload limits.
                </p>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Application-specific help</h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/compress-pdf-for-government-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Government applications</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce size for official portals and forms.
                </p>
              </a>

              <a
                href="/reduce-pdf-size-for-online-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Online applications</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Step-by-step targets for strict portals.
                </p>
              </a>

              <a
                href="/immigration-pdf-upload-guide"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Immigration uploads</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Visa, USCIS, IRCC upload limit guidance.
                </p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Use the main tool and choose a safe upload size.
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