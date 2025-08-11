import { Cookie, Settings, Shield } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";

const colors = {
  primary: "#0C5A2D",
  secondary: "#1D7A4C",
  accent: "#2E9D64",
  light: "#E8F5E9",
  muted: "#A5D6A7",
};

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Highbridge City Solutions</title>
      </Helmet>

      <Navbar />

      <section className="font-inter py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              data-aos="fade-down"
              className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4"
            >
              <Cookie className="h-5 w-5 mr-2" />
              <span className="font-medium">Cookie Policy</span>
            </div>
            <h2
              data-aos="zoom-in-up"
              className="font-playfair-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Our <span style={{ color: colors.primary }}>Cookie Usage</span>
            </h2>
            <div
              data-aos="fade-up"
              className="w-20 h-1 mx-auto mt-4"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-base sm:text-lg mt-6 max-w-3xl mx-auto"
            >
              Learn how we use cookies to enhance your browsing experience.
            </p>
          </div>

          <div data-aos="fade-right" className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h3
                className="text-xl sm:text-2xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                1. What Are Cookies?
              </h3>
              <p className="text-gray-700">
                Cookies are small text files stored on your device when you
                visit websites.
              </p>
            </div>

            <div className="mb-12">
              <h3
                className="text-xl sm:text-2xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                2. How We Use Cookies
              </h3>
              <p className="text-gray-700 mb-4">We use cookies to:</p>
              <ul className="text-gray-700 list-disc pl-6 space-y-2">
                <li>Remember your preferences</li>
                <li>Analyze website traffic</li>
                <li>Improve user experience</li>
                <li>Enable certain website functions</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3
                className="text-xl sm:text-2xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                3. Managing Cookies
              </h3>
              <p className="text-gray-700">
                You can control cookies through your browser settings. However,
                disabling essential cookies may affect website functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CookiePolicy;
