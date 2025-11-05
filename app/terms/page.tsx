"use client";

import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
        </div>

        {/* Terms of Service Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-medium text-gray-800 mb-6">
              Welcome to <span className="font-bold">RV Global Immigration</span>. By using our website or engaging our immigration and visa services, you agree to these Terms of Service. Please read them carefully before proceeding.
            </p>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. About Our Services</h2>
              <p className="text-gray-700 mb-6">
                RV Global Immigration provides professional immigration consultancy, visa guidance, and documentation assistance.
                We are <span className="font-medium">not a government body</span> or visa authority. While we provide accurate and updated information, visa decisions rest solely with the respective government or embassy.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Our Website</h2>
              <p className="text-gray-700 mb-4">
                You agree to use our website responsibly and lawfully. You must not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Attempt to gain unauthorized access or disrupt our systems</li>
                <li>Post or transmit offensive or misleading information</li>
                <li>Copy, reproduce, or modify our content without permission</li>
              </ul>
              <p className="text-gray-700 mb-6">
                We may suspend or terminate access if misuse is detected.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Accuracy</h2>
              <p className="text-gray-700 mb-6">
                You are responsible for ensuring that all information and documents you provide are true, complete, and current.
                We are not liable for delays or rejections arising from inaccurate or incomplete details provided by clients.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Fees and Payments</h2>
              <p className="text-gray-700 mb-4">
                All service fees are clearly communicated before engagement.
                Payments must be made through authorized channels. Fees cover professional consultancy and administrative assistance only — <span className="font-medium">government or visa fees are separate</span> unless stated otherwise.
              </p>
              <p className="text-gray-700 mb-6">
                Once services begin, <span className="font-medium">fees are non-refundable</span>, except as required by law or under specific written agreement.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-6">
                Your privacy matters to us. All information shared is handled as per our <span className="font-medium">Privacy Policy</span>, which outlines how we collect, use, and protect your data.
                By using our services, you consent to such data handling.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                All website content — including text, images, and graphics — belongs to RV Global Immigration. You may not reuse or reproduce any material without prior written permission.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Visa refusals, processing delays, or decisions made by immigration authorities</li>
                <li>Indirect or consequential losses arising from service use</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Our liability shall not exceed the total service fee paid.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination of Services</h2>
              <p className="text-gray-700 mb-4">
                We may suspend or terminate services if a client:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Provides false information</li>
                <li>Violates these Terms</li>
                <li>Fails to make due payments</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Outstanding fees remain payable even after termination.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms are governed by the laws of <span className="font-medium">[insert country/state]</span>, and any disputes will be subject to the jurisdiction of the courts in <span className="font-medium">[insert city/country]</span>.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates to Terms</h2>
              <p className="text-gray-700 mb-6">
                We may update these Terms periodically. Changes will be posted on this page with a new effective date. Continued use of our website or services implies acceptance of the updated Terms.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                For any questions or clarifications, please contact:
              </p>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <p className="font-bold text-gray-900 mb-2">RV Global Immigration</p>
                <p className="text-gray-700">Email: info@rvglobalimmigrationservices.in</p>
                <p className="text-gray-700">Phone: +91 7303922339</p>
                <p className="text-gray-700">Address: A-1/77 Chanakya Place Gali No 11 Janak Puri Part 1 New Delhi 110059</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}