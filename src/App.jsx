import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { Route, Routes, useLocation } from "react-router-dom";
import FaqPage from "./pages/FaqPage";
import { useEffect, useCallback } from "react";
import ServicesPage from "./pages/ServicesPage";
import SeoSchema from "./utils/SeoSchema";
import StickyCallButton from "./components/StickyCallButton";

function App() {
  const { pathname, search } = useLocation();

  /* Instant scroll to top on route change - optimized for performance */
  useEffect(() => {
    // Use instant scroll instead of smooth for faster navigation
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Skip to main content
      </a>
      <NavBar />
      <SeoSchema />

      {/* Optimized Background - removed heavy blur effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/5" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-blue-400/5" />
      </div>

      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>

      <Footer />
      <StickyCallButton />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
