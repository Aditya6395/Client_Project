"use client";

import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Refund and Cancellation Policy
          </h1>
        </div>

        {/* Refund Policy Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-medium text-gray-800 mb-6">
              At <span className="font-bold">RV Global Immigration</span>, we value the trust our clients place in us. This Refund and Cancellation Policy explains the conditions under which refunds, if any, are processed for our services.
              By engaging with our services and making a payment, you acknowledge and agree to the terms outlined below.
            </p>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Policy</h2>
              <p className="text-gray-700 mb-6">
                All service fees paid to RV Global Immigration are <span className="font-medium">non-refundable</span>, except in cases specifically stated in this policy.
                Once a client subscribes to or begins using our services, cancellation or withdrawal does not entitle the client to any refund.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Visa Denial</h2>
              <p className="text-gray-700 mb-6">
                No refund shall be issued if a visa application is refused or denied due to the client is negligence, submission of false documents, or changes in immigration requirements — provided that RV Global Immigration has completed all required services and submitted the application properly as per the agreed process.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Eligibility</h2>
              <p className="text-gray-700 mb-4">
                Refunds, where applicable, will apply <span className="font-medium">only to the consultation fee</span> charged by RV Global Immigration as mentioned on the official invoice.
                Government fees, embassy charges, and third-party expenses (including courier, translation, attestation, verification, or any similar services), as well as applicable taxes, are <span className="font-medium">non-refundable</span> under all circumstances.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Delays by Third Parties</h2>
              <p className="text-gray-700 mb-6">
                RV Global Immigration shall not be held responsible for delays or interruptions caused by third parties, such as embassies, courier services, or background verification agencies.
                Refund requests based on such third-party delays will not be accepted.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Client Non-Compliance</h2>
              <p className="text-gray-700 mb-4">
                No refund will be processed under the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Failure to attend visa interviews or submit required documents on time.</li>
                <li>Non-compliance with immigration or consular requirements.</li>
                <li>Visa rejection due to incomplete documentation, misrepresentation, or violation of laws.</li>
                <li>Late submission of documents or failure to meet prescribed deadlines.</li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Change of Eligibility or Service Provider</h2>
              <p className="text-gray-700 mb-6">
                No refund shall be granted if:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>The client decides to withdraw, discontinue, or switch to another service provider.</li>
                <li>The client becomes ineligible to apply for a visa due to changes in immigration laws, policies, or government regulations after the commencement of services.</li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Duplicate Payments</h2>
              <p className="text-gray-700 mb-6">
                If a client inadvertently makes a <span className="font-medium">duplicate payment</span>, the excess amount will be refunded within <span className="font-medium">15 to 20 working days</span> through the same payment method used, following internal verification.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Confirmation of Payment</h2>
              <p className="text-gray-700 mb-6">
                Upon successful payment, clients will receive a confirmation message or email from the payment gateway and/or RV Global Immigration.
                We are not liable for any delay in receiving confirmation messages caused by third-party payment systems.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 mb-6">
                RV Global Immigration reserves the right to modify or update this Refund and Cancellation Policy at any time without prior notice.
                All updates will be published on our official website and will take effect immediately upon posting.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                For any refund or payment-related inquiries, please contact:
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