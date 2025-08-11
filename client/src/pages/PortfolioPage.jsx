import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { IMAGES } from "../constants/images";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Bedroom",
    "Work Space",
    "Living Room",
    "Dining Room",
  ];

  const projects = [
    {
      id: 1,
      title: "Minimalist Master Bedroom",
      category: "Bedroom",
      image: IMAGES.bedroom1,
    },
    {
      id: 2,
      title: "Cozy Scandinavian Bedroom",
      category: "Bedroom",
      image: IMAGES.bedroom2,
    },
    {
      id: 3,
      title: "Luxurious Hotel Style Bedroom",
      category: "Bedroom",
      image: IMAGES.bedroom3,
    },
    {
      id: 4,
      title: "Boutique Hotel Bedroom",
      category: "Bedroom",
      image: IMAGES.bedroom4,
    },
    {
      id: 5,
      title: "Modern Home Office Setup",
      category: "Work Space",
      image: IMAGES.workspace1,
    },
    {
      id: 6,
      title: "Minimalist Workspace",
      category: "Work Space",
      image: IMAGES.workspace2,
    },
    {
      id: 7,
      title: "Executive Office Design",
      category: "Work Space",
      image: IMAGES.workspace3,
    },
    {
      id: 8,
      title: "Tech Startup Office",
      category: "Work Space",
      image: IMAGES.workspace4,
    },
    {
      id: 9,
      title: "Coworking Space Design",
      category: "Work Space",
      image: IMAGES.workspace5,
    },
    {
      id: 10,
      title: "Creative Agency Office",
      category: "Work Space",
      image: IMAGES.workspace6,
    },
    {
      id: 11,
      title: "Corporate Boardroom",
      category: "Work Space",
      image: IMAGES.workspace7,
    },
    {
      id: 12,
      title: "Mid-Century Modern Lounge",
      category: "Living Room",
      image: IMAGES.livingRoom1,
    },
    {
      id: 13,
      title: "Industrial Loft Living",
      category: "Living Room",
      image: IMAGES.livingRoom2,
    },
    {
      id: 14,
      title: "Mediterranean Style Lounge",
      category: "Living Room",
      image: IMAGES.livingRoom3,
    },
    {
      id: 15,
      title: "Small Apartment Living",
      category: "Living Room",
      image: IMAGES.livingRoom4,
    },
    {
      id: 16,
      title: "Eclectic Bohemian Living",
      category: "Living Room",
      image: IMAGES.livingRoom5,
    },
    {
      id: 17,
      title: "Traditional Family Room",
      category: "Living Room",
      image: IMAGES.livingRoom6,
    },
    {
      id: 18,
      title: "Japanese Minimalist Living",
      category: "Living Room",
      image: IMAGES.livingRoom7,
    },

    {
      id: 19,
      title: "Modern Bed Room",
      category: "Bed Room",
      image: IMAGES.bedroom1,
    },

    {
      id: 20,
      title: "Yellow Chilli Private Dining",
      category: "Dining Room",
      image: IMAGES.diningRoom1,
    },
    {
      id: 21,
      title: "Nok by Alára Chic Interior",
      category: "Dining Room",
      image: IMAGES.diningRoom2,
    },
    {
      id: 22,
      title: "Bogobiri House Artistic Dining",
      category: "Dining Room",
      image: IMAGES.diningRoom3,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Portfolio | Highbridge City Solutions</title>
      </Helmet>

      <Navbar />

      <section className="font-inter relative h-[50vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
          alt="Portfolio showcase"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full py-12">
            <div className="max-w-2xl mx-auto text-center sm:text-left">
              <h1
                data-aos="fade-down"
                className="font-playfair-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
              >
                Our Portfolio
              </h1>
              <p
                data-aos="fade-up"
                className="text-lg sm:text-xl mb-10 opacity-90 leading-relaxed max-w-xl mx-auto sm:mx-0"
              >
                Explore our collection of beautifully designed spaces that
                showcase our expertise and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-3 bg-white sticky top-16 sm:top-20 z-10 shadow-sm ">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center sm:justify-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide w-full px-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeFilter === filter
                    ? "bg-[#0C5A2D] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="font-inter py-14  bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm text-white/80">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl text-gray-600">
                No projects found in this category
              </h3>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
