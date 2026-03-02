import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";
import { createCompressSizeMetadata } from "@/app/lib/seo";
import SizeClusterLinks from "@/app/components/SizeClusterLinks";

export const metadata = createCompressSizeMetadata("1mb");

export default function CompressPdfTo1MbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Compress PDF to 1MB Online Free</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          1MB is a safe target for many uploads. Reduce your PDF size quickly and keep it readable.
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
            <h2 className="text-2xl font-semibold">How to compress a PDF to 1MB</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your PDF.</li>
              <li>Wait for compression.</li>
              <li>Download the optimized file.</li>
            </ol>

            <p className="mt-3">
              1MB is a safe default for many portals. If your system is stricter, try{" "}
              <Link
                href="/compress-pdf-to-500kb"
                className="font-semibold text-blue-700 hover:underline"
              >
                compress PDF to 500KB
              </Link>{" "}
              or even{" "}
              <Link
                href="/compress-pdf-to-300kb"
                className="font-semibold text-blue-700 hover:underline"
              >
                compress PDF to 300KB
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why reduce PDF to 1MB?</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Many portals cap uploads around 1–2MB.</li>
              <li>Faster uploads and fewer timeouts.</li>
              <li>Good balance between size and readability.</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Related help</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/pdf-upload-requirements" className="font-semibold text-blue-700 hover:underline">
                PDF upload requirements →
              </Link>
              <Link href="/pdf-upload-failed" className="font-semibold text-blue-700 hover:underline">
                PDF upload failed fixes →
              </Link>
            </div>
          </section>
        </div>

        <InternalLinks />
      </div>
      <SizeClusterLinks current="1MB" />
    </main>
  );
}