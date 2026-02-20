"use client";

import { useRef, useState } from "react";

function formatMB(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

export default function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const pickFile = () => inputRef.current?.click();

  const handleUpload = async () => {
    if (!file) return alert("Lütfen PDF seçin");

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
      alert("Sıkıştırma sırasında hata oluştu.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Compress PDF to Under 2MB
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Upload your PDF and compress it instantly.
        </p>

        {/* Hidden real input */}
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        {/* Nice file picker */}
        <button
          type="button"
          onClick={pickFile}
          className="w-full border-2 border-dashed border-gray-300 hover:border-gray-400 bg-white rounded-lg py-4 px-4 text-gray-700 transition"
        >
          <div className="font-medium">Select PDF</div>
          <div className="text-xs text-gray-500 mt-1">
            {file ? "Dosya değiştir" : "Only .pdf files"}
          </div>
        </button>

        {/* File info */}
        <div className="mt-3 text-sm text-gray-700 min-h-[20px]">
          {file ? (
            <span>
              <b>{file.name}</b> • {formatMB(file.size)} MB
            </span>
          ) : (
            <span className="text-gray-500">No file selected</span>
          )}
        </div>

        {/* Action */}
        <button
          onClick={handleUpload}
          disabled={loading || !file}
          className="w-full mt-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 rounded-lg transition"
        >
          {loading ? "Compressing..." : "Compress"}
        </button>

        <div className="mt-4 text-xs text-gray-500">
          Your file is not stored and is deleted after processing.
        </div>
      </div>
    </main>
  );
}