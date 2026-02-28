import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";

export const metadata = {
  title: "Compress PDF for Government Application (Meet Upload Limits)",
  description:
    "Compress PDF for government applications to meet strict upload limits. Reduce file size without breaking readability.",
};

export default function CompressPdfForGovernmentApplicationPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Compress PDF for Government Application
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Government portals often have strict size limits. Compress your PDF to a safe target and upload smoothly.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Pick a safe target size</h2>
            <p className="mt-2">
              If you don’t know the exact portal limit, start with 2MB. If it fails, try 1MB. For strict systems, try 500KB.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 2MB
              </Link>
              <Link
                href="/compress-pdf-to-1mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 1MB
              </Link>
              <Link
                href="/compress-pdf-to-500kb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 500KB
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why government PDFs get too big</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scanned documents saved as high-resolution images</li>
              <li>Color scans instead of grayscale</li>
              <li>Multiple attachments merged into one oversized PDF</li>
              <li>Extra blank pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Best scan settings before compressing</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Grayscale (or black &amp; white)</li>
              <li>150–300 DPI</li>
              <li>Crop / remove blank pages</li>
              <li>Export as standard PDF</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Need general upload rules?</h2>
            <p className="mt-2 text-gray-700">
              See typical size, format, and page-limit requirements portals enforce.
            </p>
            <Link
              href="/pdf-upload-requirements"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View PDF Upload Requirements
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Related guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/reduce-pdf-size-for-online-application", label: "Online application upload tips" },
                { href: "/pdf-upload-failed", label: "PDF upload failed fixes" },
                { href: "/pdf-too-large-to-upload", label: "PDF too large to upload" },
              ].map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </section>
        </div>

        <InternalLinks />
      </div>
    </main>
  );
}