import Link from "next/link";

export const metadata = {
  title: "Canada Immigration PDF Size Limit (IRCC Upload Guide)",
  description:
    "Learn the Canada immigration PDF size limit and how to reduce PDF file size for IRCC portal uploads.",
};

export default function CanadaImmigrationPdfPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Canada Immigration PDF Size Limit
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Understand IRCC file upload limits and how to compress PDFs for immigration applications.
        </p>

        <div className="mt-10 space-y-6 leading-relaxed">

          <h2 className="text-2xl font-semibold">
            What Is the Canada Immigration PDF Size Limit?
          </h2>
          <p>
            Canadian immigration portals such as IRCC often require documents
            to remain under specific size limits. Many uploads must stay under 2MB
            to avoid rejection. Always verify the limit for your specific application.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            Common IRCC Upload Errors
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>PDF file exceeding 2MB limit</li>
            <li>High-resolution scanned documents</li>
            <li>Image-heavy PDF files</li>
            <li>Incorrect file format</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">
            How to Reduce PDF Size for IRCC Upload
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Upload your PDF to our compression tool.</li>
            <li>Select a safe target size (2MB or lower).</li>
            <li>Download the optimized file.</li>
            <li>Re-upload to the IRCC portal.</li>
          </ol>

          <div className="mt-10 bg-blue-50 p-6 rounded-lg text-center">
            <Link
              href="/compress-pdf-to-2mb"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress PDF to 2MB for IRCC
            </Link>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6 text-gray-700">

              <div>
                <h3 className="font-semibold text-gray-900">
                  What is the maximum file size for IRCC uploads?
                </h3>
                <p className="mt-1">
                  Many IRCC portals require files under 2MB.
                  Always check the instructions for your specific application.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Why does IRCC reject my PDF?
                </h3>
                <p className="mt-1">
                  Files exceeding the size limit or scanned at very high resolution
                  often fail during upload.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Is compressing safe for immigration documents?
                </h3>
                <p className="mt-1">
                  Yes, as long as the text remains readable and document clarity is preserved.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}