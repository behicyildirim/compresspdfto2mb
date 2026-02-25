import Link from "next/link";

export const metadata = {
  title: "PDF Size Limit for Job Application (Resume Upload Fix)",
  description:
    "Reduce PDF size for job applications. Fix resume upload errors and meet portal limits easily.",
};

export default function PdfSizeLimitForJobApplicationPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          PDF Size Limit for Job Application
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Job portals often reject large CV/resume PDFs. Use smaller file sizes to avoid errors.
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
            <h2 className="text-2xl font-semibold">Best practice</h2>
            <p className="mt-2">Keep resumes under 1–2MB for best compatibility.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Related fixes</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li><Link href="/pdf-upload-failed">Upload failed fix</Link></li>
              <li><Link href="/pdf-too-large-to-upload">PDF too large fix</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}