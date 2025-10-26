// components/site/auto-popup.tsx
"use client"

import { useState, useEffect } from "react"
import { X, Send, CheckCircle, AlertCircle, Star, Sparkles, Plane, Globe, GraduationCap, Briefcase } from "lucide-react"

export default function AutoPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [popupAnimation, setPopupAnimation] = useState("")
  const [hasShown, setHasShown] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: ""
  })

  useEffect(() => {
    const popupShown = sessionStorage.getItem('autoPopupShown')
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true)
        setPopupAnimation("popup-enter")
        sessionStorage.setItem('autoPopupShown', 'true')
        setHasShown(true)
      }, 20000)

      return () => clearTimeout(timer)
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
          subject: formData.service || "General Inquiry - Auto Popup",
          message: `New inquiry from auto popup for ${formData.service || 'General'} service`,
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
          setPopupAnimation("popup-exit")
          setTimeout(() => setShowPopup(false), 500)
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

  const closePopup = () => {
    setPopupAnimation("popup-exit")
    setTimeout(() => {
      setShowPopup(false);
      setSubmitMessage("");
    }, 500)
  }

  if (!showPopup) return null

  return (
    <>
      {/* Animated Backdrop */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 popup-backdrop ${popupAnimation}`}>
        
        {/* Floating Icons in Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-icon" style={{ top: '20%', left: '10%', animationDelay: '0s' }}>
            <Plane className="text-blue-400/30" />
          </div>
          <div className="floating-icon" style={{ top: '60%', left: '85%', animationDelay: '1s' }}>
            <Globe className="text-green-400/30" />
          </div>
          <div className="floating-icon" style={{ top: '80%', left: '15%', animationDelay: '2s' }}>
            <GraduationCap className="text-purple-400/30" />
          </div>
          <div className="floating-icon" style={{ top: '30%', left: '80%', animationDelay: '1.5s' }}>
            <Briefcase className="text-orange-400/30" />
          </div>
        </div>

        {/* Main Popup Container */}
        <div className={`relative w-full max-w-md popup-container ${popupAnimation}`}>
          
          {/* Sparkle Effects */}
          <div className="sparkle sparkle-1"></div>
          <div className="sparkle sparkle-2"></div>
          <div className="sparkle sparkle-3"></div>
          
          {/* Popup Card with Glass Morphism */}
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden popup-card">
            
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-sm animate-gradient-border"></div>
            
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-90 border border-gray-200 close-btn"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>

            {/* Header Section with Animation */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 text-center relative overflow-hidden header-section">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
              </div>
              
              {/* Sparkle Icon */}
              <div className="absolute top-3 left-3 animate-spin-slow">
                <Sparkles className="h-5 w-5 text-yellow-300" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 relative z-10 header-text">
                Start Your Journey
              </h3>
              <p className="text-blue-100 text-sm relative z-10">
                Get in touch with our immigration experts
              </p>

              {/* Rating Stars */}
              <div className="flex items-center justify-center gap-1 mt-3 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-300 fill-current animate-pulse" style={{animationDelay: `${star * 0.1}s`}} />
                ))}
                <span className="text-blue-100 text-xs ml-2">4.9/5</span>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-6 form-section">
              {submitMessage && (
                <div className={`mb-4 p-3 rounded-xl border transition-all duration-500 message-animate ${
                  submitMessage.includes('✅') 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800 shadow-lg' 
                    : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200 text-red-800 shadow-lg'
                }`}>
                  <div className="flex items-center gap-2">
                    {submitMessage.includes('✅') ? (
                      <CheckCircle className="h-4 w-4 flex-shrink-0 animate-bounce" />
                    ) : (
                      <AlertCircle className="h-4 w-4 flex-shrink-0 animate-pulse" />
                    )}
                    <span className="text-sm font-medium">{submitMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div className="field-animate" style={{animationDelay: '0.1s'}}>
                  <label htmlFor="auto-name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="auto-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/70 backdrop-blur-sm input-field"
                    placeholder="Enter Name"
                  />
                </div>

                {/* Email Field */}
                <div className="field-animate" style={{animationDelay: '0.2s'}}>
                  <label htmlFor="auto-email" className="block text-sm font-semibold text-gray-800 mb-2">
                    Email *
                  </label>
                  <input
                    id="auto-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/70 backdrop-blur-sm input-field"
                    placeholder="user@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div className="field-animate" style={{animationDelay: '0.3s'}}>
                  <label htmlFor="auto-phone" className="block text-sm font-semibold text-gray-800 mb-2">
                    Phone *
                  </label>
                  <input
                    id="auto-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/70 backdrop-blur-sm input-field"
                    placeholder="+91 88600 28328"
                  />
                </div>

                {/* Service Field */}
                <div className="field-animate" style={{animationDelay: '0.4s'}}>
                  <label htmlFor="auto-service" className="block text-sm font-semibold text-gray-800 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="auto-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 focus:shadow-lg input-field"
                  >
                    <option value="">Select Service</option>
                    <option>Work Visa</option>
                    <option>Study Permit</option>
                    <option>Permanent Residency</option>
                    <option>Family Sponsorship</option>
                    <option>Citizenship</option>
                    <option>Tourist Visa</option>
                    <option>Business Visa</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="field-animate" style={{animationDelay: '0.5s'}}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-sm font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed shadow-lg hover:shadow-xl submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="animate-pulse">Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Contact Us Now</span>
                        <Send className="h-4 w-4 animate-bounce-horizontal" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Advanced Animations */}
      <style jsx global>{`
        .popup-backdrop {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
        }

        .popup-backdrop.popup-enter {
          animation: backdropEnter 0.6s ease-out;
        }

        .popup-backdrop.popup-exit {
          animation: backdropExit 0.5s ease-in;
        }

        .popup-container.popup-enter {
          animation: popupEnter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .popup-container.popup-exit {
          animation: popupExit 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .popup-card {
          transform-origin: center;
        }

        .header-section {
          position: relative;
          overflow: hidden;
        }

        .header-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }

        .header-text {
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        .floating-icon {
          position: absolute;
          animation: float 6s ease-in-out infinite;
          opacity: 0.4;
        }

        .sparkle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          animation: sparkle 2s infinite;
          opacity: 0;
        }

        .sparkle-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .sparkle-2 { top: 20%; right: 15%; animation-delay: 0.5s; }
        .sparkle-3 { bottom: 30%; left: 20%; animation-delay: 1s; }

        .field-animate {
          animation: slideInUp 0.6s ease-out both;
        }

        .input-field {
          transition: all 0.3s ease;
        }

        .input-field:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
        }

        .submit-btn {
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .close-btn {
          animation: rotateIn 0.5s ease-out 0.3s both;
        }

        .message-animate {
          animation: messageSlide 0.5s ease-out;
        }

        /* Keyframes */
        @keyframes backdropEnter {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes backdropExit {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes popupEnter {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          50% {
            transform: scale(1.05) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes popupExit {
          0% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: scale(0.5) rotate(10deg);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        @keyframes textGlow {
          from { text-shadow: 0 0 10px rgba(255,255,255,0.5); }
          to { text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradient-border 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        .animate-bounce-horizontal {
          animation: bounceHorizontal 1s infinite;
        }

        @keyframes bounceHorizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}