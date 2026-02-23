import Link from "next/link";

export const metadata = {
  title: "PDF Upload Failed? Fix File Size & Upload Errors",
  description:
    "PDF upload failed? Learn why uploads fail and how to fix file size limits by compressing your PDF for portals, visa and immigration systems.",
};

export default function PdfUploadFailedPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Upload Failed? Here’s How to Fix It
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Upload errors usually happen because of file size limits, scan quality,
          or portal restrictions. Use the steps below to solve it fast.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold">Most Common Reasons</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Your PDF is larger than the portal’s allowed limit (often 1–2MB).</li>
              <li>The file is image-heavy (scanned documents at high resolution).</li>
              <li>The PDF is corrupted or incorrectly exported.</li>
              <li>The portal only accepts specific formats or page limits.</li>
              <li>Your upload timed out due to slow connection.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Quick Fix: Compress to a Safe Size</h2>
            <p className="mt-2">
              If you don’t know the exact limit, start by compressing to 2MB.
              For stricter portals, try 1MB.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/compress-pdf-to-1mb", label: "Compress to 1MB" },
                { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Fix Scanned PDFs</h2>
            <p className="mt-2">
              If your PDF comes from a scanner, it may contain large images.
              Re-scan using grayscale and a lower DPI (150–300 DPI). Remove blank pages
              and compress again.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Portal-Specific Help</h2>
            <p className="mt-2">
              Some systems have strict rules. Use these guides:
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/immigration-pdf-upload-guide"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Immigration Upload Guide</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Visa, USCIS, IRCC and portal limit tips.
                </p>
              </a>

              <a
                href="/pdf-size-limit-for-email"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Email Attachment Limits</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Gmail and Outlook size limits explained.
                </p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Need to compress right now?
            </h2>
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