import Link from "next/link";

type Item = { href: string; label: string };

const sizes: Item[] = [
  { href: "/compress-pdf-to-100kb", label: "Compress PDF to 100KB" },
  { href: "/compress-pdf-to-200kb", label: "Compress PDF to 200KB" },
  { href: "/compress-pdf-to-500kb", label: "Compress PDF to 500KB" },
  { href: "/compress-pdf-to-1mb", label: "Compress PDF to 1MB" },
  { href: "/compress-pdf-to-2mb", label: "Compress PDF to 2MB" },
  { href: "/compress-pdf-to-5mb", label: "Compress PDF to 5MB" },
];

const useCases: Item[] = [
  { href: "/compress-pdf-for-whatsapp", label: "Compress PDF for WhatsApp" },
  { href: "/compress-pdf-for-email", label: "Compress PDF for Email" },
  { href: "/compress-pdf-for-visa", label: "Compress PDF for Visa Application" },
  { href: "/compress-pdf-for-job-application", label: "Compress PDF for Job Application" },
];

export default function InternalLinks() {
  return (
    <section style={{ marginTop: 24 }}>
      <div style={{ display: "grid", gap: 16 }}>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
            Other Popular PDF Sizes
          </h2>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {sizes.map((i) => (
              <li key={i.href} style={{ marginBottom: 6 }}>
                <Link href={i.href}>{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
            Popular Use Cases
          </h2>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {useCases.map((i) => (
              <li key={i.href} style={{ marginBottom: 6 }}>
                <Link href={i.href}>{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}