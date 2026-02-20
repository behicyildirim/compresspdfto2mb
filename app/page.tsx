"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

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
      a.download = "compressed.pdf";
      a.click();

      window.URL.revokeObjectURL(url);
    } catch {
      alert("Sıkıştırma sırasında hata oluştu.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          PDF 2MB Altına Sıkıştır
        </h1>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full mb-4"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          {loading ? "Sıkıştırılıyor..." : "Sıkıştır"}
        </button>
      </div>
    </main>
  );
}