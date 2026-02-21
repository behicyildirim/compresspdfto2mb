import Link from "next/link";

export const metadata = {
  title: "Compress PDF to 1MB Online Free | CP2",
  description:
    "Compress PDF to 1MB instantly online. Free, secure and no registration required.",
};

export default function CompressPdfTo1MbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Compress PDF to 1MB Online Free
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Reduce your PDF file size to 1MB or smaller in seconds.
        </p>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">
            Compress Your PDF Now
          </h2>

          <Link
            href="/"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to PDF Compressor
          </Link>
        </div>

        <div className="mt-10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            How to compress a PDF to 1MB
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Upload your PDF.</li>
            <li>Wait for automatic compression.</li>
            <li>Download the optimized file.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-10">
            Why reduce PDF to 1MB?
          </h2>
          <p>
            Many email services, online portals, and job applications require documents under 1MB.
            Compressing your file ensures successful uploads.
          </p>
        </div>
      </div>
    </main>
  );
}