"use client"

import { useState, useRef, useEffect } from "react"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, X } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupAnimation, setPopupAnimation] = useState("")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: formData.subject || "General Inquiry",
          message: formData.message.trim(),
        }),
      });

      const result = await res.json();
      console.log("Contact form response:", result);

      if (res.ok) {
        setSubmitMessage("✅ Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setPopupAnimation("animate-out fade-out zoom-out")
          setTimeout(() => setShowPopup(false), 300)
        }, 2000);
      } else {
        setSubmitMessage(`❌ Something went wrong: ${result.error || "Please try again."}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitMessage("⚠️ Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const openPopup = () => {
    setShowPopup(true);
    setPopupAnimation("animate-in fade-in zoom-in duration-300")
    setSubmitMessage("");
  }

  const closePopup = () => {
    setPopupAnimation("animate-out fade-out zoom-out duration-300")
    setTimeout(() => {
      setShowPopup(false);
      setSubmitMessage("");
    }, 300)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "A-1/77 Chanakya Place Gali No 11\nJanak Puri Part 1\nNew Delhi 110059",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100",
      delay: 0
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 88600 28328",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100",
      delay: 100
    },
    {
      icon: Mail,
      title: "Email",
      content: "Visavikassinghji@gmail.com",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
      delay: 200
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-100",
      delay: 300
    }
  ]

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section with Enhanced Animations */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 sm:py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-indigo-200 rounded-full blur-2xl opacity-20 animate-bounce"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 animate-in slide-in-from-top duration-1000">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full animate-in slide-in-from-left duration-1000 delay-300"></div>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed animate-in fade-in duration-1000 delay-500">
                Have questions about your immigration options? We're here to help.
                Reach out to our expert team today.
              </p>
              
              {/* Quick Action Button */}
              <button
                onClick={openPopup}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-medium text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Send className="h-5 w-5" />
                Quick Contact Form
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={sectionRef} className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div className={`space-y-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Get in Touch
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Fill out the form and our team will respond to your inquiry within 1 business day.
                    For urgent matters, please call us directly.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg group ${
                        isVisible ? 'animate-in slide-in-from-left duration-500' : ''
                      }`}
                      style={{
                        animationDelay: `${item.delay}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <div className={`flex-shrink-0 h-12 w-12 rounded-lg ${item.bgColor} flex items-center justify-center text-white bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  {/* Form Background Effects */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                    <p className="text-slate-600 mb-6">We'll get back to you within 24 hours</p>

                    {submitMessage && (
                      <div className={`mb-6 p-4 rounded-lg border transition-all duration-500 animate-in slide-in-from-top ${
                        submitMessage.includes('✅') 
                          ? 'bg-green-50 border-green-200 text-green-800' 
                          : 'bg-red-50 border-red-200 text-red-800'
                      }`}>
                        <div className="flex items-center gap-2">
                          {submitMessage.includes('✅') ? (
                            <CheckCircle className="h-5 w-5 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                          )}
                          <span>{submitMessage}</span>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 relative">
                      <div className="animate-in fade-in duration-500 delay-100">
                        <label htmlFor="name" className="block text-sm font-medium text-slate-800 mb-2">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                          placeholder="Enter Name"
                        />
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="animate-in fade-in duration-500 delay-200">
                          <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-2">
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                            placeholder="user@example.com"
                          />
                        </div>
                        <div className="animate-in fade-in duration-500 delay-300">
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-800 mb-2">
                            Phone
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                            placeholder="+91 88600 28328"
                          />
                        </div>
                      </div>

                      <div className="animate-in fade-in duration-500 delay-400">
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-800 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                        >
                          <option value="">Select a subject</option>
                          <option>General Inquiry</option>
                          <option>Work Visa Question</option>
                          <option>Study Permit Question</option>
                          <option>Permanent Residency</option>
                          <option>Family Sponsorship</option>
                          <option>Citizenship</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="animate-in fade-in duration-500 delay-500">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-800 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-medium text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-500 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-2xl active:scale-95 group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Find Our Office
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Visit us at our conveniently located office in Janak Puri, New Delhi. 
                We're here to help you with all your immigration needs.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="w-full h-96 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.489391790881!2d77.0853899753381!3d28..62098707565433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b7e5b9c5a5f%3A0xfc9e3c6f5d1c1f1!2sJanakpuri%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Office Location - Janak Puri, New Delhi"
                  className="filter grayscale-0 hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Map Info Card */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Address</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A-1/77 Chanakya Place Gali No 11<br />
                  Janak Puri Part 1<br />
                  New Delhi 110059
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Call Us</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  +91 88600 28328
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Open Hours</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Mon-Fri: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 animate-in fade-in duration-1000">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-slate-600 mb-8 animate-in fade-in duration-1000 delay-300">
                Let's discuss your immigration goals and find the best pathway for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-1000 delay-500">
                <button
                  onClick={openPopup}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-medium text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Send className="h-5 w-5" />
                  Contact Us Now
                </button>
                <a
                  href="tel:+918860028328"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-600 px-8 py-4 text-base font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Popup Form with Enhanced Animations */}
      {showPopup && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm ${popupAnimation.includes('animate-in') ? 'animate-in fade-in duration-300' : 'animate-out fade-out duration-300'}`}>
          <div className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform ${popupAnimation} duration-300`}>
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
            >
              <X className="h-5 w-5 text-slate-600" />
            </button>

            {/* Popup Content */}
            <div className="p-6">
              <div className="text-center mb-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Contact Us</h3>
                <p className="text-slate-600">Fill in your details and we'll contact you shortly</p>
              </div>

              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg border transition-all duration-500 animate-in slide-in-from-top ${
                  submitMessage.includes('✅') 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center gap-2">
                    {submitMessage.includes('✅') ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{submitMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="popup-name" className="block text-sm font-medium text-slate-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="popup-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                    placeholder="Enter Name"
                  />
                </div>

                <div>
                  <label htmlFor="popup-email" className="block text-sm font-medium text-slate-800 mb-2">
                    Email *
                  </label>
                  <input
                    id="popup-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                    placeholder="user@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="popup-phone" className="block text-sm font-medium text-slate-800 mb-2">
                    Phone *
                  </label>
                  <input
                    id="popup-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                    placeholder="+91 88600 28328"
                  />
                </div>

                <div>
                  <label htmlFor="popup-subject" className="block text-sm font-medium text-slate-800 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="popup-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                  >
                    <option value="">Select Service</option>
                    <option>Work Visa</option>
                    <option>Study Permit</option>
                    <option>Permanent Residency</option>
                    <option>Family Sponsorship</option>
                    <option>Citizenship</option>
                    <option>Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-medium text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    "Contact Us Now"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}