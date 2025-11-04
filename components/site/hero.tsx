"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Send, X, CheckCircle, AlertCircle } from "lucide-react"

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [popupAnimation, setPopupAnimation] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: ""
  })
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Ensure video plays continuously
    const video = videoRef.current
    if (video) {
      video.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
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
          subject: formData.service || "General Inquiry - Hero Section",
          message: `New inquiry from hero section for ${formData.service || 'General'} service`,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setSubmitMessage("✅ Thank you! We'll contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: ""
        });
        setTimeout(() => {
          setPopupAnimation("animate-out fade-out zoom-out")
          setTimeout(() => setShowPopup(false), 300)
        }, 2000);
      } else {
        setSubmitMessage(`❌ Something went wrong: ${result.error || "Please try again."}`);
      }
    } catch (error) {
      setSubmitMessage("⚠️ Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Continuous Flying Airplane Video Background */}
        <div className="absolute inset-0 -z-10">
          {/* HD Flying Airplane Video - Continuous & Smooth */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="object-cover w-full h-full min-w-[100vw] min-h-[100vh]"
            style={{ 
              filter: "brightness(0.8) contrast(1.1)",
              transform: "scale(1.05)" // Slight zoom to prevent edges
            }}
          >
            <source src="/videos/fly-aeroplane.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900" />
          </video>
          
          {/* Enhanced gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/50 to-cyan-800/40" />
          
          {/* Stronger overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Reduced floating effects for cleaner look */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] sm:w-[600px] sm:h-[600px] bg-blue-400/10 blur-3xl rounded-full" />
          <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] sm:w-[400px] sm:h-[400px] bg-cyan-300/10 blur-3xl rounded-full" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Main content with enhanced visibility */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          {/* Headline with enhanced visibility */}
          <div className={`flex flex-col items-center justify-center w-full transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight text-center drop-shadow-2xl">
              RV Global Immigration{" "}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent block sm:inline drop-shadow-lg">
                Services
              </span>
            </h1>
          </div>

          {/* Subtitle with enhanced contrast */}
          <div className={`flex justify-center w-full mt-6 sm:mt-8 transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
              <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-3xl text-center drop-shadow-lg">
                Expert guidance for{" "}
                <span className="text-cyan-200 font-bold drop-shadow-md">work visas</span>,{" "}
                <span className="text-cyan-200 font-bold drop-shadow-md">study permits</span>,{" "}
                <span className="text-cyan-200 font-bold drop-shadow-md">permanent residency</span>, and{" "}
                <span className="text-cyan-200 font-bold drop-shadow-md">citizenship</span>.
                <br className="hidden sm:block" />
                <span className="text-white text-base sm:text-lg mt-3 block font-medium">
                  Navigate the complex immigration process with clarity and confidence.
                </span>
              </p>
            
          </div>

          {/* Buttons with enhanced visibility */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4 transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={openPopup}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:from-blue-600 hover:to-cyan-600 w-full sm:w-auto backdrop-blur-sm border border-white/20"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300 drop-shadow-md">
                Contact Us
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-md" />
            </button>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/90 px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-white hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300 drop-shadow-md">
                Explore Services
              </span>
            </Link>
          </div>

          {/* Stats with enhanced visibility */}
          <div className={`flex justify-center w-full mt-12 sm:mt-16 transition-all duration-700 ease-out delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl w-full px-4">
              {[
                { value: "6+", label: "Years Experience" },
                { value: "1,500+", label: "Cases Approved" },
                { value: "98%", label: "Success Rate" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/25 backdrop-blur-lg rounded-2xl p-4 sm:p-6 text-center border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center"
                  style={{ 
                    animationDelay: `${index * 100 + 600}ms`,
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-lg">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-bold text-white uppercase tracking-wide text-center drop-shadow-md">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Popup Form */}
      {showPopup && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl ${popupAnimation.includes('animate-in') ? 'animate-in fade-in duration-300 ease-out' : 'animate-out fade-out duration-300 ease-out'}`}>
          <div className={`relative bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl w-full max-w-md transform ${popupAnimation} duration-300 ease-out mx-auto border border-white/20`}>
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-90"
            >
              <X className="h-5 w-5 text-slate-600" />
            </button>

            {/* Popup Content */}
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6 animate-in fade-in duration-500 delay-200">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Start Your Journey
                </h3>
                <p className="text-slate-600">
                  Get in touch with our immigration experts
                </p>
              </div>

              {submitMessage && (
                <div className={`mb-6 p-4 rounded-xl border transition-all duration-300 animate-in slide-in-from-top ${
                  submitMessage.includes('✅') 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800' 
                    : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200 text-red-800'
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

              <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-500 delay-300">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="hero-name" className="block text-sm font-medium text-slate-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="hero-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 hover:border-slate-400 focus:shadow-lg"
                      placeholder="Enter Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-email" className="block text-sm font-medium text-slate-800 mb-2">
                      Email *
                    </label>
                    <input
                      id="hero-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 hover:border-slate-400 focus:shadow-lg"
                      placeholder="user@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-phone" className="block text-sm font-medium text-slate-800 mb-2">
                      Phone *
                    </label>
                    <input
                      id="hero-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 hover:border-slate-400 focus:shadow-lg"
                      placeholder="+91 88600 28328"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-service" className="block text-sm font-medium text-slate-800 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="hero-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition-all duration-200 hover:border-slate-400 focus:shadow-lg"
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
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-sm font-medium text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Contact Us Now
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Video error handling script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const video = document.querySelector('video');
              if (video) {
                video.play().catch(function(error) {
                  console.log('Video autoplay prevented:', error);
                  // Add play button overlay if autoplay fails
                  const playButton = document.createElement('button');
                  playButton.innerHTML = '▶ Play Video';
                  playButton.style.cssText = \`
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(0,0,0,0.7);
                    color: white;
                    border: 2px solid white;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    z-index: 10;
                  \`;
                  playButton.onclick = function() {
                    video.play();
                    playButton.remove();
                  };
                  video.parentNode.appendChild(playButton);
                });
              }
            });
          `
        }}
      />
    </>
  )
}