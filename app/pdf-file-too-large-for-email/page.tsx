import Link from "next/link";

export const metadata = {
  title: "PDF File Too Large for Email? Reduce Size Fast",
  description:
    "PDF file too large for email? Compress your PDF to safe targets and avoid attachment failures in Gmail, Outlook, and other providers.",
};

export default function PdfFileTooLargeForEmailPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">PDF File Too Large for Email?</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Email providers limit attachment size. If your PDF won’t send, reduce the file size
          to a safer target and try again.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
            { href: "/compress-pdf-to-5mb", label: "Compress to 5MB" },
            { href: "/compress-pdf-to-10mb", label: "Compress to 10MB" },
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

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Quick fix</h2>
            <p className="mt-2 text-gray-700">
              If you don’t know the exact limit, try reducing your PDF to <b>10MB</b>, then <b>5MB</b>,
              and if needed <b>2MB</b>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related email limits</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/gmail-attachment-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Gmail attachment size limit</h3>
                <p className="text-sm text-gray-600 mt-1">Safe PDF targets for Gmail attachments.</p>
              </a>

              <a
                href="/outlook-attachment-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Outlook attachment size limit</h3>
                <p className="text-sm text-gray-600 mt-1">What to do when Outlook rejects files.</p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress and send again</h2>
            <p className="mt-2 text-gray-700">Use the tool and pick a safe attachment size.</p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <div className="mt-4">
              <a href="/pdf-size-limit-for-email" className="underline text-blue-700">
                PDF size limit for email (complete guide)
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}