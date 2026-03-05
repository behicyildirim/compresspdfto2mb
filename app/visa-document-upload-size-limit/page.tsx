import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Document Upload Size Limits (USCIS, IRCC, UKVI, Schengen) | CP2",
  description:
    "Learn the document upload size limits for visa and immigration portals including USCIS, IRCC (Canada), UKVI, and Schengen applications. Reduce your PDF to meet portal requirements.",
  alternates: { canonical: "/visa-document-upload-size-limit" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900">
        Visa Document Upload Size Limits
      </h1>

      <p className="mt-4 text-gray-600">
        Many visa and immigration portals reject documents that exceed the
        allowed PDF file size. Below are common document upload limits and
        guides for major immigration systems.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">

        <Link
          href="/pdf-size-limit-for-uscis"
          className="block rounded-xl border p-4 hover:bg-gray-50"
        >
          <h2 className="font-semibold text-blue-700">
            USCIS PDF Size Limit
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            File size limits for USCIS online forms and document uploads.
          </p>
        </Link>

        <Link
          href="/canada-immigration-pdf-size-limit"
          className="block rounded-xl border p-4 hover:bg-gray-50"
        >
          <h2 className="font-semibold text-blue-700">
            Canada IRCC PDF Size Limit
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            IRCC document upload size limits and tips to reduce file size.
          </p>
        </Link>

        <Link
          href="/uk-visa-pdf-size-limit"
          className="block rounded-xl border p-4 hover:bg-gray-50"
        >
          <h2 className="font-semibold text-blue-700">
            UK Visa PDF Upload Limit
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            UKVI document upload limits and recommended PDF sizes.
          </p>
        </Link>

        <Link
          href="/schengen-visa-pdf-size-limit"
          className="block rounded-xl border p-4 hover:bg-gray-50"
        >
          <h2 className="font-semibold text-blue-700">
            Schengen Visa PDF Size Limit
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Document upload limits for Schengen visa applications.
          </p>
        </Link>

      </div>

      <div className="mt-10">
        <Link
          href="/compress-pdf-for-visa"
          className="text-blue-700 font-semibold underline"
        >
          Compress PDF for visa application →
        </Link>
      </div>
    </main>
  );
}