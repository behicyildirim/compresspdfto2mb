import Link from "next/link";

export const metadata = {
  title: "Compress PDF for Portal Upload (Fix Size Limit Errors)",
  description:
    "Compress PDF for portal upload. Fix file size limit errors with safe targets (2MB, 1MB, 500KB) and a quick upload checklist.",
};

export default function CompressPdfForPortalUploadPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Compress PDF for Portal Upload</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Portals often reject PDFs because of strict upload limits. Compress to a safe size and retry.
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
            <h2 className="text-2xl font-semibold">Safe targets</h2>
            <p className="mt-2 text-gray-700">
              If the portal doesn’t clearly show the limit, try <b>2MB</b> first. If it fails, go to <b>1MB</b> or <b>500KB</b>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Quick portal upload checklist</h2>
            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <ul className="list-disc pl-6 space-y-2">
                <li>File size is under the limit</li>
                <li>No password protection</li>
                <li>Pages are within limits</li>
                <li>Scans are grayscale, 150–300 DPI</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related fixes</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-failed"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload failed</h3>
                <p className="text-sm text-gray-600 mt-1">Common causes and solutions.</p>
              </a>
              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload requirements</h3>
                <p className="text-sm text-gray-600 mt-1">Size, format, and page limits.</p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            
            <p className="mt-2 text-gray-700">Pick a safe size and upload again.</p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>
          <section className="mt-10">
  <h2 className="text-2xl font-semibold">Related upload guides</h2>

  <div className="mt-4 flex flex-wrap gap-3">

    <Link
      href="/compress-pdf-for-online-application"
      className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Compress PDF for online application
    </Link>

    <Link
      href="/immigration-pdf-upload-guide"
      className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Immigration PDF upload guide
    </Link>

    <Link
      href="/visa-document-upload-size-limit"
      className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Visa document upload size limits
    </Link>

    <Link
      href="/pdf-too-large-to-upload"
      className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      PDF too large to upload
    </Link>

  </div>
</section>
        </div>
      </div>
    </main>
  );
}