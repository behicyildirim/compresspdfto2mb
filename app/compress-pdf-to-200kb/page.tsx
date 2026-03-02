import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";
import SizeClusterLinks from "@/app/components/SizeClusterLinks";
import { createCompressSizeMetadata } from "@/app/lib/seo";
export const metadata = createCompressSizeMetadata("200kb");

export default function CompressPdfTo200KbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Compress PDF to 200KB Online Free
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Reduce your PDF to 200KB (or smaller) quickly while keeping it readable.
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
            <h2 className="text-2xl font-semibold">How to compress a PDF to 200KB</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your PDF.</li>
              <li>Wait for automatic compression.</li>
              <li>Download the optimized file.</li>
            </ol>

            <p className="mt-3">
              Need smaller? Try{" "}
              <Link href="/compress-pdf-to-100kb" className="font-semibold text-blue-700 hover:underline">
                100KB
              </Link>
              . Need better quality? Try{" "}
              <Link href="/compress-pdf-to-300kb" className="font-semibold text-blue-700 hover:underline">
                300KB
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why reduce PDF to 200KB?</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Many forms accept 200KB–500KB uploads.</li>
              <li>Faster uploads, fewer failures.</li>
              <li>Good balance for short PDFs.</li>
            </ul>
          </section>
        </div>

        <InternalLinks />
      </div>
       <SizeClusterLinks current="200kb" />
    </main>
  );
}