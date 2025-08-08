import { Route, Routes } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import ScrollManager from "./components/UI/ScrollManager";
import Services from "./pages/Service";
import About from "./pages/Aboutus";
import Portfolio from "./pages/PortfolioPage";
import Contact from "./pages/ContactUs";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
