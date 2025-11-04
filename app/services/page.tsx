'use client'
import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { Briefcase, GraduationCap, Plane, Heart, Home, Building2, ShieldCheck, Globe, ChevronDown, Star, CheckCircle, Users, Clock, Target } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("tourist-visa")
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    successRate: 0,
    countries: 0,
    support: "0/7"
  })
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const statsRef = useRef<HTMLDivElement>(null)

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
      ],
      stats: { successRate: 98, processingTime: "2-4 weeks", clients: 2500 },
      image: "https://img.freepik.com/free-photo/medium-shot-smiley-couple-with-documents_23-2149272139.jpg?semt=ais_hybrid&w=740&q=80",
      countries: ["Canada", "USA", "UK", "Australia", "Schengen", "Dubai", "New Zealand", "Japan", "Many more"]
    },
    {
      id: "pr",
      icon: Home,
      title: "Permanent Residency (PR)",
      description: "Get expert help for PR pathways in Canada and Australia with comprehensive guidance from eligibility assessment to final approval.",
      features: [
        "Express Entry and PNP guidance",
        "Skill assessment & eligibility check",
        "Document preparation & submission",
        "Application tracking & follow-ups",
        "Post-approval settlement support"
      ],
      stats: { successRate: 95, processingTime: "6-12 months", clients: 1500 },
      image: "https://gmichsp.com/wp-content/uploads/2017/12/PR-Visa-2.jpg",
      countries: ["Canada", "Australia"]
    },
    {
      id: "spouse-visa",
      icon: Heart,
      title: "Spouse & Family Visa",
      description: "Bring your partner and family together with our comprehensive spouse visa assistance for Canada, New Zealand, Australia, and the US.",
      features: [
        "Spousal sponsorship guidance",
        "Eligibility assessment",
        "Document verification",
        "Interview preparation & support",
        "Appeal process assistance"
      ],
      stats: { successRate: 95, processingTime: "4-8 months", clients: 1200 },
      image: "https://static.vecteezy.com/system/resources/thumbnails/072/550/400/small/multigenerational-hispanic-family-portrait-in-autumn-park-smiling-together-photo.jpeg",
      countries: ["Canada", "USA", "Australia", "New Zealand"]
    },
    {
      id: "study-visa",
      icon: GraduationCap,
      title: "Study Visa & Education Abroad",
      description: "Study abroad made easy — comprehensive study visa services for the USA, Canada, UK, Australia with university selection and scholarship guidance.",
      features: [
        "University selection assistance",
        "Study permit application",
        "Financial documentation guidance",
        "Pre-departure counselling",
        "Scholarship application support"
      ],
      stats: { successRate: 96, processingTime: "3-6 weeks", clients: 3000 },
      image: "https://guidetoheights.com/wp-content/uploads/2025/09/ChatGPT-Image-Sep-30-2025-09_44_25-AM.png",
      countries: ["USA", "Canada", "UK", "Australia", "Germany", "France"]
    },
    {
      id: "business-visa",
      icon: Building2,
      title: "Business & Investor Visa",
      description: "We help entrepreneurs and professionals secure business visas with comprehensive support for international business expansion.",
      features: [
        "Business invitation processing",
        "Visa documentation support",
        "Embassy filing guidance",
        "Travel planning & itinerary setup",
        "Investor visa consultation"
      ],
      stats: { successRate: 93, processingTime: "4-8 weeks", clients: 800 },
      image: "https://www.withenvoy.com/wp-content/uploads/2022/09/investors-visa-meeting.jpg",
      countries: ["USA", "Canada", "UK", "Australia", "UAE", "Singapore"]
    },
        {
      id: "work-visa",
      icon: Briefcase,
      title: "Work Visa & Employment Abroad",
      description: "Work visa and permit assistance for Canada, New Zealand, Australia, UK, and Schengen countries with job placement support.",
      features: [
        "Work permit consultation",
        "Visa filing & documentation",
        "Interview preparation",
        "Employer coordination support",
        "Job search assistance"
      ],
      stats: { successRate: 97, processingTime: "2-4 months", clients: 2000 },
      image: "https://img.freepik.com/free-photo/day-office-travel-agency_23-2150770001.jpg?semt=ais_hybrid&w=740&q=80",
      countries: ["Canada", "Australia", "New Zealand", "UK", "Germany", "Netherlands"]
    },
    {
      id: "flight-ticketing",
      icon: Plane,
      title: "Flight Ticketing & Travel Planning",
      description: "Get the best deals and reliable support for international and domestic flight bookings with comprehensive travel planning services.",
      features: [
        "Economy and business-class bookings",
        "Flexible cancellation options",
        "Multi-country travel planning",
        "Hotel & transportation booking",
        "Travel insurance packages"
      ],
      stats: { successRate: 100, processingTime: "24 hours", clients: 5000 },
      image: "https://t4.ftcdn.net/jpg/07/59/35/99/360_F_759359988_OX0evS6Fxcn0Z0yQs4sYl6F5YoVyNEsu.jpg",
      airlines: ["Emirates", "Qatar", "Singapore", "British", "Lufthansa"]
    },
    {
      id: "travel-insurance",
      icon: ShieldCheck,
      title: "Travel Insurance & Protection",
      description: "Comprehensive travel insurance plans to keep you protected throughout your journey with 24/7 emergency support.",
      features: [
        "Health and medical coverage",
        "Baggage and flight delay coverage",
        "Custom insurance for students & professionals",
        "Emergency evacuation coverage",
        "Trip cancellation protection"
      ],
      stats: { successRate: 100, processingTime: "Instant", clients: 4000 },
      image: "https://static.vecteezy.com/system/resources/previews/025/074/876/large_2x/protection-and-insurance-concept-car-home-and-health-preventing-and-evaluating-potential-business-investment-benefits-life-insurance-protect-your-family-and-loved-ones-from-accidents-free-photo.jpg",
      coverage: ["Medical", "Travel", "Accident", "Luggage", "Cancellation"]
    },
  ]

  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Clients", target: 10000, key: "clients" },
    { icon: CheckCircle, number: "98%", label: "Success Rate", target: 98, key: "successRate" },
    { icon: Globe, number: "50+", label: "Countries Covered", target: 50, key: "countries" },
    { icon: Clock, number: "24/7", label: "Customer Support", target: 24, key: "support" }
  ]

  // Counting animation function
  const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
    const range = end - start
    const increment = end > start ? 1 : -1
    const stepTime = Math.abs(Math.floor(duration / range))
    let current = start
    
    const timer = setInterval(() => {
      current += increment
      callback(current)
      if (current === end) {
        clearInterval(timer)
      }
    }, stepTime)
  }

  // Stats animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats
            animateValue(0, 10000, 2000, (value) => {
              setAnimatedStats(prev => ({ ...prev, clients: value }))
            })
            
            animateValue(0, 98, 1500, (value) => {
              setAnimatedStats(prev => ({ ...prev, successRate: value }))
            })
            
            animateValue(0, 50, 1000, (value) => {
              setAnimatedStats(prev => ({ ...prev, countries: value }))
            })
            
            // Animate 24/7 text
            let current = 0
            const supportTimer = setInterval(() => {
              current += 1
              if (current <= 24) {
                setAnimatedStats(prev => ({ ...prev, support: `${current}/7` }))
              } else {
                clearInterval(supportTimer)
              }
            }, 60)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Service sections animation
  useEffect(() => {
    setIsVisible(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // Add ref to array properly
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  }

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                Your trusted partner for visas, travel, and settlement solutions — 
                transforming dreams into reality with expert guidance every step of the way.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
                {["Visa Services", "Travel Planning", "Settlement", "Insurance"].map((tag, index) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl text-sm sm:text-base"
              >
                Explore Services
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-3 sm:mb-4">
                      <StatIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {stat.key === "clients" && `${animatedStats.clients.toLocaleString()}+`}
                      {stat.key === "successRate" && `${animatedStats.successRate}%`}
                      {stat.key === "countries" && `${animatedStats.countries}+`}
                      {stat.key === "support" && animatedStats.support}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services-section" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive <span className="text-blue-600">Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                From visa applications to settlement support, we provide end-to-end solutions 
                for all your international travel and immigration needs.
              </p>
            </div>

            <div className="space-y-16 sm:space-y-24 lg:space-y-32">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.id}
                    ref={(el) => addToRefs(el, index)}
                    className={`service-section opacity-0 grid gap-8 lg:gap-12 lg:grid-cols-2 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
                        <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-100 text-blue-600 shadow-lg">
                          <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>
                        <span className="px-3 py-1 sm:px-4 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium">
                          {service.stats.successRate}% Success Rate
                        </span>
                      </div>
                      
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h2>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6">
                        {service.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
                          <div className="text-xl sm:text-2xl font-bold text-blue-600">{service.stats.successRate}%</div>
                          <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
                        </div>
                        <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
                          <div className="text-xl sm:text-2xl font-bold text-green-600">{service.stats.processingTime}</div>
                          <div className="text-xs sm:text-sm text-gray-600">Processing Time</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-lg">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                          <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                          What We Offer:
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 sm:gap-3 group">
                              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                              </div>
                              <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Countries/Airlines */}
                      {service.countries && (
                        <div className="mt-4 sm:mt-6">
                          <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Covered Countries:</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {service.countries.map(country => (
                              <span key={country} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm border border-blue-200">
                                {country}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.airlines && (
                        <div className="mt-4 sm:mt-6">
                          <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Partner Airlines:</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {service.airlines.map(airline => (
                              <span key={airline} className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-50 text-purple-700 rounded-full text-xs sm:text-sm border border-purple-200">
                                {airline}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.coverage && (
                        <div className="mt-4 sm:mt-6">
                          <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Coverage Includes:</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {service.coverage.map(item => (
                              <span key={item} className="px-2 py-1 sm:px-3 sm:py-1 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm border border-green-200">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Visual Content */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="relative">
                        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl blur-lg opacity-20"></div>
                        <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl border border-gray-100">
                          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg sm:rounded-xl overflow-hidden relative h-48 sm:h-56 lg:h-64">
                            <Image 
                              src={service.image} 
                              alt={service.title}
                              fill
                              className="object-cover rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-700"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          
                          {/* Floating Elements */}
                          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                            <Star className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" />
                          </div>
                          
                          <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
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
        
      </main>
      <Footer />

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .service-section {
          transition: all 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}