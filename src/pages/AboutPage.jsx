import { Link } from "react-router-dom";
import ImageOverlay from "../utils/ImageOverlay";
import aboutHero from "/images/aboutpage/about-page.png";
import Animate from "../utils/Animate";

const missions = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Quality Service",
    desc: "We deliver high-standard HVAC solutions with attention to detail.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Air Filter Cleaning",
    desc: "We ensure clean airflow and healthy environments.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Expert Safety",
    desc: "Our technicians follow strict safety protocols.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Quick Service",
    desc: "Fast, efficient service without compromising quality.",
  },
];

const AboutPage = () => {
  return (
    <div className="pt-[88px]">
      {/* ================= HERO ================= */}

      <ImageOverlay image={aboutHero} className="">
        <div className="relative z-10 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Who We Are
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            We are a professional HVAC service provider delivering reliable,
            affordable, and high-quality solutions for homes and businesses.
          </p>
        </div>
      </ImageOverlay>

      <div className="container">
        {/* ================= MISSION ================= */}
        <section className="py-16">
          <Animate>
            <div className="flex flex-col gap-12">
              {/* Content */}
              <div className="py-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
                  Our Mission & Values
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                  Committed to providing exceptional HVAC solutions with
                  integrity, professionalism, and customer-first approach.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {missions.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 mb-4">
                        {item.icon}
                      </span>

                      <div>
                        <h3 className="font-bold text-lg text-secondary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={aboutHero}
                    alt="AC Service"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={aboutHero}
                    alt="Our Team"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Animate>
        </section>

        {/* ================= CTA ================= */}
        <section className="pb-16">
          <Animate>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-10">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white rounded-full" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left */}
                <div className="flex items-center gap-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      Get a Free Quote
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Work with professionals & get custom solutions.
                    </p>
                  </div>
                </div>

                {/* Button */}
                <Link
                  to="/contact#contact-form"
                  className="px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Send Message
                </Link>
              </div>
            </div>
          </Animate>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
