"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const faqData = [
    {
      id: "general",
      title: "🌍 General Immigration FAQs",
      questions: [
        {
          id: "gen-1",
          question: "What services does your company provide?",
          answer:
            "We assist with permanent residency (PR), work permits, study visas, visitor visas, and dependent/family visas for countries like Canada, Australia, the UK, the USA, and Europe.",
        },
        {
          id: "gen-2",
          question: "How do I know if I'm eligible to apply for a visa or PR?",
          answer:
            "Our experts will assess your profile based on age, education, work experience, language skills, and other factors as per the country's immigration system.",
        },
        {
          id: "gen-3",
          question: "Do you charge for an eligibility assessment?",
          answer:
            "We offer a free initial assessment to help you understand your options before proceeding with a full application.",
        },
        {
          id: "gen-4",
          question: "Is the entire process handled online?",
          answer:
            "Yes, most immigration processes are online, including documentation, payments, and consultations.",
        },
        {
          id: "gen-5",
          question: "How long does the visa or PR process take?",
          answer:
            "Processing times vary by country and visa category. For example, PR may take 8-12 months, while visitor visas can be processed in 2-8 weeks.",
        },
      ],
    },
    {
      id: "canada",
      title: "🇨🇦 Canada Immigration FAQs",
      questions: [
        {
          id: "can-6",
          question: "What is Canada PR and what are its benefits?",
          answer:
            "Canada PR (Permanent Residency) allows you to live, work, and settle anywhere in Canada permanently. You also enjoy benefits like healthcare, education, and the pathway to Canadian citizenship.",
        },
        {
          id: "can-7",
          question: "Can I include my spouse and children in the same PR application?",
          answer:
            "Yes, your spouse and dependent children can be included in your main PR file.",
        },
        {
          id: "can-8",
          question: "What are the government fees for Canada PR?",
          answer:
            "They include processing fees and Right of Permanent Residence Fee (RPRF). Dependents have separate, lower fees.",
        },
        {
          id: "can-9",
          question: "What are the main pathways to apply for Canada PR?",
          answer:
            "The most popular routes are:\n• Express Entry (Federal Skilled Worker, Federal Skilled Trades, Canadian Experience Class)\n• Provincial Nominee Programs (PNP)\n• Family Sponsorship\n• Study-to-PR pathways",
        },
        {
          id: "can-10",
          question: "What is an ECA (Educational Credential Assessment)?",
          answer:
            "It's required for Canada PR to verify that your foreign education is equivalent to Canadian standards.",
        },
      ],
    },
    {
      id: "australia",
      title: "🇦🇺 Australia Immigration FAQs",
      questions: [
        {
          id: "aus-11",
          question: "What is the difference between subclass 189, 190, and 491?",
          answer:
            "189: Independent PR (no sponsorship needed)\n190: State-sponsored PR\n491: Regional provisional visa (pathway to PR after 3 years)",
        },
        {
          id: "aus-12",
          question: "What is the minimum points requirement for Australia PR?",
          answer:
            "You need a minimum of 65 points, but higher scores increase your chances of invitation.",
        },
        {
          id: "aus-13",
          question: "What is a skills assessment?",
          answer:
            "It's a mandatory process where an authorized body verifies your education and work experience.",
        },
        {
          id: "aus-14",
          question: "Can I apply for PR without a job offer?",
          answer:
            "Yes, for most subclasses (189 & 190), a job offer is not mandatory.",
        },
        {
          id: "aus-15",
          question: "How does the Australia PR points system work?",
          answer:
            "Points are awarded for age, qualification, work experience, English language ability, and other factors such as state nomination or study in Australia. Higher scores increase your chances of receiving an Invitation to Apply (ITA).",
        },
      ],
    },
    {
      id: "visitor",
      title: "✈️ Visitor Visa FAQs",
      questions: [
        {
          id: "vis-16",
          question: "What is a visitor visa and who can apply for it?",
          answer:
            "A visitor visa allows you to travel temporarily to another country for tourism, meeting friends or family, or attending short-term business or cultural events.",
        },
        {
          id: "vis-17",
          question: "How long does it take to get a visitor visa?",
          answer:
            "Processing time usually ranges between 2 to 6 weeks, depending on the destination country and time of year.",
        },
        {
          id: "vis-18",
          question: "Can I extend my visitor visa or apply for another visa while abroad?",
          answer:
            "Some countries allow extensions; others require reapplication from your home country. We'll guide you based on your destination's policy.",
        },
        {
          id: "vis-19",
          question: "What are common reasons for visitor visa rejection?",
          answer:
            "Rejections usually happen due to insufficient funds, unclear travel purpose, weak home ties, or incomplete documents. We help strengthen your file to avoid this.",
        },
        {
          id: "vis-20",
          question: "Do I need travel insurance for a visitor visa?",
          answer:
            "Yes, many countries (especially Schengen, the UK, and Canada) require valid travel and health insurance covering your stay duration.",
        },
      ],
    },
    {
      id: "study",
      title: "🎓 Study Visa FAQs",
      questions: [
        {
          id: "stu-21",
          question: "What is a study visa?",
          answer:
            "A study visa allows international students to pursue full-time education in a recognized institution abroad.",
        },
        {
          id: "stu-22",
          question: "What is a Statement of Purpose (SOP) and why is it important?",
          answer:
            "An SOP explains your academic background, study goals, and reasons for choosing a specific course and institution. A strong SOP greatly improves visa approval chances.",
        },
        {
          id: "stu-23",
          question: "How much bank balance is required for a study visa?",
          answer:
            "The required amount varies by country and program — typically, you must show funds to cover at least one year of tuition and living expenses.",
        },
        {
          id: "stu-24",
          question: "Can I work while studying abroad?",
          answer:
            "Yes, most countries allow part-time work (usually up to 20 hours per week) during academic sessions and full-time during breaks.",
        },
        {
          id: "stu-25",
          question: "Can I apply for a post-study work visa after graduation?",
          answer:
            "Yes, countries like Canada, Australia, and the UK offer post-study work permits that let you gain work experience after completing your studies.",
        },
      ],
    },
    {
      id: "work",
      title: "💼 Work Visa FAQs",
      questions: [
        {
          id: "work-26",
          question: "What is a work visa?",
          answer:
            "A work visa allows you to live and work in a foreign country legally for a specific employer or occupation.",
        },
        {
          id: "work-27",
          question: "What are the requirements for a work visa?",
          answer:
            "You generally need a valid job offer, employment contract, qualifications relevant to the job, proof of work experience, and sometimes a labor market test approval.",
        },
        {
          id: "work-28",
          question: "How long does it take to process a work visa?",
          answer:
            "Processing time depends on the country and visa type — usually 4 to 12 weeks after submission of complete documents.",
        },
        {
          id: "work-29",
          question: "Can I take my family with me on a work visa?",
          answer:
            "Yes, in most countries you can sponsor your spouse and dependent children on dependent or family visas.",
        },
        {
          id: "work-30",
          question: "What is the difference between a work permit and a PR visa?",
          answer:
            "A work permit allows temporary employment in a foreign country, while PR (Permanent Residency) gives you the right to live and work there permanently.",
        },
        {
          id: "work-31",
          question: "Can my work visa be converted to PR?",
          answer:
            "Yes, many countries (like Canada, Australia, and New Zealand) offer pathways to PR after gaining certain work experience and meeting eligibility criteria.",
        },
      ],
    },
    {
      id: "consultation",
      title: "💬 Consultation & Support FAQs",
      questions: [
        {
          id: "con-32",
          question: "Do you help in selecting the right country or visa type?",
          answer:
            "Yes, we guide you based on your profile, goals, and eligibility.",
        },
        {
          id: "con-33",
          question: "How do I track my application status?",
          answer:
            "We provide regular updates and tracking through our portal and dedicated case manager.",
        },
        {
          id: "con-34",
          question: "Is there a refund policy if I don't qualify?",
          answer:
            "Refund policies depend on the stage of the process. We maintain transparency before signing any service agreement.",
        },
        {
          id: "con-35",
          question: "Can I switch my visa type after applying?",
          answer:
            "In most cases, yes — with proper documentation and if the immigration laws of the country allow it.",
        },
        {
          id: "con-36",
          question: "What makes your services different from others?",
          answer:
            "We provide personalized case handling, transparent communication, and end-to-end support until visa approval.",
        },
        {
          id: "con-37",
          question: "Is my personal information kept confidential?",
          answer:
            "Absolutely. All client data is securely stored and used only for visa processing.",
        },
        {
          id: "con-38",
          question: "What if I don't qualify for the visa I applied for?",
          answer:
            "We reassess your profile and suggest alternate visa routes or suitable destinations.",
        },
        {
          id: "con-39",
          question:
            "Do you help with visitor visa documentation and interview preparation?",
          answer:
            "Yes, our experts help you prepare all documents, create a strong cover letter, and train you for visa interviews if required.",
        },
      ],
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleCategory = (categoryId: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const filteredData = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <>
      {/* ✅ Include Navbar at top */}
      <Navbar />

      <main 
        className="min-h-screen py-12 relative"
        style={{
          backgroundImage: `url('https://t3.ftcdn.net/jpg/02/30/58/12/360_F_230581296_ij8VjSzEmGDlLhDiy6MSlJRR6AvIvcOT.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white mb-8 drop-shadow-md">
              Find answers to common questions about immigration, visas, and our
              services
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white bg-opacity-95 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-6">
            {filteredData.map((category) => (
              <div
                key={category.id}
                className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl border border-white border-opacity-30 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-opacity-100"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-white-600 to-white-600 hover:from-white-700 hover:to-white-700 transition-all duration-300 flex items-center justify-between"
                >
                  <h2 className="text-xl font-bold text-black">
                    {category.title}
                  </h2>
                  {openItems[category.id] ? (
                    <ChevronUp className="h-6 w-6 text-white" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-white" />
                  )}
                </button>

                {/* Category Questions */}
                {openItems[category.id] && (
                  <div className="border-t border-gray-200">
                    {category.questions.map((item) => (
                      <div
                        key={item.id}
                        className="border-b border-gray-100 last:border-b-0 bg-white hover:bg-blue-50 transition-colors duration-200"
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between"
                        >
                          <span className="font-medium text-gray-900 text-lg pr-4">
                            {item.question}
                          </span>
                          {openItems[item.id] ? (
                            <ChevronUp className="h-5 w-5 text-blue-600" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </button>

                        {openItems[item.id] && (
                          <div className="px-6 pb-4">
                            <div className="text-gray-700 bg-blue-50 rounded-lg p-4 border border-blue-100">
                              {item.answer.split("\n").map((line, i) => (
                                <p key={i} className="mb-2 last:mb-0">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 text-white">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No results found
              </h3>
              <p className="text-white text-opacity-90">
                Try searching with different keywords
              </p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white border-opacity-30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our immigration experts are here to help you with personalized
                guidance.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ✅ Include Footer at bottom */}
      <Footer />
    </>
  );
}