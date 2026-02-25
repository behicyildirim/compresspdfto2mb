import Link from "next/link";

export const metadata = {
  title: "Outlook Attachment Size Limit (PDF Email Guide)",
  description:
    "Outlook attachment size limit explained. Compress PDFs to send documents without email errors and failed attachments.",
};

export default function OutlookAttachmentSizeLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Outlook Attachment Size Limit
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Outlook email attachments can fail because of size limits or multiple files.
          If your PDF won’t send, compress it to a safer size first.
        </p>

        <div className="mt-10 space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">What is the Outlook attachment limit?</h2>
            <p className="mt-2 text-gray-700">
              Outlook attachment limits vary by account type and environment.
              If you’re not sure, the safest approach is to keep PDFs under 10MB
              (and often 5MB is even smoother for recipients).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Recommended PDF sizes for email</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/compress-pdf-to-10mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 10MB
              </a>
              <a
                href="/compress-pdf-to-5mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 5MB
              </a>
              <a
                href="/compress-pdf-to-2mb"
                className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                Compress to 2MB
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Tip: If your PDF is scanned, grayscale + 150–300 DPI usually reduces size a lot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Why attachments fail</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>The PDF is over the limit</li>
              <li>Multiple attachments exceed the total size</li>
              <li>Slow connection causes timeouts</li>
              <li>Scanned PDFs are image-heavy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related email guides</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-size-limit-for-email"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF Size Limit for Email</h3>
                <p className="text-sm text-gray-600 mt-1">
                  General attachment limits and best target sizes.
                </p>
              </a>

              <a
                href="/gmail-attachment-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Gmail Attachment Limit</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Gmail sending tips and recommended PDF sizes.
                </p>
              </a>

              <a
                href="/compress-pdf-for-email"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Compress PDF for Email</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce file size before sending.
                </p>
              </a>
            </div>
            <a
  href="/compress-pdf-for-email"
  className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
>
  <h3 className="font-semibold text-blue-700">Compress PDF for email</h3>
  <p className="text-sm text-gray-600 mt-1">
    Reduce file size before attaching.
  </p>
</a>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">
              Use the main tool to reduce PDF size and attach without errors.
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