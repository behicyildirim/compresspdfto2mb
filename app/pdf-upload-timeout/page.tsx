import Link from "next/link";

export const metadata = {
  title: "PDF Upload Timeout? Fix Slow Upload Failures",
  description:
    "PDF upload timeout? Fix slow website and portal uploads by reducing file size, optimizing scans, and avoiding common upload issues.",
};

export default function PdfUploadTimeoutPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">PDF Upload Timeout?</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Uploads fail when files are too large or connections are slow. Reduce PDF size and retry.
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
            <h2 className="text-2xl font-semibold">Why timeouts happen</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Large scanned PDFs take too long to upload</li>
              <li>Slow or unstable connection</li>
              <li>Portal has strict time limits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Fastest fix</h2>
            <p className="mt-2 text-gray-700">
              Compress your PDF to a smaller target and retry the upload.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related help</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-failed-on-website"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload failed on website</h3>
                <p className="text-sm text-gray-600 mt-1">Fix strict website uploader issues.</p>
              </a>
              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload requirements</h3>
                <p className="text-sm text-gray-600 mt-1">Checklist for size and format rules.</p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">Reduce file size to avoid timeouts.</p>
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