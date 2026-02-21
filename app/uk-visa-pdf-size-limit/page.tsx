import Link from "next/link";

export const metadata = {
  title: "UK Visa PDF Size Limit (2025 Guide) | CP2",
  description:
    "Learn UK visa document upload limits and how to compress your PDF under 2MB quickly and securely.",
};

export default function UkVisaPdfLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          UK Visa PDF Size Limit (2025 Guide)
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Reduce your PDF under common UK visa upload limits in seconds.
        </p>

        <div className="mt-10 space-y-6 leading-relaxed">

          <h2 className="text-2xl font-semibold">
            What is the UK visa document upload limit?
          </h2>
          <p>
            UK visa application portals (UKVI) often enforce strict file upload limits.
            If your PDF exceeds the allowed size, the upload may fail.
            Many applicants aim to reduce their files to around 2MB to avoid issues.
          </p>

          <h2 className="text-2xl font-semibold">
            How to compress a PDF for UK visa upload
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Open our free PDF compressor.</li>
            <li>Select your visa document PDF.</li>
            <li>Download the compressed file and upload it to the UK visa portal.</li>
          </ol>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">
              Compress Your UK Visa PDF Under 2MB
            </h3>

            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress PDF Now
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mt-10">
            Tips for successful upload
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure scans are clear but not unnecessarily high resolution.</li>
            <li>Remove duplicate pages.</li>
            <li>Always preview the compressed PDF before submission.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10">
            Why compressing helps
          </h2>
          <p>
            File upload errors can delay visa processing. Compressing your PDF ensures smoother submission
            and avoids technical issues during application.
          </p>

        </div>
      </div>
    </main>
  );
}