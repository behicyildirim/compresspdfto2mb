import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://compresspdfto2mb.com"),
  title: "Compress PDF to Under 2MB Online Free | CP2 Tool",
  description:
    "Compress PDF files to under 2MB instantly. Free online PDF compressor. Fast, secure and no registration required.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Compress PDF to Under 2MB Online",
    description: "Free online tool to compress PDF files under 2MB instantly.",
    url: "https://compresspdfto2mb.com",
    siteName: "CP2 - CompressPDFto2MB",
    type: "website",
    images: [
      {
        url: "https://compresspdfto2mb.com/og.png",
        width: 1200,
        height: 630,
        alt: "CP2 - Compress PDF to Under 2MB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PDF to Under 2MB Online",
    description:
      "Fast and secure PDF compression tool. Reduce file size in seconds.",
    images: ["https://compresspdfto2mb.com/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Compress PDF to Under 2MB (CP2)",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: "https://compresspdfto2mb.com",
    description:
      "Free online tool to compress PDF files to under 2MB instantly. Fast, secure and no registration required.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "CP2",
      url: "https://compresspdfto2mb.com",
    },
  };

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3N807065XP"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3N807065XP');
          `}
        </Script>

        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body>
        <header className="w-full border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="CP2 Logo" className="h-8" />
              <span className="font-semibold text-gray-800">
                CompressPDFto2MB
              </span>
            </a>
          </div>
        </header>

        {children}
        <footer className="mt-16 border-t bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
    <div>
      © {new Date().getFullYear()} CP2 - CompressPDFto2MB
    </div>

    <div className="flex gap-6">
      <a href="/privacy" className="hover:text-gray-900">
        Privacy Policy
      </a>
      <a href="/terms" className="hover:text-gray-900">
        Terms of Service
      </a>
      <a href="/contact" className="hover:text-gray-900">
        Contact
      </a>
    </div>
  </div>
</footer>
      </body>
    </html>
  );
}