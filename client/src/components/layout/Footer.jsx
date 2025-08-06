import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Clock,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [openOtherPages, setOpenOtherPages] = useState(false);
  const [openQuickLinks, setOpenQuickLinks] = useState(false);

  const toggleOtherPages = () => setOpenOtherPages(!openOtherPages);
  const toggleQuickLinks = () => setOpenQuickLinks(!openQuickLinks);

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Company Info - Always visible */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={IMAGES.citySolutionsWhiteLogo}
                alt="Highbridge City Solutions Logo"
                className="w-auto h-20"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold tracking-tight">
                HIGHBRIDGE CITY SOLUTIONS
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A premier interior design company based in Lagos, Nigeria, and a
              proud subsidiary of the renowned Highbridge Group.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              <a
                href="https://web.facebook.com/hbcitysolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0C5A2D] transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/hbcitysolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0C5A2D] transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0C5A2D] transition-all duration-300 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0C5A2D] transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5 text-white" />
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              A member of Highbridge Group
            </p>
          </div>

          {/* Combined Pages & Links Column */}
          <div className="flex sm:flex-row justify-center gap-4 sm:gap-12 flex-col">
            {/* Other Pages Section */}
            <div>
              <button
                className="flex items-center justify-between w-full md:mb-4 pb-3 border-b border-gray-800 md:border-none"
                onClick={toggleOtherPages}
                aria-expanded={openOtherPages}
              >
                <h4 className="text-lg font-semibold text-white">
                  Other Pages
                </h4>
                {openOtherPages ? (
                  <ChevronUp className="h-5 w-5 text-gray-400 md:hidden" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 md:hidden" />
                )}
              </button>
              <ul
                className={`${
                  openOtherPages ? "block" : "hidden"
                } md:block text-gray-400`}
              >
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors duration-200 block py-2"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors duration-200 block py-2"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="hover:text-white transition-colors duration-200 block py-2"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors duration-200 block py-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <button
                className="flex items-center justify-between w-full md:mb-4 pb-3 border-b border-gray-800 md:border-none"
                onClick={toggleQuickLinks}
                aria-expanded={openQuickLinks}
              >
                <h4 className="text-lg font-semibold text-white">
                  Quick Links
                </h4>
                {openQuickLinks ? (
                  <ChevronUp className="h-5 w-5 text-gray-400 md:hidden" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 md:hidden" />
                )}
              </button>
              <ul
                className={`${
                  openQuickLinks ? "block" : "hidden"
                } md:block  text-gray-400`}
              >
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-white transition-colors duration-200 block py-2"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-service"
                    className="hover:text-white transition-colors duration-200 block py-2"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-white transition-colors duration-200 block py-2"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-white transition-colors duration-200 block py-2"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info - Always visible */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <div className="bg-[#0C5A2D]/20 p-2 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#0C5A2D]" />
                </div>
                <div>
                  <p className="hover:text-white transition-colors duration-200">
                    (+234) 815 288 6217
                  </p>
                  <p className="hover:text-white transition-colors duration-200">
                    (+234) 815 288 6219
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#0C5A2D]/20 p-2 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#0C5A2D]" />
                </div>
                <a
                  href="mailto:info@highbridgecitysolutions.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@highbridgecitysolutions.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#0C5A2D]/20 p-2 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#0C5A2D]" />
                </div>
                <address className="not-italic">
                  KM 34 A&M Plaza, Besides Mobil Filling Station,
                  <br />
                  Lekki – Epe Expressway, Oribanwa, Lagos.
                </address>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#0C5A2D]/20 p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#0C5A2D]" />
                </div>
                <div>
                  <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Highbridge City Solutions. All
              rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
