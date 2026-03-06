import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password-Protected PDF Can't Upload? Fix It | CP2",
  description:
    "Some portals reject encrypted PDFs. Learn why password-protected PDFs fail and how to upload successfully.",
  alternates: { canonical: "/pdf-password-protected-cant-upload" },
};

export default function PdfPasswordProtectedCantUploadPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Password-Protected PDF Can’t Upload?
        </h1>
<p className="mt-4 text-gray-600">
If your PDF upload fails, it is usually caused by file size limits, password protection,
or portal restrictions. Use the quick fixes below and try compressing your PDF to a safe size
like <Link href="/compress-pdf-to-2mb" className="text-blue-700 underline">2MB</Link> or
<Link href="/compress-pdf-to-1mb" className="text-blue-700 underline ml-1">1MB</Link>.
</p>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Many portals block encrypted or password-protected PDFs. Remove protection (if allowed),
          re-export, and upload again.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
            { href: "/compress-pdf-to-1mb", label: "Compress to 1MB" },
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
            <h2 className="text-2xl font-semibold">Why portals reject protected PDFs</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Encrypted PDFs can’t be scanned by upload validators</li>
              <li>Some systems require plain, standard PDFs only</li>
              <li>Password protection can break automated processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How to fix it</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>If permitted, remove password protection in your PDF viewer/editor.</li>
              <li>Re-export as a standard PDF.</li>
              <li>Compress to a safe target size (2MB or smaller).</li>
              <li>Upload again.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related help</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-upload-requirements"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload requirements</h3>
                <p className="text-sm text-gray-600 mt-1">Rules that often block uploads.</p>
              </a>
              <a
                href="/pdf-upload-failed"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">PDF upload failed</h3>
                <p className="text-sm text-gray-600 mt-1">General upload failure checklist.</p>
              </a>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">Compress now</h2>
            <p className="mt-2 text-gray-700">Use a safe size target and upload again.</p>
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