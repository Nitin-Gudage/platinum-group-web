"use client";

import { useEffect } from "react";

import { contactInfo, logo, acTypes, availableServices } from "../Data/Data";

const SeoSchema = () => {
  useEffect(() => {
    /* ================= CONVERT DATA ================= */

    const serviceOffers = acTypes.map((type) => ({
      "@type": "Service",
      name: `${type} Service`,
      provider: {
        "@type": "LocalBusiness",
        name: "Platinum Group AC Services",
      },
    }));

    const serviceList = availableServices.map((service) => ({
      "@type": "Service",
      name: service,
      provider: {
        "@type": "LocalBusiness",
        name: "Platinum Group AC Services",
      },
    }));

    /* ================= BUSINESS SCHEMA ================= */

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",

      "@id": `${window.location.origin}#business`,

      name: "Platinum Group AC Services",

      url: window.location.origin,

      logo: `${window.location.origin}${logo.icon}`,
      image: `${window.location.origin}${logo.icon}`,

      telephone: contactInfo.mobile,
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

      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.0760",
        longitude: "72.8777",
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

      sameAs: [
        contactInfo.facebook,
        contactInfo.instagram,
        contactInfo.xTwitter,
      ],

      areaServed: {
        "@type": "AdministrativeArea",
        name: "Mumbai, Thane, Navi Mumbai",
      },

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
    script.text = JSON.stringify(businessSchema);

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default SeoSchema;
