import Link from "next/link";

export const metadata = {
  title: "Reduce PDF to 500KB Online Free | CP2",
  description:
    "Compress PDF to 500KB or smaller. Fast, secure and free PDF optimization.",
};

export default function ReducePdfTo500KbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Reduce PDF to 500KB Online
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Need your PDF under 500KB? Compress it instantly.
        </p>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">
            Compress PDF Now
          </h2>

          <Link
            href="/"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Compressor
          </Link>
        </div>

        <div className="mt-10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            How to compress PDF to 500KB
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Upload your document.</li>
            <li>Wait for compression.</li>
            <li>Download the optimized PDF.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-10">
            Why 500KB matters
          </h2>
          <p>
            Some online portals and email systems enforce strict upload limits.
            Compressing to 500KB helps ensure successful uploads.
          </p>
        </div>

      </div>
    </main>
  );
}