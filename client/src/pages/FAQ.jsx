import { HelpCircle, ChevronDown, ChevronUp, Mail, Phone } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const colors = {
  primary: "#0C5A2D",
  secondary: "#1D7A4C",
  accent: "#2E9D64",
  light: "#E8F5E9",
  muted: "#A5D6A7",
};

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question:
            "How do I get started with a design or construction project?",
          answer:
            "Simply reach out to us via our website contact form, phone, or email. We’ll arrange a consultation to understand your vision, budget, and timeline.",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We provide services across Lagos, Nigeria, and can take on select projects nationwide depending on the project scope.",
        },
        {
          question: "Do you work with both residential and commercial clients?",
          answer:
            "Yes. We handle projects for homes, offices, retail spaces, and large commercial developments.",
        },
        {
          question: "How long has City Solutions been in business?",
          answer:
            "We have been delivering design, construction, and facility solutions for over a decade, with a proven track record of excellence.",
        },
      ],
    },
    {
      category: "Design & Planning",
      questions: [
        {
          question: "What’s included in your design services?",
          answer:
            "Our services include concept development, space planning, 3D visualizations, material selection, and furniture specification.",
        },
        {
          question: "Can I see examples of your previous work?",
          answer:
            "Yes. You can explore our Portfolio page to view past projects across different sectors.",
        },
        {
          question: "Do you offer custom design solutions?",
          answer:
            "Absolutely. Every project is tailored to the client’s needs, style preferences, and functional requirements.",
        },
        {
          question: "Do you handle permits and approvals?",
          answer:
            "Yes. We assist with securing necessary building permits and government approvals to ensure a smooth process.",
        },
      ],
    },
    {
      category: "Construction & Renovation",
      questions: [
        {
          question: "Do you provide turnkey construction services?",
          answer:
            "Yes. From design to finishing, we offer full turnkey solutions, so you have a single point of contact throughout the project.",
        },
        {
          question: "Can you work with my existing contractor?",
          answer:
            "Yes, we can collaborate with your contractor or take over the full project depending on your preference.",
        },
        {
          question: "Do you handle renovations as well as new builds?",
          answer:
            "Yes. Whether it’s a complete renovation, remodeling, or a new build, we have the expertise to deliver.",
        },
        {
          question: "How do you ensure quality during construction?",
          answer:
            "We follow strict quality control measures, use certified materials, and assign experienced project managers to oversee every detail.",
        },
      ],
    },
    {
      category: "Pricing & Payments",
      questions: [
        {
          question: "How do you charge for your services?",
          answer:
            "Our pricing depends on the project size, complexity, and scope. We provide a detailed quote after the initial consultation.",
        },
        {
          question: "Do you require a deposit?",
          answer:
            "Yes. We require an agreed percentage deposit to begin work, with the balance spread across agreed milestones.",
        },
        {
          question: "Do you offer flexible payment plans?",
          answer:
            "For large-scale projects, we offer structured payment schedules to make the process easier for our clients.",
        },
        {
          question: "Are consultations free?",
          answer:
            "We offer a free initial consultation to understand your needs and guide you on the next steps.",
        },
      ],
    },
    {
      category: "After-Sales & Support",
      questions: [
        {
          question:
            "Do you offer maintenance services after project completion?",
          answer:
            "Yes. We provide maintenance and facility management services to keep your property in excellent condition.",
        },
        {
          question: "What happens if I need changes after completion?",
          answer:
            "We’re happy to discuss and implement any additional changes as a separate service agreement.",
        },
        {
          question: "Do you provide warranties?",
          answer:
            "Yes. We offer warranties on workmanship and materials, depending on the nature of the project.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="font-inter py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
              <HelpCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently{" "}
              <span style={{ color: colors.primary }}>Asked Questions</span>
            </h2>
            <div
              className="w-20 h-1 mx-auto mt-4"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: colors.primary }}
                >
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const questionIndex = catIndex * 100 + index;
                    return (
                      <div
                        key={questionIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <button
                          className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                          onClick={() => toggleAccordion(questionIndex)}
                        >
                          <span className="text-base lg:text-lg font-medium text-gray-900">
                            {item.question}
                          </span>
                          {activeIndex === questionIndex ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        {activeIndex === questionIndex && (
                          <div className="p-6 pt-0 text-gray-700">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-16 p-8 rounded-xl text-center"
            style={{ backgroundColor: colors.light }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact our team directly for any additional information you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:info@highbridgecitysolutions.com"
                className="flex items-center justify-center text-gray-700 hover:text-gray-900"
              >
                <Mail className="h-5 w-5 mr-2" />{" "}
                info@highbridgecitysolutions.com
              </a>
              <a
                href="tel:+2348152886217"
                className="flex items-center justify-center text-gray-700 hover:text-gray-900"
              >
                <Phone className="h-5 w-5 mr-2" /> +234 815 288 6217
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQPage;
