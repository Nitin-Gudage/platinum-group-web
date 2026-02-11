"use client";

import { memo } from "react";
import { brandImages } from "../Data/Data";
import acTech from '/images/ac-technician.png'

const ServiceModal = ({ service }) => {
  if (!service) return null;
  const steps = service.service_steps || [];

  return (
    <div className="bg-white w-full max-w-4xl mx-auto rounded-2xl overflow-hidden">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 md:p-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">{service.title}</h1>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* PROCESS */}
        <section className="space-y-8">
          {steps.length === 0 && (
            <p className="text-center text-gray-500">No steps available.</p>
          )}
          {steps.map((step, index) => (
            <div
              key={step.id || `${service.id}-${index}`}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {step.description}
                  {Array.isArray(step.checkpoints) &&
                    step.checkpoints.map((item, i) => (
                      <p
                        key={`${step.id}-${i}`}
                        className="text-sm text-gray-700 flex gap-2 mt-2"
                      >
                        <span>✓</span>
                        <span>{item}</span>
                      </p>
                    ))}
                </p>
              </div>
              {step.image && (
                <div className="w-full md:w-64 aspect-video rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </section>

        {/* NOTE */}
        <section className="bg-blue-50 p-5 rounded-xl border border-blue-100">
          <h3 className="font-semibold mb-3 text-blue-800">Please note</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
            <li>Additional charges apply for more than three leaks</li>
            <li>Includes anti-rust coating</li>
            <li>VRV systems not covered</li>
          </ul>
        </section>

        {/* TECHNICIAN */}
        <section>
          <h3 className="font-semibold mb-4 text-gray-800">Top technicians</h3>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 p-4 rounded-xl">
            <img
              src={acTech}
              className="w-16 h-16 rounded-full object-cover"
              alt="Technician"
              loading="lazy"
            />
            <div className="text-sm space-y-1 text-gray-700">
              <p className="flex items-center gap-2">
                <span>✓</span> Background verified
              </p>
              <p className="flex items-center gap-2">
                <span>🔧</span> Trained across brands
              </p>
              <p className="flex items-center gap-2">
                <span>★</span> Skill India certified
              </p>
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section>
          <h3 className="font-semibold mb-4 text-gray-800">
            We service all brands
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {brandImages.map((img, i) => (
              <div
                key={`brand-${i}`}
                className="p-2 h-12 w-32 flex justify-center items-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  src={img}
                  alt="Brand logo"
                  loading="lazy"
                  decoding="async"
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* WARRANTY */}
        <section>
          <h3 className="font-semibold mb-4 text-gray-800">Platinum Services Cover</h3>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="text-2xl mb-2">🛡️</p>
              <p className="font-medium">30-day warranty</p>
            </div>
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="text-2xl mb-2">💰</p>
              <p className="font-medium">₹10,000 cover</p>
            </div>
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="text-2xl mb-2">✓</p>
              <p className="font-medium">Verified quotes</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default memo(ServiceModal);
