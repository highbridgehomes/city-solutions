import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building,
  HardHat,
  Map,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Users,
  Award,
  ChevronRight,
  ChevronLeft,
  Quote,
  Check,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { IMAGES } from "../constants/images";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Urban Planning",
      description:
        "Comprehensive city planning solutions for sustainable urban development",
    },
    {
      icon: <HardHat className="h-8 w-8" />,
      title: "Infrastructure Development",
      description:
        "Design and construction of modern, durable urban infrastructure",
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Landscape Architecture",
      description: "Creating functional and beautiful outdoor urban spaces",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Environmental Solutions",
      description: "Eco-friendly urban development strategies",
    },
  ];

  const projects = [
    {
      title: "Eko Atlantic City Development",
      description: "Coastal city expansion project in Lagos",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Lekki Smart City Initiative",
      description: "Integrated smart city infrastructure",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Abuja Green Belt Project",
      description: "Sustainable urban green spaces development",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Eng. Tunde Bakare",
      position: "Lagos State Ministry of Urban Development",
      text: "Highbridge City Solutions delivered exceptional results on our urban renewal project, exceeding all expectations with their innovative approach.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Dr. Amina Mohammed",
      position: "Federal Capital Development Authority",
      text: "Their expertise in sustainable urban planning transformed our vision into reality with precision and professionalism.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Chief Emeka Okonkwo",
      position: "Delta State Urban Planning Commission",
      text: "Working with Highbridge was a game-changer for our city's infrastructure development program.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    },
  ];

  const partners = [
    { logo: IMAGES.partner1, name: "Lagos State Government" },
    { logo: IMAGES.partner2, name: "Federal Ministry of Works" },
    { logo: IMAGES.partner3, name: "African Development Bank" },
    { logo: IMAGES.partner4, name: "UN-Habitat" },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Building Sustainable Urban Futures
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Highbridge City Solutions delivers innovative urban development
                and infrastructure solutions across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  Request Consultation
                </Link>
                <Link
                  to="/projects"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative h-screen">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Your video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
            alt="Urban development background"
          />
        </video>

        {/* Hero Content - Adjusted to match your original text */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to HIGHBRIDGE CITY SOLUTIONS
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Premier interior design company in Lagos, transforming
                residential and commercial spaces with style, precision, and
                passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-consultation"
                  className="bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  Request Consultation
                </Link>
                <Link
                  to="/our-projects"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Highbridge City Solutions
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                As a premier urban development firm and subsidiary of the
                Highbridge Group, we specialize in transforming urban landscapes
                across Nigeria through innovative planning, sustainable design,
                and cutting-edge infrastructure solutions.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Our multidisciplinary team of urban planners, civil engineers,
                architects, and environmental specialists collaborate to create
                cities that are functional, sustainable, and built for the
                future.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Award className="h-6 w-6 text-[#0C5A2D] mr-2" />
                    <h3 className="text-xl font-semibold">15+ Years</h3>
                  </div>
                  <p className="text-gray-600">
                    Of urban development experience
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-[#0C5A2D] mr-2" />
                    <h3 className="text-xl font-semibold">50+ Projects</h3>
                  </div>
                  <p className="text-gray-600">Completed across Nigeria</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Urban planning meeting"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="City infrastructure"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Modern cityscape"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="City skyline"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive urban solutions tailored to meet the unique
              challenges of modern African cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#0C5A2D]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center text-[#0C5A2D] font-medium hover:underline"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Projects
              </h2>
              <p className="text-gray-600 mt-2">
                Our portfolio of transformative urban developments
              </p>
            </div>
            <Link
              to="/projects"
              className="flex items-center text-[#0C5A2D] font-semibold hover:underline"
            >
              View all projects <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200">{project.description}</p>
                    <button className="mt-4 bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hear from government agencies and private sector partners we've
              collaborated with
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-start mb-8">
              <Quote className="h-8 w-8 text-[#0C5A2D] rotate-180" />
              <p className="text-xl md:text-2xl text-gray-700 italic mx-4">
                "{testimonials[currentTestimonial].text}"
              </p>
              <Quote className="h-8 w-8 text-[#0C5A2D]" />
            </div>

            <div className="flex items-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-center text-gray-500 uppercase text-sm font-semibold tracking-wider mb-8">
            Trusted by leading organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-[#0C5A2D] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your urban landscape?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team of urban development experts to discuss your
            project requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-[#0C5A2D] px-8 py-4 rounded-lg font-semibold transition-colors text-center"
            >
              Get in Touch
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
