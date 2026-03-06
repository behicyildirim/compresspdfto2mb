import Link from "next/link";

export const metadata = {
  title: "Compress PDF for Online Application | Reduce File Size for Upload",
  description:
    "Compress PDF for online applications. Reduce file size to meet portal upload limits such as 2MB, 1MB or 500KB quickly.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">

      <h1 className="text-3xl font-bold text-gray-900">
        Compress PDF for Online Application
      </h1>

      <p className="mt-4 text-gray-600">
        Many online applications require documents to be uploaded under strict
        file size limits. If your PDF is too large, the portal may reject the
        upload. Compressing the file ensures your application documents can be
        submitted without errors.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-gray-900">
        Common online application file limits
      </h2>

      <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
        <li>2MB maximum upload size</li>
        <li>1MB document limit</li>
        <li>500KB strict upload limits</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-gray-900">
        How to compress a PDF for an online application
      </h2>

      <ol className="mt-4 list-decimal pl-6 text-gray-600 space-y-2">
        <li>Select your PDF file</li>
        <li>Compress the document</li>
        <li>Download the optimized file</li>
        <li>Upload it to the application portal</li>
      </ol>

      <Link
        href="/compress-pdf-to-2mb"
        className="inline-block mt-6 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
      >
        Compress PDF to under 2MB
      </Link>

      <h2 className="mt-10 text-xl font-semibold text-gray-900">
        Related upload guides
      </h2>

      <div className="mt-4 flex flex-wrap gap-3">

        <Link
          href="/pdf-upload-failed-fix"
          className="text-blue-700 underline"
        >
          PDF upload failed fixes
        </Link>

        <Link
          href="/pdf-too-large-to-upload"
          className="text-blue-700 underline"
        >
          PDF too large to upload
        </Link>

        <Link
          href="/pdf-upload-requirements"
          className="text-blue-700 underline"
        >
          PDF upload requirements
        </Link>

      </div>

    </main>
  );
}