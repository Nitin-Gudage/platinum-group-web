import React from "react";
// import img1 from "../assets/aboutmeet.jpg";
// import img2 from "../assets/aboutac.jpg";
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
      {/* ================= WHO WE ARE ================= */}

      <ImageOverlay image={aboutHero} className="h-[30vh] md:h-[80vh]">
        <h1 className="text-5xl md:text-7xl font-bold text-primary md:mb-4">
          Who We Are
        </h1>

        <p className="text-primary text-lg md:text-2xl max-w-xl">
          We are a professional HVAC service provider delivering reliable,
          affordable, and high-quality solutions for homes and businesses. Our
          certified experts ensure comfort and satisfaction.
        </p>
      </ImageOverlay>

      <div className="container">
        {/* ================= MISSION & VALUES ================= */}
        <section className="mx-auto px-4 py-16">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={aboutHero}
                alt="AC Service"
                loading="lazy"
                decoding="async"
                className="w-full h-72 object-cover rounded-xl shadow"
              />

              <img
                src={aboutHero}
                alt="Team"
                loading="lazy"
                decoding="async"
                className="w-full h-72 object-cover rounded-xl shadow"
              />
            </div>

            <div className="py-10 px-0 md:px-5">
              <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                Our Mission & Values
              </h2>
              <section>
                <div className="grid md:grid-cols-2 gap-10">
                  {missions.map((item, index) => (
                    <div key={index}>
                      <div className="flex gap-5 w-full">
                        <div>
                          <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                            {item.icon}
                          </span>
                        </div>
                        <div>
                          <h1 className="subheading">{item.title}</h1>
                          <h3 className="text-gray-500"> {item.desc}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* ================= CTA ================= */}
        <section className="py-16 bg-gray-50 mb-10 rounded-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left */}
              <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
                <img
                  src={getnow}
                  alt="Building"
                  className="w-24 h-24 object-cover rounded-full"
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
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
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
