import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";
import SizeClusterLinks from "@/app/components/SizeClusterLinks";
import { createCompressSizeMetadata } from "@/app/lib/seo";

export const metadata = createCompressSizeMetadata("2mb");

export default function CompressPdfTo2MbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Compress PDF to 2MB Online Free
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Not sure about the upload limit? 2MB is a great safe starting target
          for many portals.
        </p>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">Compress Your PDF Now</h2>
          <Link
            href="/"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to PDF Compressor
          </Link>
        </div>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">
              Fastest fix for upload limits
            </h2>
            <p className="mt-2">
              Start by compressing to 2MB. If the portal still rejects the file
              due to strict limits, you may need to{" "}
              <Link
                href="/compress-pdf-to-1mb"
                className="font-semibold text-blue-700 hover:underline"
              >
                compress PDF to 1MB
              </Link>{" "}
              or smaller.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/compress-pdf-to-1mb"
                className="font-semibold text-blue-700 hover:underline"
              >
                Compress PDF to 1MB →
              </Link>
              <Link
                href="/compress-pdf-to-500kb"
                className="font-semibold text-blue-700 hover:underline"
              >
                Compress PDF to 500KB →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Why 2MB is a good default
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Many uploads accept 2MB as a baseline limit.</li>
              <li>Better readability than ultra-small targets.</li>
              <li>Quick to upload and less likely to timeout.</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">If your upload still fails</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/pdf-upload-failed"
                className="font-semibold text-blue-700 hover:underline"
              >
                PDF upload failed fixes →
              </Link>
              <Link
                href="/pdf-upload-requirements"
                className="font-semibold text-blue-700 hover:underline"
              >
                PDF upload requirements →
              </Link>
            </div>
          </section>
        </div>

        <InternalLinks />
      </div>


      {/* Size cluster cross-links (bottom) */}
      <SizeClusterLinks current="2mb" />
    </main>
  );
}