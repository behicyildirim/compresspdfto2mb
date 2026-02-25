import Link from "next/link";

export const metadata = {
  title: "Gmail Attachment Size Limit (PDF Upload Guide)",
  description:
    "Learn the Gmail attachment size limit and how to compress PDFs to send documents without email errors.",
};

export default function GmailAttachmentSizeLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Gmail Attachment Size Limit
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Gmail attachments have strict size limits. Compress your PDF before sending to avoid upload errors.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold">
              What is the Gmail attachment limit?
            </h2>

            <p className="mt-2">
              Gmail allows attachments up to <b>25MB</b>. Files larger than this are automatically converted into Google Drive links.
            </p>

            <p className="mt-2">
              Many recipients prefer smaller files, especially PDFs under 10MB or 5MB.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Recommended PDF sizes for email
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">

              <a
                href="/compress-pdf-to-5mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 5MB
              </a>

              <a
                href="/compress-pdf-to-3mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 3MB
              </a>

              <a
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 2MB
              </a>

            </div>

          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Why email attachments fail
            </h2>

            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Attachment exceeds size limits</li>
              <li>Multiple attachments exceed total size</li>
              <li>Slow upload connection</li>
              <li>Large scanned PDFs</li>
            </ul>

          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Related Email Guides
            </h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <a
                href="/pdf-size-limit-for-email"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">
                  PDF Size Limit for Email
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  General email attachment limits explained.
                </p>

              </a>

              <a
                href="/compress-pdf-for-email"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">
                  Compress PDF for Email
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Reduce file size for sending documents.
                </p>

              </a>

            </div>
<a
  href="/outlook-attachment-size-limit"
  className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
>
  <h3 className="font-semibold text-blue-700">Outlook attachment limit</h3>
  <p className="text-sm text-gray-600 mt-1">
    Outlook sending tips and safe PDF sizes.
  </p>
</a>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">

            <h2 className="text-xl font-semibold text-gray-900">
              Compress PDF for Email
            </h2>

            <p className="mt-2 text-gray-700">
              Use the main tool to reduce PDF size before sending.
            </p>

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
