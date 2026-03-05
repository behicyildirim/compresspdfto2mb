import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gmail Attachment Size Limit (How to Send Large PDFs) | CP2",
  description:
    "Learn Gmail’s attachment size limit and how to compress PDFs to send successfully without upload errors.",
  alternates: { canonical: "/gmail-attachment-size-limit" },
};

export default function GmailAttachmentSizeLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Gmail Attachment Size Limit</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          If Gmail won’t let you attach a PDF, the file is likely over the limit or too large after encoding.
          Use safe targets below and try again.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { href: "/compress-pdf-to-10mb", label: "Compress to 10MB" },
            { href: "/compress-pdf-to-5mb", label: "Compress to 5MB" },
            { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
          ].map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
            >
              {i.label}
            </a>
          ))}
        </div>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Fastest fix</h2>
            <p className="mt-2 text-gray-700">
              If you’re unsure what size to aim for, start with <b>10MB</b>. If it still fails, go to <b>5MB</b>.
              For strict situations, use <b>2MB</b>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why Gmail rejects attachments</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>The PDF is over the allowed attachment limit</li>
              <li>The file becomes larger during sending/encoding</li>
              <li>Your PDF is image-heavy (scans, screenshots, photos)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related email help</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-file-too-large-for-email"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF file too large for email</h3>
                <p className="text-sm text-gray-600 mt-1">Reduce size and send again.</p>
              </a>

              <a
                href="/pdf-size-limit-for-email"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF size limit for email</h3>
                <p className="text-sm text-gray-600 mt-1">A complete email attachment guide.</p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress and attach again</h2>
            <p className="mt-2 text-gray-700">Pick a safe target size and retry Gmail.</p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}