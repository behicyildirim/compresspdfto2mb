// ==========================
// FILE: app/page.tsx
// ==========================
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Compress PDF to Under 2MB Online Free | CP2 Tool",
  description:
    "Compress PDF files to under 2MB instantly. Free online PDF compressor. Fast, secure and no registration required.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <HomeClient />
    </main>
  );
}