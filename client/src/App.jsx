import { Route, Routes } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import ScrollManager from "./components/UI/ScrollManager";

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
      </Routes>
    </>
  );
}

export default App;
