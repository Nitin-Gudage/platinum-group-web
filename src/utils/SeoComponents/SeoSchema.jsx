"use client";

import { useEffect } from "react";

import {
  contactInfo,
  logo,
  acTypes,
  availableServices,
  cities,
} from "../../Data/Data";

/*
  SEO Structured Data (JSON-LD)
  Google Safe + Valid
*/

const SeoSchema = () => {
  useEffect(() => {
    /* ================= SERVICES ================= */

    const serviceOffers = acTypes.map((type) => ({
      "@type": "Service",
      name: `${type} AC Service`,
      provider: {
        "@type": "HVACBusiness",
        name: "Platinum Group AC Services",
      },
    }));

    const serviceList = availableServices.map((service) => ({
      "@type": "Service",
      name: `AC ${service}`,
      provider: {
        "@type": "HVACBusiness",
        name: "Platinum Group AC Services",
      },
    }));

    /* ================= AREA SERVED ================= */

    const areaServed = [
      {
        "@type": "Country",
        name: "India",
      },
      ...cities.map((city) => ({
        "@type": "City",
        name: city.name,
      })),
    ];

    /* ================= SOCIAL LINKS ================= */

    const sameAs = [contactInfo.instagram].filter(Boolean); // remove empty values

    /* ================= BUSINESS SCHEMA ================= */

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",

      "@id": `${window.location.origin}#hvacbusiness`,

      name: "Platinum Group AC Services",

      url: window.location.origin,

      logo: `${window.location.origin}${logo.icon}`,
      image: `${window.location.origin}${logo.icon}`,

      telephone: contactInfo.mobile1,
      email: contactInfo.email,

      priceRange: "₹₹",

      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.address.street,
        addressLocality: contactInfo.address.city,
        addressRegion: contactInfo.address.state,
        postalCode: contactInfo.address.pincode,
        addressCountry: "IN",
      },

      /* Pune Location (HQ) */

      geo: {
        "@type": "GeoCoordinates",
        latitude: "18.5204",
        longitude: "73.8567",
      },

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
      ],

      sameAs,

      areaServed,

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AC Types We Service",
        itemListElement: serviceOffers,
      },

      makesOffer: {
        "@type": "OfferCatalog",
        name: "Available AC Services",
        itemListElement: serviceList,
      },
    };

    /* ================= INJECT JSON-LD ================= */

    const oldScript = document.getElementById("seo-schema");

    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "seo-schema";
    script.textContent = JSON.stringify(businessSchema);

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default SeoSchema;
