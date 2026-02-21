import Link from "next/link";

export const metadata = {
  title: "Compress PDF for WhatsApp | CP2",
  description:
    "Reduce PDF file size to send easily on WhatsApp. Fast and secure online compression.",
};

export default function CompressPdfForWhatsappPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Compress PDF for WhatsApp
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Make your PDF small enough to send via WhatsApp instantly.
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
            Large PDF files may fail to send or take too long to upload.
            Reducing file size ensures smooth sharing without quality loss.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            How to reduce PDF size for WhatsApp
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Select your PDF.</li>
            <li>Compress the file.</li>
            <li>Download and send via WhatsApp.</li>
          </ol>
        </div>

      </div>
    </main>
  );
}