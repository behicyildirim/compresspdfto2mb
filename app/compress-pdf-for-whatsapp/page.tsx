import InternalLinks from "@/app/components/InternalLinks";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compress PDF for WhatsApp (Send Smaller Files) | CP2",
  description:
    "Compress a PDF for WhatsApp to send faster. Reduce file size while keeping text readable.",
  alternates: { canonical: "/compress-pdf-for-whatsapp" },
};

export default function CompressPdfForWhatsappPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Compress PDF for WhatsApp Online Free
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Make your PDF smaller for quick WhatsApp sharing in seconds.
        </p>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">
            Start Compressing
          </h2>

          <Link
            href="/"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Compress PDF Now
          </Link>
        </div>

        <div className="mt-10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            Why compress PDFs for WhatsApp?
          </h2>
          <p>
            Smaller PDFs upload faster, send quicker, and are easier to share in chats and groups.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            How to compress a PDF for WhatsApp
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Select your PDF.</li>
            <li>Compress the file.</li>
            <li>Download and send via WhatsApp.</li>
          </ol>
        </div>
        <p className="mt-10 text-sm text-gray-500">
Looking for a different file size? Try compressing your PDF to 100KB, 200KB, 500KB or 2MB depending on your needs.
</p>
        <InternalLinks />
      </div>
    </main>
  );
}