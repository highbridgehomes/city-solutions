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

  const partners = [
    { logo: IMAGES.highbridgegroupLogo, name: "Highbridge Group" },
    { logo: IMAGES.homesLogo, name: "Highbridge Homes" },
    { logo: IMAGES.energyLogo, name: "Highbridge Energy" },
  ];

  return (
    <>
      <Navbar />

      <section className="relative h-screen sm:h-[90vh] overflow-hidden">
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
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

        <div className="absolute bottom-6 right-6 z-20 backdrop-blur-sm bg-white/10 p-3 rounded-xl border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:shadow-xl">
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#226737] mb-4">
              WELCOME TO{" "}
              <span className="text-gray-900">HIGHBRIDGE CITY SOLUTIONS</span>
            </h2>
            <div className="w-20 h-1 bg-[#0C5A2D] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="px-4 sm:px-0">
              <span className="text-lg md:text-xl mb-2 text-[#0d613d] font-semibold tracking-wider">
                ABOUT US
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
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
                  className="inline-flex items-center justify-center bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 group"
                >
                  Learn More About Us
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

      {/* Enhanced Services Section */}
      <section className="py-20 bg-[#043042] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/grid-pattern-white.svg')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Premium Services
            </h2>
            <div className="flex justify-center items-center gap-4">
              <div className="h-px bg-white w-16"></div>
              <div className="h-2 w-2 bg-white rounded-full"></div>
              <div className="h-px bg-white w-16"></div>
            </div>
            <p className="text-white/90 max-w-2xl mx-auto text-lg mt-6">
              Comprehensive urban solutions tailored to meet the unique
              challenges of modern African cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-[#0C5A2D]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center text-[#0C5A2D] font-medium hover:underline group"
                >
                  Learn more{" "}
                  <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white text-[#0C5A2D] px-8 py-4 rounded-lg font-medium transition-colors duration-300 hover:bg-gray-100 group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Featured Projects
              </h2>
              <div className="w-20 h-1 bg-[#0C5A2D] mt-4"></div>
              <p className="text-gray-600 mt-6 max-w-2xl">
                Whether it's in smart housing layouts, eco-friendly roads, or
                intelligent drainage systems, we're at the forefront of shaping
                the cities of tomorrow.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center text-[#0C5A2D] font-semibold hover:underline group"
            >
              View all projects{" "}
              <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-6 py-3 rounded-lg font-medium transition-colors group"
                    >
                      View Case Study
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-[#0C5A2D] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-[#0C5A2D]/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#0C5A2D]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Client Name</h4>
                    <p className="text-gray-500 text-sm">CEO, Company Name</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Highbridge City Solutions transformed our office space beyond
                  expectations. Their attention to detail and creative solutions
                  have significantly improved our work environment."
                </p>
                <div className="mt-6 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurGallery />

      {/* Enhanced CTA Section */}
      <section className="relative py-32 bg-[#0C5A2D] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')]"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0C5A2D]/80 to-[#0a4a26]/80"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Ready to transform your space?
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mt-4 mb-8"></div>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team of design experts to discuss your project
            requirements and vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#0C5A2D] px-8 py-4 rounded-lg font-semibold transition-colors text-center shadow-md hover:shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors text-center shadow-md hover:shadow-lg"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <div className="w-20 h-1 bg-[#0C5A2D] mx-auto mt-4"></div>
            <p className="text-gray-700 text-lg mt-6 max-w-3xl mx-auto">
              We collaborate with industry leaders who share our commitment to
              excellence, innovation, and quality service delivery.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-3 gap-8">
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
