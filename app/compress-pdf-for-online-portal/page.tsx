import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";

export const metadata = {
  title: "Compress PDF for Online Portal Upload | Free Online Tool",
  description:
    "Compress PDF files for Online Portal Upload. Reduce size to meet upload limits. Free and secure.",
};

export default function CompressPdfTo1MbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Compress PDF for Online Portal Upload
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Reduce your PDF file size for Immigration Applications and online application portals.
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
            Many visa portals have strict upload limits. Compressing your PDF helps you submit documents without errors.
          </p>
        </div>
        <p className="mt-10 text-sm text-gray-500">
Looking for a different file size? Try compressing your PDF to 100KB, 200KB, 500KB or 2MB depending on your needs.
</p>
        <InternalLinks />
      </div>
    </main>
  );
}