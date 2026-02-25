import Link from "next/link";

export const metadata = {
  title: "Compress PDF for Government Application (Upload Limits Made Easy)",
  description:
    "Compress PDF for government applications and strict form portals. Use safe targets (2MB, 1MB, 500KB) and scan tips to avoid upload failures.",
};

export default function CompressPdfForGovernmentApplicationPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Compress PDF for Government Application
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Government portals often enforce strict upload rules. If your PDF is rejected,
          compress to a safe size target and follow the checklist below.
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
            <h2 className="text-2xl font-semibold">Best target sizes for strict portals</h2>
            <p className="mt-2 text-gray-700">
              If the portal doesn’t clearly show the limit, this order usually works:
              <b> 2MB → 1MB → 500KB</b>.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>2MB: common safe target</li>
              <li>1MB: strict uploaders</li>
              <li>500KB: very strict government forms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Step-by-step: how to compress for government forms</h2>
            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <ol className="list-decimal pl-6 space-y-2">
                <li>Compress your PDF to 2MB and try uploading.</li>
                <li>If it fails, compress to 1MB and retry.</li>
                <li>If it still fails, compress to 500KB.</li>
                <li>Check upload requirements (page limits, passwords, format).</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Common reasons government portals reject PDFs</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File size over the limit</li>
              <li>Scanned PDFs saved at high DPI (image-heavy)</li>
              <li>Password-protected or encrypted PDFs</li>
              <li>Page limits (too many pages in one file)</li>
              <li>Corrupted export from unreliable converters</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">If your PDF is a scan</h2>
            <p className="mt-2 text-gray-700">
              To keep files small and readable, use:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Grayscale scans</li>
              <li>150–300 DPI</li>
              <li>Remove blank pages before exporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related help</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload requirements</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Size, format, and page limit checklist.
                </p>
              </a>

              <a
                href="/pdf-upload-failed"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload failed</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Common reasons and quick fixes.
                </p>
              </a>

              <a
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF too large to upload</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Fast size reduction targets.
                </p>
              </a>

              <a
                href="/reduce-pdf-size-for-online-application"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Online application PDF help</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Best targets for portals and forms.
                </p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Start with 2MB. If your portal is strict, go smaller.
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
                <h3 className="font-semibold">What’s the safest size for government portals?</h3>
                <p className="mt-1 text-gray-700">
                  Start with 2MB. If uploads fail, 1MB or 500KB usually works on strict systems.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Why does the portal reject a small PDF?</h3>
                <p className="mt-1 text-gray-700">
                  Some portals block password-protected PDFs, enforce page limits, or reject corrupted exports.
                  Re-export as a standard PDF and retry.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}