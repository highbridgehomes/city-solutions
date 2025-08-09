import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      await axios.post("https://api.highbridgegroup.ng/api/contact", formData);

      toast.success("Thank you, Highbridge Group has received your message.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      const message =
        error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Highbridge City Solutions</title>
      </Helmet>
      <Navbar />

      <section className="font-inter relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C5A2D] to-[#08311C]"></div>

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+')",
            }}
          ></div>
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full py-12">
            <div className="max-w-2xl mx-auto text-center sm:text-left">
              <h1 className="font-playfair-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl mb-10 opacity-90 leading-relaxed max-w-xl mx-auto sm:mx-0">
                Have a question, proposal, or project in mind? We'd love to hear
                from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tell us about your dream
              </h2>
              <p className="text-gray-600 mb-8">
                At Highbridge City Solutions, we're committed to delivering
                smart, sustainable, and scalable solutions for urban
                development, energy, infrastructure, and beyond.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C5A2D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C5A2D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C5A2D]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0C5A2D] hover:bg-[#0a4a26] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 px-6 rounded-full font-medium transition-colors duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reach out to us today
                </h2>
                <p className="text-gray-600">
                  Whether you're looking to partner, invest, or inquire about
                  our services. Let's build the future of cities together.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#0C5A2D]/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#0C5A2D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Office
                    </h3>
                    <p className="text-gray-600">
                      KM 34 A&M Plaza, Besides Mobil Filling Station, Lekki –
                      Epe Expressway, Oribanwa, Lagos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#0C5A2D]/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#0C5A2D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      Tel: +2348058112128
                      <br />
                      Mob: +2349032790357
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#0C5A2D]/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#0C5A2D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      info@highbridgecitysolutions.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0C5A2D]/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-[#0C5A2D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Response Time
                    </h3>
                    <p className="text-gray-600">
                      We typically respond within an hour.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Projects
                </h3>
                <p className="text-gray-600 mb-4">
                  At Highbridge City Solutions, we specialize in delivering
                  forward-thinking, impact-driven projects across real estate,
                  urban infrastructure, energy, and smart city solutions.
                </p>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center text-[#0C5A2D] font-medium hover:underline group"
                >
                  Browse Projects
                  <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Highbridge City Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.70634473205448!2d3.7251743452693256!3d6.473457324296184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039550734eb6837%3A0x52012d6bfc2dbbc3!2sHighbridge%20Homes%20Ltd!5e1!3m2!1sen!2sng!4v1748936703073!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
