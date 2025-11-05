"use client";

import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
     
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>

          {/* Privacy Policy Content */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg font-medium text-gray-800 mb-6">
                At <span className="font-bold">RV Global Immigration</span>, your privacy is our top priority. We understand that applying for immigration, visa, or settlement services involves sharing sensitive personal information — and we are fully committed to protecting it with the highest standards of security and confidentiality.
              </p>

              <p className="text-lg font-medium text-gray-800 mb-8">
                This Privacy Policy describes <span className="font-semibold">how we collect, use, process, and protect</span> your personal information when you visit our website, contact us, or engage our professional immigration services. It also explains your rights regarding the information you share with us and how you can exercise those rights.
              </p>

              <p className="text-gray-700 mb-8">
                By accessing our website or using our services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein. If you do not agree with any part of this policy, we advise you to discontinue use of our website and services.
              </p>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Our Commitment to Your Privacy</h2>
                <p className="text-gray-700 mb-6">
                  At RV Global Immigration, we treat your personal information with the utmost care and transparency. We collect only what is necessary to deliver personalized, efficient, and compliant immigration solutions. We do not sell, rent, or misuse your data in any manner. Every piece of information you share with us is protected under strict security protocols and used solely for legitimate business and legal purposes.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Scope of This Policy</h2>
                <p className="text-gray-700 mb-4">
                  This policy applies to all personal information collected through:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Our official website</li>
                  <li>Direct communication channels (such as phone, email, or WhatsApp)</li>
                  <li>In-person consultations and document submissions</li>
                  <li>Online forms, assessments, or applications you complete with us</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. What We Collect</h2>
                <p className="text-gray-700 mb-4">
                  Depending on the service you use, we may collect the following:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li><span className="font-medium">Personal Details:</span> Full name, contact number, email, date of birth, nationality, and identification details (e.g., passport number).</li>
                  <li><span className="font-medium">Educational and Employment Information:</span> Qualifications, work history, certifications, and relevant supporting documents.</li>
                  <li><span className="font-medium">Immigration and Travel Information:</span> Visa history, travel records, and application data required for assessments or submissions.</li>
                  <li><span className="font-medium">Technical Information:</span> Browser type, IP address, device information, and usage data through cookies and analytics tools to improve your online experience.</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  Your data enables us to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Provide accurate immigration advice, evaluation, and application support</li>
                  <li>Communicate updates and manage your case efficiently</li>
                  <li>Improve our website and tailor content for better user experience</li>
                  <li>Fulfill legal and regulatory requirements under immigration laws</li>
                  <li>Send relevant updates, newsletters, or promotional offers (only if you opt in)</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Protecting Your Information</h2>
                <p className="text-gray-700 mb-6">
                  We use advanced administrative, technical, and physical security measures to safeguard your personal data from unauthorized access, alteration, or disclosure. Our systems comply with recognized privacy and data protection standards. Only authorized team members and trusted partners directly involved in your case have access to your data — and strictly on a need-to-know basis.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Access, update, or correct your personal data</li>
                  <li>Request deletion of your data, where legally applicable</li>
                  <li>Withdraw consent for communications at any time</li>
                  <li>Know how and why your data is used</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  For any privacy-related requests, please contact our Data Protection Officer.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Policy Updates</h2>
                <p className="text-gray-700 mb-6">
                  RV Global Immigration reserves the right to modify or update this Privacy Policy periodically to reflect changes in our practices, services, or legal obligations. Any updates will be posted on this page with a revised effective date. We encourage you to review this policy regularly to stay informed.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
                <p className="text-gray-700 mb-6">
                  If you have questions, concerns, or complaints about our Privacy Policy or how your personal information is handled, please reach out to us:
                </p>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <p className="font-bold text-gray-900 mb-2">RV Global Immigration</p>
                  <p className="text-gray-700">Email: info@rvglobalimmigrationservices.in</p>
                  <p className="text-gray-700">Phone: +91 7303922339</p>
                  <p className="text-gray-700">Address: A-1/77 Chanakya Place Gali No 11
Janak Puri Part 1
New Delhi 110059</p>
                </div>
              </div>
            </div>
        
        </div>
      </main>

      <Footer />
    </>
  );
}