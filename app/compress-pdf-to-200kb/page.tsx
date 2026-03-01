import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";

export const metadata = {
  title: "Compress PDF to 200KB Online (Free) | CP2",
  description:
    "Compress PDF to 200KB online to meet strict upload limits while keeping text readable. Quick steps + scan tips.",
};

export default function CompressPdfTo200KbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Compress PDF to 200KB Online</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          200KB is a great “strict but readable” target for many portals and email-style uploads.
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
            <Link href="/pdf-upload-failed" className="text-sm font-semibold text-blue-700 underline">
              Upload failed fix
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Quick steps</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your PDF to the compressor.</li>
              <li>Download the output and open it to confirm readability.</li>
              <li>If you still exceed a limit, try 100KB or 300KB based on the portal rules.</li>
            </ol>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/compress-pdf-to-100kb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 100KB
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
            <h2 className="text-2xl font-semibold">Why your PDF won’t shrink enough</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scanned pages saved as high-resolution images</li>
              <li>Color scans instead of grayscale</li>
              <li>Photos/screenshots inside the PDF</li>
              <li>Unnecessary blank pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">If it’s a scan: use these settings next time</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Grayscale</li>
              <li>150–300 DPI</li>
              <li>Crop borders, remove blanks</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Common next steps (portal uploads)</h2>
            <p className="mt-2 text-gray-700">
              If 200KB still fails, the portal may require a different limit (like 500KB / 1MB / 2MB) or rejects the PDF for
              other reasons.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/upload-pdf-under-2mb" className="text-sm font-semibold text-blue-700 underline">
                Upload under 2MB
              </Link>
              <Link href="/compress-pdf-to-1mb" className="text-sm font-semibold text-blue-700 underline">
                Compress to 1MB
              </Link>
              <Link href="/compress-pdf-to-2mb" className="text-sm font-semibold text-blue-700 underline">
                Compress to 2MB
              </Link>
            </div>
          </section>
        </div>

        <InternalLinks />
      </div>
    </main>
  );
}