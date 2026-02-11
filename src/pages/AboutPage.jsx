import { Link } from "react-router-dom";
import ImageOverlay from "../utils/ImageOverlay";
import aboutHero from "/images/aboutpage/about-page.png";
import Animate from "../utils/Animate";
import useSEO from "../utils/useSEO";

import { contactInfo, cities } from "../Data/Data";

/* ================= MISSIONS ================= */

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

/* ================= COMPONENT ================= */

const AboutPage = () => {
  /* ================= SEO ================= */

  useSEO({
    title: "AC Service Provider in India | HVAC Repair in Mumbai, Pune, Delhi",
    description:
      "Platinum Group provides professional AC repair, installation, and HVAC maintenance services across India including Mumbai, Pune, Delhi, Bengaluru, Chennai, and Hyderabad.",
  });

  /* ================= SCHEMA ================= */

  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Platinum Group",
    areaServed: "India",
    address: {
      "@type": "PostalAddress",
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.state,
      addressCountry: "IN",
    },
    telephone: contactInfo.mobile1,
    email: contactInfo.email,
    url: window.location.href,
  };

  return (
    <div className="md:pt-[88px] pt-[72px]">
      {/* ========== SCHEMA ========== */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      {/* ================= HERO ================= */}

      <ImageOverlay image={aboutHero}>
        <div className="relative z-10 text-left">
          <h1 className="heading-1 mb-4">
            Leading AC & HVAC Service Provider in India
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            Platinum Group is a trusted HVAC service provider delivering
            reliable AC repair, installation, and maintenance solutions for
            homes and businesses across India.
          </p>
        </div>
      </ImageOverlay>

      <div className="container">
        {/* ================= MISSION ================= */}

        <section className="py-16">
          <Animate>
            <div className="flex flex-col gap-12">
              <div className="py-8">
                <h2 className="heading-2 text-center mb-4">
                  Our Mission & Values
                </h2>

                <p className="text-primary text-center max-w-2xl mx-auto mb-10">
                  Committed to providing high-quality AC servicing, professional
                  HVAC solutions, and customer-first support across major cities
                  in India.
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
                        <h3 className="heading-4 mb-2">{item.title}</h3>

                        <p className="text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= IMAGES ================= */}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://tgzsptwllqkjtxiastfs.supabase.co/storage/v1/object/public/platinum%20group/Ac-types/cassette/CASSATEREPAI.jpeg"
                    alt="AC Repair Service in India"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://tgzsptwllqkjtxiastfs.supabase.co/storage/v1/object/public/platinum%20group/Ac-types/window/WINDOWINSTALLTIO.jpeg"
                    alt="HVAC Technicians at Work"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Animate>
        </section>

        {/* ================= SERVICE COVERAGE ================= */}

        <section className="py-16 bg-gray-50 rounded-2xl mb-16">
          <Animate>
            <div className="max-w-5xl mx-auto text-center px-4">
              <h2 className="heading-2 mb-4">
                AC & HVAC Services Across Major Indian Cities
              </h2>

              <p className="text-primary max-w-3xl mx-auto mb-6 leading-relaxed">
                We provide professional AC repair, installation, servicing, and
                HVAC maintenance across India including Mumbai, Pune, Delhi,
                Bengaluru, Chennai, Hyderabad, Kolkata, Ahmedabad, Jaipur, and
                Surat.
              </p>

              <p className="text-blue-600 font-semibold mb-8">
                ✔ Pan-India Service | ✔ Same-Day Support | ✔ Certified Experts
              </p>

              {/* City Links (SEO) */}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-sm">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    to="/services"
                    className="bg-white border rounded-lg py-2 px-3 shadow-sm hover:shadow-md transition hover:text-blue-600"
                  >
                    AC Service in {city.name}
                  </Link>
                ))}
              </div>

              <p className="mt-8 text-secondary text-sm">
                Contact us today for fast and reliable HVAC services anywhere in
                India.
              </p>
            </div>
          </Animate>
        </section>

        {/* ================= CTA ================= */}

        <section className="pb-16">
          <Animate>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-10">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white rounded-full" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    Get a Free Quote Today
                  </h3>

                  <p className="text-blue-100 text-sm">
                    Talk to our HVAC experts and get customized solutions.
                  </p>
                </div>

                <Link
                  to="/contact#contact-form"
                  className="btn-primary whitespace-nowrap"
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
