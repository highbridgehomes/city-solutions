import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Luxury hotel pool area with modern design",
    category: "Exterior",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Elegant hotel bedroom with premium furnishings",
    category: "Interior",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Gourmet restaurant dining experience",
    category: "Dining",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Poolside dining with scenic views",
    category: "Amenities",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Luxury hotel lounge with sophisticated decor",
    category: "Interior",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Modern hotel reception area",
    category: "Lobby",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Fine dining restaurant setting",
    category: "Dining",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Luxury spa relaxation area",
    category: "Wellness",
  },
];

// Define green color palette
const colors = {
  primary: "#0C5A2D", // Dark green
  secondary: "#1D7A4C", // Medium green
  accent: "#2E9D64", // Bright green
  light: "#E8F5E9", // Very light green
  muted: "#A5D6A7", // Soft muted green
};

const OurGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [visibleImages, setVisibleImages] = useState(4);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth >= 1280) {
        setVisibleImages(4);
      } else if (window.innerWidth >= 1024) {
        setVisibleImages(3);
      } else if (window.innerWidth >= 768) {
        setVisibleImages(2);
      } else {
        setVisibleImages(1);
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);

    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const maxIndex = Math.max(0, galleryImages.length - visibleImages);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;
    if (isSwipe) distance > 0 ? next() : prev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const dots = Array.from({ length: maxIndex + 1 }, (_, i) => i);

  return (
    <section className="font-inter bg-gray-50 py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Project<span style={{ color: colors.primary }}> Gallery</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4"
            style={{ backgroundColor: colors.primary }}
          ></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Explore our portfolio of premium interior design projects that
            showcase our expertise and attention to detail.
          </p>
        </div>

        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={prev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-[#0C5A2D] hover:text-white transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-[#0C5A2D] hover:text-white transition-all duration-300 ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Images */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleImages)
                }%)`,
                width: `${(galleryImages.length * 100) / visibleImages}%`,
              }}
              onTouchStart={isTouchDevice ? handleTouchStart : undefined}
              onTouchMove={isTouchDevice ? handleTouchMove : undefined}
              onTouchEnd={isTouchDevice ? handleTouchEnd : undefined}
            >
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleImages}%` }}
                >
                  <div className="relative aspect-[16/9] lg:aspect-[4/3] max-h-[40vh] lg:max-h-none overflow-hidden rounded-lg shadow-lg transition-shadow duration-300">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center max-h-[60vh] lg:max-h-none"
                      loading="lazy"
                    />
                    {/* Always visible overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 lg:p-6 opacity-100 transition-opacity duration-300">
                      <div>
                        <span className="inline-block px-2 py-0.5 sm:px-3 lg:py-1 bg-[#0C5A2D] text-white text-[10px] sm:text-xs font-medium rounded-full mb-1 sm:mb-2">
                          {image.category}
                        </span>
                        <p className="text-white font-medium text-sm sm:text-base leading-tight">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {dots.map((dot, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex
                    ? "bg-[#0C5A2D] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 group"
          >
            View Full Portfolio
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
