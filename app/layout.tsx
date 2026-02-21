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

export const metadata = {
  metadataBase: new URL("https://compresspdfto2mb.com"),

  title: "Compress PDF to Under 2MB Online Free | CP2 Tool",

  description:
    "Compress PDF files to under 2MB instantly. Free online PDF compressor. Fast, secure and no registration required.",

  keywords: [
    "compress pdf to 2mb",
    "compress pdf under 2mb",
    "reduce pdf size",
    "pdf compressor online",
    "compress pdf for email",
    "free pdf compressor",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Compress PDF to Under 2MB Online",
    description:
      "Free online tool to compress PDF files under 2MB instantly.",
    url: "https://compresspdfto2mb.com",
    siteName: "CP2 - CompressPDFto2MB",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Compress PDF to Under 2MB Online",
    description:
      "Fast and secure PDF compression tool. Reduce file size in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>

      <body>
  <header className="w-full border-b bg-white">
    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="CP2 Logo" className="h-8" />
        <span className="font-semibold text-gray-800">CompressPDFto2MB</span>
      </a>
    </div>
  </header>

  {children}
</body>
    </html>
  );
}