import Link from "next/link";

export const metadata = {
  title: "PDF Size Limit for University Application (Upload Guide)",
  description:
    "PDF size limit for university applications: how to reduce file size and avoid upload errors on admission portals.",
};

export default function PdfSizeLimitForUniversityApplicationPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Size Limit for University Application
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          University portals often reject large PDFs. Use safe size targets and upload successfully.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
            { href: "/compress-pdf-to-1mb", label: "Compress to 1MB" },
            { href: "/compress-pdf-to-500kb", label: "Compress to 500KB" },
          ].map((i) => (
            <a key={i.href} href={i.href}
              className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition">
              {i.label}
            </a>
          ))}
        </div>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Recommended sizes</h2>
            <p className="mt-2 text-gray-700">
              Most university systems accept around 2MB. Some require 1MB or less.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Common upload issues</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Scanned documents with high resolution</li>
              <li>Multiple pages saved as image PDFs</li>
              <li>Portals with strict limits</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress and upload</h2>
            <Link href="/" className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg">
              Go to PDF Compressor
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}