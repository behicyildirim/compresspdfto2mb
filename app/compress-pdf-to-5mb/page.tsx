import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";

export const metadata = {
  title: "Compress PDF to 5MB Online (Free) | CP2",
  description:
    "Compress PDF to 5MB online quickly. Useful for portals and emails with higher limits while keeping quality readable.",
};

export default function CompressPdfTo5MbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Compress PDF to 5MB Online</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          5MB is a “quality-friendly” target: smaller file size, but usually better readability than aggressive limits.
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
            <Link href="/pdf-size-limit-for-email" className="text-sm font-semibold text-blue-700 underline">
              Email size limits
            </Link>
            <Link href="/pdf-upload-requirements" className="text-sm font-semibold text-blue-700 underline">
              Upload requirements
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Good use cases for 5MB</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>University / job application uploads with higher caps</li>
              <li>PDFs with photos or charts (where 1MB hurts quality)</li>
              <li>Sharing by email when your provider allows larger attachments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Steps</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your PDF.</li>
              <li>Download and double-check your pages.</li>
              <li>If the portal rejects it, drop to 3MB / 2MB / 1MB.</li>
            </ol>

            <div className="mt-4 flex flex-wrap gap-3">
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
              <Link
                href="/compress-pdf-to-10mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Try 10MB
              </Link>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">If you see an “upload failed” error</h2>
            <p className="mt-2 text-gray-700">
              The error may be about file type, encryption, or page limits—not only size.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/pdf-upload-failed" className="text-sm font-semibold text-blue-700 underline">
                Upload failed fixes
              </Link>
              <Link href="/pdf-password-protected-cant-upload" className="text-sm font-semibold text-blue-700 underline">
                Password PDF issue
              </Link>
              <Link href="/pdf-too-large-to-upload" className="text-sm font-semibold text-blue-700 underline">
                Too large to upload
              </Link>
            </div>
          </section>
        </div>

        <InternalLinks />
      </div>
    </main>
  );
}