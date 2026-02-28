import Link from "next/link";
import InternalLinks from "@/app/components/InternalLinks";

export const metadata = {
  title: "Compress PDF to 300KB Online (Exact 300KB Target)",
  description:
    "Need to compress a PDF to exactly 300KB? Reduce file size safely for strict upload limits, email attachments, and online forms.",
};

export default function CompressPdfTo300KbPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">

        <h1 className="text-4xl font-bold text-center">Compress PDF to 300KB Online</h1>

<p className="mt-4 text-lg text-gray-600 text-center">
  Need a strict upload limit like <strong>300KB</strong>? Use this page to compress your PDF to a smaller,
  upload-friendly size while keeping it readable.
</p>

<div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
  <h2 className="text-xl font-semibold">Compress Your PDF Now</h2>
  <p className="mt-2 text-gray-700">
    If you’re not sure the portal’s limit, start with 2MB. For strict systems, 300KB is a common hard cap.
  </p>

  <div className="mt-4 flex flex-wrap justify-center gap-3">
    <Link
      href="/"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Go to PDF Compressor
    </Link>
    <Link
      href="/compress-pdf-to-500kb"
      className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Try 500KB instead
    </Link>
    <Link
      href="/compress-pdf-to-1mb"
      className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg ring-1 ring-gray-200 hover:bg-blue-50 transition"
    >
      Try 1MB
    </Link>
  </div>
</div>

<div className="mt-10 space-y-10 leading-relaxed">
  <section>
    <h2 className="text-2xl font-semibold">When do you need a PDF under 300KB?</h2>
    <p className="mt-2">
      Some websites and portals enforce very small upload limits. A 300KB cap is common in older systems,
      embedded forms, and platforms optimized for low bandwidth.
    </p>
    <ul className="mt-3 list-disc pl-6 space-y-2">
      <li>Government or municipal portals with strict per-file limits</li>
      <li>Legacy job application systems</li>
      <li>Email workflows where you must keep total attachments tiny</li>
      <li>Online forms that reject image-heavy scans</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold">How to compress a PDF to 300KB</h2>
    <ol className="mt-3 list-decimal pl-6 space-y-2">
      <li>Open the compressor and upload your PDF.</li>
      <li>Download the smaller file and verify text is readable.</li>
      <li>If it’s still above the limit, remove blank pages and retry.</li>
      <li>If the file becomes blurry, use the scan tips below and compress again.</li>
    </ol>
    <p className="mt-3 text-sm text-gray-600">
      Tip: If the portal’s real limit is unknown, start at{" "}
      <Link href="/upload-pdf-under-2mb" className="font-semibold text-blue-700 hover:underline">
        2MB upload-friendly
      </Link>{" "}
      first, then go smaller (1MB → 500KB → 300KB).
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold">Best scan settings to hit 300KB</h2>
    <p className="mt-2">
      The biggest reason PDFs can’t reach 300KB is scanning too “heavy” (color + high DPI).
      These settings usually work:
    </p>
    <ul className="mt-3 list-disc pl-6 space-y-2">
      <li><strong>Grayscale</strong> (avoid color unless required)</li>
      <li><strong>150–200 DPI</strong> for text documents (300 DPI can be too large)</li>
      <li>Crop margins and remove blank pages</li>
      <li>If available: “Text” or “Document” scan mode (not “Photo”)</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold">300KB vs 500KB vs 1MB</h2>
    <ul className="mt-3 list-disc pl-6 space-y-2">
      <li><strong>300KB:</strong> strict portals; best for short text PDFs.</li>
      <li><strong>500KB:</strong> more flexible; often keeps better clarity.</li>
      <li><strong>1MB:</strong> safest “good quality” target for many uploads.</li>
    </ul>
    <p className="mt-2">
      If you’re getting errors, check{" "}
      <Link href="/pdf-upload-requirements" className="font-semibold text-blue-700 hover:underline">
        PDF upload requirements
      </Link>{" "}
      and{" "}
      <Link href="/pdf-upload-failed" className="font-semibold text-blue-700 hover:underline">
        upload failed fixes
      </Link>
      .
    </p>
  </section>

  <section className="bg-blue-50 p-6 rounded-lg">
    <h2 className="text-xl font-semibold text-gray-900">Common reasons you can’t reach 300KB</h2>
    <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
      <li>Many pages (consider splitting if allowed)</li>
      <li>Photos or scanned pages in color</li>
      <li>High DPI scans (300–600 DPI)</li>
      <li>Embedded fonts/images copied from design tools</li>
    </ul>
    <p className="mt-3 text-gray-700">
      If compression alone isn’t enough, reduce scan weight first, then compress again.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold text-gray-900">Related guides</h2>
    <div className="mt-4 flex flex-wrap gap-3">
      {[
        { href: "/pdf-too-large-to-upload", label: "PDF too large to upload" },
        { href: "/pdf-too-large-for-website-upload", label: "Website upload too large" },
        { href: "/reduce-pdf-size-without-losing-quality", label: "Reduce size without losing quality" },
      ].map((i) => (
        <a
          key={i.href}
          href={i.href}
          className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
        >
          {i.label}
        </a>
      ))}
    </div>
  </section>
</div>

<p className="mt-10 text-sm text-gray-500">
  Looking for a different target? Try{" "}
  <Link href="/compress-pdf-to-100kb" className="text-blue-700 hover:underline font-semibold">100KB</Link>,{" "}
  <Link href="/compress-pdf-to-200kb" className="text-blue-700 hover:underline font-semibold">200KB</Link>,{" "}
  <Link href="/compress-pdf-to-500kb" className="text-blue-700 hover:underline font-semibold">500KB</Link>,{" "}
  <Link href="/compress-pdf-to-2mb" className="text-blue-700 hover:underline font-semibold">2MB</Link>.
</p>

<InternalLinks />
        <div className="mt-10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            How to compress a PDF to 300kb
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Upload your PDF.</li>
            <li>Wait for automatic compression.</li>
            <li>Download the optimized file.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-10">
            Why reduce PDF to 300kb?
          </h2>
          <p>
            Many email services, online portals, and job applications require documents under 300kb.
            Compressing your file ensures successful uploads.
          </p>
        </div>
        <p className="mt-10 text-sm text-gray-500">
Looking for a different file size? Try compressing your PDF to 100KB, 200KB, 500KB or 2MB depending on your needs.
</p>
        <InternalLinks />
      </div>
    </main>
  );
}