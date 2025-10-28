import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { Briefcase, GraduationCap, Plane, Heart, Home, Building2, ShieldCheck, Globe } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "tourist-visa",
      icon: Globe,
      title: "Tourist Visa",
      description: "We assist you in obtaining tourist visas for Canada, Australia, US, UK, New Zealand, Schengen, China, Dubai, and many more countries — ensuring a smooth and hassle-free process.",
      features: [
        "Tourist visa consultation",
        "Application documentation support",
        "Embassy interview preparation",
        "Visa appointment scheduling",
        "Travel itinerary guidance",
      ]
    },
    {
      id: "pr",
      icon: Home,
      title: "Permanent Residency (PR)",
      description: "Get expert help for PR pathways in Canada and Australia.",
      features: [
        "Express Entry and PNP guidance",
        "Skill assessment & eligibility check",
        "Document preparation & submission",
        "Application tracking & follow-ups",
      ]
    },
    {
      id: "spouse-visa",
      icon: Heart,
      title: "Spouse Visa",
      description: "Bring your partner with spouse visa assistance for Canada, New Zealand, Australia, and the US.",
      features: [
        "Spousal sponsorship guidance",
        "Eligibility assessment",
        "Document verification",
        "Interview preparation & support",
      ]
    },
    {
      id: "study-visa",
      icon: GraduationCap,
      title: "Study Visa",
      description: "Study abroad made easy — apply for study visas to the USA, Canada, UK, and Australia.",
      features: [
        "University selection assistance",
        "Study permit application",
        "Financial documentation guidance",
        "Pre-departure counselling",
      ]
    },
    {
      id: "business-visa",
      icon: Building2,
      title: "Business Visa",
      description: "We help entrepreneurs and professionals secure business visas for all countries.",
      features: [
        "Business invitation processing",
        "Visa documentation support",
        "Embassy filing guidance",
        "Travel planning & itinerary setup",
      ]
    },
    {
      id: "flight-ticketing",
      icon: Plane,
      title: "Flight Ticketing",
      description: "Get the best deals and reliable support for international and domestic flight bookings.",
      features: [
        "Economy and business-class bookings",
        "Flexible cancellation options",
        "Multi-country travel planning",
      ]
    },
    {
      id: "travel-insurance",
      icon: ShieldCheck,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance plans to keep you protected throughout your journey.",
      features: [
        "Health and medical coverage",
        "Baggage and flight delay coverage",
        "Custom insurance for students & professionals",
      ]
    },
    {
      id: "work-visa",
      icon: Briefcase,
      title: "Work Visa",
      description: "Work visa and permit assistance for Canada, New Zealand, Australia, UK, and Schengen countries.",
      features: [
        "Work permit consultation",
        "Visa filing & documentation",
        "Interview preparation",
        "Employer coordination support",
      ]
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Your trusted partner for visas, travel, and settlement solutions — covering everything from tourism and study to permanent residency.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid gap-8 lg:grid-cols-2 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">What We Offer:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}