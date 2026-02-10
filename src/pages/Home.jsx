import React from "react";
import AcTypes from "../components/AcTypes";
import OurServices from "../components/OurServices";
import BrandSwiper from "../components/BrandSwiper";
import WhyChoose from "../components/WhyChoose";
import HeroSwiper from "../components/HeroSwiper";
import FaqPage from "./FaqPage";
import Animate from "../utils/Animate";
import Testimonials from "../components/Testimonials";
import BookingSteps from "../components/BookingSteps";
import BookServiceMobile from "../components/BookServiceMobile";
import { BsLink } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-transparent">
      <HeroSwiper />

      {/* ================= QUICK SERVICES ================= */}
      <div className="pt-8">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Quick Services</h2>
          <p className="text-sm text-gray-500">
            Book your AC service in minutes
          </p>
        </div>
        <BookServiceMobile desktopItems={4} />
      </div>

      {/* ================= AC TYPES ================= */}
      <AcTypes />

      {/* ================= OUR SERVICES ================= */}
      <OurServices />

      {/* ================= BRANDS SECTION ================= */}
      <section className="py-10 bg-white/50 backdrop-blur-sm border-y border-gray-100">
        <div className="container">
          <Animate>
            <div className="text-center mb-6">
              <h1 className="section-title pb-2">Brands We Service</h1>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                Trusted by Leading Brands
              </p>
            </div>
            <BrandSwiper />
          </Animate>
        </div>
      </section>

      <WhyChoose />
      <Testimonials />
      <BookingSteps />
      <FaqPage isHome={true} />

      {/* ================= CTA SECTION ================= */}
      <section className="py-12">
        <div className="container">
          <Animate>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-10">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white rounded-full" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Ready to Get Started?
                  </h2>
                  <p className="text-blue-100 text-base">
                    Book your AC service today and experience comfort like never
                    before
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/services"
                    className="px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book Now
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </main>
  );
};

export default Home;
