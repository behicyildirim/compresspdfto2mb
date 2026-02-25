import Link from "next/link";

export const metadata = {
  title: "Reduce PDF Under 2MB (Fast & Safe Compression)",
  description:
    "Reduce PDF under 2MB for uploads. Meet portal limits (2MB/1MB) with quick fixes for scanned PDFs and website forms.",
};

export default function ReducePdfUnder2mbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Reduce PDF Under 2MB</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Need your file under 2MB? Use a safe compression target and upload without errors.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Fastest way</h2>
            <p className="mt-2 text-gray-700">
              Compress to 2MB first. If the portal is strict, compress to 1MB.
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
            <h2 className="text-2xl font-semibold">Why PDFs exceed 2MB</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scanned pages saved in color at high DPI</li>
              <li>Large embedded images/screenshots</li>
              <li>Extra blank pages</li>
              <li>Too many pages in a single PDF</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Quick scan settings</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Use grayscale when possible</li>
              <li>Scan at 150–300 DPI</li>
              <li>Remove blank pages</li>
              <li>Compress and re-upload</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related upload guides</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/upload-pdf-under-2mb"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Upload PDF under 2MB</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Best targets and tips to pass portal limits.
                </p>
              </a>

              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Upload Requirements</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Size limits, formats, and portal rules.
                </p>
              </a>

              <a
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF too large to upload</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Fast fixes for oversized PDFs.
                </p>
              </a>

              <a
                href="/pdf-upload-failed"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload failed</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Troubleshoot rejection errors.
                </p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Use the main tool and choose the target size your portal accepts.
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