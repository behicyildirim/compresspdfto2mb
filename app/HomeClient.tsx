// ==========================
// FILE: app/HomeClient.tsx
// ==========================
"use client";

import { useRef, useState } from "react";
import Link from "next/link";

function formatMB(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

export default function HomeClient() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const pickFile = () => inputRef.current?.click();

  const handleUpload = async () => {
    if (!file) return alert("Select a PDF file");

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
    <div className="mx-auto max-w-3xl text-center">
      {/* Hero */}
      <h1 className="text-4xl font-bold text-gray-900">
        Compress PDF to Under 2MB Online
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Free, fast and secure PDF compression tool. No registration required.
      </p>

      {/* ✅ TOOL CARD (Select PDF butonu artık burada, tepede değil) */}
      <div className="mt-8 bg-gray-50 p-8 rounded-xl shadow-lg">
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
          <div className="font-medium text-lg">Select PDF</div>
          <div className="text-sm text-gray-500 mt-1">
            {file ? "Change file" : "Only .pdf files supported"}
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
          Your file is processed securely and deleted after compression.
        </p>
      </div>

      {/* Common fixes */}
      <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Common PDF Upload Problems (Fast Fixes)
        </h2>

        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/pdf-upload-requirements"
            className="text-sm font-semibold text-blue-700 underline"
          >
            PDF upload requirements (size, format, page limits)
          </Link>

          <Link
            href="/pdf-upload-failed"
            className="text-sm font-semibold text-blue-700 underline"
          >
            PDF upload failed on website? Fix it
          </Link>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <p>
            Need a strict target? See{" "}
            <Link
              href="/upload-pdf-under-2mb"
              className="font-semibold text-blue-700 hover:underline"
            >
              reduce PDF under 2MB
            </Link>{" "}
            for fast upload-friendly results.
          </p>

          <p>
            If the portal specifically says “under 2MB”, use{" "}
            <Link
              href="/compress-pdf-under-2mb"
              className="font-semibold text-blue-700 hover:underline"
            >
              compress PDF under 2MB
            </Link>{" "}
            to meet the limit quickly.
          </p>

          <p>
            Having issues? See{" "}
            <Link
              href="/pdf-upload-failed"
              className="font-semibold text-blue-700 hover:underline"
            >
              PDF upload failed fixes
            </Link>{" "}
            or{" "}
            <Link
              href="/pdf-too-large-to-upload"
              className="font-semibold text-blue-700 hover:underline"
            >
              PDF too large to upload solutions
            </Link>
            .
          </p>

          <p>
            Not sure what the portal expects? Read{" "}
            <Link
              href="/pdf-upload-requirements"
              className="font-semibold text-blue-700 hover:underline"
            >
              PDF upload requirements
            </Link>
            .
          </p>

          <p>
            Most rejections happen because of strict file size limits. Start
            with a safe target (2MB), then go smaller (1MB / 500KB) if needed.
          </p>
        </div>

        <section className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Popular upload size limits
          </h2>
<section className="mt-12 text-left">
<h2 className="text-2xl font-semibold text-gray-900 mb-4">
How to Compress a PDF to Under 2MB
</h2>

<p className="text-gray-600 mb-4">
Many websites and online portals restrict PDF uploads to small file sizes.
If your file is too large, you may see errors during upload. Our free tool
helps reduce PDF file size quickly while keeping documents readable.
</p>

<ol className="list-decimal ml-6 text-gray-600 space-y-2">
<li>Select your PDF file</li>
<li>Click the compress button</li>
<li>Download the optimized file instantly</li>
</ol>
</section>
<section className="mt-12 text-left">
<h2 className="text-2xl font-semibold text-gray-900 mb-4">
Why PDF Uploads Fail
</h2>

<p className="text-gray-600">
Many websites reject files that exceed upload limits.
Common reasons include large scanned documents, high resolution images,
or multiple pages combined in one file. Compressing the PDF usually solves
the problem instantly.
</p>
</section>
<section className="mt-12 text-left">
<h2 className="text-2xl font-semibold text-gray-900 mb-4">
Frequently Asked Questions
</h2>

<p className="text-gray-600 mb-2">
<strong>Can I compress a PDF without losing quality?</strong><br/>
Yes. Most PDFs can be optimized by reducing image size while keeping text readable.
</p>

<p className="text-gray-600 mb-2">
<strong>Is this PDF compressor free?</strong><br/>
Yes. You can compress PDF files online without registration.
</p>

<p className="text-gray-600">
<strong>What is the best size for document uploads?</strong><br/>
Many portals accept files between 1MB and 2MB.
</p>
</section>
          <p className="mt-2 text-sm text-gray-600">
            Start with a safe target. If the portal is strict, go smaller.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              href="/compress-pdf-to-2mb"
              className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
            >
              Compress to 2MB
            </Link>

            <Link
              href="/compress-pdf-to-1mb"
              className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
            >
              Compress to 1MB
            </Link>

            <Link
              href="/compress-pdf-to-500kb"
              className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
            >
              Compress to 500KB
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}