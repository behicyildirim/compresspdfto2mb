import Link from "next/link";

export const metadata = {
  title: "PDF Upload Failed on Website? Fix Size & Upload Errors",
  description:
    "PDF upload failed on a website? Fix file size limits, scan issues, and portal restrictions with quick steps.",
};

export default function PdfUploadFailedOnWebsitePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">PDF Upload Failed on Website?</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Website uploads usually fail due to file size limits, scan-heavy PDFs, format restrictions, or timeouts.
          Use the steps below to fix it quickly.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Most common reasons</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>PDF is larger than the website’s limit</li>
              <li>Scan is image-heavy (high resolution / color)</li>
              <li>PDF is corrupted or exported incorrectly</li>
              <li>Timeout on slow connection</li>
              <li>Portal blocks password-protected PDFs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Quick fix: compress first</h2>
            <p className="mt-2">
              Start with 2MB. If the website is stricter, try 1MB. If needed, go to 500KB.
            </p>

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
                Compress to 1MB
              </a>
              <a
                href="/compress-pdf-to-500kb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 500KB
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">If it still fails</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Rescan in grayscale and 150–300 DPI</li>
              <li>Remove blank pages</li>
              <li>Try a different browser or disable extensions</li>
              <li>If allowed, split into smaller PDFs</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Need portal rules?</h2>
            <p className="mt-2 text-gray-700">
              Check typical size/format/page-limit requirements.
            </p>
            <Link
              href="/pdf-upload-requirements"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              PDF Upload Requirements
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Related guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/pdf-too-large-for-website-upload", label: "PDF too large for website upload" },
                { href: "/upload-pdf-under-2mb", label: "Upload PDF under 2MB" },
                { href: "/pdf-upload-failed", label: "General PDF upload failed fixes" },
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