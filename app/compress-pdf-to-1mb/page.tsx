import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";

export const metadata = {
  title: "Compress PDF to 1MB Online Free | CP2",
  description:
    "Compress PDF to 1MB instantly online. Free, secure and no registration required.",
};

export default function CompressPdfTo1MbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Compress PDF to 1MB Online Free
        </h1>
        <div className="mt-4 text-center">
  <p className="text-gray-600 text-sm">
    Need to upload a PDF under strict limits? Start here and compress your file to the exact size required.
  </p>

  <div className="mt-4 flex flex-wrap justify-center gap-3">
    <Link href="/pdf-upload-requirements" className="text-blue-700 font-semibold hover:underline text-sm">
      Upload requirements →
    </Link>
    <Link href="/pdf-upload-failed-on-website" className="text-blue-700 font-semibold hover:underline text-sm">
      Upload failed fix →
    </Link>
    <AdSlot label="Ad Area (Top)" />
  </div>
</div>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Reduce your PDF file size to 1MB or smaller in seconds.
        </p>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">
            Compress Your PDF Now
          </h2>

          <Link
            href="/"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to PDF Compressor
          </Link>
        </div>
<AdSlot label="Ad Area (Middle)" />
        <div className="mt-10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            How to compress a PDF to 1MB
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Upload your PDF.</li>
            <li>Wait for automatic compression.</li>
            <li>Download the optimized file.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-10">
            Why reduce PDF to 1MB?
          </h2>
          <p>
            Many email services, online portals, and job applications require documents under 1MB.
            Compressing your file ensures successful uploads.
          </p>
        </div>
        <p className="mt-10 text-sm text-gray-500">
Looking for a different file size? Try compressing your PDF to 100KB, 200KB, 500KB or 2MB depending on your needs.
</p>
        <InternalLinks />
      </div>
      <section className="mt-10 rounded-2xl border p-5 text-center">
  <h2 className="text-lg font-semibold">
    Why do you need this?
  </h2>

  <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
    <Link href="/compress-pdf-for-visa" className="text-blue-700 hover:underline">
      Visa application
    </Link>
    <Link href="/pdf-size-limit-for-job-application" className="text-blue-700 hover:underline">
      Job application
    </Link>
    <Link href="/pdf-size-limit-for-university-application" className="text-blue-700 hover:underline">
      University application
    </Link>
    <Link href="/pdf-size-limit-for-email" className="text-blue-700 hover:underline">
      Email attachment
    </Link>
  </div>
</section>
<AdSlot label="Ad Area (Bottom)" />
    </main>
  );
}