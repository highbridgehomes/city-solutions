import { FileText, ClipboardList, Shield, Banknote } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const colors = {
  primary: "#0C5A2D",
  secondary: "#1D7A4C",
  accent: "#2E9D64",
  light: "#E8F5E9",
  muted: "#A5D6A7",
};

const TermsOfService = () => {
  return (
    <>
      <Navbar />

      <section className="font-inter py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
              <FileText className="h-5 w-5 mr-2" />
              <span className="font-medium">Terms of Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span style={{ color: colors.primary }}>Terms & Conditions</span>
            </h2>
            <div
              className="w-20 h-1 mx-auto mt-4"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h3
                className="text-xl sm:text-2xl font-bold mb-4 flex items-center"
                style={{ color: colors.primary }}
              >
                <ClipboardList className="h-6 w-6 mr-3" />
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-700">
                By accessing our website or using our services, you agree to
                these Terms of Service.
              </p>
            </div>

            <div className="mb-12">
              <h3
                className="text-xl sm:text-2xl font-bold mb-4 flex items-center"
                style={{ color: colors.primary }}
              >
                <ClipboardList className="h-6 w-6 mr-3" />
                2. Services Provided
              </h3>
              <p className="text-gray-700 mb-4">
                We offer professional interior design services including:
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-2">
                <li>Residential and commercial design</li>
                <li>Space planning</li>
                <li>Furniture selection</li>
                <li>Renovation consulting</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3
                className="text-xl sm:text-2xl font-bold mb-4 flex items-center"
                style={{ color: colors.primary }}
              >
                <Banknote className="h-6 w-6 mr-3" />
                4. Fees and Payments
              </h3>
              <ul className="text-gray-700 list-disc pl-6 space-y-2">
                <li>Design fees will be outlined in project proposals</li>
                <li>Payment schedules vary by project</li>
                <li>Late payments may incur additional charges</li>
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
                    Questions About Our Terms?
                  </h4>
                  <p className="text-gray-700">
                    Contact our team for any clarification about our terms of
                    service.
                  </p>
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

export default TermsOfService;
