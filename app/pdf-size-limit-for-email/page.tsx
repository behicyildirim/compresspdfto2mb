import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF Size Limit for Email Attachments (Gmail & Outlook) | CP2",
  description:
    "Email attachment limits can block large PDFs. Learn common size limits and compress your PDF to send successfully.",
  alternates: { canonical: "/pdf-size-limit-for-email" },
};

export default function PdfSizeLimitForEmailPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">PDF Size Limit for Email</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Email attachment failures usually come down to size limits and scan-heavy PDFs.
          Use these safe targets and provider-specific guides.
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
            <h2 className="text-2xl font-semibold">Recommended targets</h2>
            <p className="mt-2 text-gray-700">
              Start with <b>10MB</b>. If sending fails, try <b>5MB</b>. For strict situations, use <b>2MB</b>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Provider guides</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/gmail-attachment-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Gmail attachment size limit</h3>
                <p className="text-sm text-gray-600 mt-1">What to do when Gmail rejects PDFs.</p>
              </a>

              <a
                href="/outlook-attachment-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Outlook attachment size limit</h3>
                <p className="text-sm text-gray-600 mt-1">Fix Outlook send failures.</p>
              </a>

              <a
                href="/pdf-file-too-large-for-email"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF file too large for email</h3>
                <p className="text-sm text-gray-600 mt-1">Quick compression targets.</p>
              </a>

              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload requirements</h3>
                <p className="text-sm text-gray-600 mt-1">Format + size checklist.</p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress and send</h2>
            <p className="mt-2 text-gray-700">Choose a safe target and retry your email attachment.</p>
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