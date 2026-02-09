"use client";

import React, { memo } from "react";

const ServiceFilter = ({
  acTypes = [],
  services = [],
  activeAc,
  activeService,
  onAcChange,
  onServiceChange,
  acName,
}) => {
  return (
    <div className="w-full rounded-xl bg-white px-2 py-4 shadow-sm">
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block">
        <ul
          className="
            flex gap-4 justify-center
            overflow-x-auto
            bg-white p-3
            rounded-lg shadow-sm
          "
        >
          {acTypes.map((ac) => {
            const isActive = activeAc === ac.id;

            return (
              <li
                key={ac.id}
                onClick={() => onAcChange(ac)}
                role="button"
                tabIndex={0}
                className={`
                  p-3 border rounded-xl
                  cursor-pointer transition
                  select-none
                  ${
                    isActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }
                `}
              >
                <img
                  src={ac.image}
                  alt={ac.name}
                  loading="lazy"
                  className="h-20 mx-auto object-contain"
                />

                <p className="text-sm mt-1 text-center font-medium">
                  {ac.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ================= MOBILE / TABLET ================= */}
      <div className="block lg:hidden space-y-4">
        {/* AC NAME */}
        <div className="flex gap-3 items-center">
          <p className="text-white bg-primary px-4 py-1 text-center rounded-full">AC</p>
          <h1 className="font-semibold text-lg">{acName}</h1>
        </div>
        {/* ================= AC SELECT ================= */}

        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Select AC</p>

          <div
            className="
              bg-slate-100 p-2 rounded-lg
              flex flex-wrap gap-2
              justify-center
            "
          >
            {acTypes.map((ac) => {
              const isActive = activeAc === ac.id;

              return (
                <button
                  key={ac.id}
                  onClick={() => onAcChange(ac)}
                  className={`
                    px-4 py-1.5 rounded-full
                    text-sm min-w-[7rem]
                    transition
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {ac.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= SERVICE SELECT ================= */}

        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">
            Select Service
          </p>

          <div
            className="
              bg-slate-100 p-2 rounded-xl
              flex flex-wrap gap-2
              justify-center
            "
          >
            {services.map((s) => {
              const isActive = activeService === s.name;

              return (
                <button
                  key={s.id}
                  onClick={() => onServiceChange(s)}
                  className={`
                    px-4 py-2 rounded-full
                    text-sm whitespace-nowrap
                    transition                    
                    ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {s.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ServiceFilter);
