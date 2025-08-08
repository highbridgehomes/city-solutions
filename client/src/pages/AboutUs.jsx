import React from "react";
import { Link } from "react-router-dom";
import { Award, Users, CheckCircle, Leaf, ArrowRight } from "lucide-react";
import { IMAGES } from "../constants/images";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const About = () => {
  const stats = [
    { value: "97%", label: "Client Satisfaction" },
    { value: "96%", label: "Projects Completed" },
    { value: "100+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
  ];

  const steps = [
    {
      number: "1",
      title: "Contact & Consultation",
      description:
        "Reach out to us via our contact form, email, or phone. We'll schedule a free consultation to understand your needs, goals, and vision.",
    },
    {
      number: "2",
      title: "Project Discovery",
      description:
        "We dive deeper into your requirements to assess scope, timelines, and feasibility.",
    },
    {
      number: "3",
      title: "Proposal & Agreement",
      description:
        "Our team presents a tailored proposal with project breakdown and cost estimates.",
    },
    {
      number: "4",
      title: "Planning & Design",
      description:
        "We move into strategy and design, aligning with regulatory standards and community needs.",
    },
    {
      number: "5",
      title: "Execution & Supervision",
      description:
        "Your project is brought to life by our expert team—on-site, on time, and on budget.",
    },
    {
      number: "6",
      title: "Handover & Support",
      description:
        "Upon completion, we deliver a fully functional solution with after-service support.",
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
      <Navbar />

      <section className="font-inter relative h-[50vh] md:h-[70vh] overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Highbridge City Solutions office"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full py-12">
            <div className="max-w-2xl mx-auto text-center sm:text-left">
              <h1 className="font-playfair-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                About Highbridge <br className="hidden sm:block" />
                City Solutions
              </h1>
              <p className="text-lg sm:text-xl mb-10 opacity-90 leading-relaxed max-w-xl mx-auto sm:mx-0">
                Premier interior design company transforming spaces across Lagos
                and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="px-4 sm:px-0">
              <span className="text-lg md:text-xl mb-2 text-[#0d613d] font-semibold tracking-wider">
                OUR STORY
              </span>

              <h2 className=" text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Experienced Interior Design Company
              </h2>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Highbridge City Solutions is a premier interior design company
                  based in Lagos, Nigeria, and a proud subsidiary of the
                  renowned Highbridge Group.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We specialize in transforming spaces into elegant, functional,
                  and inspiring environments that reflect the unique taste and
                  lifestyle of our clients.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  With a deep understanding of contemporary design trends and a
                  commitment to excellence, we offer bespoke interior design
                  solutions for residential, commercial, and luxury real estate
                  projects. Our team of creative designers, architects, and
                  project managers work collaboratively to deliver aesthetically
                  pleasing and structurally sound interiors that exceed
                  expectations.
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

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Our office"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden mt-8 group">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Our team"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Our projects"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden mt-8 group">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0C5A2D] mb-4">VISION</h3>
              <p className="text-gray-700 text-lg">
                To be Africa's leading provider of smart, sustainable
                infrastructure and urban solutions that redefine the future of
                city living.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0C5A2D] mb-4">
                MISSION
              </h3>
              <p className="text-gray-700 text-lg">
                At Highbridge City Solutions, our mission is to design and
                deliver innovative real estate, energy, and urban development
                projects that improve quality of life, empower communities, and
                drive economic growth—one city at a time.
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
          <div className="text-center mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <section className="font-inter py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Highbridge City Solutions?
            </h2>
            <div className="w-20 h-1 bg-[#0C5A2D] mx-auto mt-4"></div>
            <p className="text-gray-700 text-lg mt-6 max-w-3xl mx-auto">
              At Highbridge City Solutions, we don't just build structures—we
              create systems that power the future of cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          <div className="mt-16 text-center">
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
              Backed by the credibility and innovation of the Highbridge Group,
              we specialize in delivering integrated urban solutions that
              combine real estate development, infrastructure, energy, and
              technology to solve today's most pressing city challenges.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 group"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="font-inter py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#0C5A2D] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
