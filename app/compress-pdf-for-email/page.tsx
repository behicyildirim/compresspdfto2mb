"use client";
import InternalLinks from "@/app/components/InternalLinks";
import { useRef, useState } from "react";

function formatMB(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

export default function CompressPdfForEmailPage() {
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
          Compress PDF for Email (Under 2MB)
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Need to email a PDF but it’s too large? Upload your file and compress it instantly.
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
            <div className="font-medium text-lg">{file ? "Change file" : "Select PDF"}</div>
            <div className="text-sm text-gray-500 mt-1">Only .pdf files supported</div>
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

        {/* SEO Content */}
        <section className="mt-12 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-900">Why compress a PDF for email?</h2>
          <p className="mt-3">
            Many email providers limit attachment sizes (often around 10–25MB). Large PDFs can fail to send or bounce back.
            Compressing your PDF reduces file size while keeping it readable—perfect for invoices, resumes, forms, and reports.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">How to compress a PDF for email</h2>
          <ol className="mt-3 list-decimal pl-5 space-y-2">
            <li>Click <b>Select PDF</b> and choose your file.</li>
            <li>Press <b>Compress Now</b>.</li>
            <li>Download the compressed PDF and attach it to your email.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Tips</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>If your PDF contains many images, compression will be more effective.</li>
            <li>If your PDF is already optimized, the size may not change much.</li>
            <li>For best results, try exporting scans at a lower DPI before compressing.</li>
          </ul>
        </section>
        <p className="mt-10 text-sm text-gray-500">
Looking for a different file size? Try compressing your PDF to 100KB, 200KB, 500KB or 2MB depending on your needs.
</p>
        <InternalLinks />
      </div>
      <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
  <h2 className="text-xl font-semibold text-gray-900">
    Related email upload guides
  </h2>

  <div className="mt-4 flex flex-wrap gap-3">
    <Link
      href="/pdf-size-limit-for-email"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      PDF size limit for email
    </Link>

    <Link
      href="/gmail-attachment-size-limit"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Gmail attachment size limit
    </Link>

    <Link
      href="/outlook-attachment-size-limit"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Outlook attachment size limit
    </Link>

    <Link
      href="/compress-pdf-to-10mb"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Compress to 10MB
    </Link>

    <Link
      href="/compress-pdf-to-5mb"
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Compress to 5MB
    </Link>
  </div>
</section>
    </main>
  );"use client";

import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";
import { useRef, useState } from "react";

function formatMB(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

export default function CompressPdfForEmailPage() {
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
          Compress PDF for Email (Under 2MB)
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Need to email a PDF but it’s too large? Upload your file and compress it instantly.
        </p>

        {/* Tool Card */}
        <div className="mt-10 rounded-xl bg-gray-50 p-8 text-center shadow-lg">
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
            className="w-full rounded-lg border-2 border-dashed border-gray-300 bg-white px-4 py-6 text-gray-700 transition hover:border-gray-400"
          >
            <div className="text-lg font-medium">{file ? "Change file" : "Select PDF"}</div>
            <div className="mt-1 text-sm text-gray-500">Only .pdf files supported</div>
          </button>

          <div className="mt-4 min-h-[20px] text-sm text-gray-700">
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
            className="mt-6 w-full rounded-lg bg-blue-600 py-4 text-lg font-medium text-white transition hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? "Compressing..." : "Compress Now"}
          </button>

          <p className="mt-4 text-xs text-gray-500">
            Your file is processed securely and deleted after compression.
          </p>
        </div>

        {/* SEO Content */}
        <section className="mt-12 leading-relaxed text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900">Why compress a PDF for email?</h2>
          <p className="mt-3">
            Many email providers limit attachment sizes (often around 10–25MB). Large PDFs can fail
            to send or bounce back. Compressing your PDF reduces file size while keeping it readable—
            perfect for invoices, resumes, forms, and reports.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-gray-900">How to compress a PDF for email</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Click <b>Select PDF</b> and choose your file.</li>
            <li>Press <b>Compress Now</b>.</li>
            <li>Download the compressed PDF and attach it to your email.</li>
          </ol>

          <h2 className="mt-8 text-2xl font-semibold text-gray-900">Tips</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>If your PDF contains many images, compression will be more effective.</li>
            <li>If your PDF is already optimized, the size may not change much.</li>
            <li>For best results, try exporting scans at a lower DPI before compressing.</li>
          </ul>
        </section>

        <p className="mt-10 text-sm text-gray-500">
          Looking for a different file size? Try compressing your PDF to 100KB, 200KB, 500KB or 2MB depending on your needs.
        </p>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Related email upload guides
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/pdf-size-limit-for-email"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 transition hover:bg-blue-50"
            >
              PDF size limit for email
            </Link>

            <Link
              href="/gmail-attachment-size-limit"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 transition hover:bg-blue-50"
            >
              Gmail attachment size limit
            </Link>

            <Link
              href="/outlook-attachment-size-limit"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 transition hover:bg-blue-50"
            >
              Outlook attachment size limit
            </Link>

            <Link
              href="/compress-pdf-to-10mb"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 transition hover:bg-blue-50"
            >
              Compress to 10MB
            </Link>

            <Link
              href="/compress-pdf-to-5mb"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 transition hover:bg-blue-50"
            >
              Compress to 5MB
            </Link>
          </div>
        </section>

        <InternalLinks />
      </div>
    </main>
  );
}
}