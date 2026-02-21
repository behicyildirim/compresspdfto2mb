"use client";

import { useRef, useState } from "react";

function formatMB(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

export default function CompressPdfForJobApplication() {
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
          Compress PDF for Job Application
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Reduce your resume or job application PDF size to meet upload limits.
        </p>

        {/* Tool */}
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
              {file ? "Change file" : "Select Resume PDF"}
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
            {loading ? "Compressing..." : "Compress Resume PDF"}
          </button>

          <p className="mt-4 text-xs text-gray-500">
            Secure processing. Files are deleted after compression.
          </p>
        </div>

        {/* SEO Content */}
        <section className="mt-12 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-900">
            Why compress your resume PDF?
          </h2>
          <p className="mt-3">
            Many job portals and company websites limit resume uploads to
            1MB–2MB. If your PDF exceeds the limit, your application may fail.
            Compressing your resume ensures smooth uploads without reducing
            readability.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            How to reduce PDF size for job applications
          </h2>
          <ol className="mt-3 list-decimal pl-5 space-y-2">
            <li>Select your resume or application PDF.</li>
            <li>Click “Compress Resume PDF”.</li>
            <li>Download the optimized file and upload it.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            Pro Tips
          </h2>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>Remove unnecessary images before compressing.</li>
            <li>Use lower DPI for scanned documents.</li>
            <li>Always preview your compressed resume before uploading.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}