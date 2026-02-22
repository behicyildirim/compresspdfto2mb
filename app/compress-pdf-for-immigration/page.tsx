import Link from "next/link";
import InternalLinks from "../components/InternalLinks";

export const metadata = {
  title: "Compress PDF for Immigration Applications | Free Online Tool",
  description:
    "Compress PDF files for immigration applications. Reduce file size to meet upload limits quickly and securely.",
};

export default function CompressPdfForImmigrationPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Compress PDF for Immigration Applications
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Reduce your PDF file size to meet immigration portal upload limits in seconds.
        </p>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">Compress Your PDF Now</h2>

          <Link
            href="/"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to PDF Compressor
          </Link>
        </div>

        <div className="mt-10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            How to compress a PDF for immigration applications
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Upload your PDF document.</li>
            <li>Wait for automatic compression.</li>
            <li>Download the optimized file and upload it to your portal.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-10">
            Why compress PDFs for immigration portals?
          </h2>
          <p>
            Many immigration systems have strict file size limits. Compressing your PDF helps you
            avoid upload errors while keeping the document readable.
          </p>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Need a specific limit? Try 500KB, 1MB, 2MB, 5MB, or 10MB depending on your portal.
        </p>

        <InternalLinks />
      </div>
    </main>
  );
}