"use client";

import { Helmet } from "react-helmet-async";

import {
  contactInfo,
  logo,
  acTypes,
  availableServices,
} from "../Data/Data";

const SeoSchema = () => {
  /* ================= CONVERT DATA ================= */

  // AC Types → Services
  const serviceOffers = acTypes.map((type) => ({
    "@type": "Service",
    name: `${type} Service`,
    provider: {
      "@type": "LocalBusiness",
      name: "Platinum Group AC Services",
    },
  }));

  // Available Services
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

    // Default Mumbai Coordinates (update later if needed)
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

    // AC TYPES
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AC Types We Service",
      itemListElement: serviceOffers,
    },

    // SERVICES
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Available AC Services",
      itemListElement: serviceList,
    },
  };

  /* ================= RENDER ================= */

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
    </Helmet>
  );
};

export default SeoSchema;
