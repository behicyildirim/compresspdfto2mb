import Link from "next/link";

export const metadata = {
  title: "PDF Upload Requirements (Size, Format & Page Limits)",
  description:
    "PDF upload requirements checklist: size limits, formats, page limits, scan settings, and common rejection reasons. Fix upload failures with fast compression targets.",
};

export default function PdfUploadRequirementsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Upload Requirements
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Portals reject PDFs for more than just file size. Use this checklist to meet
          size limits, format rules, and page requirements before you upload.
        </p>

        {/* Quick actions */}
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

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">The 7 most common PDF upload requirements</h2>
            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <ol className="list-decimal pl-6 space-y-2">
                <li><b>File size limit</b> (often 1–2MB; sometimes 500KB).</li>
                <li><b>Accepted file format</b> (PDF only; sometimes PDF/A).</li>
                <li><b>Page limit</b> (max pages per upload).</li>
                <li><b>No password / encryption</b> (protected PDFs may be rejected).</li>
                <li><b>Readable scan quality</b> (not too blurry, not too large).</li>
                <li><b>Valid PDF export</b> (avoid broken converters or corrupted files).</li>
                <li><b>Total upload cap</b> (multiple files can exceed the total size).</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">1) File size limits (what to try first)</h2>
            <p className="mt-2 text-gray-700">
              If the portal doesn’t clearly state the limit, start with <b>2MB</b>.
              If it fails, go smaller: <b>1MB</b> → <b>500KB</b>.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>2MB: most common “safe” target</li>
              <li>1MB: stricter portals</li>
              <li>500KB: very strict forms and older uploaders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2) Format rules (why “valid PDF” matters)</h2>
            <p className="mt-2 text-gray-700">
              Some uploads fail even when your file is small. Typical reasons:
              password protection, unusual PDF versions, or a corrupted export.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Remove passwords/encryption before uploading (unless explicitly allowed)</li>
              <li>Re-export as a standard PDF from a reliable viewer/editor</li>
              <li>Avoid stacking multiple conversions (DOC → PDF → PDF)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3) Page limits (what to do)</h2>
            <p className="mt-2 text-gray-700">
              If the portal enforces page limits, you have two options:
              remove unnecessary pages or split the document (only if allowed).
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Remove blank pages and repeated pages</li>
              <li>Split into multiple PDFs if the portal allows multiple uploads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4) Scan settings that keep PDFs small</h2>
            <p className="mt-2 text-gray-700">
              Scanned PDFs are usually image-heavy. These settings keep them readable and smaller:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Use <b>grayscale</b> instead of color</li>
              <li>Scan at <b>150–300 DPI</b></li>
              <li>Crop edges and remove blank pages before export</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Quick pre-upload checklist</h2>
            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <ul className="list-disc pl-6 space-y-2">
                <li>Under the portal’s size limit (2MB/1MB/500KB)</li>
                <li>No password protection (unless allowed)</li>
                <li>Pages in correct order; within page limits</li>
                <li>Readable text (especially scans)</li>
                <li>Re-exported as a standard PDF if uploads fail</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-failed-on-website"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload failed on website</h3>
                <p className="text-sm text-gray-600 mt-1">Fix timeouts, format rules, and strict limits.</p>
              </a>
              <a
                href="/pdf-too-large-for-website-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF too large for website upload</h3>
                <p className="text-sm text-gray-600 mt-1">Fast size reduction targets and scan tips.</p>
              </a>
              <a
                href="/pdf-upload-failed"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload failed</h3>
                <p className="text-sm text-gray-600 mt-1">General causes and step-by-step fixes.</p>
              </a>
              <a
                href="/reduce-pdf-size-for-online-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Reduce PDF size for online application</h3>
                <p className="text-sm text-gray-600 mt-1">Best targets for forms and portals.</p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Start with 2MB. If your portal is strict, go to 1MB or 500KB.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-semibold">Why is my PDF rejected even under 2MB?</h3>
                <p className="mt-1 text-gray-700">
                  Portals may also block password-protected PDFs, enforce page limits,
                  or reject corrupted exports. Re-export as a standard PDF and try again.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">What’s the safest target size?</h3>
                <p className="mt-1 text-gray-700">
                  2MB is common. If it fails, 1MB or 500KB usually works on strict portals.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="mt-10 rounded-2xl border p-5">
  <h2 className="text-lg font-semibold">Related upload fixes</h2>

  <ul className="mt-4 grid gap-2 text-sm">
    <li>
      <Link className="underline" href="/pdf-upload-failed-on-website">
        PDF upload failed on website? Fix it
      </Link>
    </li>
    <li>
      <Link className="underline" href="/pdf-too-large-for-website-upload">
        PDF too large for website upload? Fix it
      </Link>
    </li>
    <li>
      <Link className="underline" href="/compress-pdf-under-2mb">
        Upload PDF under 2MB
      </Link>
    </li>
  </ul>
</section>
    </main>
  );
}