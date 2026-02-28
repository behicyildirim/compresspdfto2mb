import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";

export const metadata = {
  title: "PDF Too Large for Website Upload? Fix It Fast",
  description:
    "PDF too large for website upload? Reduce file size, fix scan settings, and upload successfully in minutes.",
};

export default function PdfTooLargeForWebsiteUploadPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">PDF Too Large for Website Upload?</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Many websites enforce strict upload limits. If your PDF is too big, compress it to a safe size and re-upload.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Fastest fix</h2>
            <p className="mt-2">
              If you don’t know the exact limit, compress to 2MB first. If it still fails, try 1MB or 500KB.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 2MB
              </a>
              <a
                href="/compress-pdf-to-1mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 1MB
              </a>
              <a
                href="/compress-pdf-to-500kb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 500KB
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why website uploads fail</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File size exceeds the website limit</li>
              <li>Scan is image-heavy (high DPI / color pages)</li>
              <li>PDF is corrupted or exported incorrectly</li>
              <li>Timeouts on slower connections</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">If compression isn’t enough</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Rescan in grayscale</li>
              <li>Use 150–300 DPI</li>
              <li>Remove blank pages</li>
              <li>Split the PDF into smaller parts (if the website allows multiple uploads)</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Still getting an error?</h2>
            <p className="mt-2 text-gray-700">
              Use the general upload troubleshooting guide.
            </p>
            <Link
              href="/pdf-upload-failed"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              See “PDF Upload Failed” fixes
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Related guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/pdf-upload-requirements", label: "PDF upload requirements" },
                { href: "/upload-pdf-under-2mb", label: "Upload PDF under 2MB" },
                { href: "/reduce-pdf-size-for-online-application", label: "Online application upload tips" },
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