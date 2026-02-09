import React from "react";

import getnow from "../assets/getnow.png";
import ImageOverlay from "../utils/ImageOverlay";
import aboutHero from "../assets/aboutpage/about-page.png";

const missions = [
  {
    icon: "⏱️",
    title: "Quality Service",
    desc: "We deliver high-standard HVAC solutions with attention to detail and long-term reliability.",
  },
  {
    icon: "🧼",
    title: "Air Filter Cleaning",
    desc: "We ensure clean airflow and healthy environments through professional filter maintenance.",
  },
  {
    icon: "🛡️",
    title: "Expert Safety",
    desc: "Our technicians follow strict safety protocols for every installation and repair.",
  },
  {
    icon: "⚡",
    title: "Quick Cleaning",
    desc: "Fast, efficient service without compromising quality.",
  },
];

const AboutPage = () => {
  return (
    <>
      {/* ================= HERO ================= */}

      <ImageOverlay image={aboutHero} className="h-[40vh] md:h-[75vh]">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-4">
          Who We Are
        </h1>

        <p className="text-primary text-base sm:text-lg md:text-2xl max-w-xl">
          We are a professional HVAC service provider delivering reliable,
          affordable, and high-quality solutions for homes and businesses.
        </p>
      </ImageOverlay>

      <div className="max-w-7xl mx-auto px-4">
        {/* ================= MISSION ================= */}
        <section className="py-16">
          <div className="flex flex-col gap-12">
            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Image 1 */}
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
                <img
                  src={aboutHero}
                  alt="AC Service"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
                <img
                  src={aboutHero}
                  alt="Our Team"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="py-10 md:px-5">
              <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                Our Mission & Values
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                {missions.map((item, index) => (
                  <div key={index} className="flex gap-5">
                    <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </span>

                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>

                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-16 bg-gray-50 mb-10 rounded-xl">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left */}
              <div className="flex items-center gap-4">
                <img
                  src={getnow}
                  alt="Get Quote"
                  loading="lazy"
                  className="w-20 h-20 object-cover rounded-full"
                />

                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-1">
                    Get a Free Quote
                  </h3>

                  <p className="text-gray-600 text-sm">
                    Work with professionals & get custom solutions.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button
                className="
                  bg-blue-700 text-white
                  px-6 py-3 rounded-lg
                  font-semibold
                  hover:bg-blue-800
                  transition
                "
              >
                Send Message
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
