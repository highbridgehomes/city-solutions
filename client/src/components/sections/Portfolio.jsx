import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop to end
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;

    if (isSwipe) {
      distance > 0 ? next() : prev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const totalDots = maxIndex + 1;
  const dots = Array.from({ length: totalDots }, (_, i) => i);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-[#0C5A2D]">Our Project</span> Gallery
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-px bg-[#0C5A2D] w-16"></div>
            <div className="h-2 w-2 bg-[#0C5A2D] rounded-full"></div>
            <div className="h-px bg-[#0C5A2D] w-16"></div>
          </div>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            Explore our portfolio of premium interior design projects that
            showcase our expertise and attention to detail.
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            disabled={currentIndex === 0 && !(visibleImages === 1)}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-[#0C5A2D] hover:text-white transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-0 group-hover:opacity-100"
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex && !(visibleImages === 1)}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-[#0C5A2D] hover:text-white transition-all duration-300 ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "opacity-0 group-hover:opacity-100"
            }`}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

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
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg group-hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#0C5A2D] text-white text-xs font-medium rounded-full mb-2">
                          {image.category}
                        </span>
                        <p className="text-white font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 group">
            View Full Portfolio
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
