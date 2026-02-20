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
  title: "Compress PDF to Under 2MB — Free Online Tool",
  description:
    "Free online tool to compress PDF files to under 2MB. Fast, simple, and secure.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Compress PDF to Under 2MB",
    description:
      "Free online tool to compress PDF files to under 2MB. Fast, simple, and secure.",
    url: "https://compresspdfto2mb.com",
    siteName: "CompressPDFto2MB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compress PDF to Under 2MB",
    description:
      "Free online tool to compress PDF files to under 2MB. Fast, simple, and secure.",
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

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}