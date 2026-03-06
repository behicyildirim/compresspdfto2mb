import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Document Upload Size Limit (2025 Guide) | CP2 Tool",
  description:
    "Learn the document upload size limits for visa and immigration portals including USCIS, Canada IRCC, UKVI and Schengen. Compress your PDF to meet portal requirements.",
};

export default function VisaDocumentUploadSizeLimit() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-6">
        Visa Document Upload Size Limits (USCIS, Canada, UK, Schengen)
      </h1>

      <p className="mb-6 text-gray-700">
        Many visa and immigration portals limit the size of uploaded documents.
        If your PDF exceeds the allowed limit, the upload may fail or the portal
        may reject your document. Understanding the typical upload limits helps
        avoid errors during visa applications.
      </p>

      <p className="mb-10 text-gray-700">
        Below are common document upload limits used by major immigration and
        visa portals. Requirements may vary slightly depending on the specific
        application system or embassy.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Common Visa Portal PDF Size Limits
      </h2>

      <table className="w-full border border-gray-200 mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Portal</th>
            <th className="p-3 text-left">Typical PDF Size Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">USCIS</td>
            <td className="p-3">Up to 6MB per document</td>
          </tr>
          <tr className="border-t">
            <td className="p-3">Canada IRCC</td>
            <td className="p-3">Up to 4MB per document</td>
          </tr>
          <tr className="border-t">
            <td className="p-3">UK Visa (UKVI)</td>
            <td className="p-3">Around 5MB per document</td>
          </tr>
          <tr className="border-t">
            <td className="p-3">Schengen Visa Portals</td>
            <td className="p-3">Typically 2MB – 4MB</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-4">
        Why PDF Uploads Fail in Visa Portals
      </h2>

      <p className="mb-6 text-gray-700">
        Visa portals often reject documents that exceed the maximum file size.
        Scanned documents with high resolution, embedded images or multiple
        pages can quickly exceed upload limits. Reducing the PDF size before
        uploading helps avoid errors and delays in the application process.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Reduce Your PDF for Visa Uploads
      </h2>

      <p className="mb-4 text-gray-700">
        If your file exceeds the allowed limit, you can compress the PDF safely
        while keeping the document readable.
      </p>

      <ul className="list-disc ml-6 mb-10 text-blue-700">
        <li>
          <Link href="/pdf-size-limit-for-uscis">
            USCIS PDF upload size limit
          </Link>
        </li>
        <li>
          <Link href="/canada-immigration-pdf-size-limit">
            Canada immigration PDF size limit
          </Link>
        </li>
        <li>
          <Link href="/uk-visa-pdf-size-limit">
            UK visa PDF size limit
          </Link>
        </li>
        <li>
          <Link href="/schengen-visa-pdf-size-limit">
            Schengen visa PDF size limit
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Compress Your PDF Instantly
      </h2>

      <p className="mb-6 text-gray-700">
        If your PDF file is too large to upload, you can quickly reduce its size
        using our free compression tool.
      </p>

      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Compress PDF to Under 2MB
      </Link>

<section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
  <h2 className="text-xl font-semibold text-gray-900">
    Related visa upload limits
  </h2>

  <div className="mt-4 flex flex-wrap gap-3">

    <Link
      href="/immigration-pdf-upload-guide"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Immigration PDF upload guide
    </Link>

    <Link
      href="/pdf-size-limit-for-uscis"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      USCIS PDF size limit
    </Link>

    <Link
      href="/canada-immigration-pdf-size-limit"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Canada immigration PDF size limit
    </Link>

    <Link
      href="/uk-visa-pdf-size-limit"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      UK visa PDF size limit
    </Link>

    <Link
      href="/schengen-visa-pdf-size-limit"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Schengen visa PDF size limit
    </Link>

  </div>
</section>
    </main>
  );
}