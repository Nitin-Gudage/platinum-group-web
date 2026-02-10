import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import ServicesPage from "./pages/ServicesPage";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import SeoSchema from "./utils/SeoSchema";
import StickyCallButton from "./components/StickyCallButton";

function App() {
  const { pathname, search } = useLocation();

  /* Scroll to top on route change */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">

      <NavBar />
      <SeoSchema />

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/5" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-blue-400/5" />
      </div>

      {/* Main Content */}
      <main className="flex-grow">
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

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </div>
  );
}

export default App;
