import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://compresspdfto2mb.com"),
  title: "PDF Upload Requirements (Size, Format, Page Limits) | CP2",
  description:
    "PDF upload requirements: common size limits, supported formats, page limits, and quick fixes to avoid upload errors.",
  alternates: { canonical: "/pdf-upload-requirements" },

  openGraph: {
    title: "PDF Upload Requirements (Size, Format, Page Limits) | CP2",
    description:
      "PDF upload requirements: common size limits, supported formats, page limits, and quick fixes to avoid upload errors.",
    url: "https://compresspdfto2mb.com/pdf-upload-requirements",
    siteName: "CP2 - CompressPDFto2MB",
    images: [
      {
        url: "https://compresspdfto2mb.com/og.png",
        width: 1200,
        height: 630,
        alt: "CP2",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PDF Upload Requirements (Size, Format, Page Limits) | CP2",
    description:
      "PDF upload requirements: common size limits, supported formats, page limits, and quick fixes to avoid upload errors.",
    images: ["https://compresspdfto2mb.com/og.png"],
  },
};

export default function PdfUploadRequirementsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">PDF Upload Requirements</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Most portals reject PDFs because of size limits, format rules, or scan settings.
          Use this checklist to upload successfully.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Common requirements portals enforce</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>File size limit:</strong> often 1–2MB (sometimes 500KB).
              </li>
              <li>
                <strong>Format:</strong> PDF only (no HEIC, DOCX, PNG bundles).
              </li>
              <li>
                <strong>Page limit:</strong> some systems cap pages per upload.
              </li>
              <li>
                <strong>Scan quality rules:</strong> overly high DPI creates huge files.
              </li>
              <li>
                <strong>Security:</strong> encrypted/password PDFs may be rejected.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Fastest fix: compress to a safe target</h2>
            <p className="mt-2">
              If you don’t know the exact portal limit, start with 2MB. If it still fails, try 1MB
              or 500KB.
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
            <h2 className="text-2xl font-semibold">Scan settings that usually work</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Grayscale (or black &amp; white) instead of color</li>
              <li>150–300 DPI (higher often explodes size)</li>
              <li>Remove blank pages before saving</li>
              <li>Export as “PDF” (not images inside a PDF wrapper)</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Need help fixing an upload error?</h2>
            <p className="mt-2 text-gray-700">
              If you’re getting an error message, use the focused guides below.
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <Link
                href="/pdf-upload-failed"
                className="rounded-xl bg-white px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <div className="font-semibold text-blue-700">PDF Upload Failed</div>
                <div className="text-sm text-gray-600 mt-1">Reasons + quick fixes.</div>
              </Link>

              <Link
                href="/pdf-too-large-to-upload"
                className="rounded-xl bg-white px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <div className="font-semibold text-blue-700">PDF Too Large to Upload</div>
                <div className="text-sm text-gray-600 mt-1">Shrink it fast.</div>
              </Link>
            </div>

            <Link
              href="/"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Related guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/upload-pdf-under-2mb", label: "Upload PDF under 2MB" },
                {
                  href: "/reduce-pdf-size-for-online-application",
                  label: "Online application upload tips",
                },
                { href: "/immigration-pdf-upload-guide", label: "Immigration upload guide" },
                { href: "/pdf-size-limit-for-email", label: "Email attachment limits" },
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
      <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
  <h2 className="text-xl font-semibold text-gray-900">
    Related upload help
  </h2>

  <div className="mt-4 flex flex-wrap gap-3">
    <Link
      href="/pdf-upload-failed-fix"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      PDF upload failed fixes
    </Link>

    <Link
      href="/pdf-too-large-to-upload"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      PDF too large to upload
    </Link>

    <Link
      href="/immigration-pdf-upload-guide"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Immigration upload guide
    </Link>

    <Link
      href="/visa-document-upload-size-limit"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Visa document upload limits
    </Link>
  </div>
</section>
    </main>
  );
}