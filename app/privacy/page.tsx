export const metadata = {
  title: "Privacy Policy | Compress PDF to Under 2MB",
  description:
    "Privacy policy for CompressPDFto2MB — how we handle files and user data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-600">Last updated: {new Date().toLocaleDateString("en-US")}</p>

        <div className="mt-8 space-y-6 text-gray-800">
          <p>
            This website (“Service”) provides a PDF compression tool. We respect your privacy and keep data collection to
            a minimum.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Files you upload</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your PDF is uploaded only to process compression.</li>
            <li>Files are not intentionally stored long-term.</li>
            <li>Temporary files created during processing are deleted after the request completes.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">Personal data</h2>
          <p>
            We do not require registration. We do not ask for names, emails, or accounts to use the Service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Analytics & cookies</h2>
          <p>
            We may use basic analytics to understand usage (e.g., page views). Analytics providers may set cookies or
            collect standard technical data such as browser type and approximate location. You can manage cookies in
            your browser settings.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Security</h2>
          <p>
            We take reasonable measures to protect the Service. However, no method of transmission or storage is 100%
            secure.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p>
            For privacy questions, please use the contact page: <a className="text-blue-600 underline" href="/contact">/contact</a>
          </p>
        </div>
      </div>
    </main>
  );
}