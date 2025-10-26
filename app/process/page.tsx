import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import Link from "next/link"
import { ClipboardCheck, FileText, Send, RefreshCw, CheckCircle, ArrowRight } from "lucide-react"

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Initial Assessment",
      description: "We begin with a comprehensive evaluation of your immigration eligibility and goals.",
      details: [
        "Review your personal and professional background",
        "Assess eligibility for various immigration programs",
        "Identify the best pathway for your situation",
        "Provide honest advice on success probability",
        "Answer all your questions and concerns",
      ],
      timeline: "1-2 Days",
    },
    {
      number: "02",
      icon: FileText,
      title: "Strategy & Planning",
      description: "We develop a customized immigration strategy tailored to your unique circumstances.",
      details: [
        "Create a detailed action plan and timeline",
        "Prepare comprehensive document checklist",
        "Explain all requirements and procedures",
        "Discuss potential challenges and solutions",
        "Set clear expectations and milestones",
      ],
      timeline: "3-5 Days",
    },
    {
      number: "03",
      icon: Send,
      title: "Application Preparation",
      description: "Our team meticulously prepares and reviews your application to ensure accuracy and completeness.",
      details: [
        "Gather and verify all required documents",
        "Complete forms with precision and accuracy",
        "Draft supporting letters and statements",
        "Conduct thorough quality checks",
        "Prepare you for any interviews or tests",
      ],
      timeline: "2-4 Weeks",
    },
    {
      number: "04",
      icon: RefreshCw,
      title: "Submission & Follow-up",
      description: "We submit your application and provide ongoing support throughout the processing period.",
      details: [
        "Submit application to appropriate authorities",
        "Monitor application status regularly",
        "Respond to any requests for additional information",
        "Keep you updated on progress and timelines",
        "Address any issues that may arise",
      ],
      timeline: "Varies by Program",
    },
    {
      number: "05",
      icon: CheckCircle,
      title: "Approval & Next Steps",
      description: "Upon approval, we guide you through the final steps and help you prepare for your new life in Canada.",
      details: [
        "Celebrate your successful application!",
        "Explain approval documents and conditions",
        "Guide you through next steps and requirements",
        "Provide settlement and integration support",
        "Remain available for future immigration needs",
      ],
      timeline: "Ongoing",
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 sm:py-20 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.05),transparent_40%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Our Immigration Process
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              A clear, step-by-step approach designed to make your immigration journey smooth,
              transparent, and successful.
            </p>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="py-16 sm:py-24 relative">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 relative">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isLast = index === steps.length - 1
                return (
                  <div
                    key={step.number}
                    className="group relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
                  >
                    {!isLast && (
                      <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-transparent hidden sm:block animate-pulse-slow" />
                    )}
                    <div className="grid gap-8 sm:grid-cols-[auto,1fr] items-start">
                      {/* STEP ICONS */}
                      <div className="flex flex-col items-center sm:items-start">
                        <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                          {step.number}
                        </div>
                        <div className="mt-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-700 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>

                      {/* STEP CONTENT */}
                      <div className="relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] group-hover:border-blue-300">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50/40 to-indigo-50 transition-opacity duration-700" />
                        <div className="relative z-10">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-500">
                              {step.title}
                            </h2>
                            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                              {step.timeline}
                            </span>
                          </div>
                          <p className="text-lg text-slate-600 leading-relaxed mb-6 transition-colors duration-500 group-hover:text-slate-700">
                            {step.description}
                          </p>
                          <div>
                            <h3 className="text-sm font-semibold text-slate-900 mb-3">What We Do:</h3>
                            <ul className="space-y-2">
                              {step.details.map((detail) => (
                                <li key={detail} className="flex items-start gap-3">
                                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5 transition-transform duration-500 group-hover:scale-110" />
                                  <span className="text-slate-700">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* WHY OUR PROCESS WORKS */}
        <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_40%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 animate-fadeIn">
                Why Our Process Works
              </h2>
              <p className="mt-4 text-lg text-slate-600 animate-fadeIn delay-200">
                Our systematic approach ensures the best possible outcomes
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Transparent Communication",
                  desc: "You'll always know what's happening with your application. We provide regular updates and are available to answer your questions.",
                },
                {
                  title: "Attention to Detail",
                  desc: "Immigration applications require precision. Our meticulous approach minimizes errors and delays, increasing your chances of success.",
                },
                {
                  title: "Personalized Service",
                  desc: "Every case is unique. We tailor our approach to your specific situation, ensuring the best strategy for your circumstances.",
                },
              ].map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm transition-all duration-700 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:border-blue-300 hover:-translate-y-2"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-10 py-4 text-base font-semibold rounded-xl border border-blue-700 text-blue-700 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Get Started
                </span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
