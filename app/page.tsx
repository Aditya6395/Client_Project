import Navbar from "@/components/site/navbar"
import Hero from "@/components/site/hero"
import Footer from "@/components/site/footer"
import Link from "next/link"
import {
  Plane,
  Globe,
  Heart,
  GraduationCap,
  Briefcase,
  Building2,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* OUR SERVICES */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Services</h2>
              <p className="mt-4 text-lg text-slate-600">
                Comprehensive immigration and travel solutions tailored to your goals
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Plane,
                  title: "Tourist Visa",
                  desc: "All countries — expert assistance for short-term travel and tourism visas.",
                },
                {
                  icon: Globe,
                  title: "Permanent Residency (PR)",
                  desc: "Comprehensive PR support for Canada and Australia applicants.",
                },
                {
                  icon: Heart,
                  title: "Spouse Visa",
                  desc: "Smooth processing for Canada, New Zealand, Australia, and US spouse visas.",
                },
                {
                  icon: GraduationCap,
                  title: "Study Visa",
                  desc: "End-to-end student visa guidance for USA, Canada, UK, and Australia.",
                },
                {
                  icon: Briefcase,
                  title: "Business Visa",
                  desc: "All-country business visa assistance for investors and entrepreneurs.",
                },
                {
                  icon: Building2,
                  title: "Flight Ticketing",
                  desc: "Affordable international and domestic air ticket booking services.",
                },
                {
                  icon: ShieldCheck,
                  title: "Travel Insurance",
                  desc: "Comprehensive travel insurance plans for global travelers.",
                },
                {
                  icon: FileCheck,
                  title: "Work Visa",
                  desc: "Specialized Schengen work visa guidance and documentation support.",
                },
              ].map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="group relative rounded-2xl bg-white border border-slate-200 p-8 overflow-hidden transition-all duration-700 ease-\[cubic-bezier(0.22,1,0.36,1)\] hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(80,140,255,0.25)] hover:border-blue-400"
                  >
                    {/* smooth gradient highlight behind */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0"></div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:from-blue-600 group-hover:to-indigo-500 transition-all duration-700 ease-\[cubic-bezier(0.22,1,0.36,1)\] group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.6)]">
                          <Icon className="h-6 w-6" />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-500">
                          {service.title}
                        </h3>

                        <p className="mt-3 text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-500">
                          {service.desc}
                        </p>
                      </div>

                      {/* Animated Button */}
                      <Link
                        href="/services"
                        className="relative mt-8 inline-flex justify-center items-center px-8 py-3 text-sm font-medium rounded-xl border border-blue-700 text-blue-800 overflow-hidden transition-all duration-700 ease-\[cubic-bezier(0.22,1,0.36,1)\] group/button"
                      >
                        {/* gradient background on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/button:opacity-100 transition-opacity duration-700 ease-\[cubic-bezier(0.22,1,0.36,1)\]"></span>
                        <span className="relative z-10 group-hover/button:text-white transition-colors duration-500">
                          Learn More
                        </span>
                        {/* glowing border animation */}
                        <span className="absolute inset-0 rounded-xl border border-transparent group-hover/button:border-blue-400 group-hover/button:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-700 ease-\[cubic-bezier(0.22,1,0.36,1)\]"></span>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-base font-semibold text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:scale-[1.05]"
              >
                View All Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Why Choose RV Global?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Experience, expertise, and dedication to your success
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Expert Team", desc: "Certified immigration consultants with 6+ years of experience" },
                { title: "Proven Track Record", desc: "98% success rate with over 1,500 approved cases" },
                { title: "Personalized Approach", desc: "Customized strategies tailored to your unique situation" },
                { title: "Transparent Process", desc: "Clear communication and regular updates throughout your journey" },
              ].map((feature) => (
                <div 
                  key={feature.title} 
                  className="group text-center bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-500 hover:scale-105"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4 group-hover:from-blue-600 group-hover:to-indigo-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
