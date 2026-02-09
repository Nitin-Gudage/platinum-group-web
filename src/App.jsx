import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

import { Route, Routes, useLocation } from "react-router-dom";

import bgimage from "./assets/cloudsbg.png";
import FaqPage from "./pages/FaqPage";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getHeroSlides } from "./store/features/heroSlice";
import ServicesPage from "./pages/ServicesPage";
import PageLoader from "./utils/PageLoader";
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
    <div className="App bg-white dark:bg-secondary min-h-screen flex flex-col">
      <NavBar />
      {/* contact info */}
      <SeoSchema />
      {/* {main} */}
      <main
        className="flex-grow bg-fixed bg-repeat bg-center bg-auto pb-10 pt-14 sm:pt-0"
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
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
