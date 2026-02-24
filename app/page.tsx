"use client";

import { useRef, useState } from "react";
import Link from "next/link";

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
<section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6">
  <h2 className="text-xl font-semibold text-gray-900">
    Common PDF upload problems (and quick fixes)
  </h2>
  <p className="mt-3 text-sm text-gray-600">
  Having issues? See{" "}
  <Link href="/pdf-upload-failed" className="font-semibold text-blue-700 hover:underline">
    PDF upload failed fixes
  </Link>{" "}
  or{" "}
  <Link href="/pdf-too-large-to-upload" className="font-semibold text-blue-700 hover:underline">
    PDF too large to upload solutions
  </Link>
  .
</p>
  <p className="mt-2 text-sm text-gray-600">
    Most rejections happen because of strict file size limits. Start with a safe target (2MB),
    then go smaller (1MB / 500KB) if needed.
  </p>

  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Link
      href="/pdf-too-large-to-upload"
      className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">PDF too large to upload</h3>
      <p className="mt-1 text-sm text-gray-600">
        Fix size-limit errors fast and upload successfully.
      </p>
    </Link>

    <Link
      href="/pdf-upload-failed"
      className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">PDF upload failed</h3>
      <p className="mt-1 text-sm text-gray-600">
        A checklist for the most common portal rejection reasons.
      </p>
    </Link>

    <Link
      href="/immigration-pdf-upload-guide"
      className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">Immigration & visa upload guide</h3>
      <p className="mt-1 text-sm text-gray-600">
        USCIS / IRCC / UKVI style limits and what size to choose.
      </p>
    </Link>

    <Link
      href="/reduce-pdf-size-for-online-application"
      className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      <h3 className="font-semibold text-blue-700">Online application upload tips</h3>
      <p className="mt-3 text-sm text-gray-600">
  Having issues? See{" "}
  <Link href="/pdf-upload-failed" className="font-semibold text-blue-700 hover:underline">
    PDF upload failed fixes
  </Link>{" "}
  or{" "}
  <Link href="/pdf-too-large-to-upload" className="font-semibold text-blue-700 hover:underline">
    PDF too large to upload solutions
  </Link>
  .
</p>
      <p className="mt-1 text-sm text-gray-600">
        Target sizes for portals, universities, jobs, and forms.
      </p>
    </Link>
  </div>

  <div className="mt-5 flex flex-wrap gap-3">
    <Link
      href="/compress-pdf-to-2mb"
      className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
    >
      Compress to 2MB
    </Link>
    <Link
      href="/compress-pdf-to-1mb"
      className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black transition"
    >
      Compress to 1MB
    </Link>
    <Link
      href="/compress-pdf-to-500kb"
      className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black transition"
    >
      Compress to 500KB
    </Link>
  </div>
</section>
        <p className="mt-4 text-lg text-gray-600">
          Free, fast and secure PDF compression tool. No registration required.
        </p>
       <p className="text-xs text-gray-500 mb-6 tracking-wide">
  Trusted worldwide for fast, secure PDF compression.
</p>
<p className="mt-3 text-sm opacity-80">
  Need upload rules for visa/immigration portals?{" "}
  <Link href="/immigration-pdf-upload-guide" className="underline">
    Read the immigration PDF upload guide
  </Link>
  .{" "}
  Applying online and your file is too big?{" "}
  <Link href="/reduce-pdf-size-for-online-application" className="underline">
    Reduce PDF size for online applications
  </Link>
  .
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
  href="/uscis-pdf-size-limit"
  className="block rounded-lg border bg-white p-4 hover:shadow transition"
>
  <div className="font-medium text-gray-900">
    USCIS PDF Size Limit
  </div>
  <div className="mt-1 text-sm text-gray-600">
    Learn how to reduce your PDF under the 2MB USCIS upload limit.
  </div>
</a>
<a
  href="/canada-immigration-pdf-size-limit"
  className="block rounded-lg border bg-white p-4 hover:shadow transition"
>
  <div className="font-medium text-gray-900">
    Canada Immigration PDF Size Limit
  </div>
  <div className="mt-1 text-sm text-gray-600">
    Compress PDFs under 2MB for IRCC uploads and immigration portals.
  </div>
</a>
<a href="/compress-pdf-to-1mb" className="block rounded-lg border bg-white p-4 hover:shadow transition">
  <div className="font-medium text-gray-900">
    Compress PDF to 1MB
  </div>
  <div className="mt-1 text-sm text-gray-600">
    Reduce file size to 1MB instantly.
  </div>
</a>
<a
  href="/reduce-pdf-size-without-losing-quality"
  className="block rounded-lg border bg-white p-4 hover:shadow transition"
>
  <div className="font-medium text-gray-900">
    Reduce PDF Size Without Losing Quality
  </div>
  <div className="mt-1 text-sm text-gray-600">
    Compress files while keeping text and images clear.
  </div>
</a>
<a href="/schengen-visa-pdf-size-limit" className="block rounded-lg border bg-white p-4 hover:shadow transition">
  <div className="font-medium text-gray-900">
    Schengen Visa PDF Size Limit
  </div>
  <div className="mt-1 text-sm text-gray-600">
    Meet common Schengen upload requirements.
  </div>
</a>
<a href="/compress-pdf-for-whatsapp" className="block rounded-lg border bg-white p-4 hover:shadow transition">
  <div className="font-medium text-gray-900">
    Compress PDF for WhatsApp
  </div>
  <div className="mt-1 text-sm text-gray-600">
    Send PDFs easily via WhatsApp.
  </div>
</a>

<a href="/compress-pdf-to-500kb" className="block rounded-lg border bg-white p-4 hover:shadow transition">
  <div className="font-medium text-gray-900">
    Reduce PDF to 500KB
  </div>
  <div className="mt-1 text-sm text-gray-600">
    Meet strict upload limits.
  </div>
</a>
<a
  href="/uk-visa-pdf-size-limit"
  className="block rounded-lg border bg-white p-4 hover:shadow transition"
>
  <div className="font-medium text-gray-900">
    UK Visa PDF Size Limit
  </div>
  <div className="mt-1 text-sm text-gray-600">
    Reduce PDF size for UKVI document uploads.
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
{/* AD SLOT 1: below tool */}
<div className="mt-10 mx-auto max-w-3xl">
  <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-400">
    Advertisement Area
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
            <p className="mt-4 text-sm text-gray-600 text-center">
  Want a quick walkthrough? Read our{" "}
  <a href="/how-to-compress-a-pdf" className="text-blue-700 hover:underline">
    step-by-step PDF compression guide
  </a>
  .
</p>
          </div>
        </div>
        
{/* AD SLOT 2: between how-it-works and seo */}
<div className="mt-10 mx-auto max-w-3xl">
  <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-400">
    Advertisement Area
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
          <p className="mt-4 text-sm text-gray-600 text-center">
  Having trouble uploading a PDF?{" "}
  <a href="/pdf-upload-failed" className="text-blue-700 hover:underline">
    See common upload errors and fixes
  </a>
  .
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
      <section className="mt-10 mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 text-center">
  <h2 className="text-lg font-semibold text-gray-900">
    Get notified when Premium launches
  </h2>
  <p className="mt-2 text-sm text-gray-600">
    Unlimited compressions, batch uploads, faster processing, and no ads.
  </p>

  <div className="mt-4 flex justify-center">
  <a
    href="https://forms.gle/bRp16FM6pho8hPAB7"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
  >
    Join the Premium Waitlist
  </a>
</div>

  <p className="mt-2 text-xs text-gray-500">
    No spam. You can unsubscribe anytime.
  </p>
</section>
 <section className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-6">
  <div className="mx-auto max-w-3xl">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
      Popular PDF Compression Sizes
    </h2>
    <p className="mt-2 text-sm md:text-base text-gray-600 text-center">
      Choose a target size and get your PDF ready for uploads in seconds.
    </p>

    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
      {[
        { href: "/compress-pdf-to-100kb", label: "100KB" },
        { href: "/compress-pdf-to-200kb", label: "200KB" },
        { href: "/compress-pdf-to-300kb", label: "300KB" },
        { href: "/compress-pdf-to-500kb", label: "500KB" },
        { href: "/compress-pdf-to-1mb", label: "1MB" },
        { href: "/compress-pdf-to-2mb", label: "2MB" },
        { href: "/compress-pdf-to-3mb", label: "3MB" },
        { href: "/compress-pdf-to-5mb", label: "5MB" },
        { href: "/compress-pdf-to-10mb", label: "10MB" },
      ].map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-xl bg-white px-4 py-3 text-center font-semibold text-blue-700 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 hover:ring-blue-200 transition"
        >
          {item.label}
        </a>
      ))}
    </div>
  </div>
</section>
<section className="mt-16 mx-auto max-w-3xl">
  <h2 className="text-xl font-semibold text-gray-900">
    Free Online PDF Compressor
  </h2>

  <p className="mt-3 text-gray-600 leading-relaxed">
    Compress PDF files online without losing quality. Our free PDF compression tool helps you reduce file size for email attachments, visa applications, government forms, and job submissions. You can easily compress PDF to 100KB, 200KB, 500KB, 1MB, 2MB, 5MB, or even 10MB depending on your upload requirements.
  </p>

  <p className="mt-3 text-gray-600 leading-relaxed">
    No registration required. Your files are processed securely and automatically deleted after compression. Whether you need to reduce PDF size for WhatsApp, immigration portals, or official uploads, our tool makes it fast and simple.
  </p>
</section>
<section className="mt-16 rounded-2xl border border-gray-200 bg-white p-6">
  <div className="mx-auto max-w-3xl">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
      Popular Upload Use Cases
    </h2>
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a
  href="/pdf-size-limit-for-uscis"
  className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
>
  <h3 className="font-semibold text-blue-700">USCIS PDF Size Limit</h3>
  <p className="text-sm text-gray-600 mt-1">
    Learn USCIS file upload limits and how to compress PDFs correctly.
  </p>
  <p className="mt-6 text-sm text-gray-600 text-center">
  Need all visa and immigration limits in one place?{" "}
  <a href="/immigration-pdf-upload-guide" className="text-blue-700 hover:underline">
    Read the Immigration PDF Upload Guide
  </a>
  .
</p>
</a>
      <a
  href="/pdf-size-limit-for-email"
  className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
>
  <h3 className="font-semibold text-blue-700">PDF Size Limit for Email</h3>
  <p className="text-sm text-gray-600 mt-1">
    Learn Gmail and Outlook attachment limits and how to compress PDFs to fit.
  </p>
</a>
      <a href="/compress-pdf-for-visa" className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition">
        <h3 className="font-semibold text-blue-700">Visa Applications</h3>
        <p className="text-sm text-gray-600 mt-1">
          Meet strict file size limits for embassy and immigration portals.
        </p>
      </a>

      <a href="/compress-pdf-for-university-application" className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition">
        <h3 className="font-semibold text-blue-700">University Applications</h3>
        <p className="text-sm text-gray-600 mt-1">
          Compress transcripts and documents for admission systems.
        </p>
      </a>

      <a href="/compress-pdf-for-immigration" className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition">
        <h3 className="font-semibold text-blue-700">Immigration Portals</h3>
        <p className="text-sm text-gray-600 mt-1">
          Reduce PDF size for government upload requirements.
        </p>
      </a>

      <a href="/compress-pdf-for-online-portal" className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition">
        <h3 className="font-semibold text-blue-700">Online Portal Uploads</h3>
        <p className="text-sm text-gray-600 mt-1">
          Avoid upload errors by meeting portal file size restrictions.
        </p>
      </a>
    </div>
  </div>
</section>
    </main>
  );
}