"use client";

import { useState, lazy, Suspense, useEffect } from "react";

import Animate, { AnimateGroup } from "../utils/Animate";
import MuiModal from "../utils/Modal";

import { useDispatch, useSelector } from "react-redux";
import ServiceModal from "./ServiceModal";
import { fetchServiceSteps } from "../store/features/serviceStepsSlice";

const OurServices = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const dispatch = useDispatch();

  const { data, status, error } = useSelector((state) => state.serviceSteps);

  /* Fetch services (runs once) */
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchServiceSteps());
    }
  }, [dispatch, status]);

  /* Open Modal */
  const openModal = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  /* Close Modal */
  const closeModal = () => {
    setOpen(false);
    setSelectedService(null);
  };

  /* Loading State */
  if (status === "loading") {
    return (
      <section className="container pt-10 text-center">
        <p className="text-gray-500">Loading services...</p>
      </section>
    );
  }

  /* Error State */
  if (status === "error") {
    return (
      <section className="container pt-10 text-center">
        <p className="text-red-500">Error loading services: {error}</p>
      </section>
    );
  }

  return (
    <section className="container pt-5 overflow-hidden">
      {/* Heading */}
      <Animate>
        <h1 className="heading dark:text-white text-center">Our Services</h1>
      </Animate>

      {/* Services Grid */}
      <AnimateGroup
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
        {data?.map((service) => (
          <Animate
            key={service.id} // ✅ stable key
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
      </AnimateGroup>

      {/* Modal (Lazy Loaded) */}
      <MuiModal open={open} onClose={closeModal}>
        {open && selectedService && (
          <Suspense
            fallback={
              <div className="p-10 text-center text-gray-500">
                Loading details...
              </div>
            }
          >
            <ServiceModal
              service={selectedService}
              serviceId={selectedService.id}
            />
          </Suspense>
        )}
      </MuiModal>
    </section>
  );
};

export default OurServices;
