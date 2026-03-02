import Link from "next/link";

const sizes = [
  { slug: "100kb", label: "100KB" },
  { slug: "200kb", label: "200KB" },
  { slug: "300kb", label: "300KB" },
  { slug: "500kb", label: "500KB" },
  { slug: "1mb", label: "1MB" },
  { slug: "2mb", label: "2MB" },
  { slug: "3mb", label: "3MB" },
  { slug: "5mb", label: "5MB" },
  { slug: "10mb", label: "10MB" },
];

export default function SizeClusterLinks({ current }: { current: string }) {
  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-lg font-semibold mb-4">
        Other PDF Size Options
      </h2>

      <div className="flex flex-wrap gap-3">
        {sizes
          .filter((s) => s.slug !== current)
          .map((s) => (
            <Link
              key={s.slug}
              href={`/compress-pdf-to-${s.slug}`}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-50 text-sm font-medium"
            >
              Compress PDF to {s.label}
            </Link>
          ))}
      </div>
    </section>
  );
}