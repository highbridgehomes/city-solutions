import React from "react";
import { Link } from "react-router-dom";
import { Award, Users, CheckCircle, Leaf, ArrowRight } from "lucide-react";
import { IMAGES } from "../constants/images";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  const steps = [
    {
      number: "1",
      title: "Contact & Consultation",
      description:
        "Reach out to us via our contact form, email, or phone. We’ll schedule a free consultation to understand your needs, goals, and vision.",
    },
    {
      number: "2",
      title: "Project Discovery",
      description:
        "We dive deeper into your requirements whether it’s property development, smart infrastructure, or urban planning to assess scope, timelines, and feasibility.",
    },
    {
      number: "3",
      title: "Proposal & Agreement",
      description:
        "Our team presents a tailored proposal, complete with project breakdown, cost estimates, and clear deliverables. Once aligned, we formalize the agreement.",
    },
    {
      number: "4",
      title: "Planning & Design",
      description:
        "We move into strategy and design, aligning with regulatory standards, community needs, and future proof solutions. You’ll receive mockups or models where applicable.",
    },
    {
      number: "5",
      title: "Execution & Supervision",
      description:
        "Your project is brought to life by our expert team on site, on time, and on budget. We provide regular updates and ensure quality at every stage.",
    },
    {
      number: "6",
      title: "Handover & Support",
      description:
        "Upon completion, we deliver a fully functional, high impact solution. We remain available for after service support, maintenance, or upgrades.",
    },
  ];

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "City-Centric Solutions",
      description: "Tailored to government, corporate, and private needs",
      percentage: "97%",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Smart and Sustainable",
      description: "Innovations aligned with global standards",
      percentage: "96%",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Track Record",
      description: "Across housing, infrastructure, and energy",
      percentage: "97%",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "People-Focused Development",
      description: "That transforms communities",
      percentage: "100%",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Highbridge City Solutions</title>
      </Helmet>
      <Navbar />
      <section className="font-inter pt-18 pb-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
          <div className="flex flex-col items-center text-center">
            <span
              data-aos="fade-down"
              className="inline-block px-5 py-2 bg-[#0C5A2D]/10 text-[#0C5A2D] rounded-full text-sm font-medium mb-6"
            >
              About Us
            </span>

            <h2
              data-aos="zoom-in-up"
              className="font-playfair-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl leading-tight"
            >
              Designing <span className="text-[#0C5A2D]">Spaces</span>, Shaping{" "}
              <span className="text-[#0C5A2D]">Experiences</span>
            </h2>

            <div
              data-aos="fade-up"
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px bg-gray-300 w-16"></div>
              <div className="h-2 w-2 bg-[#0C5A2D] rounded-full"></div>
              <div className="h-px bg-gray-300 w-16"></div>
            </div>

            <p
              data-aos="fade-up"
              className="text-gray-600 text-lg max-w-3xl leading-relaxed"
            >
              At{" "}
              <span className="font-semibold text-gray-900 mr-1">
                Highbridge City Solutions
              </span>
              we turn spaces into timeless statements blending style,
              functionality, and unmatched craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="font-inter py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="px-4 sm:px-0">
              <span
                data-aos="fade-up"
                className="text-lg md:text-xl mb-2 text-[#0d613d] font-semibold tracking-wider"
              >
                OUR STORY
              </span>

              <h2
                data-aos="fade-up"
                className=" text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Experienced Interior Design Company
              </h2>

              <div data-aos="fade-up" className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are passionate about transforming spaces into elegant,
                  functional, and inspiring environments that reflect the unique
                  taste and lifestyle of our clients. From sleek modern
                  apartments to high end commercial spaces, our designs blend
                  creativity, comfort, and timeless style.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our journey began with a vision to redefine interior design in
                  Nigeria by combining global design trends with local artistry.
                  Over the years, we have built a reputation for delivering
                  bespoke solutions for residential, commercial, and luxury real
                  estate projects.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Highbridge City Solutions, we believe that great design is
                  more than aesthetics it’s about creating experiences. That’s
                  why our team of creative designers, skilled architects, and
                  dedicated project managers work collaboratively from concept
                  to completion, ensuring every detail is thoughtfully crafted.
                  With a commitment to excellence and innovation, we continue to
                  shape interiors that inspire, uplift, and stand the test of
                  time.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 group"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" className="grid grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden group">
                <img
                  src={IMAGES.aboutPage1}
                  alt="About us"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden mt-8 group">
                <img
                  src={IMAGES.aboutPage2}
                  alt="About us"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden group">
                <img
                  src={IMAGES.aboutPage3}
                  alt="About us"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden mt-8 group">
                <img
                  src={IMAGES.aboutlibHome2}
                  alt="Our designs"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              data-aos="fade-up"
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#0C5A2D] mb-4">VISION</h3>
              <p className="text-gray-700 text-lg">
                To be Africa's leading provider of smart, sustainable
                infrastructure and urban solutions that redefine the future of
                city living.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#0C5A2D] mb-4">
                MISSION
              </h3>
              <p className="text-gray-700 text-lg">
                To design and deliver innovative real estate, energy, and urban
                development projects that improve quality of life, empower
                communities, and drive economic growth one city at a time. We
                achieve this through strategic partnerships, cutting edge
                technology, and a commitment to excellence in execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-20 bg-[#043042] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C5A2D] to-[#08311C]"></div>

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+')",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div data-aos="zoom-in-up" className="text-center mb-16">
            <h2 className="font-playfair-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Work With Us
            </h2>
            <div className="flex justify-center items-center gap-4">
              <div className="h-px bg-white w-16"></div>
              <div className="h-2 w-2 bg-white rounded-full"></div>
              <div className="h-px bg-white w-16"></div>
            </div>
            <p className="text-white/90 max-w-2xl mx-auto text-lg mt-6">
              6 easy steps to transform your space with our expert team.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="font-inter py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="zoom-in-up" className="text-center mb-16">
            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Highbridge City Solutions?
            </h2>
            <div className="w-20 h-1 bg-[#0C5A2D] mx-auto mt-4"></div>
            <p className="text-gray-700 text-lg mt-6 max-w-3xl mx-auto">
              At Highbridge City Solutions, we don't just build structures we
              create systems that power the future of cities.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#0C5A2D]/10 p-2 rounded-full mr-4">
                    {feature.icon}
                  </div>
                  <span className="text-2xl font-bold text-[#0C5A2D]">
                    {feature.percentage}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" className="mt-16 text-center">
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
              Backed by the credibility and innovation of the Highbridge Group,
              we specialize in delivering integrated urban solutions that
              combine real estate development, infrastructure, energy, and
              technology to solve today's most pressing city challenges.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
