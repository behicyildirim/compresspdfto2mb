export const metadata = {
  title: "Contact | Compress PDF to Under 2MB",
  description: "Contact page for CompressPDFto2MB.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900">Contact</h1>
        <p className="mt-4 text-gray-800">
          If you need help or want to report an issue, you can reach us by email:
        </p>

        <div className="mt-6 rounded-lg bg-gray-100 p-5">
          <p className="text-gray-900 font-medium">Email</p>
          <p className="text-gray-700">support@compresspdfto2mb.com</p>
          <p className="mt-2 text-xs text-gray-500">
            (If you don’t have this email yet, you can replace it with your existing email for now.)
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-600">
          Tip: Add links to <a className="text-blue-600 underline" href="/privacy">Privacy</a> and{" "}
          <a className="text-blue-600 underline" href="/terms">Terms</a> in your footer later for better trust/SEO.
        </p>
      </div>
    </main>
  );
}