"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AdSlot from "./AdSlot";

type Item = { href: string; label: string };

const sizes: Item[] = [
  { href: "/compress-pdf-to-100kb", label: "Compress PDF to 100KB" },
  { href: "/compress-pdf-to-200kb", label: "Compress PDF to 200KB" },
  { href: "/compress-pdf-to-300kb", label: "Compress PDF to 300KB" },
  { href: "/compress-pdf-to-500kb", label: "Compress PDF to 500KB" },
  { href: "/compress-pdf-to-1mb", label: "Compress PDF to 1MB" },
  { href: "/compress-pdf-to-2mb", label: "Compress PDF to 2MB" },
  { href: "/compress-pdf-to-3mb", label: "Compress PDF to 3MB" },
  { href: "/compress-pdf-to-5mb", label: "Compress PDF to 5MB" },
  { href: "/compress-pdf-to-10mb", label: "Compress PDF to 10MB" },
];


// 🔥 SEO PRIORITY ORDER
const useCases: Item[] = [

  // Highest-value long-tail pages
  {
    href: "/immigration-pdf-upload-guide",
    label: "Immigration PDF upload guide (visa & portal limits)",
  },
  {
    href: "/reduce-pdf-size-for-online-application",
    label: "Reduce PDF size for online applications",
  },

  // Core cluster pages
  {
    href: "/compress-pdf-for-visa",
    label: "Compress PDF for Visa Application",
  },

  // Secondary use cases
  {
    href: "/compress-pdf-for-job-application",
    label: "Compress PDF for Job Application",
  },
  {
    href: "/compress-pdf-for-email",
    label: "Compress PDF for Email",
  },
  {
    href: "/compress-pdf-for-whatsapp",
    label: "Compress PDF for WhatsApp",
  },
];


function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export default function InternalLinks() {
  const pathnameRaw = usePathname() || "/";
  const pathname = normalize(pathnameRaw);

  const sizesFiltered = sizes.filter((i) => normalize(i.href) !== pathname);
  const useCasesFiltered = useCases.filter((i) => normalize(i.href) !== pathname);

  return (
    <section className="mt-8">

      {/* AD SLOT: Above internal links */}
      <div className="mb-10">
        <AdSlot label="Ad Area (Top)" />
      </div>

      <div className="grid gap-6">

        <div>
          <h2 className="text-lg font-semibold mb-2">
            Other Popular PDF Sizes
          </h2>

          <ul className="list-disc pl-5 space-y-1">

            {sizesFiltered.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className="text-blue-700 hover:underline"
                >
                  {i.label}
                </Link>
              </li>
            ))}

          </ul>
        </div>


        <div>

          <h2 className="text-lg font-semibold mb-2">
            Popular Use Cases
          </h2>

          <ul className="list-disc pl-5 space-y-1">

            {useCasesFiltered.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className="text-blue-700 hover:underline"
                >
                  {i.label}
                </Link>
              </li>
            ))}

          </ul>

        </div>

      </div>

      {/* AD SLOT: Below internal links */}
      <div className="mt-10">
        <AdSlot label="Ad Area (Bottom)" />
      </div>

    </section>
  );
}