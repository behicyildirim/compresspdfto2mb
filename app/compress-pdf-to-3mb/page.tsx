import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compress PDF to 3MB Online Free | CP2",
  description:
    "Compress PDF to 3MB instantly online. Free, secure and no registration required.",
  alternates: {
    canonical: "/compress-pdf-to-3mb",
  },
};

export default function CompressPdfTo3MbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Compress PDF to 3MB Online</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          3MB is a practical “safe upload” target when you want better quality than 1–2MB but still need a smaller file.
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
            <Link href="/pdf-upload-requirements" className="text-sm font-semibold text-blue-700 underline">
              Upload requirements
            </Link>
            <Link href="/pdf-file-too-large-for-email" className="text-sm font-semibold text-blue-700 underline">
              Email file too large
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">When to choose 3MB</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Applications with medium limits</li>
              <li>Docs with images where 1MB would look too soft</li>
              <li>Sharing by email when you want decent readability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Steps</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your PDF.</li>
              <li>Download the compressed output.</li>
              <li>If the portal is stricter than expected, go down to 2MB or 1MB.</li>
            </ol>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 2MB
              </Link>
              <Link
                href="/compress-pdf-to-1mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 1MB
              </Link>
              <Link
                href="/compress-pdf-to-5mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 5MB
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">If your PDF is still too large</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Remove unnecessary pages</li>
              <li>Convert color scans to grayscale</li>
              <li>Use 150–300 DPI for scanning</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Related guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/reduce-pdf-size-without-losing-quality" className="text-sm font-semibold text-blue-700 underline">
                Reduce without losing quality
              </Link>
              <Link href="/pdf-upload-failed" className="text-sm font-semibold text-blue-700 underline">
                Upload failed fixes
              </Link>
              <Link href="/compress-pdf-for-portal-upload" className="text-sm font-semibold text-blue-700 underline">
                Portal upload tips
              </Link>
            </div>
          </section>
        </div>

        <InternalLinks />
      </div>
    </main>
  );
}