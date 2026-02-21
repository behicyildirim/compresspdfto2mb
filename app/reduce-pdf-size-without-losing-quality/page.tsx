import Link from "next/link";

export const metadata = {
  title: "Reduce PDF Size Without Losing Quality | CP2",
  description:
    "Compress PDF files without losing quality. Reduce file size while keeping text and images clear.",
};

export default function ReducePdfWithoutQualityLossPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Reduce PDF Size Without Losing Quality
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Compress your PDF while keeping text sharp and images readable.
        </p>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">
            Start Compressing Now
          </h2>

          <Link
            href="/"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Compress PDF
          </Link>
        </div>

        <div className="mt-10 space-y-6 leading-relaxed">

          <h2 className="text-2xl font-semibold">
            Is it possible to reduce PDF size without quality loss?
          </h2>

          <p>
            Yes — depending on the content of your PDF. Many PDFs contain
            unnecessary metadata, oversized images, or inefficient encoding.
            Compression tools can optimize these elements without noticeably
            affecting visual quality.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            How PDF compression works
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Removes unnecessary metadata.</li>
            <li>Optimizes image compression levels.</li>
            <li>Re-encodes document structure efficiently.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10">
            When quality might change
          </h2>

          <p>
            If your PDF contains very high-resolution scanned images,
            some compression may slightly reduce image clarity.
            However, most documents remain fully readable after optimization.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Best practice tips
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Use moderate compression for scanned documents.</li>
            <li>Check readability before submitting important files.</li>
            <li>Avoid re-compressing the same PDF multiple times.</li>
          </ul>

        </div>
      </div>
    </main>
  );
}