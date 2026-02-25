import Link from "next/link";

export const metadata = {
  title: "Compress PDF for Government Application",
  description:
    "Compress PDF for government applications and meet upload limits like 2MB or 1MB.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-bold text-center">
          Compress PDF for Government Application
        </h1>

        <p className="mt-4 text-center text-gray-600">
          Government portals often require small PDF files.
          Compress your PDF to meet upload limits.
        </p>

        <div className="mt-8 space-y-6">

          <Link
            href="/compress-pdf-to-2mb"
            className="block text-blue-700 underline"
          >
            Compress PDF to 2MB
          </Link>

          <Link
            href="/compress-pdf-to-1mb"
            className="block text-blue-700 underline"
          >
            Compress PDF to 1MB
          </Link>

          <Link
            href="/pdf-upload-requirements"
            className="block text-blue-700 underline"
          >
            PDF upload requirements
          </Link>

        </div>

      </div>
    </main>
  );
}