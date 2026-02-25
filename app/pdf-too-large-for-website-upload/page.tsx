import Link from "next/link";

export const metadata = {
  title: "PDF Too Large for Website Upload? Fix Size Limits Fast",
  description:
    "PDF too large for website upload? Reduce file size quickly using safe targets (2MB, 1MB, 500KB) and scan optimization tips.",
};

export default function PdfTooLargeForWebsiteUploadPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Too Large for Website Upload?
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Many website forms reject PDFs because of strict upload limits.
          Use the targets and fixes below to reduce size and upload successfully.
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

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Why your PDF becomes too large</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scanned pages saved as high-resolution images</li>
              <li>Color scans instead of grayscale</li>
              <li>Extra blank pages included</li>
              <li>Large screenshots or embedded photos</li>
              <li>Long multi-document bundles in one PDF</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Step-by-step: fastest way to fix it</h2>
            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <ol className="list-decimal pl-6 space-y-2">
                <li>Compress to <b>2MB</b> and try uploading.</li>
                <li>If rejected, compress to <b>1MB</b>.</li>
                <li>If still rejected, compress to <b>500KB</b>.</li>
                <li>If it fails even then, check format/page rules.</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">If your PDF is scanned (best settings)</h2>
            <p className="mt-2 text-gray-700">
              Scans can explode in size. If you can re-scan, these settings help:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Grayscale (instead of color)</li>
              <li>150–300 DPI</li>
              <li>Crop edges and remove blank pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related help</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-failed-on-website"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload failed on website</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Fix timeouts and strict portal rules.
                </p>
              </a>
              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload requirements</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Size, format, and page limits checklist.
                </p>
              </a>
              <a
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF too large to upload</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Quick fixes for strict portals.
                </p>
              </a>
              <a
                href="/reduce-pdf-size-for-online-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Reduce PDF size for online application</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Best targets for forms and portals.
                </p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Start with 2MB. If the website is strict, go to 1MB or 500KB.
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
                <h3 className="font-semibold">What size should I target first?</h3>
                <p className="mt-1 text-gray-700">
                  2MB is a common safe target. If it fails, try 1MB or 500KB.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">What if the website still rejects it?</h3>
                <p className="mt-1 text-gray-700">
                  Check portal rules like page limits, password protection, and acceptable file formats.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="mt-10 rounded-2xl border p-5">
  <h2 className="text-lg font-semibold">Related guides</h2>

  <ul className="mt-4 grid gap-2 text-sm">
    <li>
      <Link className="underline" href="/pdf-upload-requirements">
        PDF upload requirements
      </Link>
    </li>
    <li>
      <Link className="underline" href="/compress-pdf-under-2mb">
        Upload PDF under 2MB
      </Link>
    </li>
    <li>
      <Link className="underline" href="/pdf-upload-failed-on-website">
        PDF upload failed on website
      </Link>
    </li>
  </ul>
</section>
    </main>
  );
}