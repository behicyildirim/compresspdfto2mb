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

      if (!res.ok) throw new Error("Sıkıştırma başarısız");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "compressed.pdf";
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Hata oluştu");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">
      <h1 className="text-3xl font-bold">PDF 2MB Altına Sıkıştır</h1>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="border p-2"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        {loading ? "Sıkıştırılıyor..." : "Sıkıştır"}
      </button>
    </main>
  );
}