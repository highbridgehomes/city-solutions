import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [openOtherPages, setOpenOtherPages] = useState(false);
  const [openQuickLinks, setOpenQuickLinks] = useState(false);

  const toggleOtherPages = () => setOpenOtherPages(!openOtherPages);
  const toggleQuickLinks = () => setOpenQuickLinks(!openQuickLinks);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info - Always visible */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={IMAGES.citySolutionsLogo}
                alt="Highbridge City Solutions Logo"
                className="w-auto h-12"
              />
              <h3 className="text-2xl font-bold">HIGHBRIDGE CITY SOLUTIONS</h3>
            </div>
            <p className="text-gray-400">
              A premier interior design company based in Lagos, Nigeria, and a
              proud subsidiary of the renowned Highbridge Group.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/hbcitysolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0C5A2D] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/hbcitysolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0C5A2D] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              A member of Highbridge Group
            </p>
          </div>

          {/* Other Pages - Collapsible on mobile */}
          <div className="md:block">
            <button
              className="flex items-center justify-between w-full md:hidden"
              onClick={toggleOtherPages}
              aria-expanded={openOtherPages}
            >
              <h4 className="text-lg font-semibold">Other Pages</h4>
              {openOtherPages ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            <h4 className="text-lg font-semibold mb-4 hidden md:block">
              Other Pages
            </h4>
            <ul
              className={`${
                openOtherPages ? "block" : "hidden"
              } md:block space-y-3 text-gray-400`}
            >
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors block py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors block py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors block py-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links - Collapsible on mobile */}
          <div className="md:block">
            <button
              className="flex items-center justify-between w-full md:hidden"
              onClick={toggleQuickLinks}
              aria-expanded={openQuickLinks}
            >
              <h4 className="text-lg font-semibold">Quick Links</h4>
              {openQuickLinks ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            <h4 className="text-lg font-semibold mb-4 hidden md:block">
              Quick Links
            </h4>
            <ul
              className={`${
                openQuickLinks ? "block" : "hidden"
              } md:block space-y-3 text-gray-400`}
            >
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors block py-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-white transition-colors block py-1"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors block py-1"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Always visible */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>(+234) 815 288 6217</p>
                  <p>(+234) 815 288 6219</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>info@highbridgecitysolutions.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>
                  KM 34 A&M Plaza, Besides Mobil Filling Station,
                  <br />
                  Lekki – Epe Expressway, Oribanwa, Lagos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Highbridge City Solutions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
