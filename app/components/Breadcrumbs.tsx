import Link from "next/link";

type Crumb = { href: string; label: string };

export default function Breadcrumbs({
  items,
}: {
  items: Crumb[];
}) {
  return (
    <nav className="mt-4 text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((c, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-x-2">
              {idx !== 0 && <span className="text-gray-400">/</span>}
              {isLast ? (
                <span className="font-medium text-gray-900">{c.label}</span>
              ) : (
                <Link href={c.href} className="hover:underline text-blue-700">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}