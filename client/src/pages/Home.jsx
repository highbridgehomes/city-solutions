import React from "react";
import { Link } from "react-router-dom";
import {
  Building,
  HardHat,
  Map,
  Leaf,
  Users,
  Award,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  Trophy,
  Calendar,
  Play,
} from "lucide-react";
import { IMAGES } from "../constants/images";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import OurGallery from "../components/sections/Portfolio";

const Home = () => {
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
      videoId: "ZeCICKlFsNc",
      slug: "eko-atlantic",
    },
    {
      title: "Lekki Smart City Initiative",
      description: "Integrated smart city infrastructure",
      videoId: "Toqrh84i2Zk",
      slug: "lekki-smart-city",
    },
    {
      title: "Abuja Green Belt Project",
      description: "Sustainable urban green spaces development",
      videoId: "cfo20chkKck",
      slug: "abuja-green-belt",
    },
  ];

  const partners = [
    { logo: IMAGES.highbridgegroupLogo, name: "Highbridge Group" },
    { logo: IMAGES.homesLogo, name: "Highbridge Homes" },
    { logo: IMAGES.energyLogo, name: "Highbridge Energy" },
  ];

  return (
    <>
      <Navbar />

      <section className="font-inter relative h-[70vh]  lg:h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
            alt="Urban development background"
          />
        </video>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full py-12">
            <div className="max-w-2xl mx-auto text-center sm:text-left">
              <h1 className="font-playfair-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Transforming Spaces. <br className="hidden sm:block" />
                Elevating Lifestyles
              </h1>
              <p className="text-lg sm:text-xl mb-10 opacity-90 leading-relaxed max-w-xl mx-auto sm:mx-0">
                Premier interior design company in Lagos, transforming
                residential and commercial spaces with style, precision, and
                passion.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4">
                <Link
                  href="/request-consultation"
                  className="inline-flex bg-white items-center justify-center rounded-full hover:bg-white/10 border-2 border-white text-gray-800 px-6 py-3 sm:px-7 sm:py-4 font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 text-base whitespace-nowrap hover:text-white group"
                >
                  Request Consultation
                  <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/our-projects"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white px-6 py-3 sm:px-7 sm:py-4 font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 text-base whitespace-nowrap group"
                >
                  View Our Projects
                  <ArrowUpRight className="w-5 h-5 ml-2 flex-shrink-0 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-6 right-6 z-20 backdrop-blur-sm bg-white/10 p-3 rounded-xl border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 bg-white/20 p-2 rounded-lg">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div className="flex-shrink-0 bg-white/20 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>

            <div className="text-white text-sm font-medium hidden lg:block">
              Award Winning Designs • Since 2015
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 sm:mb-32">
            <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-[#226737] mb-4">
              Welcome to
              <span className="text-gray-900 "> Highbridge City Solutions</span>
            </h2>
            <div className="w-20 h-1 bg-[#0C5A2D] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="px-4 sm:px-0">
              <span className="text-lg md:text-xl mb-2 text-[#0d613d] font-semibold tracking-wider">
                ABOUT US
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Premier Interior Design Company in Lagos
              </h2>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We specialize in transforming spaces into elegant, functional,
                  and inspiring environments that reflect the unique taste and
                  lifestyle of our clients.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  With a deep understanding of contemporary design trends and a
                  commitment to excellence, we offer bespoke interior design
                  solutions for residential, commercial, and luxury real estate
                  projects.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Award className="h-6 w-6 text-[#0C5A2D] mr-3" />
                    <h3 className="text-xl font-semibold">15+ Years</h3>
                  </div>
                  <p className="text-gray-600">
                    Of urban development experience
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-[#0C5A2D] mr-3" />
                    <h3 className="text-xl font-semibold">50+ Projects</h3>
                  </div>
                  <p className="text-gray-600">Completed across Nigeria</p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center bg-[#0C5A2D] hover:bg-[#0a4a26] text-white  px-8 py-4 rounded-full  font-medium transition-colors duration-300 group"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Urban planning meeting"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden mt-8 group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="City infrastructure"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Modern cityscape"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden mt-8 group">
                <img
                  src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="City skyline"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-24 sm:py-40 bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[3%]"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+')",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6 backdrop-blur-sm">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                Urban Solutions
              </span>
            </div>
            <h2 className="font-inter text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Premium
              <span className="text-emerald-400"> Services</span>
            </h2>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-px bg-white/30 w-24"></div>
              <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
              <div className="h-px bg-white/30 w-24"></div>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto text-xl font-light">
              Comprehensive urban solutions tailored to meet the unique
              challenges of modern African cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-[#1E1E1E] rounded-2xl p-8 border border-white/5 hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 bg-emerald-400/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-400/20 transition-colors duration-300">
                  <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="relative z-10 text-2xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative z-10 text-white/70 mb-6">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="relative z-10 mt-2 inline-flex items-center text-emerald-400 font-medium group"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              href="/services"
              className="relative inline-flex items-center justify-center bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-8 py-4 rounded-full font-medium  transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View All Services
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              <span className="absolute inset-0 bg-gradient-to-r bg-[#0C5A2D] hover:bg-[#0a4a26] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </div>
        </div>

        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
      </section>

      <section className="font-inter pt-24 sm:pt-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0C5A2D]/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#0C5A2D]/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-2 bg-[#0C5A2D]/10 text-[#0C5A2D] rounded-full text-sm font-medium mb-4">
                Urban Innovations
              </span>
              <h2 className="font-satoshi text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Shaping the{" "}
                <span className="text-[#0C5A2D]">Cities of Tomorrow</span>
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-gray-300 w-16"></div>
                <div className="h-2 w-2 bg-[#0C5A2D] rounded-full"></div>
                <div className="h-px bg-gray-300 w-16"></div>
              </div>
              <p className="text-gray-600 text-lg">
                Explore our pioneering work in smart housing, sustainable
                infrastructure, and intelligent urban systems that are
                redefining urban landscapes. We are at the forefront of shaping
                the cities of tomorrow
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 group min-w-fit"
            >
              <span className="text-[#0C5A2D] font-medium text-lg border-b border-transparent group-hover:border-[#0C5A2D] transition-all duration-300">
                View all projects
              </span>
              <div className="relative w-6 h-6 flex items-center justify-center">
                <ChevronRight className="h-5 w-5 text-[#0C5A2D] group-hover:translate-x-1 transition-transform duration-300 absolute inset-0" />
                <ChevronRight className="h-5 w-5 text-[#0C5A2D]/30 group-hover:translate-x-2 group-hover:opacity-0 transition-all duration-300 absolute inset-0" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}?autoplay=0&rel=0&modestbranding=1`}
                    className="w-full h-full object-cover scale-100"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                  ></iframe>
                </div>

                <div className="bg-white p-6 relative z-10">
                  <div className="absolute top-0 left-6 w-12 h-1 bg-[#0C5A2D] transform -translate-y-1/2"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0C5A2D] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurGallery />

      <section className="font-inter relative py-24 md:py-32 text-white overflow-hidden">
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
            <span className="text-sm font-medium">
              We're accepting new projects
            </span>
          </div>

          <h2 className="font-satoshi text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform
            <span className="text-emerald-300"> your space ?</span>
          </h2>

          <p className="text-xl sm:text-2xl mb-12 opacity-90 max-w-3xl mx-auto font-light">
            Contact our team of design experts to discuss your project
            requirements and vision.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="relative group bg-white hover:bg-gray-50 text-[#08311C] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
            <Link
              to="/consultation"
              className="flex items-center justify-center gap-2 group bg-transparent hover:bg-white/10 px-8 py-4 rounded-full border border-white/30 font-medium transition-all duration-300 hover:border-white/50 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:text-emerald-300 transition-colors"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Request Consultation
            </Link>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>
                (+234) 815 288 6217 <br />
                (+234) 815 288 6219
              </span>
            </div>
            <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span> info@highbridgecitysolutions.com</span>
            </div>
          </div>
        </div>

        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
      </section>

      <section className="font-inter py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Partners
            </h2>
            <div className="w-20 h-1 bg-[#0C5A2D] mx-auto mt-4"></div>
            <p className="text-gray-700 text-lg mt-6 max-w-5xl mx-auto ">
              At Highbridge City Solutions, we are proud to collaborate with a
              network of trusted partners who share our commitment to
              excellence, innovation, and quality service delivery. From
              architects and engineers to suppliers and artisans, our partners
              play a vital role in helping us bring each project to life on
              time, on budget, and beyond expectations. Together, we build more
              than structures we build trust, value, and lasting impact.
            </p>
          </div>

          <div className="max-w-3xl px-4 sm:px-0 mx-auto grid grid-cols-3 gap-4 sm:gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-20"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
