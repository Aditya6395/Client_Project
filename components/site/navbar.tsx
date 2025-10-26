"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
        setShowAllServices(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/about", label: "About Us" },
    { href: "/process", label: "Our Process" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { id: "tourist-visa", title: "Tourist Visa", icon: "🌍" },
    { id: "pr", title: "Permanent Residency (PR)", icon: "🏠" },
    { id: "spouse-visa", title: "Spouse Visa", icon: "💑" },
    { id: "study-visa", title: "Study Visa", icon: "🎓" },
    { id: "business-visa", title: "Business Visa", icon: "💼" },
    { id: "flight-ticketing", title: "Flight Ticketing", icon: "✈️" },
    { id: "travel-insurance", title: "Travel Insurance", icon: "🛡️" },
    { id: "work-visa", title: "Work Visa", icon: "👨‍💼" },
  ];

  // Get first 4 services for initial display
  const initialServices = services.slice(0, 4);
  const remainingServices = services.slice(4);

  const handleServicesMouseLeave = () => {
    // Don't close immediately to allow clicking on "View More"
    setTimeout(() => {
      if (!dropdownRef.current?.matches(':hover')) {
        setIsServicesOpen(false);
        setShowAllServices(false);
      }
    }, 100);
  };

  // FIXED: Mobile view more handler
  const handleMobileViewMore = () => {
    setShowAllServices(!showAllServices);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-2xl backdrop-blur-lg bg-opacity-95 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO + BRAND */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group/logo"
            onMouseEnter={() => setActiveHover('logo')}
            onMouseLeave={() => setActiveHover(null)}
          >
            <div className="w-[65px] h-[65px] rounded-full overflow-hidden bg-white shadow-2xl flex-shrink-0 animate-bounce-logo hover:scale-110 hover:rotate-12 transition-all duration-500 ease-out group-hover/logo:shadow-emerald-300">
              <Image
                src="/IMG-20251014-WA0007.jpg"
                alt="RV Global Immigration Services"
                width={65}
                height={65}
                className="rounded-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            <span className="text-2xl sm:text-3xl font-serif text-white group-hover/logo:text-amber-300 transition-all duration-500 ease-out transform group-hover/logo:translate-x-1">
              RV Global Immigration
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex lg:items-center lg:gap-8" ref={dropdownRef}>
            {menuItems.map((item) => (
              <div key={item.href} className="relative group/nav-item">
                <Link
                  href={item.href}
                  className="group relative text-lg font-semibold text-white transition-all duration-500 flex items-center gap-1 py-2 px-3 rounded-xl"
                  onMouseEnter={() => {
                    setActiveHover(item.label);
                    if (item.hasDropdown) {
                      setIsServicesOpen(true);
                      setShowAllServices(false);
                    }
                  }}
                  onMouseLeave={() => {
                    setActiveHover(null);
                  }}
                  onClick={() => {
                    if (item.hasDropdown) setIsServicesOpen(!isServicesOpen);
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-red-400/20 rounded-xl transition-all duration-500 ease-out ${
                    activeHover === item.label ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
                  }`}></div>
                  
                  <span className={`relative z-10 transition-all duration-300 flex items-center gap-2 ${
                    activeHover === item.label 
                      ? 'text-amber-300 transform translate-y-[-2px] drop-shadow-lg' 
                      : 'text-white hover:text-amber-200'
                  }`}>
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-all duration-500 ${
                          isServicesOpen ? "rotate-180 text-amber-300" : "group-hover/nav-item:rotate-180"
                        }`}
                      />
                    )}
                  </span>

                  {/* Animated Underline */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-full transition-all duration-700 ease-out ${
                    activeHover === item.label ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}></div>

                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-all duration-1000 ${
                      activeHover === item.label ? 'translate-x-full' : '-translate-x-full'
                    }`}></div>
                  </div>
                </Link>

                {/* Advanced Services Dropdown */}
                {item.hasDropdown && isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl py-4 border border-white/20 animate-in fade-in-0 zoom-in-95 duration-300 overflow-hidden"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    {/* Dropdown Header */}
                    <div className="px-5 py-3 border-b border-gray-100">
                      <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                        Our Services
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">Professional immigration solutions</p>
                    </div>

                    {/* Services Grid */}
                    <div className="py-2">
                      {/* Initial Services */}
                      {initialServices.map((srv, index) => (
                        <Link
                          key={srv.id}
                          href={`/services#${srv.id}`}
                          className="group/service flex items-center gap-4 px-4 py-3 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 hover:text-emerald-600 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg border border-transparent hover:border-emerald-100 mx-2"
                          onClick={() => {
                            setIsServicesOpen(false);
                            setShowAllServices(false);
                          }}
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animation: `slideInRight 0.3s ease-out ${index * 50}ms both`
                          }}
                        >
                          <span className="text-2xl transition-transform duration-300 group-hover/service:scale-125 group-hover/service:rotate-12">
                            {srv.icon}
                          </span>
                          <span className="font-medium transition-all duration-300 group-hover/service:font-semibold">
                            {srv.title}
                          </span>
                          <div className="ml-auto opacity-0 group-hover/service:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover/service:translate-x-0">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          </div>
                        </Link>
                      ))}

                      {/* Remaining Services with expand/collapse */}
                      {remainingServices.length > 0 && (
                        <>
                          {/* Show remaining services when expanded */}
                          {showAllServices && remainingServices.map((srv, index) => (
                            <Link
                              key={srv.id}
                              href={`/services#${srv.id}`}
                              className="group/service flex items-center gap-4 px-4 py-3 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 hover:text-emerald-600 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg border border-transparent hover:border-emerald-100 mx-2"
                              onClick={() => {
                                setIsServicesOpen(false);
                                setShowAllServices(false);
                              }}
                              style={{
                                animationDelay: `${index * 50}ms`,
                                animation: `slideInRight 0.3s ease-out ${index * 50}ms both`
                              }}
                            >
                              <span className="text-2xl transition-transform duration-300 group-hover/service:scale-125 group-hover/service:rotate-12">
                                {srv.icon}
                              </span>
                              <span className="font-medium transition-all duration-300 group-hover/service:font-semibold">
                                {srv.title}
                              </span>
                              <div className="ml-auto opacity-0 group-hover/service:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover/service:translate-x-0">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                              </div>
                            </Link>
                          ))}

                          {/* View More / View Less Button */}
                          <button
                            onClick={() => setShowAllServices(!showAllServices)}
                            className="group/view-more flex items-center justify-between w-full px-4 py-3 text-slate-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 hover:text-emerald-600 transition-all duration-300 mx-2 rounded-xl border border-transparent hover:border-emerald-100"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">📋</span>
                              <span className="font-medium">
                                {showAllServices ? 'View Less' : `View ${remainingServices.length} More`}
                              </span>
                            </div>
                            <ChevronRight 
                              className={`h-4 w-4 transition-transform duration-300 ${
                                showAllServices ? 'rotate-90' : ''
                              } group-hover/view-more:translate-x-1`} 
                            />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 text-white hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-7 w-7 text-white animate-spin-in" />
            ) : (
              <Menu className="h-7 w-7 text-white animate-pulse hover:animate-none" />
            )}
          </button>
        </div>

        {/* ADVANCED MOBILE MENU - FIXED VIEW MORE FUNCTIONALITY */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 mx-2 mt-2 overflow-hidden animate-in slide-in-from-top-0 duration-300">
            {/* Mobile Menu Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 p-4">
              <h3 className="text-white font-bold text-lg">Navigation Menu</h3>
            </div>
            
            <div className="p-3 space-y-1">
              {menuItems.map((item, index) => (
                <div key={item.href} className="overflow-hidden">
                  {!item.hasDropdown ? (
                    <Link
                      href={item.href}
                      className="block px-4 py-4 text-lg font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 hover:text-emerald-600 rounded-xl transition-all duration-300 transform hover:translate-x-3 hover:shadow-lg border border-transparent hover:border-emerald-100"
                      onClick={() => setIsOpen(false)}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: `slideInLeft 0.4s ease-out ${index * 100}ms both`
                      }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="rounded-xl overflow-hidden">
                      <button
                        className="w-full text-left px-4 py-4 text-lg font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 hover:text-emerald-600 rounded-xl transition-all duration-300 flex justify-between items-center transform hover:translate-x-3"
                        onClick={() => {
                          setIsServicesOpen(!isServicesOpen);
                          // Reset showAllServices when opening services
                          if (!isServicesOpen) {
                            setShowAllServices(false);
                          }
                        }}
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: `slideInLeft 0.4s ease-out ${index * 100}ms both`
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-all duration-500 ${
                            isServicesOpen ? "rotate-180 text-emerald-600" : ""
                          }`}
                        />
                      </button>
                      
                      {/* FIXED: Mobile Services Dropdown */}
                      {isServicesOpen && (
                        <div className="pl-6 mt-1 space-y-1 animate-in fade-in-0 duration-300">
                          {/* Show initial services */}
                          {initialServices.map((srv, srvIndex) => (
                            <Link
                              key={srv.id}
                              href={`/services#${srv.id}`}
                              className="flex items-center gap-3 text-slate-600 py-3 px-4 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                              onClick={() => {
                                setIsServicesOpen(false);
                                setIsOpen(false);
                              }}
                              style={{
                                animationDelay: `${srvIndex * 50}ms`,
                                animation: `slideInRight 0.3s ease-out ${srvIndex * 50}ms both`
                              }}
                            >
                              <span className="text-xl">{srv.icon}</span>
                              <span>{srv.title}</span>
                            </Link>
                          ))}

                          {/* FIXED: Show remaining services when showAllServices is true */}
                          {showAllServices && remainingServices.map((srv, srvIndex) => (
                            <Link
                              key={srv.id}
                              href={`/services#${srv.id}`}
                              className="flex items-center gap-3 text-slate-600 py-3 px-4 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                              onClick={() => {
                                setIsServicesOpen(false);
                                setIsOpen(false);
                              }}
                              style={{
                                animationDelay: `${srvIndex * 50}ms`,
                                animation: `slideInRight 0.3s ease-out ${srvIndex * 50}ms both`
                              }}
                            >
                              <span className="text-xl">{srv.icon}</span>
                              <span>{srv.title}</span>
                            </Link>
                          ))}

                          {/* FIXED: View More / View Less Button for Mobile */}
                          {remainingServices.length > 0 && (
                            <button
                              onClick={handleMobileViewMore}
                              className="flex items-center justify-between w-full text-slate-600 py-3 px-4 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                              style={{
                                animationDelay: `${initialServices.length * 50}ms`,
                                animation: `slideInRight 0.3s ease-out ${initialServices.length * 50}ms both`
                              }}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">📋</span>
                                <span className="font-medium">
                                  {showAllServices ? 'View Less' : `View ${remainingServices.length} More`}
                                </span>
                              </div>
                              <ChevronRight 
                                className={`h-4 w-4 transition-transform duration-300 ${
                                  showAllServices ? 'rotate-90' : ''
                                }`} 
                              />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-in {
          animation-fill-mode: both;
        }
        
        .fade-in-0 {
          animation-name: fadeIn;
        }
        
        .zoom-in-95 {
          animation-name: zoomIn;
        }
        
        .slide-in-from-top-0 {
          animation-name: slideInFromTop;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoomIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-in {
          from {
            transform: rotate(-180deg);
            opacity: 0;
          }
          to {
            transform: rotate(0deg);
            opacity: 1;
          }
        }
        
        .animate-spin-in {
          animation: spin-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}