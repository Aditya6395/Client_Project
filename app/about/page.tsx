"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { Target, Eye, Award, Users, Globe, Heart, Star, Send, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className={`max-w-3xl mx-auto transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
                About Global Immigration
              </h1>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Your trusted partner for global immigration and travel solutions. 
                Expert assistance for visas, PR, study, and work abroad programs.
              </p>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className={`transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Story</h2>
                <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Founded over <strong>6 years ago</strong>, <strong>RV Global Immigration Services</strong> has grown from a small
                    consultancy into one of the most respected immigration advisory firms.
                    What began with a simple mission — helping people achieve their immigration dreams —
                    has evolved into a legacy of trust, excellence, and results.
                  </p>
                  <p>
                    Over the years, we've proudly helped more than <strong>1,500 clients</strong> from over
                    50 countries realize their goals of studying, working, and settling abroad.
                    Our certified consultants bring together decades of combined experience and
                    remain up to date with the latest immigration laws and policies.
                  </p>
                  <p>
                    We understand that immigration is about more than paperwork — it's about new opportunities,
                    reuniting families, pursuing education, and building a better life. That's why we treat
                    every client as a valued partner and provide genuine, compassionate support throughout
                    their journey.
                  </p>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { value: "6+", label: "Years of Experience" },
                  { value: "1,500+", label: "Successful Cases" },
                  { value: "98%", label: "Success Rate" },
                  { value: "50+", label: "Countries Served" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`bg-white rounded-xl border border-slate-200 p-4 sm:p-6 text-center shadow-sm transition-all duration-700 delay-${300 + index * 100} ${
                      mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } hover:scale-105 hover:shadow-md cursor-pointer`}
                  >
                    <div className="text-2xl sm:text-4xl font-bold text-blue-600">{stat.value}</div>
                    <div className="mt-2 text-xs sm:text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:gap-8 md:grid-cols-2">
            <div className={`bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } hover:shadow-lg hover:-translate-y-1`}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                To deliver exceptional immigration services that empower individuals and families
                to achieve their Canadian dreams through expert guidance, transparent communication,
                and dedicated support from start to finish.
              </p>
            </div>

            <div className={`bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } hover:shadow-lg hover:-translate-y-1`}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                To be recognized as Canada's most trusted and client-centered immigration consultancy —
                known for our integrity, innovation, and relentless commitment to helping people
                create successful new lives in Canada.
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Core Values</h2>
              <p className="mt-4 text-lg text-slate-600">
                The values that define our work and relationships with every client
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  desc: "We pursue excellence in everything we do, setting high standards of professionalism and service quality.",
                },
                {
                  icon: Heart,
                  title: "Integrity",
                  desc: "We build trust by being transparent, ethical, and honest in all our actions and client interactions.",
                },
                {
                  icon: Users,
                  title: "Client Focus",
                  desc: "Your goals are our priority. We tailor every solution to meet your unique needs and circumstances.",
                },
                {
                  icon: Globe,
                  title: "Expertise",
                  desc: "Our certified consultants bring global experience and continuously update their knowledge of Canadian immigration law.",
                },
                {
                  icon: Heart,
                  title: "Compassion",
                  desc: "We understand the emotional side of immigration and offer empathy and support at every stage of your journey.",
                },
                {
                  icon: Target,
                  title: "Results-Driven",
                  desc: "We focus on achieving real outcomes — turning dreams of moving to Canada into reality through proven strategies.",
                },
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className={`bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm transition-all duration-700 delay-${500 + index * 100} ${
                      mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } hover:scale-105 hover:shadow-lg cursor-pointer group`}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed text-sm sm:text-base">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FEEDBACK SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-2xl mx-auto mb-8 sm:mb-12 transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Share Your Experience</h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600">
                We value your feedback. Share your experience with our services.
              </p>
            </div>

            <FeedbackForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

// Feedback Form Component
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

    try {
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: process.env.ADMIN_EMAIL || 'aadityachauhan6395@gmail.com'
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit feedback')
      }

      // Show thank you popup
      setShowThankYou(true)
      
      // Reset form
      setFormData({ name: "", email: "", rating: 0, message: "", service: "" })
      
      // Hide thank you popup after 5 seconds
      setTimeout(() => {
        setShowThankYou(false)
      }, 5000)

    } catch (error) {
      console.error('Error submitting feedback:', error)
      alert('Failed to submit feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
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
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 lg:p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name & Email - Stack on mobile, side by side on larger screens */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div className="space-y-2">
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
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
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
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm font-medium text-slate-700">
              Service Used *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
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
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Your Rating *
            </label>
            <div className="flex justify-center sm:justify-start space-x-1 sm:space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className="p-1 transition-transform duration-200 hover:scale-110 active:scale-95"
                >
                  <Star
                    className={`h-6 w-6 sm:h-8 sm:w-8 ${
                      star <= formData.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-slate-300'
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
          <div className="space-y-2">
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
              placeholder="Share your experience with our services..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || formData.rating === 0}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
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
          <p className="text-xs text-slate-500 text-center">
            * Required fields. Your feedback helps us improve our services.
          </p>
        </form>
      </div>

      {/* Add custom styles for confetti animation */}
      <style jsx>{`
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
        .animate-confetti {
          animation: confetti 2s ease-in-out forwards;
        }
      `}</style>
    </>
  )
}