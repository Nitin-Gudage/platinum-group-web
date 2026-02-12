"use client";

import { useEffect } from "react";

/*
  Hero Structured Data for Homepage
  Improves Google understanding of your main banner
*/

const HeroSchema = ({ slides = [] }) => {
  useEffect(() => {
    if (!slides || !slides.length) return;

    /* Convert slides to services */

    const heroServices = slides.map((slide) => ({
      "@type": "Service",

      name: slide.title,

      description: slide.subtext,

      provider: {
        "@type": "HVACBusiness",
        name: "Platinum Group AC Services",

        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
    }));

    /* Main Schema */

    const schema = {
      "@context": "https://schema.org",

      "@graph": [
        /* Business */

        {
          "@type": "HVACBusiness",

          "@id": `${window.location.origin}#business`,

          name: "Platinum Group AC Services",

          url: window.location.origin,

          areaServed: {
            "@type": "Country",
            name: "India",
          },

          makesOffer: heroServices,
        },

        /* Website */

        {
          "@type": "WebSite",

          "@id": `${window.location.origin}#website`,

          name: "Platinum Group AC Services",

          url: window.location.origin,

          potentialAction: {
            "@type": "SearchAction",

            target: `${window.location.origin}/services?search={search_term_string}`,

            "query-input": "required name=search_term_string",
          },
        },

        /* Main Offer */

        {
          "@type": "Offer",

          "@id": `${window.location.origin}#hero-offer`,

          name: "AC Repair & HVAC Services in India",

          description:
            "Professional AC repair, installation, servicing, and HVAC maintenance across major Indian cities.",

          areaServed: "India",

          availability: "https://schema.org/InStock",

          seller: {
            "@type": "Organization",
            name: "Platinum Group AC Services",
          },
        },
      ],
    };

    /* Remove old schema */

    const old = document.getElementById("hero-schema");

    if (old) old.remove();

    /* Inject new schema */

    const script = document.createElement("script");

    script.type = "application/ld+json";
    script.id = "hero-schema";

    script.textContent = JSON.stringify(schema);

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [slides]);

  return null;
};

export default HeroSchema;
