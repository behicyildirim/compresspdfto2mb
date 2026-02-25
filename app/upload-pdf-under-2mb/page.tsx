import Link from "next/link";

export const metadata = {
  title: "Upload PDF Under 2MB (Meet File Size Limits)",
  description:
    "Need to upload a PDF under 2MB? Learn how to reduce file size and meet upload limits for websites and applications.",
};

export default function UploadPdfUnder2mbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">

      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Upload PDF Under 2MB
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Many portals require documents under 2MB. Use safe compression targets
          to upload your PDF successfully.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">


          <section>

            <h2 className="text-2xl font-semibold">
              Compress PDF below 2MB
            </h2>

            <p className="mt-2">
              The safest way to meet upload limits is to compress your document
              to 2MB or smaller.
            </p>


            <div className="mt-4 flex flex-wrap gap-3">

              <Link
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress PDF to 2MB
              </Link>


              <Link
                href="/compress-pdf-to-1mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress PDF to 1MB
              </Link>


            </div>

          </section>



          <section>

            <h2 className="text-2xl font-semibold">
              Why portals require files under 2MB
            </h2>

            <ul className="mt-3 list-disc pl-6 space-y-2">

              <li>Faster upload speeds</li>

              <li>Reduced server load</li>

              <li>Standardized document sizes</li>

              <li>Better compatibility</li>

            </ul>

          </section>



          <section>

            <h2 className="text-2xl font-semibold">
              Related upload help
            </h2>


            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">


              <Link
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                PDF upload requirements
              </Link>


              <Link
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                PDF too large to upload
              </Link>


            </div>

          </section>


<section>
  <h2 className="text-2xl font-semibold">Mini FAQ</h2>

  <div className="mt-4 space-y-5 text-gray-700">
    <div>
      <h3 className="font-semibold text-gray-900">
        What is the easiest way to get a PDF under 2MB?
      </h3>
      <p className="mt-1">
        Compressing to 2MB is the fastest approach. If the portal is strict,
        compress to 1MB.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Why is my scanned PDF so large?
      </h3>
      <p className="mt-1">
        Scans are image-heavy. Use grayscale and 150–300 DPI, remove blank pages,
        then compress again.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        What if the website still rejects the file?
      </h3>
      <p className="mt-1">
        Check the portal rules (format, encryption, page limits). If needed,
        try 1MB or 500KB.
      </p>
    </div>
  </div>
</section>

<section>
  <h2 className="text-2xl font-semibold">Related upload guides</h2>

  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      href="/pdf-too-large-for-website-upload"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">Website Upload Fix</h3>
      <p className="text-sm text-gray-600 mt-1">
        Fix “PDF too large” website form errors.
      </p>
    </a>

    <a
      href="/pdf-too-large-to-upload"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">PDF Too Large to Upload</h3>
      <p className="text-sm text-gray-600 mt-1">
        The fastest general fixes for big PDFs.
      </p>
    </a>

    <a
      href="/pdf-upload-failed"
      className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">PDF Upload Failed</h3>
      <p className="text-sm text-gray-600 mt-1">
        Troubleshoot rejected uploads step-by-step.
      </p>
    </a>
  </div>
</section>
          <section className="bg-blue-50 p-6 rounded-lg text-center">

            <h2 className="text-xl font-semibold text-gray-900">
              Compress now
            </h2>


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