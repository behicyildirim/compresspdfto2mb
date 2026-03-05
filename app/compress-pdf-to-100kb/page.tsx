import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";
import SizeClusterLinks from "@/app/components/SizeClusterLinks";
import { createCompressSizeMetadata } from "@/app/lib/seo";

export const metadata = createCompressSizeMetadata("100kb");

export default function CompressPdfTo100KbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Compress PDF to 100KB Online Free
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Need a strict upload limit? Reduce your PDF to 100KB (or smaller) while
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
              How to compress a PDF to 100KB
            </h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your PDF.</li>
              <li>Wait for automatic compression.</li>
              <li>Download the optimized file.</li>
            </ol>

            <p className="mt-3">
              If 100KB is too strict, try{" "}
              <Link
                href="/compress-pdf-to-200kb"
                className="font-semibold text-blue-700 hover:underline"
              >
                200KB
              </Link>{" "}
              or{" "}
              <Link
                href="/compress-pdf-to-300kb"
                className="font-semibold text-blue-700 hover:underline"
              >
                300KB
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why reduce PDF to 100KB?</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Some portals require ultra-small uploads.</li>
              <li>Uploads are faster on slow connections.</li>
              <li>Less chance of “upload failed” errors.</li>
            </ul>

            {/* ✅ Problem / intent links (internal linking boost) */}
            <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Related help for strict upload rules
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                If you’re aiming for 100KB, the portal is usually strict about
                size, format, or scan settings. These guides help you pass upload
                checks faster:
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/pdf-upload-requirements"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
                >
                  PDF upload requirements →
                </Link>
                <Link
                  href="/immigration-pdf-upload-guide"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
                >
                  Immigration PDF upload guide →
                </Link>
                <Link
                  href="/pdf-too-large-to-upload"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
                >
                  PDF too large to upload fixes →
                </Link>
              </div>
            </div>
          </section>
        </div>

        <InternalLinks />
      </div>

      <SizeClusterLinks current="100kb" />
    </main>
  );
}