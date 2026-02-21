import Link from "next/link";

export const metadata = {
  title: "Schengen Visa PDF Size Limit (2025 Guide) | CP2",
  description:
    "Learn Schengen visa document upload limits and how to compress your PDF under 2MB quickly.",
};

export default function SchengenVisaPdfLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Schengen Visa PDF Size Limit (2025 Guide)
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Reduce your Schengen visa documents under common upload limits.
        </p>

        <div className="mt-10 space-y-6 leading-relaxed">

          <h2 className="text-2xl font-semibold">
            What is the Schengen visa upload limit?
          </h2>
          <p>
            Many Schengen visa portals impose file upload limits for supporting documents.
            If your PDF exceeds the allowed size, submission may fail.
            Reducing your document under 2MB is generally recommended.
          </p>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">
              Compress Your Schengen Visa PDF
            </h3>

            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress PDF Now
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mt-10">
            Why file size matters
          </h2>
          <p>
            Oversized files may cause upload errors and delay your visa application.
            Compressing your PDF helps ensure smooth submission.
          </p>

        </div>
      </div>
    </main>
  );
}