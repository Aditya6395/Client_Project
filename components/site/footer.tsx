import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight, Globe, Shield, Users, Plane, Navigation, Briefcase, GraduationCap, Heart, Home, Building2, ShieldCheck } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* --- Brand Info --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md group-hover:bg-blue-400 transition-all duration-500 opacity-70"></div>
                <Image
                  src="/IMG-20251014-WA0007.jpg"
                  alt="RV Global Immigration Services"
                  width={60}
                  height={60}
                  className="relative object-contain bg-white rounded-full p-1 border-2 border-slate-700 group-hover:border-blue-400 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
              <div>
                <span className="text-white font-bold text-xl block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  RV Global
                </span>
                <span className="text-xs text-slate-400 block mt-1">Immigration Services</span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner for global immigration and travel solutions. 
              Expert assistance for visas, PR, study, and work abroad programs.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Trusted</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Users className="h-4 w-4 text-blue-400" />
                <span>Expert</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Globe className="h-4 w-4 text-purple-400" />
                <span>Global</span>
              </div>
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/process", label: "Our Process" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 transform hover:translate-x-1 text-sm py-1"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Updated Services to match Services Page --- */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/services#tourist-visa", label: "Tourist Visa", icon: Globe, desc: "Canada, Australia, US, UK, NZ, Schengen, China, Dubai" },
                { href: "/services#pr", label: "Permanent Residency", icon: Home, desc: "Canada & Australia PR pathways" },
                { href: "/services#spouse-visa", label: "Spouse Visa", icon: Heart, desc: "Canada, NZ, Australia, US" },
                { href: "/services#study-visa", label: "Study Visa", icon: GraduationCap, desc: "USA, Canada, UK, Australia" },
                { href: "/services#business-visa", label: "Business Visa", icon: Building2, desc: "All countries" },
                { href: "/services#work-visa", label: "Work Visa", icon: Briefcase, desc: "Canada, NZ, Australia, UK, Schengen" },
                { href: "/services#flight-ticketing", label: "Flight Ticketing", icon: Plane, desc: "International & domestic" },
                { href: "/services#travel-insurance", label: "Travel Insurance", icon: ShieldCheck, desc: "Comprehensive coverage" }
              ].map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="group flex items-start gap-3 text-slate-400 hover:text-white transition-all duration-300 text-sm py-2 border-b border-slate-800 hover:border-slate-600"
                  >
                    <div className="p-1 bg-slate-800 rounded-lg group-hover:bg-blue-500 transition-all duration-300">
                      <service.icon className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-blue-300 transition-colors">
                        {service.label}
                      </div>
                      <div className="text-xs text-slate-500 group-hover:text-slate-400 mt-1">
                        {service.desc}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Contact Info --- */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500 transition-all duration-300">
                  <MapPin className="h-4 w-4 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    A-1/77 Chanakya Place Gali No 11<br />
                    Janak Puri Part 1<br />
                    New Delhi 110059
                  </span>
                  {/* Map Link */}
                  <a
                    href="https://maps.google.com/?q=A-1/77+Chanakya+Place+Gali+No+11+Janak+Puri+Part+1+New+Delhi+110059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <Navigation className="h-3 w-3" />
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </li>
              
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-green-500 transition-all duration-300">
                  <Phone className="h-4 w-4 text-green-400 group-hover:text-white" />
                </div>
                <a 
                  href="tel:8860028328" 
                  className="text-slate-400 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
                >
                  +91 88600 28328
                </a>
              </li>
              
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-500 transition-all duration-300">
                  <Mail className="h-4 w-4 text-red-400 group-hover:text-white" />
                </div>
                <a 
                  href="mailto:Visavikassinghji@gmail.com" 
                  className="text-slate-400 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
                >
                  Visavikassinghji@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-slate-700">
              <h4 className="text-white font-semibold mb-4 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/people/RV-Global-Immigration-Services/61582743210484/?rdid=Ept3sRoSsXW8Hyyd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Cfiz6Dc6c%2F", label: "Facebook", color: "hover:bg-blue-500" },
                  { icon: Instagram, href: "https://www.instagram.com/visa_vikas?igsh=YjdvdTg1NXBmeXFm", label: "Instagram", color: "hover:bg-pink-500" },
                  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-3 bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Footer Bottom --- */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              <p>&copy; {currentYear} RV Global Immigration Services. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6 pt-6 border-t border-slate-700">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Verified Immigration Consultants</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>1000+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-40 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-40 animate-ping"></div>
    </footer>
  )
}