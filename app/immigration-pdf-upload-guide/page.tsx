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

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">Most Common Upload Targets</h2>
            <p className="mt-2 text-gray-700">
              When you are not sure about the exact portal limit, compressing to
              2MB is a safe starting point. For stricter portals, 1MB may be required.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/compress-pdf-to-1mb", label: "Compress to 1MB" },
                { href: "/compress-pdf-to-2mb", label: "Compress to 2MB" },
                { href: "/compress-pdf-to-5mb", label: "Compress to 5MB" },
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

          <section>
            <h2 className="text-2xl font-semibold">Immigration & Visa Guides</h2>
            <p className="mt-2 text-gray-700">
              Pick the portal you are applying through and follow the recommended file size.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/pdf-size-limit-for-uscis"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">USCIS PDF Size Limit</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Learn USCIS upload issues and how to compress to a safe size.
                </p>
              </a>

              <a
                href="/canada-immigration-pdf-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Canada IRCC Upload Limits</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Tips for IRCC portal uploads and how to reduce PDF size to 2MB.
                </p>
              </a>

              <a
                href="/uk-visa-pdf-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">UK Visa PDF Size Limit</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce file size for UKVI document uploads.
                </p>
              </a>

              <a
                href="/schengen-visa-pdf-size-limit"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Schengen Visa PDF Limit</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Meet strict embassy upload requirements with smaller PDFs.
                </p>
              </a>

              <a
                href="/compress-pdf-for-visa"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Compress PDF for Visa</h3>
                <p className="text-sm text-gray-600 mt-1">
                  General visa portal compression tips and safe target sizes.
                </p>
              </a>

              <a
                href="/compress-pdf-for-immigration"
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-200 hover:bg-blue-50 transition"
              >
                <h3 className="font-semibold text-blue-700">Compress PDF for Immigration</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce PDF size for common immigration portal limits.
                </p>
              </a>
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
        </div>
      </div>
    </main>
  );
}