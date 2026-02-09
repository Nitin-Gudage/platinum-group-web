"use client";

import { useState, Suspense, useEffect, useCallback } from "react";

import Animate, { AnimateGroup } from "../utils/Animate";
import MuiModal from "../utils/Modal";

import { useDispatch, useSelector } from "react-redux";

import ServiceModal from "./ServiceModal";
import { fetchServiceSteps } from "../store/features/serviceStepsSlice";

const OurServices = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const dispatch = useDispatch();

  const { data, status, error } = useSelector(
    (state) => state.serviceSteps
  );

  /* ================= FETCH ONCE ================= */
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchServiceSteps());
    }
  }, [dispatch, status]);

  /* ================= HANDLERS ================= */

  const openModal = useCallback((service) => {
    setSelectedService(service);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    setSelectedService(null);
  }, []);

  /* ================= LOADING ================= */

  if (status === "loading") {
    return (
      <section className="container pt-10 text-center">
        <p className="text-gray-500 animate-pulse">
          Loading services...
        </p>
      </section>
    );
  }

  /* ================= ERROR ================= */

  if (status === "error") {
    return (
      <section className="container pt-10 text-center">
        <p className="text-red-500">
          Error loading services: {error}
        </p>
      </section>
    );
  }

  return (
    <section className="container pt-5 overflow-hidden">

      {/* ================= HEADING ================= */}
      <Animate>
        <h1 className="heading dark:text-white text-center">
          Our Services
        </h1>
      </Animate>

      {/* ================= GRID ================= */}
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
            key={service.id}
            className="
              custom-card
              flex
              flex-col
              items-center
              text-center
              p-5
              bg-white
              rounded-xl
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            {/* ================= ICON ================= */}
            <div className="w-full h-32 flex items-center justify-center mb-3">

              <img
                src={service.icon}
                alt={service.title}
                loading="lazy"
                decoding="async"
                className="
                  max-h-28
                  object-contain
                "
              />

            </div>

            {/* ================= TITLE ================= */}
            <h2 className="text-xl text-secondary font-bold dark:text-white">
              {service.title}
            </h2>

            {/* ================= DESC ================= */}
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm text-center">
              {service.description}
            </p>

            {/* ================= BUTTON ================= */}
            <button
              onClick={() => openModal(service)}
              className="btn-primary mt-4"
            >
              View Details
            </button>
          </Animate>
        ))}
      </AnimateGroup>

      {/* ================= MODAL ================= */}
      <MuiModal open={open} onClose={closeModal}>

        {open && selectedService && (
          <Suspense
            fallback={
              <div className="p-10 text-center text-gray-500 animate-pulse">
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
