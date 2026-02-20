export const metadata = {
  title: "Terms of Service | Compress PDF to Under 2MB",
  description:
    "Terms of service for CompressPDFto2MB — acceptable use and limitations.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-600">Last updated: {new Date().toLocaleDateString("en-US")}</p>

        <div className="mt-8 space-y-6 text-gray-800">
          <p>
            By using this website (“Service”), you agree to these Terms. If you do not agree, please do not use the
            Service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Service description</h2>
          <p>
            The Service provides an online tool to compress PDF files. Output quality and file size depend on the
            contents of the PDF.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Acceptable use</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Do not upload unlawful content or content you do not have the right to use.</li>
            <li>Do not attempt to disrupt or abuse the Service (e.g., excessive automated requests).</li>
            <li>Use the Service at your own risk.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">No warranties</h2>
          <p>
            The Service is provided “as is” without warranties of any kind. We do not guarantee that compression will
            always achieve a specific target size or preserve all formatting.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for any damages or losses resulting from your use
            of the Service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Changes</h2>
          <p>
            We may update these Terms from time to time. Continued use of the Service means you accept the updated
            Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p>
            For questions, please use the contact page: <a className="text-blue-600 underline" href="/contact">/contact</a>
          </p>
        </div>
      </div>
    </main>
  );
}