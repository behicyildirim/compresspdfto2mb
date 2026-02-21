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
    <main className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">

        {/* Hero */}
        <h1 className="text-4xl font-bold text-gray-900">
          Compress PDF to Under 2MB Online
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Free, fast and secure PDF compression tool. No registration required.
        </p>

        {/* Tool Card */}
        <div className="mt-10 bg-gray-50 p-8 rounded-xl shadow-lg">

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

        {/* Trust Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div>
            🔒 100% Secure Processing
          </div>
          <div>
            ⚡ Fast Compression
          </div>
          <div>
            💰 Completely Free
          </div>
        </div>
{/* Popular Use Cases */}
<div className="mt-12">
  <h2 className="text-xl font-semibold text-gray-900">
    Popular Use Cases
  </h2>

  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <a
      href="/compress-pdf-for-email"
      className="block rounded-lg border bg-white p-4 hover:shadow transition"
    >
      <div className="font-medium text-gray-900">Compress PDF for Email</div>
      <div className="mt-1 text-sm text-gray-600">
        Reduce file size to meet email attachment limits.
      </div>
    </a>

    <a
      href="/compress-pdf-for-job-application"
      className="block rounded-lg border bg-white p-4 hover:shadow transition"
    >
      <div className="font-medium text-gray-900">
        Compress PDF for Job Application
      </div>
      <div className="mt-1 text-sm text-gray-600">
        Make your resume PDF fit common upload limits (1–2MB).
      </div>
    </a>
    <a
  href="/compress-pdf-for-government-forms"
  className="block rounded-lg border bg-white p-4 hover:shadow transition"
>
  <div className="font-medium text-gray-900">
    Compress PDF for Government Forms
  </div>
  <div className="mt-1 text-sm text-gray-600">
    Meet strict 2MB upload limits for official portals.
  </div>
</a>
  </div>
</div>
        {/* How it works */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            How It Works
          </h2>

          <div className="mt-6 space-y-4 text-gray-700">
            <p>1. Upload your PDF file.</p>
            <p>2. Our system compresses it automatically.</p>
            <p>3. Download your optimized file instantly.</p>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 text-left text-gray-600 text-sm leading-relaxed">
          <p>
            CompressPDFto2MB is a free online tool that allows you to reduce
            PDF file size quickly and securely. Whether you need to upload a
            document for email, school, job applications or government forms,
            our tool helps you compress PDF files under 2MB in seconds.
          </p>
        </div>
{/* FAQ */}
<div className="mt-14 text-left">
  <h2 className="text-2xl font-semibold text-gray-900 text-center">
    FAQ
  </h2>

  <div className="mt-6 space-y-6 text-gray-700">
    <div>
      <h3 className="font-semibold text-gray-900">Is this PDF compressor free?</h3>
      <p className="mt-1">
        Yes. You can compress PDFs online for free without creating an account.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">Will my file be stored?</h3>
      <p className="mt-1">
        No. Files are processed for compression and deleted after the request completes.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">Can you always get under 2MB?</h3>
      <p className="mt-1">
        Results depend on your PDF content. Image-heavy PDFs usually compress well, but already-optimized files may not shrink much.
      </p>
    </div>
  </div>
</div>
      </div>
    </main>
  );
}