import Link from "next/link";

export const metadata = {
  title: "PDF Upload Requirements (Size, Format & Common Rules)",
  description:
    "PDF upload requirements explained: file size limits, allowed formats, password rules, and quick fixes to avoid upload errors.",
};

export default function PdfUploadRequirementsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">PDF Upload Requirements</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Most portals reject PDFs that don’t match size or format rules. Use this checklist to
          upload successfully the first time.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Common requirements (quick checklist)</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File size under the portal limit (often 1MB–2MB, sometimes 5MB)</li>
              <li>Standard PDF format (not locked/corrupted)</li>
              <li>No password protection (many portals reject encrypted PDFs)</li>
              <li>Readable text (avoid over-compressing scans)</li>
              <li>Correct page count (some systems limit pages per upload)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Typical PDF size limits</h2>
            <p className="mt-2 text-gray-700">
              If you don’t see the exact limit, starting with 2MB is usually safe. For stricter
              systems, compress to 1MB or 500KB.
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
            <h2 className="text-2xl font-semibold">Why uploads fail (most common causes)</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File is above the allowed size limit</li>
              <li>Scan is image-heavy (high DPI, color pages)</li>
              <li>Portal blocks password-protected PDFs</li>
              <li>PDF is corrupted or exported incorrectly</li>
              <li>Slow connection or session timeout during upload</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Fast fixes before you re-upload</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Remove blank pages and re-export</li>
              <li>Re-scan in grayscale (150–300 DPI)</li>
              <li>Try a smaller target (2MB → 1MB → 500KB)</li>
              <li>Disable passwords/encryption</li>
              <li>Split the file if the portal allows multiple uploads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related upload guides</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-failed"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50"
              >
                <h3 className="font-semibold text-blue-700">PDF upload failed</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Common reasons + the fastest troubleshooting steps.
                </p>
              </a>

              <a
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50"
              >
                <h3 className="font-semibold text-blue-700">PDF too large to upload?</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Fix oversized PDFs quickly (best practices + targets).
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

              <a
                href="/immigration-pdf-upload-guide"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50"
              >
                <h3 className="font-semibold text-blue-700">Immigration PDF upload guide</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Visa/USCIS/IRCC upload rules and safe sizes.
                </p>
              </a>
            </div>
          </section>

          <section className="rounded-lg bg-blue-50 p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Use the main tool and choose a size target your portal accepts.
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