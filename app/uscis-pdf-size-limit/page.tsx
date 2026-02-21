"use client";

import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";

export default function UscisPdfLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          USCIS PDF Size Limit (2025 Guide)
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Learn the official USCIS upload limits and how to reduce your PDF file size under 2MB.
        </p>

        <div className="mt-10 space-y-6 leading-relaxed">

          <h2 className="text-2xl font-semibold">What is the USCIS PDF size limit?</h2>
          <p>
            USCIS online forms and document uploads typically enforce a file size limit of 2MB per PDF document.
            If your document exceeds the limit, the upload may fail.
          </p>

          <h2 className="text-2xl font-semibold">How to reduce PDF size for USCIS upload</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Use an online PDF compression tool.</li>
            <li>Reduce image resolution if the file contains scans.</li>
            <li>Split large documents if necessary.</li>
          </ol>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">
              Compress Your USCIS PDF Under 2MB
            </h3>

            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress PDF Now
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mt-10">Why file size matters</h2>
          <p>
            If your PDF exceeds the USCIS upload limit, your application may not submit successfully.
            Compressing your PDF ensures smooth submission without losing readability.
          </p>

        </div>
        <p className="mt-10 text-sm text-gray-500">
Looking for a different file size? Try compressing your PDF to 100KB, 200KB, 500KB or 2MB depending on your needs.
</p>
         <InternalLinks />
      </div>
    </main>
  );
}