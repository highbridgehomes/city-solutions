import { Link } from "react-router-dom";
import { Lock, Shield, Mail, Phone } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const colors = {
  primary: "#0C5A2D",
  secondary: "#1D7A4C",
  accent: "#2E9D64",
  light: "#E8F5E9",
  muted: "#A5D6A7",
};

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <section className="font-inter py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
              <Lock className="h-5 w-5 mr-2" />
              <span className="font-medium">Privacy Policy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your{" "}
              <span style={{ color: colors.primary }}>Privacy Matters</span>
            </h2>
            <div
              className="w-20 h-1 mx-auto mt-4"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              We are committed to protecting your personal information and being
              transparent about what we collect.
            </p>
          </div>

          <div
            className="prose prose-lg max-w-none"
            style={{ color: colors.primary }}
          >
            <div className="mb-12">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                1. Introduction
              </h3>
              <p className="text-gray-700">
                Highbridge Interior Design ("we," "our," or "us") respects your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website and use our services.
              </p>
            </div>

            <div className="mb-12">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                2. Information We Collect
              </h3>
              <p className="text-gray-700 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email, phone number,
                  address when you contact us or request services
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent,
                  referring website
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type,
                  device information
                </li>
                <li>
                  <strong>Project Data:</strong> Information about your design
                  project requirements
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                3. How We Use Your Information
              </h3>
              <p className="text-gray-700">We use collected information to:</p>
              <ul className="text-gray-700 list-disc pl-6 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Communicate with you about projects</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent activity</li>
              </ul>
            </div>

            {/* Continue with other sections... */}

            <div
              className="mt-16 p-6 rounded-xl"
              style={{ backgroundColor: colors.light }}
            >
              <div className="flex items-start">
                <Shield
                  className="h-6 w-6 mt-1 mr-4 flex-shrink-0"
                  style={{ color: colors.primary }}
                />
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Have Privacy Concerns?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Contact our privacy team with any questions about your data.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:info@highbridgecitysolutions.com"
                      className="flex items-center text-gray-700 hover:text-gray-900"
                    >
                      <Mail className="h-5 w-5 mr-2" />{" "}
                      info@highbridgecitysolutions.com
                    </a>
                    <a
                      href="tel:+2348152886217"
                      className="flex items-center text-gray-700 hover:text-gray-900"
                    >
                      <Phone className="h-5 w-5 mr-2" /> +234 815 288 6217
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
