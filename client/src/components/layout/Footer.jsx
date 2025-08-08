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
    <footer className="font-inter bg-[#1A1A1A] text-white pt-10 md:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={IMAGES.citySolutionsWhiteLogo}
                alt="Highbridge City Solutions Logo"
                className="w-auto h-14 sm:18"
                loading="lazy"
              />
              <h3 className="text-base font-bold leading-tight">
                HIGHBRIDGE CITY SOLUTIONS
              </h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              A premier interior design company based in Lagos, Nigeria, and a
              proud subsidiary of the renowned Highbridge Group.
            </p>

            <div className="flex space-x-3">
              {[
                {
                  href: "https://web.facebook.com/hbcitysolutions",
                  icon: <FaFacebookF className="h-5 w-5 text-white" />,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/hbcitysolutions/",
                  icon: <FaInstagram className="h-5 w-5 text-white" />,
                  label: "Instagram",
                },
              ].map(({ href, icon, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#14844A] transition-all duration-300 hover:-translate-y-1"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>

            <p className="text-gray-300 text-sm mt-4">
              A member of Highbridge Group
            </p>
          </div>

          <div className="flex sm:flex-row justify-center gap-4 sm:gap-12 flex-col">
            <div>
              <button
                className="flex items-center justify-between w-full md:mb-4 pb-3 border-b border-gray-700 md:border-none"
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
                } md:block text-gray-300`}
              >
                {[
                  { to: "/about", text: "About Us" },
                  { to: "/services", text: "Our Services" },
                  { to: "/projects", text: "Projects" },
                  { to: "/contact", text: "Contact" },
                ].map(({ to, text }, i) => (
                  <li key={i}>
                    <Link
                      to={to}
                      className="hover:text-[#14844A] transition-colors duration-200 block py-2"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full md:mb-4 pb-3 border-b border-gray-700 md:border-none"
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
                } md:block text-gray-300`}
              >
                {[
                  { to: "/privacy-policy", text: "Privacy Policy" },
                  { to: "/terms-of-service", text: "Terms of Service" },
                  { to: "/faq", text: "FAQ" },
                  { to: "/careers", text: "Careers" },
                ].map(({ to, text }, i) => (
                  <li key={i}>
                    <Link
                      to={to}
                      className="hover:text-[#14844A] transition-colors duration-200 block py-2"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              {[
                {
                  icon: <Phone className="h-5 w-5 text-white" />,
                  content: (
                    <>
                      <p className="hover:text-white transition-colors duration-200">
                        (+234) 815 288 6217
                      </p>
                      <p className="hover:text-white transition-colors duration-200">
                        (+234) 815 288 6219
                      </p>
                    </>
                  ),
                },
                {
                  icon: <Mail className="h-5 w-5 text-white" />,
                  content: (
                    <a
                      href="mailto:info@highbridgecitysolutions.com"
                      className="hover:text-white transition-colors duration-200"
                    >
                      info@highbridgecitysolutions.com
                    </a>
                  ),
                },
                {
                  icon: <MapPin className="h-5 w-5 text-white" />,
                  content: (
                    <address className="not-italic">
                      KM 34 A&M Plaza, Besides Mobil Filling Station,
                      <br />
                      Lekki – Epe Expressway, Oribanwa, Lagos.
                    </address>
                  ),
                },
                {
                  icon: <Clock className="h-5 w-5 text-white" />,
                  content: (
                    <>
                      <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                      <p>Sat: 10:00 AM - 2:00 PM</p>
                    </>
                  ),
                },
              ].map(({ icon, content }, i) => (
                <div className="flex items-start gap-3" key={i}>
                  <div className="bg-gray-200/10 p-2 rounded-lg flex-shrink-0">
                    {icon}
                  </div>
                  <div>{content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Highbridge City Solutions. All
              rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                { to: "/privacy-policy", text: "Privacy Policy" },
                { to: "/terms-of-service", text: "Terms of Service" },
                { to: "/cookies", text: "Cookie Policy" },
              ].map(({ to, text }, i) => (
                <Link
                  key={i}
                  to={to}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
