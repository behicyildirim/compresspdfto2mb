import Link from "next/link";

export const metadata = {
  title: "Compress PDF for University Application (Meet Upload Limits)",
  description:
    "Compress PDF for university applications. Meet strict portal limits with safe targets like 2MB, 1MB, or 500KB and avoid upload failures.",
};

export default function CompressPdfForUniversityApplicationPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Compress PDF for University Application</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          University portals often reject large PDFs. Use safe targets and upload without errors.
        </p>

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
            <h2 className="text-2xl font-semibold">Recommended targets</h2>
            <p className="mt-2 text-gray-700">
              Start with <b>2MB</b>. If the portal is strict, try <b>1MB</b> or <b>500KB</b>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">If upload still fails</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Remove blank pages</li>
              <li>Re-scan in grayscale (150–300 DPI)</li>
              <li>Split into smaller PDFs if allowed</li>
              <li>Check portal rules (page limits, password protection)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related help</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/reduce-pdf-size-for-online-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Reduce PDF size for online application</h3>
                <p className="text-sm text-gray-600 mt-1">General portal upload fixes.</p>
              </a>
              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload requirements</h3>
                <p className="text-sm text-gray-600 mt-1">Size, format, and page limits checklist.</p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">Pick a target size and upload again.</p>
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