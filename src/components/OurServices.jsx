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

  const { data, status, error } = useSelector((state) => state.serviceSteps);

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
      <section className="container py-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500">Loading services...</p>
        </div>
      </section>
    );
  }

  /* ================= ERROR ================= */

  if (status === "error") {
    return (
      <section className="container py-8 text-center">
        <p className="text-red-500 bg-red-50 px-4 py-2 rounded-lg inline-block">
          Error loading services: {error}
        </p>
      </section>
    );
  }

  return (
    <section className="container pt-10">
      {/* ================= HEADING ================= */}
      <Animate>
        <div className="text-center mb-8">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mt-2">
            Professional AC solutions for all your cooling needs
          </p>
        </div>
      </Animate>

      {/* ================= GRID ================= */}
      <AnimateGroup
        stagger={0.1}
        className="
          grid
          grid-cols-2
          lg:grid-cols-3
          gap-4
          
          mx-auto
        "
      >
        {data?.map((service, index) => (
          <Animate
            key={service.id}
            delay={index * 0.1}
            className="
              custom-card
              flex flex-col
              items-center
              text-center
              p-5
              justify-around
              bg-white
              group
            "
          >
            {/* ================= ICON BACKGROUND ================= */}
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-blue-100 rounded-xl transform rotate-6 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative w-20 h-20 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 group-hover:border-blue-200 transition-all duration-300">
                <img
                  src={service.icon}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="
                    max-h-14
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />
              </div>
            </div>

            {/* ================= TITLE ================= */}
            <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {service.title}
            </h2>

            {/* ================= DESC ================= */}
            <p className="text-gray-600 mb-3 text-sm text-center line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
              {service.description}
            </p>

            {/* ================= BUTTON ================= */}
            <button
              onClick={() => openModal(service)}
              className="
                btn-primary
              "
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
              <div className="p-8 text-center flex items-center justify-center gap-2">
                <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-gray-500">Loading details...</span>
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
