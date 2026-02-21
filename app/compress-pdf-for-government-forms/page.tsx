"use client";

import { useRef, useState } from "react";

function formatMB(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

export default function CompressPdfForGovernmentFormsPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const pickFile = () => inputRef.current?.click();

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF file.");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await fetch("/api/compress", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `compressed_${file.name || "file"}.pdf`;
      a.click();

      window.URL.revokeObjectURL(url);
    } catch {
      alert("Compression failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Compress PDF for Government Forms (Under 2MB)
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Reduce PDF size for online applications, portals, visas and official forms.
        </p>

        {/* Tool Card */}
        <div className="mt-10 bg-gray-50 p-8 rounded-xl shadow-lg text-center">
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />

          <button
            type="button"
            onClick={pickFile}
            className="w-full border-2 border-dashed border-gray-300 hover:border-gray-400 bg-white rounded-lg py-6 px-4 text-gray-700 transition"
          >
            <div className="font-medium text-lg">
              {file ? "Change file" : "Select PDF"}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Only .pdf files supported
            </div>
          </button>

          <div className="mt-4 text-sm text-gray-700 min-h-[20px]">
            {file ? (
              <span>
                <b>{file.name}</b> • {formatMB(file.size)} MB
              </span>
            ) : (
              <span className="text-gray-500">No file selected</span>
            )}
          </div>

          <button
            onClick={handleUpload}
            disabled={loading || !file}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-4 rounded-lg text-lg font-medium transition"
          >
            {loading ? "Compressing..." : "Compress Now"}
          </button>

          <p className="mt-4 text-xs text-gray-500">
            Secure processing. Files are deleted after compression.
          </p>
        </div>

        {/* SEO Content */}
        <section className="mt-12 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-900">
            Why compress PDFs for government portals?
          </h2>
          <p className="mt-3">
            Many official websites and online portals enforce strict upload limits such as 2MB per document.
            If your PDF is too large, the upload may fail. This tool helps reduce PDF size so you can submit forms
            successfully.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            How to compress a PDF under 2MB
          </h2>
          <ol className="mt-3 list-decimal pl-5 space-y-2">
            <li>Select your PDF form or document.</li>
            <li>Click “Compress Now”.</li>
            <li>Download the compressed file and upload it to the portal.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Tips</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>Scanned PDFs are often huge — reducing scan DPI can help.</li>
            <li>Images inside the PDF affect size the most.</li>
            <li>Always double-check readability before submitting.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}