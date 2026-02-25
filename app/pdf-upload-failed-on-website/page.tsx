import Link from "next/link";

export const metadata = {
  title: "PDF Upload Failed on Website? Fix Size Limits & Errors Fast",
  description:
    "PDF upload failed on a website? Learn the most common causes (size limits, portal rules, scans) and how to compress your PDF to upload successfully.",
};

export default function PdfUploadFailedOnWebsitePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Upload Failed on Website? Here’s How to Fix It
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Website uploads fail most often because of file size limits, scanned PDFs,
          or strict upload rules. Use the checklist below to fix it quickly.
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

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Most common reasons websites reject PDFs</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li><b>File size limit:</b> many portals enforce 1–2MB, sometimes 500KB.</li>
              <li><b>Scanned PDFs:</b> image-heavy pages inflate size and trigger timeouts.</li>
              <li><b>Wrong format rules:</b> page count limits, password-protected PDFs, or unsupported PDF versions.</li>
              <li><b>Corrupted export:</b> bad conversions can break uploads.</li>
              <li><b>Slow upload / timeout:</b> large scans on slow connections fail mid-upload.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Fast fix: compress to a safe target</h2>
            <p className="mt-2">
              If you don’t know the exact limit, start with <b>2MB</b>. If the portal is strict,
              try <b>1MB</b> or <b>500KB</b>.
            </p>

            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <ol className="list-decimal pl-6 space-y-2">
                <li>Compress your PDF to 2MB (or smaller if needed).</li>
                <li>Try uploading again.</li>
                <li>If it still fails, check the portal’s requirements (page limit, format, password).</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">If your PDF is scanned (image-heavy)</h2>
            <p className="mt-2">
              Scans are the #1 reason PDFs become huge. If you can re-scan:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Use <b>grayscale</b> instead of color</li>
              <li>Set DPI to <b>150–300</b> (clear but smaller)</li>
              <li>Remove blank pages before exporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Check website upload rules</h2>
            <p className="mt-2">
              Some sites reject PDFs for reasons other than size (page limits, encryption, etc.).
              Use this guide:
            </p>

            <div className="mt-4">
              <a
                href="/pdf-upload-requirements"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                PDF upload requirements (size, format, page limits)
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
                  General checklist for upload failures.
                </p>
              </a>

              <a
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Too Large to Upload</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Size limit fixes and best practices.
                </p>
              </a>

              <a
                href="/reduce-pdf-size-for-online-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Online Application PDF Help</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Meet strict portal limits fast.
                </p>
              </a>

              <a
                href="/immigration-pdf-upload-guide"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Immigration Upload Guide</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Visa/USCIS/IRCC style upload tips.
                </p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Compress and upload again
            </h2>
            <p className="mt-2 text-gray-700">
              Start with a safe target like 2MB. If it fails, go smaller.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-semibold">Why does a website reject my PDF even if it’s under 2MB?</h3>
                <p className="mt-1 text-gray-700">
                  Some portals also enforce page limits, block password-protected PDFs, or reject
                  certain PDF exports. Check the portal’s rules and re-export if needed.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">What’s the safest size to try first?</h3>
                <p className="mt-1 text-gray-700">
                  2MB is a common safe target. For strict portals, 1MB or 500KB works better.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Should I split the PDF into multiple files?</h3>
                <p className="mt-1 text-gray-700">
                  If compression isn’t enough and the portal allows multiple uploads, splitting can help.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}