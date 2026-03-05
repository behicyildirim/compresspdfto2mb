import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outlook Attachment Size Limit (Send PDFs Successfully) | CP2",
  description:
    "Outlook attachment limits can block large PDFs. Learn common limits and compress your PDF to send without issues.",
  alternates: { canonical: "/outlook-attachment-size-limit" },
};

export default function OutlookAttachmentSizeLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">Outlook Attachment Size Limit</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          If Outlook rejects your PDF attachment, reduce file size to a safer target and try again.
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
              Start with <b>10MB</b>. If it still fails, reduce to <b>5MB</b>. For strict limits, use <b>2MB</b>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Common reasons Outlook fails to send</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Attachment size over the limit</li>
              <li>Image-heavy scans</li>
              <li>Corporate mail policies stricter than default limits</li>
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
                <p className="text-sm text-gray-600 mt-1">Safe compression targets.</p>
              </a>

              <a
                href="/pdf-size-limit-for-email"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF size limit for email</h3>
                <p className="text-sm text-gray-600 mt-1">Complete attachment guide.</p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress and send again</h2>
            <p className="mt-2 text-gray-700">Pick a safe target size and retry Outlook.</p>
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