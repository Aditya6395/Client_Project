"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { Target, Eye, Award, Users, Globe, Heart, Star, Send, CheckCircle, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

// Core values array moved to the top to avoid initialization issues
const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue excellence in everything we do, setting high standards of professionalism and service quality.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We build trust by being transparent, ethical, and honest in all our actions and client interactions.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600"
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your goals are our priority. We tailor every solution to meet your unique needs and circumstances.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600"
  },
  {
    icon: Globe,
    title: "Expertise",
    description: "Our certified consultants bring global experience and continuously update their knowledge.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600"
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "We understand the emotional side of immigration and offer empathy and support at every stage.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    textColor: "text-pink-600"
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on achieving real outcomes — turning dreams of moving abroad into reality.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600"
  }
]

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto slide functionality
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % coreValues.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % coreValues.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + coreValues.length) % coreValues.length)
  }

  const goToSlide = (index: number) => {
    setActiveSlide(index)
  }

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* HERO SECTION WITH CORE VALUES SLIDESHOW */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-28">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left Content */}
              <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm animate-fade-in">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 mr-2" />
                    <span className="text-xs sm:text-sm font-medium text-blue-300">Trusted Immigration Partner</span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight animate-slide-up">
                    Your Journey
                    <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                      Starts Here
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed animate-fade-in delay-300">
                    Empowering dreams through expert immigration and travel solutions. 
                    Your trusted partner for global opportunities and seamless transitions.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 animate-slide-up delay-500">
                  <button className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25">
                    Get Started Today
                  </button>
                  <button className="border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95">
                    Learn More
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 animate-fade-in delay-700">
                  {[
                    { value: "6+", label: "Years Experience" },
                    { value: "1.5K+", label: "Happy Clients" },
                    { value: "98%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <div key={stat.label} className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white animate-count-up">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Advanced Core Values Slideshow */}
              <div className={`relative transition-all duration-1000 delay-300 ease-out ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                {/* Main Slideshow Container */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl animate-float">
                  {/* Slideshow Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 animate-fade-in">Our Core Values</h2>
                    <p className="text-slate-400 text-sm sm:text-base">The principles that guide our success</p>
                  </div>

                  {/* Slideshow Controls */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <button
                      onClick={() => setAutoPlay(!autoPlay)}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
                    >
                      {autoPlay ? (
                        <Pause className="h-4 w-4 text-white" />
                      ) : (
                        <Play className="h-4 w-4 text-white" />
                      )}
                    </button>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
                      >
                        <ChevronLeft className="h-4 w-4 text-white" />
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
                      >
                        <ChevronRight className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Slideshow Content */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-xl lg:rounded-2xl">
                    {coreValues.map((value, index) => {
                      const Icon = value.icon
                      return (
                        <div
                          key={value.title}
                          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === activeSlide
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-95 pointer-events-none'
                          }`}
                        >
                          <div className={`h-full rounded-xl lg:rounded-2xl bg-gradient-to-br ${value.color} p-6 sm:p-8 flex flex-col justify-center items-center text-center text-white`}>
                            {/* Animated Icon */}
                            <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl ${value.bgColor} transform transition-all duration-500 ${
                              index === activeSlide ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                            }`}>
                              <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${value.textColor}`} />
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{value.title}</h3>
                            <p className="text-white/90 leading-relaxed text-sm sm:text-base">{value.description}</p>
                            
                            {/* Progress Bar */}
                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 h-1 bg-white/20 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-white rounded-full transition-all duration-4000 ${
                                  index === activeSlide && autoPlay ? 'w-full' : 'w-0'
                                }`}
                                style={{
                                  transition: index === activeSlide && autoPlay ? 'width 4s linear' : 'none'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
                    {coreValues.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                          index === activeSlide
                            ? 'bg-white scale-125'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-400 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-2 items-center">
              <div className={`transition-all duration-700 delay-200 ease-out ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 animate-slide-up">
                  Our Story
                </h2>
                <div className="space-y-4 sm:space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                  <p className="animate-fade-in delay-300">
                    Founded over <strong className="text-blue-600">6 years ago</strong>, <strong className="text-blue-600">RV Global Immigration Services</strong> has grown from a small
                    consultancy into one of the most respected immigration advisory firms.
                    What began with a simple mission — helping people achieve their immigration dreams —
                    has evolved into a legacy of trust, excellence, and results.
                  </p>
                  <p className="animate-fade-in delay-400">
                    Over the years, we've proudly helped more than <strong className="text-blue-600">1,500 clients</strong> from over
                    50 countries realize their goals of studying, working, and settling abroad.
                    Our certified consultants bring together decades of combined experience and
                    remain up to date with the latest immigration laws and policies.
                  </p>
                  <p className="animate-fade-in delay-500">
                    We understand that immigration is about more than paperwork — it's about new opportunities,
                    reuniting families, pursuing education, and building a better life. That's why we treat
                    every client as a valued partner and provide genuine, compassionate support throughout
                    their journey.
                  </p>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 animate-stagger">
                {[
                  { value: "6+", label: "Years of Experience" },
                  { value: "1,500+", label: "Successful Cases" },
                  { value: "98%", label: "Success Rate" },
                  { value: "50+", label: "Countries Served" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`bg-white rounded-xl border border-slate-200 p-4 sm:p-6 text-center shadow-sm transition-all duration-500 ease-out ${
                      mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } hover:scale-105 hover:shadow-lg hover:border-blue-200 cursor-pointer group`}
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 lg:gap-12 md:grid-cols-2 animate-stagger">
              <div className={`bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm transition-all duration-700 ease-out delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } hover:shadow-xl hover:-translate-y-2 group`}>
                <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Our Mission
                </h2>
                <div className="space-y-3 sm:space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  <p className="animate-fade-in delay-300">
                    Our mission is to provide exceptional, reliable, and ethical immigration and travel services that help individuals and families realize their global aspirations. We are committed to guiding our clients through every stage of their journey — from consultation to settlement — with expertise, transparency, and personalized care.
                  </p>
                  <p className="animate-fade-in delay-400">
                    By combining in-depth knowledge of international immigration laws and travel processes with a client-centered approach, we aim to make global mobility seamless, stress-free, and accessible. Our goal is to empower people to explore new opportunities, build better futures, and connect across borders with confidence and peace of mind.
                  </p>
                </div>
              </div>

              <div className={`bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm transition-all duration-700 ease-out delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } hover:shadow-xl hover:-translate-y-2 group`}>
                <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Eye className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Our Vision
                </h2>
                <div className="space-y-3 sm:space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  <p className="italic text-blue-600 font-semibold animate-fade-in delay-300">
                    "Guiding You Beyond Borders."
                  </p>
                  <p className="animate-fade-in delay-400">
                    Our vision is to be recognized globally as the most trusted and client-focused immigration and travel consultancy, renowned for our integrity, innovation, and unwavering dedication to excellence. We strive to set new standards in the field of global mobility by delivering personalized solutions that simplify complex immigration and travel processes, ensuring every client's journey is smooth, transparent, and successful.
                  </p>
                  <p className="animate-fade-in delay-500">
                    We aim to empower individuals and families to explore new opportunities, embrace cultural diversity, and establish fulfilling lives across borders. Through continuous improvement, technological advancement, and compassionate service, we aspire to build a world where borders are not barriers but bridges to growth, connection, and opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEEDBACK SECTION */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-2xl mx-auto mb-8 sm:mb-12 transition-all duration-700 ease-out delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 animate-slide-up">
                Share Your Experience
              </h2>
              <p className="text-base sm:text-lg text-slate-600 animate-fade-in delay-300">
                We value your feedback. Share your experience with our services.
              </p>
            </div>

            <FeedbackForm />
          </div>
        </section>
      </main>
      <Footer />

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes count-up {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-count-up {
          animation: count-up 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-confetti {
          animation: confetti 2s ease-in-out forwards;
        }

        .animate-stagger > * {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-stagger > *:nth-child(1) { animation-delay: 0.1s; }
        .animate-stagger > *:nth-child(2) { animation-delay: 0.2s; }
        .animate-stagger > *:nth-child(3) { animation-delay: 0.3s; }
        .animate-stagger > *:nth-child(4) { animation-delay: 0.4s; }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </>
  )
}

// Enhanced Feedback Form Component
function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    message: "",
    service: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Show thank you popup
    setShowThankYou(true)
    
    // Reset form
    setFormData({ name: "", email: "", rating: 0, message: "", service: "" })
    
    // Hide thank you popup after 5 seconds
    setTimeout(() => {
      setShowThankYou(false)
    }, 5000)

    setIsSubmitting(false)
  }

  return (
    <>
      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-auto transform animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
            <div className="text-center">
              {/* Animated Check Icon */}
              <div className="mx-auto flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-green-100 mb-4 animate-in zoom-in-50 duration-300 delay-150">
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 animate-in scale-110 duration-300 delay-300" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 animate-in fade-in duration-500 delay-300">
                Thank You!
              </h3>
              <p className="text-slate-600 mb-6 animate-in fade-in duration-500 delay-400">
                Your feedback has been submitted successfully. We appreciate you taking the time to share your experience with us.
              </p>
              
              {/* Confetti Animation Background */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 animate-confetti"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][Math.floor(Math.random() * 5)]
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Form */}
      <div className={`bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 lg:p-8 shadow-sm transition-all duration-700 ease-out ${
        mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name & Email - Stack on mobile, side by side on larger screens */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div className="space-y-2 animate-fade-in delay-300">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base hover:border-slate-400"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2 animate-fade-in delay-400">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base hover:border-slate-400"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="space-y-2 animate-fade-in delay-500">
            <label htmlFor="service" className="block text-sm font-medium text-slate-700">
              Service Used *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base hover:border-slate-400"
            >
              <option value="">Select a service</option>
              <option value="student-visa">Student Visa</option>
              <option value="work-visa">Work Visa</option>
              <option value="pr-application">Permanent Residency</option>
              <option value="visitor-visa">Visitor Visa</option>
              <option value="citizenship">Citizenship</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Star Rating */}
          <div className="space-y-2 animate-fade-in delay-600">
            <label className="block text-sm font-medium text-slate-700">
              Your Rating *
            </label>
            <div className="flex justify-center sm:justify-start space-x-1 sm:space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className="p-1 transition-all duration-200 hover:scale-110 active:scale-95 transform"
                >
                  <Star
                    className={`h-6 w-6 sm:h-8 sm:w-8 transition-all duration-300 ${
                      star <= formData.rating
                        ? 'fill-yellow-400 text-yellow-400 scale-110'
                        : 'text-slate-300 hover:text-yellow-200'
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 text-center sm:text-left mt-1">
              {formData.rating > 0 ? `You rated: ${formData.rating} star${formData.rating > 1 ? 's' : ''}` : 'Tap stars to rate'}
            </p>
          </div>

          {/* Message Textarea */}
          <div className="space-y-2 animate-fade-in delay-700">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Your Feedback *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base hover:border-slate-400"
              placeholder="Share your experience with our services..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || formData.rating === 0}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 text-sm sm:text-base shadow-lg hover:shadow-blue-500/25 animate-fade-in delay-800"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Submit Feedback</span>
              </>
            )}
          </button>

          {/* Form Note */}
          <p className="text-xs text-slate-500 text-center animate-fade-in delay-900">
            * Required fields. Your feedback helps us improve our services.
          </p>
        </form>
      </div>
    </>
  )
}