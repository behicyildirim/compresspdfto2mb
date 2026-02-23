import Link from "next/link";

export const metadata = {
  title: "Canada Immigration PDF Size Limit (2025 Guide) | CP2",
  description:
    "Learn common Canada immigration portal PDF upload limits and how to compress your PDF under 2MB fast and securely.",
};

export default function CanadaImmigrationPdfLimitPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Canada Immigration PDF Size Limit (2025 Guide)
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          If your PDF is too large for IRCC uploads, compress it under 2MB in seconds.
        </p>

        <div className="mt-10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-semibold">
Canada Immigration PDF Size Limit
</h2>
<p>
Canadian immigration portals such as IRCC often require documents to remain
under specific size limits. Many uploads must stay under 2MB to avoid rejection.
If your PDF exceeds the allowed size, the system may display an upload error.
</p>

<h2 className="text-2xl font-semibold mt-8">
Common Upload Problems in IRCC Portal
</h2>
<p>
Applicants frequently face file upload issues when submitting documents
for Express Entry, study permits, work permits, or permanent residence.
Common problems include:
</p>

<ul className="list-disc pl-6 space-y-2">
<li>PDF file exceeding 2MB limit</li>
<li>Scanned documents saved at high resolution</li>
<li>Image-heavy documents with large embedded files</li>
<li>Incorrect file format</li>
</ul>

<h2 className="text-2xl font-semibold mt-8">
How to Reduce PDF Size for Canada Immigration
</h2>
<ol className="list-decimal pl-6 space-y-2">
<li>Upload your PDF to a compression tool.</li>
<li>Select a safe target size (2MB or below).</li>
<li>Download the compressed version.</li>
<li>Re-upload to the IRCC portal.</li>
</ol>

<p>
Reducing image resolution and removing unnecessary blank pages
can significantly decrease file size while preserving readability.
</p>

<h2 className="text-2xl font-semibold mt-8">
Best Practices Before Submitting to IRCC
</h2>

<ul className="list-disc pl-6 space-y-2">
<li>Scan documents in grayscale instead of color</li>
<li>Use 150–300 DPI for clarity without oversizing</li>
<li>Combine multiple pages efficiently</li>
<li>Double-check upload confirmation after submission</li>
</ul>

<div className="mt-10 bg-blue-50 p-6 rounded-lg text-center">
  <a
    href="/compress-pdf-to-2mb"
    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
  >
    Compress PDF to 2MB for IRCC
  </a>
</div>

<div className="mt-14">
  <h2 className="text-2xl font-semibold text-gray-900">
    Frequently Asked Questions
  </h2>

  <div className="mt-6 space-y-6 text-gray-700">

    <div>
      <h3 className="font-semibold text-gray-900">
        What is the maximum file size for IRCC uploads?
      </h3>
      <p className="mt-1">
        Many IRCC portals require files under 2MB.
        Always check your specific application instructions.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Why does IRCC reject my PDF?
      </h3>
      <p className="mt-1">
        Files exceeding size limits or scanned at very high resolution
        often fail during upload.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Is compressing safe for immigration documents?
      </h3>
      <p className="mt-1">
        Yes, as long as text remains readable and document integrity is preserved.
      </p>
    </div>

  </div>
</div>
      </div>
    </main>
  );
}