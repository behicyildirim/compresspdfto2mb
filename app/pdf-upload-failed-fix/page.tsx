import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF Upload Failed? Fix It (Common Errors + Solutions) | CP2",
  description:
    "PDF upload failed on a website? Fix size-limit errors, password protection, scanned PDFs, and portal restrictions. Fast checklist + safe target sizes (2MB, 1MB, 500KB).",
  alternates: { canonical: "/pdf-upload-failed-fix" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">
          PDF Upload Failed? Fix It (Fast Checklist)
        </h1>
        <p className="mt-4 text-gray-600">
If your PDF upload fails, it is usually caused by file size limits, password protection,
or portal restrictions. Use the quick fixes below and try compressing your PDF to a safe size
like <Link href="/compress-pdf-to-2mb" className="text-blue-700 underline">2MB</Link> or
<Link href="/compress-pdf-to-1mb" className="text-blue-700 underline ml-1">1MB</Link>.
</p>
        <p className="mt-4 text-lg text-gray-600">
          If a portal says “upload failed”, it’s usually one of these: file size
          limit, password protection, unsupported format, or a scanned PDF that’s
          too heavy. Use this quick checklist and try a safe target size first.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Fast fixes (try in order)
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-gray-700">
            <li>
              Compress to a safe target (2MB). If still rejected, try 1MB or
              500KB.
            </li>
            <li>Make sure the file is a real PDF (not .jpg renamed to .pdf).</li>
            <li>Remove password protection / encryption.</li>
            <li>Reduce scanned PDFs (lower DPI / optimize images).</li>
            <li>Rename the file (avoid special characters, keep it short).</li>
            <li>Try another browser or disable extensions/ad blockers.</li>
          </ol>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/compress-pdf-to-2mb"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Compress to 2MB
            </Link>
            <Link
              href="/compress-pdf-to-1mb"
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black transition"
            >
              Compress to 1MB
            </Link>
            <Link
              href="/compress-pdf-to-500kb"
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black transition"
            >
              Compress to 500KB
            </Link>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Also useful:{" "}
            <Link href="/pdf-upload-requirements" className="text-blue-700 underline">
              PDF upload requirements
            </Link>{" "}
            •{" "}
            <Link href="/pdf-too-large-to-upload" className="text-blue-700 underline">
              PDF too large to upload
            </Link>{" "}
            •{" "}
            <Link href="/immigration-pdf-upload-guide" className="text-blue-700 underline">
              Immigration / visa upload guide
            </Link>
          </p>
        </div>

        <div className="mt-10 space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Why PDF uploads fail (most common reasons)
            </h2>

            <div className="mt-4 space-y-5">
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">1) File size limit</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Many portals reject files above 2MB (sometimes 1MB or 500KB).
                  Start with 2MB and go smaller if needed.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">
                  2) Password-protected / encrypted PDF
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Some websites automatically reject encrypted PDFs. Remove the
                  password and upload again.
                </p>
                <p className="mt-2 text-sm">
                  <Link
                    href="/pdf-password-protected-cant-upload"
                    className="text-blue-700 underline"
                  >
                    Fix password-protected PDF upload →
                  </Link>
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">3) Scanned PDFs are huge</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Scans (photos) contain heavy images. Compressing usually fixes
                  it immediately. If it’s still large, rescan at a lower DPI.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">4) Upload timeout</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Slow connections + big PDFs = timeouts. Reduce the file size and
                  try again.
                </p>
                <p className="mt-2 text-sm">
                  <Link href="/pdf-upload-timeout" className="text-blue-700 underline">
                    Fix PDF upload timeout →
                  </Link>
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">5) Wrong format rules</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Some portals require “PDF only”, limit pages, or reject certain
                  PDF versions. Check the portal rules.
                </p>
                <p className="mt-2 text-sm">
                  <Link
                    href="/pdf-upload-requirements"
                    className="text-blue-700 underline"
                  >
                    See PDF upload requirements →
                  </Link>
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Best size to choose (quick guide)
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>
                <b>2MB:</b> safest default for most portals
              </li>
              <li>
                <b>1MB:</b> stricter portals, faster uploads
              </li>
              <li>
                <b>500KB:</b> very strict limits or slow connections
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              If you’re uploading for visas/immigration, this page helps:{" "}
              <Link href="/immigration-pdf-upload-guide" className="text-blue-700 underline">
                Immigration PDF upload guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">FAQ</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Why does it say “upload failed” even when my PDF is under 2MB?
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Often it’s password protection, portal format rules, timeouts,
                  or a file-name issue. Try the checklist above.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Will compression reduce quality?
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Most PDFs compress well without hurting readability, especially
                  scans. If text looks blurry, try 2MB instead of 500KB.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 text-sm text-gray-600">
          Back to tool:{" "}
          <Link href="/" className="text-blue-700 underline">
            Compress PDF to Under 2MB
          </Link>
        </div>
      </div>
      <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
  <h2 className="text-xl font-semibold text-gray-900">
    Related upload fixes
  </h2>

  <div className="mt-4 flex flex-wrap gap-3">

    <Link
      href="/pdf-too-large-to-upload"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      PDF too large to upload
    </Link>

    <Link
      href="/pdf-upload-requirements"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      PDF upload requirements
    </Link>

    <Link
      href="/immigration-pdf-upload-guide"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Immigration upload guide
    </Link>

  </div>
</section>
    </main>
  );
}