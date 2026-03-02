import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";
import { createCompressSizeMetadata } from "@/app/lib/seo";
import SizeClusterLinks from "@/app/components/SizeClusterLinks";

export const metadata = createCompressSizeMetadata("500kb");

export default function CompressPdfTo500KbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Compress PDF to 500KB Online Free
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          A common “strict” limit for many portals. Reduce your PDF to 500KB (or smaller) quickly.
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
            <h2 className="text-2xl font-semibold">How to compress a PDF to 500KB</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your PDF.</li>
              <li>Wait for compression.</li>
              <li>Download your new file.</li>
            </ol>

            <p className="mt-3">
              If your upload system requires a stricter limit, you may need to{" "}
              <Link
                href="/compress-pdf-to-300kb"
                className="font-semibold text-blue-700 hover:underline"
              >
                compress PDF to 300KB
              </Link>
              . If you want better quality and the portal allows it, try{" "}
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
            <h2 className="text-2xl font-semibold">Best scan settings (if your PDF is a scan)</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Grayscale (or black &amp; white)</li>
              <li>150–300 DPI</li>
              <li>Remove blank pages</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Still failing to upload?</h2>
            <p className="mt-2 text-gray-700">
              Use the focused troubleshooting pages:
            </p>
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
        </div>
        <InternalLinks />
      </div>
      <SizeClusterLinks current="500kb" />
    </main>
  );
}