"use client";

import { Link } from "react-router-dom";
import ImageOverlay from "../utils/ImageOverlay";
import aboutHero from "/images/aboutpage/about.webp";
import Animate from "../utils/Animate";
import useSEO from "../utils/SeoComponents/useSEO";

import { contactInfo, cities } from "../Data/Data";

/* ================= MISSIONS ================= */

const missions = [
  {
    title: "Quality Service",
    desc: "We deliver high-standard HVAC solutions with attention to detail.",
  },
  {
    title: "Clean & Healthy Air",
    desc: "We ensure clean airflow and healthy indoor environments.",
  },
  {
    title: "Safety First",
    desc: "Our technicians follow strict safety and compliance protocols.",
  },
  {
    title: "Fast Support",
    desc: "Quick, efficient service without compromising quality.",
  },
];

/* ================= COMPONENT ================= */

const AboutPage = () => {
  /* ================= SEO ================= */

  useSEO({
    title: "About HVAC Company | Platinum Group AC & HVAC Experts India",
    description:
      "Learn about Platinum Group - trusted and GST-registered HVAC company in India with certified technicians providing AC repair, installation, and maintenance services.",
    ogImage: `${window.location.origin}/og/about.jpg`,
  });

  /* ================= SCHEMA ================= */

  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",

    name: "Platinum Group",
    legalName: "Platinum Group HVAC Services",

    taxID: contactInfo.gstNumber,
    foundingDate: "2015",

    url: window.location.href,

    areaServed: "India",

    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address.street,
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.state,
      postalCode: contactInfo.address.pincode,
      addressCountry: "IN",
    },

    telephone: contactInfo.mobile1,
    email: contactInfo.email,

    sameAs: [contactInfo.instagram],
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
            Platinum Group is a trusted, GST-registered HVAC service provider
            delivering reliable AC repair, installation, and maintenance
            solutions for homes and businesses across India.
          </p>
        </div>
      </ImageOverlay>

      <div className="container">
        {/* ================= MISSION ================= */}

        <section className="py-16">
          <Animate>
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="heading-2 text-center mb-4">
                  Our Mission & Values
                </h2>

                <p className="text-primary text-center max-w-2xl mx-auto mb-10">
                  Committed to professional HVAC solutions with honesty,
                  transparency, and long-term customer satisfaction.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {missions.map((item, index) => (
                    <div
                      key={index}
                      className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="heading-4 mb-2">{item.title}</h3>

                      <p className="text-secondary">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= IMAGES ================= */}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/aboutpage/about-left.webp"
                    alt="Professional AC repair technicians servicing cassette AC"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/aboutpage/about-right.webp"
                    alt="Expert HVAC technician installing window AC unit"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Animate>
        </section>

        {/* ================= TRUST SECTION ================= */}

        <section className="py-16 bg-blue-50 rounded-2xl mb-16">
          <Animate>
            <div className="max-w-5xl mx-auto text-center px-6">
              <h2 className="heading-2 mb-4">
                Trusted & Registered HVAC Company
              </h2>

              <p className="text-primary max-w-3xl mx-auto mb-8 leading-relaxed">
                Platinum Group is a legally registered and GST-compliant HVAC
                service provider with over a decade of industry experience. We
                focus on transparent pricing, skilled workmanship, and reliable
                customer support.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
                <div className="bg-white p-6 h-full flex flex-col justify-center items-center rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-blue-600 mb-1">
                    5+ Years Experience
                  </h3>
                  <p className="text-secondary text-sm">
                    Serving customers since 2015
                  </p>
                </div>

                <div className="bg-white p-6 h-full flex flex-col justify-center items-center rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-blue-600 mb-1">
                    GST Registered
                  </h3>
                  <p className="text-secondary text-xs break-all">
                    GST No: {contactInfo.gstNumber}
                  </p>
                </div>

                <div className="bg-white p-6 h-full flex flex-col justify-center items-center rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-blue-600 mb-1">
                    Quality Standards
                  </h3>
                  <p className="text-secondary text-sm">
                    Genuine parts & certified tools
                  </p>
                </div>

                <div className="bg-white p-6 h-full flex flex-col justify-center items-center rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-blue-600 mb-1">
                    Customer Support
                  </h3>
                  <p className="text-secondary text-sm">
                    Fast response & dependable service
                  </p>
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
                AC & HVAC Services Across India
              </h2>

              <p className="text-primary max-w-3xl mx-auto mb-6 leading-relaxed">
                We provide professional AC repair, installation, servicing, and
                HVAC maintenance across major cities in India.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-sm">
                {cities.map((city) => (
                  <span
                    key={city.slug}
                    className="bg-white cursor-pointer border rounded-lg py-2 px-3 shadow-sm hover:shadow-md transition hover:text-blue-600"
                  >
                    AC Service in {city.name}
                  </span>
                ))}
              </div>
            </div>
          </Animate>
        </section>

        {/* ================= CTA ================= */}

        <section className="pb-16">
          <Animate>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-10">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    Get a Free Quote Today
                  </h3>

                  <p className="text-blue-100 text-sm">
                    Speak with our HVAC experts for personalized solutions.
                  </p>
                </div>

                <Link
                  to="/contact#contact-form"
                  className="btn-primary whitespace-nowrap"
                >
                  Contact Us
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
