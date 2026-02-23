import Link from "next/link";

export const metadata = {
  title: "PDF Size Limit for Email (Gmail & Outlook Guide)",
  description:
    "Learn the PDF size limits for Gmail and Outlook attachments and how to reduce PDF file size quickly.",
};

export default function PdfSizeLimitForEmailPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          PDF Size Limit for Email
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Understand Gmail and Outlook attachment limits and how to compress PDFs to fit.
        </p>

        <div className="mt-10 space-y-6 leading-relaxed">

          <h2 className="text-2xl font-semibold">Gmail PDF Size Limit</h2>
          <p>
            Gmail allows attachments up to 25MB. If your PDF exceeds this limit,
            you must compress it or use Google Drive.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Outlook Attachment Limit</h2>
          <p>
            Outlook typically allows attachments up to 20MB. Larger files will
            fail to send unless compressed.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            How to Reduce PDF Size for Email
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Upload your PDF to our free online compressor.</li>
            <li>Select your target size (1MB, 2MB, 5MB, etc.).</li>
            <li>Download and attach the optimized file.</li>
          </ol>

          <div className="mt-10 bg-blue-50 p-6 rounded-lg text-center">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress PDF for Email Now
            </Link>
          </div>
<div className="mt-12">
  <h2 className="text-xl font-semibold text-gray-900">
    Popular Compression Targets
  </h2>

  <div className="mt-4 flex flex-wrap gap-3">
    {[
      { href: "/compress-pdf-to-1mb", label: "1MB" },
      { href: "/compress-pdf-to-2mb", label: "2MB" },
      { href: "/compress-pdf-to-5mb", label: "5MB" },
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
</div>
        </div>
      </div>
    </main>
  );
}