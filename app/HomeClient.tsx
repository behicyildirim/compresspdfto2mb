"use client";

import { useRef, useState } from "react";

export default function HomeClient() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const pickFile = () => inputRef.current?.click();

  return (
    <div className="mt-10 text-center">
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        hidden
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={pickFile}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        Select PDF
      </button>

      {file && (
        <div className="mt-4">
          <p>{file.name}</p>

          <button
            className="mt-3 rounded-lg bg-green-600 px-6 py-3 text-white"
          >
            Compress PDF
          </button>
        </div>
      )}
    </div>
  );
}