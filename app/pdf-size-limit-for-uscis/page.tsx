import Link from "next/link";

export const metadata = {
  title: "USCIS PDF Size Limit (File Upload Guide)",
  description:
    "Learn the USCIS PDF size limit and how to reduce PDF file size to meet immigration portal upload requirements.",
};

export default function UscisPdfSizeLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">USCIS PDF Size Limit</h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Understand USCIS file upload limits and how to compress PDFs for
          immigration forms.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">
              What Is the USCIS PDF Size Limit?
            </h2>
            <p className="mt-2">
              USCIS online portals often require uploaded documents to stay under
              specific size limits. While the exact limit depends on the form and
              system used, many uploads must remain under 2MB. If your PDF exceeds
              the allowed limit, the portal may reject it without a clear
              explanation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Common USCIS Upload Errors</h2>
            <p className="mt-2">
              Applicants frequently encounter upload errors when submitting
              scanned documents, supporting evidence, or immigration forms. The
              most common issues include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File size exceeding the allowed limit</li>
              <li>Scanned PDFs containing high-resolution images</li>
              <li>Multiple pages saved as large image-based PDFs</li>
              <li>Corrupted or improperly exported PDF files</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              How to Reduce PDF Size for USCIS Upload
            </h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Upload your document to a PDF compression tool.</li>
              <li>Select a target size (2MB or lower is generally safe).</li>
              <li>Compress the file while keeping text readable.</li>
              <li>Download and re-upload to the USCIS portal.</li>
            </ol>
            <p className="mt-3">
              Image-heavy scans usually compress well. If your file is already
              optimized, try lowering the scan resolution or splitting the
              document into smaller sections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Best Practices Before Uploading to USCIS
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scan documents in black and white when possible</li>
              <li>Avoid unnecessarily high DPI settings</li>
              <li>Remove blank pages before uploading</li>
              <li>Ensure the file is saved in standard PDF format</li>
            </ul>
            <p className="mt-3">
              Preparing your document properly reduces the chance of upload
              errors and prevents delays in your immigration process.
            </p>
          </section>

          <section className="mt-2 rounded-lg bg-blue-50 p-6 text-center">
            <Link
              href="/compress-pdf-to-2mb"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              Compress PDF to 2MB Now
            </Link>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">
                  What is the safest file size for USCIS uploads?
                </h3>
                <p className="mt-1">
                  Many applicants compress files to under 2MB to avoid upload
                  failures. Always verify the limit for your specific USCIS form.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Why does USCIS reject my PDF file?
                </h3>
                <p className="mt-1">
                  Rejections typically happen when files exceed size limits,
                  contain unsupported formats, or were scanned at very high
                  resolution.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Can I upload multiple smaller PDFs instead?
                </h3>
                <p className="mt-1">
                  Depending on the portal, splitting large documents into smaller
                  files may solve the issue if compression alone is not
                  sufficient.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Related Immigration Guides
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/compress-pdf-for-visa", label: "Visa Applications" },
                {
                  href: "/compress-pdf-for-immigration",
                  label: "Immigration Portals",
                },
                { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
              ].map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 transition hover:bg-blue-50"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}