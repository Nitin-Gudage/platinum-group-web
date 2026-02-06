"use client";

import { useState, lazy, Suspense } from "react";

import { OurServicesData } from "../Data/Data";

import Animate from "../utils/Animate"; // 👈 universal animation
import MuiModal from "../utils/Modal";

/* Lazy load heavy modal */
const ServiceDetailsModal = lazy(() => import("./ServiceDetailsModal"));

const OurServices = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="container pt-5 overflow-hidden">
      {/* Heading */}
      <Animate>
        <h1 className="heading dark:text-white text-center">Our Services</h1>
      </Animate>

      {/* Grid */}
      <Animate
        stagger
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-6
          mx-auto
          py-10
        "
      >
        {OurServicesData.map((service, index) => (
          <Animate
            key={index}
            className="
              custom-card
              flex
              flex-col
              items-center
              text-center
            "
          >
            {/* Icon */}
            <img
              src={service.icon}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className="max-h-28 object-contain m-auto"
            />

            {/* Title */}
            <h2 className="text-2xl text-secondary font-bold dark:text-white mt-3">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {service.description}
            </p>

            {/* Button */}
            <button
              onClick={() => openModal(service)}
              className="btn-primary mt-4"
            >
              View Details
            </button>
          </Animate>
        ))}
      </Animate>

      {/* Modal (Lazy Loaded) */}
      <MuiModal open={open} onClose={closeModal}>
        {open && selectedService && (
          <Suspense
            fallback={<div className="p-10 text-center">Loading...</div>}
          >
            <ServiceDetailsModal service={selectedService} />
          </Suspense>
        )}
      </MuiModal>
    </section>
  );
};

export default OurServices;
