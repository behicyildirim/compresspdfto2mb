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

        <h1 className="text-4xl font-bold text-center">
          USCIS PDF Size Limit
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Understand USCIS file upload limits and how to compress PDFs for immigration forms.
        </p>

        <div className="mt-10 space-y-6 leading-relaxed">

          <h2 className="text-2xl font-semibold">
            What Is the USCIS PDF Size Limit?
          </h2>
          <p>
            USCIS online forms typically require files under specific size limits.
            Large PDFs may fail during upload. Always check your form instructions,
            but compressing your file before submission helps avoid errors.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            How to Reduce PDF Size for USCIS Upload
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Upload your document to our PDF compressor.</li>
            <li>Select a smaller target size (2MB or below).</li>
            <li>Download the optimized file.</li>
            <li>Upload it to the USCIS portal.</li>
          </ol>

          <div className="mt-10 bg-blue-50 p-6 rounded-lg text-center">
            <Link
              href="/compress-pdf-to-2mb"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress PDF to 2MB
            </Link>
          </div>
<div className="mt-12">
  <h2 className="text-xl font-semibold text-gray-900">
    Related Immigration Guides
  </h2>

  <div className="mt-4 flex flex-wrap gap-3">
    {[
      { href: "/compress-pdf-for-visa", label: "Visa Applications" },
      { href: "/compress-pdf-for-immigration", label: "Immigration Portals" },
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
</div>
        </div>
      </div>
    </main>
  );
}