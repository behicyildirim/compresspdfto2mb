"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AdSlot from "./AdSlot";
import { SIZE_PAGES, USE_CASE_PAGES, SUPPORT_PAGES } from "@/app/lib/sitePaths";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export default function InternalLinks() {
  const pathnameRaw = usePathname() || "/";
  const pathname = normalize(pathnameRaw);

  const sizesFiltered = SIZE_PAGES.filter((i) => normalize(i.href) !== pathname);
  const useCasesFiltered = USE_CASE_PAGES.filter((i) => normalize(i.href) !== pathname);

  return (
    <section className="mt-8">
      {/* AD SLOT: Above internal links */}
      <div className="mb-10">
        <AdSlot label="Ad Area (Top)" />
      </div>

      <div className="grid gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Other Popular PDF Sizes</h2>
          <ul className="list-disc pl-5 space-y-1">
            {sizesFiltered.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="text-blue-700 hover:underline">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Popular Use Cases</h2>
          <ul className="list-disc pl-5 space-y-1">
            {useCasesFiltered.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="text-blue-700 hover:underline">
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