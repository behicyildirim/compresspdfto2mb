import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/compress-pdf-to-10mb" },
};

export default function CompressPdfTo10MbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Compress PDF to 10MB Online</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Need to keep quality high but still reduce size? 10MB is a gentle target for image-heavy PDFs.
        </p>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">Compress Your PDF Now</h2>
          <Link
            href="/"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to PDF Compressor
          </Link>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/how-to-compress-a-pdf" className="text-sm font-semibold text-blue-700 underline">
              How it works
            </Link>
            <Link href="/pdf-size-limit-for-email" className="text-sm font-semibold text-blue-700 underline">
              Email limits
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Best for</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Large scanned documents you don’t want to over-compress</li>
              <li>PDFs with photos, charts, or design-heavy pages</li>
              <li>Portals that allow bigger files but still have a cap</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Steps</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your PDF in the compressor.</li>
              <li>Download the result and verify text clarity.</li>
              <li>If the portal is stricter, step down to 5MB / 3MB / 2MB.</li>
            </ol>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/compress-pdf-to-5mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 5MB
              </Link>
              <Link
                href="/compress-pdf-to-3mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 3MB
              </Link>
              <Link
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 2MB
              </Link>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Related guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/compress-pdf-for-university-application" className="text-sm font-semibold text-blue-700 underline">
                University application uploads
              </Link>
              <Link href="/compress-pdf-for-visa" className="text-sm font-semibold text-blue-700 underline">
                Visa uploads
              </Link>
              <Link href="/reduce-pdf-size-without-losing-quality" className="text-sm font-semibold text-blue-700 underline">
                Reduce without losing quality
              </Link>
            </div>
          </section>
        </div>

        <InternalLinks />
      </div>
    </main>
  );
}