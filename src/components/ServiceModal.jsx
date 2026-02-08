"use client";

import React from "react";
import { brandImages } from "../Data/Data";

const ServiceModal = ({ service, serviceId }) => {
  /* Safety check */
  if (!service) return null;

  const steps = service.service_steps || [];

  return (
    <div className="bg-white w-full max-w-5xl mx-auto py-8 px-4">
      {/* ================= HEADER ================= */}
      <div className="border-b pb-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          {service.title}
        </h1>
      </div>

      {/* ================= PROCESS ================= */}
      <section className="space-y-8 mb-10">
        {steps.length === 0 && (
          <p className="text-center text-gray-500">No steps available.</p>
        )}

        {steps.map((step, index) => (
          <div
            key={step.id || index}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          >
            {/* Text */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                {index + 1}. {step.title}
              </h3>

              <p className="text-gray-600 mb-3">{step.description}</p>

              {/* Checkpoints */}
              {Array.isArray(step.checkpoints) &&
                step.checkpoints.map((item, i) => (
                  <p key={i} className="text-sm text-gray-700">
                    ✅ {item}
                  </p>
                ))}
            </div>

            {/* Image */}
            {step.image && (
              <img
                src={step.image}
                alt={step.title}
                loading="lazy"
                className="w-full h-56 object-cover rounded-xl shadow"
              />
            )}
          </div>
        ))}
      </section>

      {/* ================= NOTE ================= */}
      <section className="bg-gray-50 p-5 rounded-xl mb-10">
        <h3 className="font-semibold mb-3">Please note</h3>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Additional charges apply for more than three leaks</li>
          <li>Includes anti-rust coating</li>
          <li>VRV systems not covered</li>
        </ul>
      </section>

      {/* ================= TECHNICIAN ================= */}
      <section className="mb-10">
        <h3 className="font-semibold mb-4">Top technicians</h3>

        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
          <img
            src="https://i.pravatar.cc/150"
            className="w-16 h-16 rounded-full object-cover"
            alt="Technician"
          />

          <div className="text-sm space-y-1">
            <p>✅ Background verified</p>
            <p>🔧 Trained across brands</p>
            <p>🎓 Skill India certified</p>
          </div>
        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="mb-10">
        <h3 className="font-semibold mb-4">We service all brands</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {brandImages.map((img, i) => (
            <div
              key={i}
              className="flex justify-center items-center bg-gray-50 p-3 rounded-lg"
            >
              <img
                src={img}
                alt="Brand"
                loading="lazy"
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= WARRANTY ================= */}
      <section>
        <h3 className="font-semibold mb-4">UCCover</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
          <div className="border rounded-lg p-4">
            🛡️
            <p className="mt-1">30-day warranty</p>
          </div>

          <div className="border rounded-lg p-4">
            💰
            <p className="mt-1">₹10,000 cover</p>
          </div>

          <div className="border rounded-lg p-4">
            ✔️
            <p className="mt-1">Verified quotes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceModal;
