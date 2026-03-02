import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";
import { createCompressSizeMetadata } from "@/app/lib/seo";
import SizeClusterLinks from "@/app/components/SizeClusterLinks";

export const metadata = createCompressSizeMetadata("300kb");

export default function CompressPdfTo300KbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Compress PDF to 300KB Online Free
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Need a strict upload limit? Reduce your PDF to 300KB (or smaller) while
          keeping it readable.
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

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">
              How to compress a PDF to 300KB
            </h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your PDF.</li>
              <li>Wait for automatic compression.</li>
              <li>Download the optimized file.</li>
            </ol>

            <p className="mt-3">
              If 300KB is too strict, try{" "}
              <Link
                href="/compress-pdf-to-500kb"
                className="font-semibold text-blue-700 hover:underline"
              >
                compress PDF to 500KB
              </Link>{" "}
              or for better quality use{" "}
              <Link
                href="/compress-pdf-to-1mb"
                className="font-semibold text-blue-700 hover:underline"
              >
                compress PDF to 1MB
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why reduce PDF to 300KB?</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Some portals accept only 300KB–500KB uploads.</li>
              <li>Smaller PDFs upload faster on slow connections.</li>
              <li>Less risk of timeouts and “upload failed” errors.</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">
              Common reasons 300KB uploads fail
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scans saved in color with high DPI (too large).</li>
              <li>Too many pages in a single file.</li>
              <li>Blank pages not removed.</li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/pdf-upload-failed"
                className="font-semibold text-blue-700 hover:underline"
              >
                PDF upload failed fixes →
              </Link>
              <Link
                href="/pdf-upload-requirements"
                className="font-semibold text-blue-700 hover:underline"
              >
                PDF upload requirements →
              </Link>
            </div>
          </section>

          <p className="text-sm text-gray-500">
            Looking for a different size? Try{" "}
            <Link href="/compress-pdf-to-100kb" className="underline">
              100KB
            </Link>
            ,{" "}
            <Link href="/compress-pdf-to-200kb" className="underline">
              200KB
            </Link>
            ,{" "}
            <Link href="/compress-pdf-to-500kb" className="underline">
              500KB
            </Link>{" "}
            or{" "}
            <Link href="/compress-pdf-to-2mb" className="underline">
              2MB
            </Link>
            .
          </p>
        </div>
        <InternalLinks />
      </div>
      <SizeClusterLinks current="300kb" />
    </main>
  );
}