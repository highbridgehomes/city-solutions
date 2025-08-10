import React from "react";
import { Link } from "react-router-dom";
import { HardHat, Hammer, Box, Bed, Utensils } from "lucide-react";
import { IMAGES } from "../constants/images";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="font-inter pt-18 pb-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block px-5 py-2 bg-[#0C5A2D]/10 text-[#0C5A2D] rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h2 className="font-playfair-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl leading-tight">
              Transforming Spaces with
              <span className="text-[#0C5A2D]"> Expert Craftsmanship</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gray-300 w-16"></div>
              <div className="h-2 w-2 bg-[#0C5A2D] rounded-full"></div>
              <div className="h-px bg-gray-300 w-16"></div>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl">
              Discover our comprehensive range of construction and interior
              design services. From renovation projects to custom metalwork and
              bespoke furniture, we deliver exceptional quality with meticulous
              attention to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="font-inter py-10 sm:py-16 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
              <img
                src={IMAGES.renovation1}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <h3 className="absolute bottom-8 left-8 text-3xl sm:text-4xl font-bold text-white">
                Renovation & Construction
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex justify-center sm:justify-start mb-2">
                  <div className="flex gap-4 items-center ">
                    <div className="bg-[#0C5A2D]/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      <Hammer className="h-8 w-8 text-[#0C5A2D]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-700">
                      Renovation & Construction
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  From concept to completion, we bring spaces back to life with
                  precision and style. Our renovation and construction services
                  cover everything from structural upgrades to full-scale
                  property transformations. Whether you're improving your home,
                  office, or commercial space, we deliver excellence through
                  smart design, expert craftsmanship, and quality materials.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={IMAGES.renovation2}
                  alt="Renovation work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
              <img
                src={IMAGES.metalWork1}
                alt="Metal Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <h3 className="absolute bottom-8 left-8 text-3xl sm:text-4xl font-bold text-white">
                Metal Work
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex justify-center sm:justify-start mb-2">
                  <div className="flex gap-4 items-center ">
                    <div className="bg-[#0C5A2D]/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      <HardHat className="h-8 w-8 text-[#0C5A2D]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-700">
                      Metal Work
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  We craft durable, elegant, and functional metal solutions for
                  both residential and commercial needs. Our metalwork includes
                  gates, railings, window protectors, steel structures, and more
                  designed with strength, safety, and sophistication in mind.
                  Every piece is tailored to suit your space and style,
                  combining industrial durability with aesthetic appeal.
                </p>
              </div>
              <div className="lg:order-1 relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={IMAGES.metalWork2}
                  alt="Metal fabrication"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-10 sm:py-16 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
              <img
                src={IMAGES.kitchen1}
                alt="Kitchen Set"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <h3 className="absolute bottom-8 left-8 text-3xl sm:text-4xl font-bold text-white">
                Kitchen Set
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex justify-center sm:justify-start mb-2">
                  <div className="flex gap-4 items-center ">
                    <div className="bg-[#0C5A2D]/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      <Utensils className="h-8 w-8 text-[#0C5A2D]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-700">
                      Kitchen Set
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-base sm:text-lg  leading-relaxed">
                  Your kitchen deserves the perfect blend of beauty and
                  function. Our custom kitchen sets are designed to maximize
                  space, improve workflow, and elevate your lifestyle. We offer
                  modern cabinetry, fittings, countertops, and storage solutions
                  built with premium materials and flawless finishes. From
                  contemporary minimalist designs to classic styles, we create
                  kitchens that inspire culinary creativity.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={IMAGES.kitchen2}
                  alt="Kitchen design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
              <img
                src={IMAGES.bedroomService1}
                alt="Bedroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <h3 className="absolute bottom-8 left-8 text-3xl sm:text-4xl font-bold text-white">
                Bedroom
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex justify-center sm:justify-start mb-2">
                  <div className="flex gap-4 items-center ">
                    <div className="bg-[#0C5A2D]/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      <Bed className="h-8 w-8 text-[#0C5A2D]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-700">
                      Bedroom
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-base sm:text-lg  leading-relaxed">
                  We create serene, stylish bedroom solutions tailored to your
                  personal taste and space. From wardrobes and bed frames to
                  lighting and layouts, our bedroom interiors are crafted for
                  comfort, functionality, and timeless appeal—turning your
                  bedroom into your private sanctuary. Each design element is
                  carefully selected to create a harmonious and restful
                  environment.
                </p>
              </div>
              <div className="lg:order-1 relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={IMAGES.bedroomService2}
                  alt="Bedroom design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-10 sm:py-16 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
              <img
                src={IMAGES.handmade1}
                alt="Handmade Products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <h3 className="absolute bottom-8 left-8 text-3xl sm:text-4xl font-bold text-white">
                Handmade Products
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex justify-center sm:justify-start mb-2">
                  <div className="flex gap-4 items-center ">
                    <div className="bg-[#0C5A2D]/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      <Box className="h-8 w-8 text-[#0C5A2D]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-700">
                      Handmade Products
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-base sm:text-lg  leading-relaxed">
                  Our handmade collections showcase the art of craftsmanship.
                  Each item—be it furniture, décor, or utility pieces—is
                  uniquely designed and manually crafted with attention to
                  detail. These products combine traditional techniques with
                  modern aesthetics, adding a personal, artisanal touch to your
                  space. From reclaimed wood tables to hand-forged metal
                  accents, each piece tells a story of skilled workmanship.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={IMAGES.handmade2}
                  alt="Handmade furniture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-satoshi text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Working Process
            </h2>
            <div className="w-24 h-1 bg-[#0C5A2D] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A systematic approach to ensure quality, precision, and customer
              satisfaction in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#0C5A2D]/30 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#0C5A2D]/10 text-[#0C5A2D] w-14 h-14 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We discuss your vision, requirements, and budget to understand
                your needs.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#0C5A2D]/30 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#0C5A2D]/10 text-[#0C5A2D] w-14 h-14 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Planning</h3>
              <p className="text-gray-600">
                Our team creates detailed plans and 3D renderings for your
                approval.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#0C5A2D]/30 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#0C5A2D]/10 text-[#0C5A2D] w-14 h-14 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Execution</h3>
              <p className="text-gray-600">
                Skilled craftsmen bring the design to life with quality
                materials and precision.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#0C5A2D]/30 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#0C5A2D]/10 text-[#0C5A2D] w-14 h-14 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Completion</h3>
              <p className="text-gray-600">
                Final inspection and handover with your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
