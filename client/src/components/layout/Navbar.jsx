import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import { MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`font-inter sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/85 border border-white/20  ${
        isScrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 md:gap-3"
              onClick={closeMobileMenu}
            >
              <img
                src={IMAGES.citySolutionsLogo}
                alt="Highbridge City Solutions Logo"
                className="w-auto h-10 md:h-14"
                width="40"
                height="40"
              />
              <h1 className="text-sm md:text-md font-bold text-gray-900 leading-tight">
                HIGHBRIDGE
                <br className="block" />
                CITY SOLUTIONS
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8 text-lg"
            aria-label="Main navigation"
          >
            <Link
              to="/services"
              className="text-gray-700 hover:text-[#14844A] font-medium transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#14844A] font-medium transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-700 hover:text-[#14844A] font-medium transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>

            <Link
              to="/contact"
              className="r bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 group shadow-md hover:shadow-lg"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden  ${
          isMenuOpen ? "block" : "hidden"
        } border-t border-gray-300`}
        role="navigation"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <Link
            to="/services"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center  w-full  bg-[#0C5A2D] hover:bg-[#0a4a26] text-white px-6 py-2.5 sm:py-3  rounded-full font-medium transition-colors duration-300 group shadow-md hover:shadow-lg"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
