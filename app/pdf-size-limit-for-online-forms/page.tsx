import Link from "next/link";

export const metadata = {
  title: "PDF Size Limit for Online Forms (Upload Fix Guide)",
  description:
    "Reduce PDF size for online forms. Fix upload errors and meet strict portal requirements.",
};

export default function PdfSizeLimitForOnlineFormsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Size Limit for Online Forms
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Government and online forms often have strict limits. Reduce your PDF and upload successfully.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { href: "/compress-pdf-to-2mb", label: "2MB" },
            { href: "/compress-pdf-to-1mb", label: "1MB" },
            { href: "/compress-pdf-to-500kb", label: "500KB" },
          ].map((i) => (
            <a key={i.href} href={i.href}
              className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200">
              {i.label}
            </a>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">Common issues</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>File too large</li>
              <li>Wrong format</li>
              <li>Password-protected PDF</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Fix guides</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li><Link href="/pdf-upload-requirements">Upload requirements</Link></li>
              <li><Link href="/pdf-upload-timeout">Upload timeout fix</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}