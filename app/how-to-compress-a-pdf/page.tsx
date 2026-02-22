import Link from "next/link";

export const metadata = {
  title: "How to Compress a PDF File (Step-by-Step Guide)",
  description:
    "Learn how to compress a PDF file step-by-step without losing quality. Free online methods explained.",
};

export default function HowToCompressPdfPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          How to Compress a PDF File
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          A step-by-step guide to reducing PDF file size without losing quality.
        </p>

        <div className="mt-10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-semibold">Why Compress a PDF?</h2>
          <p>
            PDF files are often too large for email attachments, job applications,
            immigration portals, and government uploads. Compressing a PDF helps
            you meet strict file size limits.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Step 1: Upload Your PDF</h2>
          <p>Upload your document securely using our free online PDF compressor.</p>

          <h2 className="text-2xl font-semibold mt-8">Step 2: Automatic Compression</h2>
          <p>
            The tool reduces file size while keeping text readable and preserving
            quality as much as possible.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Step 3: Download Your File</h2>
          <p>
            Download the optimized file and upload it to your required platform.
          </p>

          <div className="mt-10 bg-blue-50 p-6 rounded-lg text-center">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Compress Your PDF Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}