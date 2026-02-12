import "./App.css";

import { useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import StickyCallButton from "./components/StickyCallButton";

import SeoSchema from "./utils/SeoComponents/SeoSchema";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load all pages EXCEPT Home (Home is eager for LCP)
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

// Lightweight CSS spinner loader with minimal CLS
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  const { pathname, search } = useLocation();
  const dispatch = useDispatch();

  /* Scroll to top on route change */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  /* Hero data is fetched in Home.jsx */

  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">
      {/* NAV */}
      <NavBar />

      {/* SEO */}
      <SeoSchema />

      {/* MAIN */}
      <main className="flex-grow">
        {/* Home is eager loaded - no Suspense needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Other pages lazy loaded */}
          <Route
            path="/services"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<PageLoader />}>
                <FaqPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <PageNotFound />
              </Suspense>
            }
          />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* CALL */}
      <StickyCallButton />

      {/* TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
