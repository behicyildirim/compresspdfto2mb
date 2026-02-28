import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";

export const metadata = {
  title: "Compress PDF to 100KB Online (Free) | CP2",
  description:
    "Compress PDF to 100KB online for strict upload limits. Fast steps, scan tips, and quality-safe targets.",
};

export default function CompressPdfTo100KbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Compress PDF to 100KB Online</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Need a tiny PDF for strict portals or old systems? Aim for 100KB when the limit is extremely low.
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
            <Link
              href="/pdf-upload-requirements"
              className="text-sm font-semibold text-blue-700 underline"
            >
              Upload requirements
            </Link>
            <Link
              href="/pdf-upload-failed"
              className="text-sm font-semibold text-blue-700 underline"
            >
              Upload failed fix
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">When 100KB makes sense</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Very strict forms (legacy systems)</li>
              <li>Mobile uploads on slow connections</li>
              <li>Multi-file submissions where each file must be tiny</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How to compress a PDF to 100KB</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Open the compressor and upload your PDF.</li>
              <li>Download the output and check readability.</li>
              <li>If text looks too soft, try a higher target (200KB / 300KB / 500KB).</li>
            </ol>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/compress-pdf-to-200kb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 200KB
              </Link>
              <Link
                href="/compress-pdf-to-300kb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 300KB
              </Link>
              <Link
                href="/compress-pdf-to-500kb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 500KB
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Best scan settings for tiny PDFs</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Grayscale (or black &amp; white)</li>
              <li>150–200 DPI (300 DPI can be too heavy)</li>
              <li>Crop edges and remove blank pages</li>
              <li>Avoid full-color photos inside the PDF</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">If your upload still fails</h2>
            <p className="mt-2 text-gray-700">
              Some portals reject PDFs for reasons beyond size (password protection, corruption, page limits).
              Use these focused fixes:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/pdf-password-protected-cant-upload" className="text-sm font-semibold text-blue-700 underline">
                Password-protected PDF
              </Link>
              <Link href="/pdf-too-large-to-upload" className="text-sm font-semibold text-blue-700 underline">
                Too large to upload
              </Link>
              <Link href="/pdf-upload-failed" className="text-sm font-semibold text-blue-700 underline">
                Upload failed
              </Link>
            </div>
          </section>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Looking for a safer quality target? Most portals accept 500KB–2MB. Start higher when possible.
        </p>

        <InternalLinks />
      </div>
    </main>
  );
}