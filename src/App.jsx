import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { Route, Routes, useLocation } from "react-router-dom";
import FaqPage from "./pages/FaqPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ServicesPage from "./pages/ServicesPage";
import SeoSchema from "./utils/SeoSchema";

function App() {
  /* Scroll to top on route change */
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname, search]);

  /* Load hero */

  const dispatch = useDispatch();

  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">
      <NavBar />
      <SeoSchema />

      {/* Modern Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <main
        className="flex-grow pt-20"
        // style={{ backgroundImage: `url${bgImage}` }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
