import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight, Globe, Shield, Users, Plane, Navigation, Briefcase, GraduationCap, Heart, Home, Building2, ShieldCheck } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-slate-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
                  className="relative object-contain bg-white rounded-full p-1 border-2 border-gray-800 group-hover:border-blue-400 transition-all duration-500 transform group-hover:scale-110"
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
              Your trusted partner for global immigration and travel solutions. <br />
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
                { href: "/services#tourist-visa", label: "Tourist Visa", icon: Globe, desc: "Canada, Australia, US, UK, NZ, Schengen, etc" },
                { href: "/services#pr", label: "Permanent Residency", icon: Home, desc: "Canada & Australia PR pathways" },
                { href: "/services#spouse-visa", label: "Spouse Visa", icon: Heart, desc: "Canada, NZ, Australia, US" },
                { href: "/services#study-visa", label: "Study Visa", icon: GraduationCap, desc: "USA, Canada, UK, Australia" },
                { href: "/services#business-visa", label: "Business Visa", icon: Building2, desc: "US, UK, Canada, Australia, etc" },
                { href: "/services#work-visa", label: "Work Visa", icon: Briefcase, desc: "Canada, NZ, Australia, Schengen" },
                { href: "/services#flight-ticketing", label: "Flight Ticketing", icon: Plane, desc: "International & domestic" },
                { href: "/services#travel-insurance", label: "Travel Insurance", icon: ShieldCheck, desc: "Comprehensive coverage" }
              ].map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="group flex items-start gap-3 text-slate-400 hover:text-white transition-all duration-300 text-sm py-2 border-b border-gray-800 hover:border-gray-600"
                  >
                    <div className="p-1 bg-gray-800 rounded-lg group-hover:bg-blue-500 transition-all duration-300">
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
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500 transition-all duration-300">
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
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-green-500 transition-all duration-300">
                  <Phone className="h-4 w-4 text-green-400 group-hover:text-white" />
                </div>
                <a 
                  href="tel:7303922339" 
                  className="text-slate-400 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
                >
                  +91 7303922339
                </a>
              </li>
              
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-500 transition-all duration-300">
                  <Mail className="h-4 w-4 text-red-400 group-hover:text-white" />
                </div>
                <a 
                  href="mailto:info@rvglobalimmigrationservices.in" 
                  className="text-slate-400 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
                >
                  info@rvglobalimmigrationservices.in
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="text-white font-semibold mb-4 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/people/RV-Global-Immigration-Services/61582743210484/?rdid=Ept3sRoSsXW8Hyyd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Cfiz6Dc6c%2F", label: "Facebook", color: "hover:bg-blue-500" },
                  { icon: Instagram, href: "https://www.instagram.com/rv_globalimmigrationservices/?igsh=N3Y5NG5hdWFzdXR2#", label: "Instagram", color: "hover:bg-pink-500" },
                  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-3 bg-gray-800 rounded-xl text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Certification Badges --- */}
        <div className="flex flex-wrap justify-center items-center gap-8 py-8 border-t border-gray-800 mb-6">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="https://greentreeimmigration.com/blog/wp-content/uploads/2022/06/MARA-Logo-1-1-1.png" // Replace with your actual certification image path
                alt="MARA Registered"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="text-xs text-slate-400 text-center">MARA Registered</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="https://greentreeimmigration.com/blog/wp-content/uploads/2022/06/IMG_5702-1-scaled.jpg" // Replace with your actual certification image path
                alt="IRCC Certified"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="text-xs text-slate-400 text-center">CICC Certified</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV8AAACQCAMAAACYophmAAAA81BMVEX///9FVWBAntJ/tNR/rtWGrdWRwudPj8lIkMkiicg/i78gi8cAAAA+T1s5S1dIWGOxtroxRVKFjpT4+Pjz8/OmrLE0R1Q/PD0sQU8AhMS7urp8p9JzfYXj4+NOTEwvKyyNjIzV1dXAxMerqqokICGgn59HREWHveVVY203NDWXlpZjYWF7enpvbW7q6+x7hYwkfboUDQ9YVlbOzc1lcXmZoKVVl8wAe8MdGBmjy+qCi5FDicfo8fgAecKDt9WzsrJnpNXI2eyXudw0lc6cxN1Po9TS5vOs0emDgoLX6PbE3vKqxOBnm86Pt9sSeLcAdcFrp8020XUPAAAUCElEQVR4nO2dCXfaOhOGlYb0loAdiFliiDGYpSzBKSGQBdqQkoYsTZv//2u+kbzJtiRswr3N1+P3nnNDsC1bj0aj0UhOEUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGif1PK/P5pdYW1enqc/+mn+cs0f7r6/PnzR0fwcXX/p5/pr5Hy9NFDSzG+evzTT/Y3SFkx4NqIPyaE36onLl1C+Gr7njh3en493nqp71NzlmfwE37a7h01qSTtSPlzZbvFvk+JjddxEts04YIs7WDJ51ss9L2K73n9hLfohQ/lHUt5Y3uFvlNdRaK7XcCSjXdHOtxame9UUeliwFsLho9cvsfbKvKdKrL1btWCSy7f0y2V+E61ioMXAG9pkDt2HISc206B71RRIge/tnNfzXYQkrSd8t6p5rHxfrzazp1zR9iC5ZK2neLeqWI5X1tbcsHasVzamfzF04v57fNi9snSdJESz49Ti+k/M6J/Pj3fbskJ/8Vw759T1VTqk08LDuLPi39m/1D6uVfde04yPnzNn4Et6OengKapMN2qHy7WHqhafU6S70wpNt2g+VqqBuky9HPPJvwXd/CNdevQTS1YfD9NKS/xmUXXNmCC+PZP1+a9af6ScsXEi/2wg3cR8gy2qi7gl8RJ0PKMN5Wq8vh+mgqNFzTd2/svTFhp5CaHp6eHk6IRJUzWjOLk+vT6sJhrFCKVXxhD+ez8BzmEb50bm9EfeEXh5bgHS5+FeD0HgQE/R7+/p2NXvPykWTzPl2RZwpLlvHxsCL39+FrKu2eX8t3JuhbRJl0oX5JKrEMH5BAprJTfOYy4zPJM401NBXw/fU6J8HoOYlPAO5KtEjv/0Dg+cjLETiKolD/kmZJSlEtS4PR8V5RZNrp5u3yZcShYVkkqRhjKn1M+ifDOUi8830v0c++NgA+cZ2fmd8zzYBVtZhNmYUVZZp1d6jY4d2903fxdkG/jINhS1lnr81A+5yByv3iIQ6gqAjzdeyNgId/iEauK5OydcLc3uyy6REfs9jiky/fzvT7ilVU6Fzv1Wz9eofud4gt+RnTAGw1yIr7HJV4dQfng+UZecLbMWD8t+NuD5msecJsK+oPM6w5Y8wDe8OSNEnkoJTrfvWrcMI3PVzngGa+lgE0WuQZnQdkJWp0W6P8UX03UVPjWgnEuFRR/eEvbsOYCD1ENAN7bFt91eMGCacDFNUgAsH9QDDGU+YfCgLlD5io637Tb2W/5gIN843oILt+uHy8EW7IcMDhqSd84Cp8dOP3I16sLfgcA8deRc8gMBizhsjjjK8M78PnOXrzLvnMBh+y3Gi2kX8f3lK6klD84zBlGbnJOBWsShddvcXL+uJgzcsVTiXIBgT7taz7pqDvJGcxDMjlkFA/pYK3EXeu+C+Fl8U3NAO+Uvu7n7J/ZbC8K3714MQSHr2+wyh+6wUIht2MTlrp0KXQccOB13sapU06gR0+o5pNKE9p1HNKH5IlrLubEaS35mlcbhvky+M5u0ffpi//K79PvTDcR5htviGPzVeg6dv2hmO1pD6iAgKaVL/rO1qwg4cjfOzTKncjHvh7XoA6V/IeU67x1Abc2z2G8LPt9YV/N8hJhvvEMmM2XAhaujQZj1Y5M1dykjD0fip0m+bC/PPfsPXiou8M9ZHUrib+TS2GYLys+m7IvZwXCYbx7Ve79GWLyLXg2xNp2onRl2dejKVqM0DSXD/rLhtcgpQDDMXXI3xOINNnnlwK6ZeBlzS/S7Ek2a5Bj8Y0TQjD5UuZ7wLzK5zIUrzXYm9hywTY69nZlBQ95ls3e8GIeCBIQ31l8GfPjGXP702NEvnvf+U8QEpMvNepHyEfmZC4ttkyvQeQALcrVSLEXZZjugZnfYbrQZwbfnyy+1RhPxuLb8DZNcUdqSuee+UZL0XoNEpo0FvmH1uuRiZfFl+lCWZk0xvAGfGOsKbP4TqQ4wAquyUVqDUT7gFBOsss/tF7huRsvgJixLp8y3AObbwwHzOLrDeFRNl0brsmVRHkXSl73CM4TPFcu8WZoAjHdL3OAmzFiWCWq+43lgBl8lXz4O4EmcU3Om+yFGsTzTFHbihYbr89BzKZf8FaeGcMCH2f2vh2KM9P97sVJ8jD4UvWPstrmBgNRdxBTBh8cKCjPHL0Krnh8LQcx+/Lly699VP2Ff6bCV19dEM1fLi7U9EzgHmJFwAy+Xv2PogyUrjeRI3ZpbwwLBX9eXxBEuTxxwgeI0GaYLdYvCBzuvsKH/fDliwtVvfikoPlvFT5gxrMpG2+cAILBN6YRSeESxPIghtz7Ydy+QGvOs9/qS2r66+sv0G/sd2/Bgn+FCakX6tcF/jD9enHx9etvdfrCMd84KQghX/bkIiB3SJIjviEjgHjqHooYitBiJXeIe9h/haOFx9WLvX42//LrV8gBz79e/Lb2VCsvqecnTHCuZtiE/1/4hiD+C3wX+/v7XwLzNWX6O8T3/vdF8LtpOq0yXcS2+DK2JIQVe0bg8Q2lcd/mH1h894kWoXPDl6+CLmOlprEYJvw2vt74lo+Sq3fHt6ghq4Dvtse3hYV3/8smm5vSltTFlsc3LV4Q6sVnEV8BFfD1uk5+gy2hXLz7+5yMpEgvqgM45CPeFp95kyiZkSEMiZpNR7ulgC81v9jgjfPwwOYqE9uA5xdpV0HAnPw8S+L5cZReSk0Xog1wAr5e4nmT10nv/Hh/7tOKW9hCTXMBx1jBYPH18uWsdHlQXkox4qAk4Es17RHjyjXyp9cXPry/Ym4MUb6m01zAb8zvjEuxiHlM8pFe8hLx9TL7kXyTX4/0AFf14d2P/ULxKk0bsG+Qi7PCycyve8sXUd6q9+a70UZ9EV9qob8UY7+vrXBgZus1dlGghc+C6TAtRiHs9SFvAUNmhmg5OlSgVuvYKQjlwDdYifhSyXpOOHItcMzU8vHUb76MfM46pVQf308buV82X2oBR+oyAqVJ3vfnOOj1TYa9mweSb3OJkK9BbVhlLcAdy8EVUUqeg/A7Xxygxdt2g+ZLP9502vUQcZYvOOvzFDGpG3qy05LfuqjmCG50QNibS/7tJUK+9O6dMGATH+Xv3kFs77CBB75Xg3jT6U3cQ5T9JYG8grEjWdy9r+j9JaVTX3sUrD0hNGAxX3p/iXTgj1/srS18wCue+eI5XIxufXURouvFELFC6Sj7o0pd95ULxXB3nNOAD6izpZL3yoU2cXeNeYDFfH37o3byxy5h092axQfsTJEZeGGOEdkJv4aN1zPgOKvHEff37cjy+SSXK07OS9SWa8o1a77tk1L+4LqYy02uD+i3C1zAa/j6Ggu/cnGMb33ovqdBnoeXXltxzZc44UiBVdj12voZ33yj70+VQptEJWoTT2B/qnBP6Tq+ZmDbPOvW3FQH33yJIgCeM1yvpUxs7/um/dW+PVJrtq/Tm8nW8V2/v1qwR+q+KuQbYZq85NCFSUY1ZvCAhO8HdIWAg/vRc2LA1NsEa/niXWaisoR/q+073z1g3a0DcsWzXmuEi/sG0abvt4RfWDGYr3LZJKPHZ0SCV5GgqcSpn9DcIp4B882XOIh1lwclfD8rx0XGeuHKPOe1h3xAJyYi8IWTeD5CWpelm1dFeL+s698C8wUHEfstb/H7hYVT1htwUr7LTuQYEsvs5MCW60h8kRZ6e5NccnS6diJ2mxEBXjP8z4V84//tT+tNFFB44mVV87Dkf49KkvPn/Nx3DsIo/+klaRIgcp23b1kSL2I2zoNlyfnTCBm6e5H/XcdXEfHNrNbfPaCiK16qVzFOpaOSTSSfPy+K81rapHtUck4/OmC8km24t1yXnDNzxyW3MfLycS5SEuFp91XgH9ZNkwV8lx+29EfRQjIbBEpuHCnBq2hGDp9tRPzzBEK5ZUVOV652v/EBf1nnQacCvB82ynP+bbrb3f22ywW87uoUz4A/gH78F8//3gV8QbwgjXGBL9J8YfPNfEj42vpG+HJ8BLVQv8pcEGe8ulCpcYs9v1h+SPg6suyXQ9j1oE9LNaOS8epDJqMu3cjrI4OvTTfhS+TwZRJekFPmHzNqBrCS2TLwhY8Z+8+uh/xvxqWb8CXy+OKB7jXgiCE+/rZU05mMy/cH+ZxJq8tvEBxPVR7cD0n8QPS06xMgfl1YkKfTxesP1YaL+RK/++r+nlbVH8sl/MRkM0s/W6x/K/79v9L9bkjfPC0zniy+qTT1VSbElFb8+dtfqHmYL0X6B82XTJZ3ab5hm6W03O6/PaKsX2liTtAU3sE3/pnMqLNBEd/dV5ov4fVRjcw3/h9JHCGUJSmCQRtVeviDllVQB+bBjV5P742Rkh2NRjUyL2624H8t+HWUNbUz+NwflUd1+Nlp4tr3rBKNVvkSn1+5LI+GQPThxL7P+LKDz87iX2/aqH4DPyvZEfw3APRZcgvy/0of3wW+19BQ18t2YgRulsU3G8ADZTuiOt0JAVPWqpL4947mK3QPH2LjRYBMx9iMbBMq24dP5ZGCgI+Gq6pVoOLwXYNA6Q1JS4zxWZjvCSb3AHDOssCgULbw6mBmRh/ddBSrRerZG+s+WfwFIe3xxY1DzLJ/MiR88bNU2vguD/C/NtyqYWWIvJutzYE8ifDSDlglyeBVZL4bDG9Qn1ZlgJQR1LjS1zXU75cJ3zM78UX4IgytUjeJ2VTqmO8AaS1yQk9DtQaws/le2nmYrEXlBj0YLQ3fxyqIwde0vu3hny2jZvM1MM9603lO7ZL8AGNez1fogHd/eAaskv7+RPEVu4cN/tWRFq5abTwYVzBfTQdoOuELNJRKhdivohDP0Ssg4iccvjd9UkK/CSY47tl8CxYH1DgjP8ZD9DA2gT7cp5k9qfD4Nvuo8kAOntQpvgW91rZwkpuSmw3a8FjiZNq3iA4izHfb7sHiq2SHiPBFffAKHt92E+BmazXi9xpg5ZUhzdetMiCqPyCL78gqV7M8JFB6MFClg++DFOMEfA8x42aAb8tUFDiG4ffGhssXymlfEhsm9C2+9Xa7LbZhRoTGdBAW3/uofDf5FxsIX2QoNl8Elbb4Dkjyu0e6dRNjHZzVamfZgsfXtDr8pUYQ1ZoWUd2uepa41UEF80X1uj34QYcf4QP1io/vWK/VauU2eRZl1Kb4ItvTFKybgatZ7x/WRRDe/IIENI8eX7F72CT8uXQ8JeZbtwgRviYOKxpZy20Omkgj5tmsO3yh//drBaQM6rYJjmrk6gYe66BBjBFwqMN3mC+qZcGi4azOGLUH+CQF81VwBIi/Lps2SGswbTp84b7IsNrNutlDlPEt8ginkpPnajTz3WjyBgCscanSRKRfwlcKGkAdzEGrBT8Vcrhn1q3xDuxwjE/TsEnf9C51bIUDjAcsmkg7u7zELTDuXLawh+7jC3Ep41qLnN1ujTCjtq7rrRNyMSmMGLXViJjvGJehPMAz2GGvc7NhlDWUaAacDvDdvvn+rYrogcm5ihrFfJfJ3JiWeI7h44vUCHiT1KRfitCA7Rh4aZ2rRvEOyb8f4Nf9q9BDEMB2QKsm3mEDrdZ7CLvPR8D7+c/W5V1qrQtO28sRy7XON1m3YGkd4LT9wsCPZGzbTGsAqzbfRVrsHN5kvYWTcrlOQmeSKCyQUL9Jcq41PG1QBoPBiTW3aPadi2Cq3HlQkFk7OzuDKRlMHXQ8uyWXFU6Q5p6IE8nNTm1Q61SQctLTh3CPBsyFa000JhPgurUHrXGm9/BFlY7ewUkgMle5GaN+xXmmZhkfwR8H0Sv3JBrkdjO2V30V433TolshCxVvWxXAFTSzJM+Kgd6U6/iEXsFs1PAn1Gs5U5gRTG1vyniSTKa4lZ4JUy0NkTme2UENJ3dQqQ3xMohyiRSkjCo4n17A82ulADPfGvw+tiaP40uYKNabqH1WQIVO256zA9wTnIXGmbmHITRnx8RJ/FaM6j0KLdgOCnaFeN+2JjSsOJ9aJHNoDoYwOyWgdIR5WmnHXgPnFG8cuyRJyKziTIntzK7Nt+bx1a2sLkFi5XKbJ25+SMkqdhbISRrbSRz4kmThgO+wckkeQdOtAvHT6HHqp4h8hL1X9U7kG94Y946cD1DrPhAwz9Blg4CC/ttsO3xxLlJX3LMx33EPaeXKzU0FZy6RNh5rIb7joZ1XxHx7BCWYMk7ToSEUXRmcWDk0U3efAevB8PhqlRp+BMc1xeYLJszPBtt8r7h0P7x5QdMxPVQuEGzA18wSUDivdenwhZrjBZu+nVMc6Xr2RKH5jh+GgxBfnMa5xD4F89UdvkZWH5E1IzS07V/At4Ee+kqZtDTWBnzxhhIOX3s9YsWeuS23sRzvLAM1sj29lzUwX2TUAJRGvqjYfOE0GIF6PbtuwL1fd1Nm1soP/II7AKZt89WynXK5hclgvg9WnnxI7NfKEjvUUNbyD6brH8iH4RjzReWbDtLs/PFGfMGGWV7i9Zvd9x9/hAEvl69bWYwny5jQj0lWFezIJOvC2QYakFigRWqknAxIwheqbA332LxgNLe+QzAsgZHCIGliTh0D88XjnrUcilFhf1KA1kNja3xDeMkILnH4GtgB9/uoPoBxcAD869BCY7gL5qtka/ABviicafb4FmHnQFD3K78V39H/+O58tQtElw7a5Y/PT9vKRjY6emtQMC1Sg4Y5sH4WrGz5sKHo5R5efychhWOx+Gylo5gdOz67AdPGQd64R1K8Wgd0hqwy+4Z1PioMWjrOFJP8MfHLN+7y5bis63X42dT1HnEd9VbrDM6t42Zv4PCm39J70Jvg/rjwXvw/vgFPPL9/IrqfM+jBwdXd1d3V6ukxyfQmSpQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEiRIlSvTH9D8Z1KpG8YwboQAAAABJRU5ErkJggg==" // Replace with your actual certification image path
                alt="ICCRC Licensed"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="text-xs text-slate-400 text-center">ICCRC Licensed</span>
          </div>
        </div>

        {/* --- Footer Bottom --- */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/faq" className="hover:text-white transition-colors duration-300">
                FAQs
              </Link>
              <Link href="/refund" className="hover:text-white transition-colors duration-300">
                Refund Policy
              </Link>
            </div>

            <div className="text-sm text-slate-400">
              <p>&copy; {currentYear} RV Global Immigration Services. All rights reserved.</p>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6 pt-6 border-t border-gray-800">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Verified Immigration Consultants</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>6+ Years Experience</span>
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