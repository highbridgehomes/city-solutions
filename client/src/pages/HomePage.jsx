import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  ArrowUpRight,
  ArrowRight,
  Trophy,
  Calendar,
  Play,
  LayoutGrid,
  Armchair,
  Lamp,
  Users,
  Paintbrush,
  Home as HomeIcon,
} from "lucide-react";
import { IMAGES } from "../constants/images";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import OurGallery from "../components/sections/Portfolio";
import { Helmet } from "react-helmet-async";

const colors = {
  primary: "#0C5A2D",
  secondary: "#1D7A4C",
  accent: "#2E9D64",
  light: "#E8F5E9",
  muted: "#A5D6A7",
};

const HomePage = () => {
  const [videoModal, setVideoModal] = useState({ open: false, videoId: "" });

  const services = [
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Residential Interior Design",
      description:
        "Beautiful, functional home interiors tailored to your lifestyle and personality",
    },
    {
      icon: <LayoutGrid className="h-8 w-8" />,
      title: "Commercial & Office Interiors",
      description:
        "Productive workspaces that reflect your brand identity and culture",
    },
    {
      icon: <Armchair className="h-8 w-8" />,
      title: "Furniture & Fixture Selection",
      description: "Curated selection of quality furniture and decor items",
    },
    {
      icon: <Lamp className="h-8 w-8" />,
      title: "Lighting Design",
      description: "Ambient lighting solutions to enhance your space",
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Renovations & Styling",
      description: "Transform existing spaces with creative redesigns",
    },
  ];

  const projects = [
    {
      title: "Highbridge City Solutions Interior Designs",
      description: "Modern luxury apartment redesign",
      videoId: "ZeCICKlFsNc",
      slug: "lekki-penthouse",
      thumbnail: "https://img.youtube.com/vi/ZeCICKlFsNc/maxresdefault.jpg",
    },
    {
      title: "Ongoing Interior Design at Highbridge Residences",
      description: "Contemporary workspace design",
      videoId: "Toqrh84i2Zk",
      slug: "victoria-island-office",
      thumbnail: "https://img.youtube.com/vi/Toqrh84i2Zk/maxresdefault.jpg",
    },
    {
      title: "Highbridge Residences Interiors",
      description:
        "Elegant interior design featuring timeless aesthetics and styling throughout the residence.",
      videoId: "cfo20chkKck",
      slug: "ikoyi-residence",
      thumbnail: "https://img.youtube.com/vi/cfo20chkKck/maxresdefault.jpg",
    },
  ];

  const partners = [
    { logo: IMAGES.highbridgegroupLogo, name: "Highbridge Group" },
    { logo: IMAGES.homesLogo, name: "Highbridge Homes" },
    { logo: IMAGES.energyLogo, name: "Highbridge Energy" },
  ];

  const openVideoModal = (videoId) => {
    setVideoModal({ open: true, videoId });
  };

  const closeVideoModal = () => {
    setVideoModal({ open: false, videoId: "" });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Home | Highbridge City Solutions</title>
      </Helmet>
      <Navbar />

      {videoModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative mx-4">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div style={{ width: "900px", height: "506px" }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoModal.videoId}?autoplay=1`}
                className="w-full h-full rounded-lg shadow-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <section className="font-inter relative h-[70vh] lg:h-[90vh] overflow-hidden">
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
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white px-6 py-3 sm:px-7 sm:py-4 font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 text-base whitespace-nowrap group"
                >
                  Explore Projects
                  <ArrowUpRight className="w-5 h-5 ml-2 flex-shrink-0 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                </button>
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

      <section
        className="font-inter py-24 md:py-32"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 sm:mb-32">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: colors.primary }}
            >
              Welcome to
              <span className="text-gray-900"> Highbridge Interior Design</span>
            </h2>
            <div
              className="w-20 h-1"
              style={{ backgroundColor: colors.primary, margin: "1rem auto" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="px-4 sm:px-0">
              <span
                className="text-lg md:text-xl mb-2 font-semibold tracking-wider"
                style={{ color: colors.primary }}
              >
                ABOUT US
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Premier Interior Design Company in Lagos
              </h2>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Highbridge City Solutions is a premier interior design company
                  based in Lagos, Nigeria, and a proud subsidiary of the
                  renowned Highbridge Group. We specialize in transforming
                  spaces into elegant, functional, and inspiring environments
                  that reflect the unique taste and lifestyle of our clients.
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Award
                      className="h-6 w-6 mr-3"
                      style={{ color: colors.primary }}
                    />
                    <h3 className="text-xl font-semibold">15+ Years</h3>
                  </div>
                  <p className="text-gray-600">Of interior design experience</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Users
                      className="h-6 w-6 mr-3"
                      style={{ color: colors.primary }}
                    />
                    <h3 className="text-xl font-semibold">200+ Projects</h3>
                  </div>
                  <p className="text-gray-600">Completed across Nigeria</p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 group"
                  style={{
                    backgroundColor: colors.primary,
                    hover: { backgroundColor: colors.secondary },
                  }}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden group">
                <img
                  src={IMAGES.aboutlibHome1}
                  alt="Luxury living room"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden mt-8 group">
                <img
                  src={IMAGES.aboutlibHome2}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden group">
                <img
                  src={IMAGES.aboutlibHome3}
                  alt="Elegant bedroom"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden mt-8 group">
                <img
                  src={IMAGES.aboutlibHome4}
                  alt="Stylish office space"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="font-inter py-24 md:py-32"
        style={{ backgroundColor: colors.light }}
        id="projects-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span style={{ color: colors.primary }}>Design Services</span>
            </h2>
            <div
              className="w-20 h-1 mx-auto mt-4"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              We offer comprehensive interior design solutions tailored to your
              unique style and functional requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300"
                    style={{
                      backgroundColor: `${colors.primary}10`,
                      groupHover: { backgroundColor: `${colors.primary}20` },
                    }}
                  >
                    <div style={{ color: colors.primary }}>{service.icon}</div>
                  </div>

                  <h3
                    className="text-2xl font-semibold text-gray-900 mb-4 transition-colors duration-300"
                    style={{ groupHover: { color: colors.primary } }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center justify-center text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 group"
              style={{
                backgroundColor: colors.primary,
                hover: { backgroundColor: colors.secondary },
              }}
            >
              <span className="relative z-10 flex items-center">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="font-inter pt-24 sm:pt-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{
                  backgroundColor: `${colors.primary}10`,
                  color: colors.primary,
                }}
              >
                Our Portfolio
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Spaces That
                <span style={{ color: colors.primary }}> Inspire</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Explore our portfolio of beautifully designed spaces that
                combine functionality with aesthetic appeal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => openVideoModal(project.videoId)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/30">
                    <div
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ color: colors.primary }}
                    >
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurGallery />

      <section className="font-inter relative py-24 md:py-32 text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: colors.primary }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+')",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <div
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              borderColor: "rgba(255,255,255,0.2)",
            }}
          >
            <span className="relative flex h-3 w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full"
                style={{ backgroundColor: colors.muted, opacity: 0.75 }}
              ></span>
              <span
                className="relative inline-flex rounded-full h-3 w-3"
                style={{ backgroundColor: colors.muted }}
              ></span>
            </span>
            <span className="text-sm font-medium">
              We're accepting new projects
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform
            <span style={{ color: colors.muted }}> Your Space?</span>
          </h2>

          <p className="text-xl sm:text-2xl mb-12 opacity-90 max-w-3xl mx-auto font-light">
            Contact our team of design experts to discuss your project
            requirements and vision.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="relative group bg-white hover:bg-gray-50 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
              style={{ color: colors.primary }}
            >
              Get in Touch
            </Link>
            <Link
              to="https://wa.me/2349114017478"
              className="flex items-center justify-center gap-2 group px-8 py-4 rounded-full border font-medium transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "transparent",
                borderColor: "rgba(255,255,255,0.3)",
                hover: { borderColor: "rgba(255,255,255,0.5)" },
              }}
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

          <div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
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
            <div
              className="h-4 w-px hidden sm:block"
              style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
            ></div>
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

        <div
          className="absolute top-20 -left-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: colors.muted, opacity: 0.1 }}
        ></div>
        <div
          className="absolute bottom-10 -right-20 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        ></div>
      </section>

      <section className="font-inter py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Partners
            </h2>
            <div
              className="w-20 h-1 mx-auto mt-4"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <p className="text-gray-700 text-lg mt-6 max-w-5xl mx-auto">
              At Highbridge Interior Design, we collaborate with trusted
              partners who share our commitment to excellence in design and
              craftsmanship.
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

export default HomePage;
