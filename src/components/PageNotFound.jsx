"use client";

import { Link } from "react-router-dom";
import { FaHome, FaPhoneAlt, FaSearch } from "react-icons/fa";
import useSEO from "../utils/SeoComponents/useSEO";
import { contactInfo } from "../Data/Data";

const PageNotFound = () => {
  /* ================= SEO ================= */

  useSEO({
    title: "404 Page Not Found | Platinum Group AC Services",
    description:
      "The page you are looking for could not be found. Visit Platinum Group for professional AC repair and HVAC services across India.",
    ogImage: `${window.location.origin}/og/home.jpg`,
  });

  return (
    <main className="min-h-[70vh] pt-20 flex items-center flex-col justify-center bg-gray-50 px-4">
      {/* Error Code */}
      <h1 className="text-7xl md:text-8xl font-extrabold text-blue-600 mb-4">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-8">
        The page you’re looking for may have been moved, deleted, or never
        existed. Don’t worry — our AC experts are still here to help you.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-2"
          aria-label="Go back to home page"
        >
          <FaHome />
          Go to Home
        </Link>

        <Link
          to="/services"
          className="bg-white/80 backdrop-blur-sm text-secondary rounded-xl
           font-semibold border-2 border-gray-200
           transition-all duration-300 ease-out
           hover:bg-white hover:border-gray-300 hover:shadow-lg
           active:scale-95
           px-5 py-2 text-sm inline-flex items-center gap-2"
          aria-label="View AC services"
        >
          <FaSearch />
          View Services
        </Link>

        <a
          href={`tel:${contactInfo.mobile1.replace(/\s+/g, "")}`}
          className="bg-gradient-to-r from-green-400 to-green-600 text-white
           rounded-xl font-semibold
           transition-all duration-300 ease-out
           hover:from-green-600 hover:to-green-800
           hover:shadow-lg hover:shadow-amber-500/25
           active:scale-95
           px-5 py-2 text-sm
           border-0 inline-flex items-center gap-2"
          aria-label="Call customer support"
        >
          <FaPhoneAlt />
          Call Support
        </a>
      </div>

      {/* Trust Message */}
      <p className="mt-8 text-sm text-gray-500">
        ✔ Trusted AC & HVAC Service Provider Across India
      </p>
    </main>
  );
};

export default PageNotFound;
