"use client";

import { useMemo, useState } from "react";

function formatBytes(bytes: number) {
  if (!Number.isFinite(bytes)) return "";
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(2)} MB`;
  const kb = bytes / 1024;
  return `${kb.toFixed(0)} KB`;
}

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [isWorking, setIsWorking] = useState(false);
  const [message, setMessage] = useState<string>("");

  const fileInfo = useMemo(() => {
    if (!file) return null;
    return { name: file.name, size: formatBytes(file.size) };
  }, [file]);

  async function onCompress() {
  if (!file || isWorking) return;

  setIsWorking(true);
  setMessage("Compressing…");

  try {
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/compress", {
      method: "POST",
      body: fd,
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      console.error("API error:", res.status, txt);
      throw new Error("Compression failed");
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `compressed_${file.name}`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);

    setMessage("Done ✅ Download started");
  } catch (e) {
    console.error(e);
    setMessage("Compression failed. Try another file.");
  } finally {
    setIsWorking(false);
  }
}


  return (
    <main className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Compress PDF to 2MB
          </h1>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Reduce your PDF file size to 2MB quickly and easily. Perfect for job
            applications, email attachments, and upload limits.
          </p>
        </header>

        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose a PDF file
          </label>

          <div className="flex flex-col gap-4">
            <input
              type="file"
              accept="application/pdf"
              className="w-full"
              onChange={(e) => {
                const f = e.target.files?.[0] ?? null;
                setFile(f);
                setMessage("");
              }}
            />

            {fileInfo && (
              <div className="text-sm text-gray-700 bg-gray-50 border rounded-xl p-3">
                <div className="font-medium truncate">{fileInfo.name}</div>
                <div className="text-gray-500">Size: {fileInfo.size}</div>
              </div>
            )}

            <button
              onClick={onCompress}
              disabled={!file || isWorking}
              className={[
                "w-full py-3 rounded-xl transition font-medium",
                !file || isWorking
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800",
              ].join(" ")}
            >
              {isWorking ? "Compressing…" : "Compress to 2MB"}
            </button>

            {message && (
              <p className="text-sm text-gray-600 text-center">{message}</p>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-6 text-center">
            Tip: If your file is very large or image-heavy, compression may take
            longer.
          </p>
        </div>

        <footer className="text-center text-xs text-gray-400 mt-8">
          compresspdfto2mb.com
        </footer>
      </div>
    </main>
  );
}
