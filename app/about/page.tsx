import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { Target, Eye, Award, Users, Globe, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
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
              <div>
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
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "6+", label: "Years of Experience" },
                  { value: "1,500+", label: "Successful Cases" },
                  { value: "98%", label: "Success Rate" },
                  { value: "50+", label: "Countries Served" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm"
                  >
                    <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                    <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                To deliver exceptional immigration services that empower individuals and families
                to achieve their Canadian dreams through expert guidance, transparent communication,
                and dedicated support from start to finish.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
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
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Core Values</h2>
              <p className="mt-4 text-lg text-slate-600">
                The values that define our work and relationships with every client
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              ].map((value) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}