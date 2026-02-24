import Link from "next/link";

export const metadata = {
  title: "Immigration PDF Upload Guide (Visa, USCIS, IRCC Limits)",
  description:
    "A complete guide to immigration PDF upload limits and how to compress PDFs for visa, USCIS, and IRCC portals.",
};

export default function ImmigrationPdfUploadGuidePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14">
      <div className="mx-auto max-w-3xl text-gray-800">
        <h1 className="text-4xl font-bold text-center">
          Immigration PDF Upload Guide
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Upload limits vary across immigration and visa portals. Use this guide
          to choose the right PDF size and avoid upload errors.
        </p>
        <p className="mt-3 text-sm text-gray-600 text-center">
  Quick start: try{" "}
  <Link href="/compress-pdf-to-2mb" className="font-medium text-blue-700 hover:underline">
    2MB
  </Link>{" "}
  first. If the portal is strict, go with{" "}
  <Link href="/compress-pdf-to-1mb" className="font-medium text-blue-700 hover:underline">
    1MB
  </Link>{" "}
  (or{" "}
  <Link href="/compress-pdf-to-500kb" className="font-medium text-blue-700 hover:underline">
    500KB
  </Link>
  ).
</p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Most Common Upload Targets</h2>
            <p className="mt-2 text-gray-700">
              When you are not sure about the exact portal limit, compressing to
              2MB is a safe starting point. For stricter portals, 1MB may be
              required.
              {" "}
You can also follow the{" "}
<Link href="/pdf-upload-failed" className="font-medium text-blue-700 hover:underline">
  upload failed checklist
</Link>{" "}
if you still get errors.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/compress-pdf-to-1mb", label: "Compress to 1MB" },
                { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
                { href: "/compress-pdf-to-5mb", label: "Compress to 5MB" },
              ].map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-gray-200 hover:bg-blue-50 transition"
                >
                  {i.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-semibold text-gray-900">
                Having upload errors?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                If the portal rejects your PDF, see the most common causes and
                quick fixes.
              </p>
              <Link
                href="/pdf-upload-failed"
                className="inline-block mt-3 text-sm font-semibold text-blue-700 hover:underline"
              >
                Fix “PDF upload failed” errors →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Immigration & Visa Guides</h2>
            <p className="mt-2 text-gray-700">
              Pick the portal you are applying through and follow the recommended
              file size.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/pdf-size-limit-for-uscis"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">
                  USCIS PDF Size Limit
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Learn USCIS upload issues and how to compress to a safe size.
                </p>
              </Link>

              <Link
                href="/canada-immigration-pdf-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">
                  Canada IRCC Upload Limits
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Tips for IRCC portal uploads and how to reduce PDF size to 2MB.
                </p>
              </Link>

              <Link
                href="/uk-visa-pdf-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">
                  UK Visa PDF Size Limit
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce file size for UKVI document uploads.
                </p>
              </Link>

              <Link
                href="/schengen-visa-pdf-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">
                  Schengen Visa PDF Limit
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Meet strict embassy upload requirements with smaller PDFs.
                </p>
              </Link>

              <Link
                href="/compress-pdf-for-visa"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">
                  Compress PDF for Visa
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  General visa portal compression tips and safe target sizes.
                </p>
              </Link>

              <Link
                href="/compress-pdf-for-immigration"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">
                  Compress PDF for Immigration
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce PDF size for common immigration portal limits.
                </p>
              </Link>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Need to compress right now?
            </h2>
            <p className="mt-2 text-gray-700">
              Use the main tool and start with a safe target like 2MB.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go to PDF Compressor
            </Link>
          </section>

          {/* ✅ FIXED: high-contrast related links block */}
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-base font-semibold text-gray-900">
              Related PDF size guides
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Common upload problems usually come down to file size limits (often
              1MB–2MB) and portal rules.
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/reduce-pdf-size-for-online-application"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Reduce PDF size for online applications (step-by-step)
                </Link>
              </li>
              <li>
                <Link
                  href="/compress-pdf-to-1mb"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Compress PDF to 1MB
                </Link>
              </li>
              <li>
                <Link
                  href="/compress-pdf-to-500kb"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Compress PDF to 500KB
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf-too-large-to-upload"
                  className="font-medium text-blue-700 hover:underline"
                >
                  PDF too large to upload? Fix it
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf-upload-failed"
                  className="font-medium text-blue-700 hover:underline"
                >
                  PDF upload failed: common reasons & solutions
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}