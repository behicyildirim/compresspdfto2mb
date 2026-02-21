import Link from "next/link";

export const metadata = {
  title: "Canada Immigration PDF Size Limit (2025 Guide) | CP2",
  description:
    "Learn common Canada immigration portal PDF upload limits and how to compress your PDF under 2MB fast and securely.",
};

export default function CanadaImmigrationPdfLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Canada Immigration PDF Size Limit (2025 Guide)
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          If your PDF is too large for IRCC uploads, compress it under 2MB in seconds.
        </p>

        <div className="mt-10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            What is the Canada immigration PDF upload limit?
          </h2>
          <p>
            Many Canada immigration portals (IRCC) apply strict file upload limits.
            When your document exceeds the allowed size, the upload can fail.
            Limits can vary depending on the form and portal, but smaller PDFs (often around a few MB)
            are commonly required—so aiming for under 2MB is a safe target.
          </p>

          <h2 className="text-2xl font-semibold">
            How to compress a PDF for IRCC upload
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Open our free PDF compressor.</li>
            <li>Upload your PDF document.</li>
            <li>Download the compressed PDF and upload it to the portal.</li>
          </ol>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">
              Compress Your PDF Under 2MB
            </h3>
            <p className="text-sm text-gray-700">
              Fast, secure, and no registration required.
            </p>

            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress PDF Now
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mt-10">
            Tips to reduce PDF size (without losing readability)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>If your PDF is scanned, reduce scan resolution (DPI) before uploading.</li>
            <li>Remove unnecessary images or pages.</li>
            <li>Export documents as “optimized PDF” if your editor supports it.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Is my file stored?</h3>
              <p className="text-gray-700">
                No. Files are processed for compression and deleted after the request completes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Can you always get under 2MB?</h3>
              <p className="text-gray-700">
                Results depend on the PDF. Image-heavy documents compress well, but already-optimized PDFs may not shrink much.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}