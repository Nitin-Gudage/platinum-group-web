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
    <div className="w-full rounded-2xl bg-gradient-to-br from-white to-gray-50 p-4 shadow-xl border border-gray-100/50 backdrop-blur-sm">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-4">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Select AC Type
            </h3>
          </div>
          <ul className="flex gap-4 justify-center overflow-x-auto p-2 scrollbar-hide">
            {acTypes.map((ac) => {
              const isActive = activeAc === ac.id;
              return (
                <li
                  key={ac.id}
                  onClick={() => onAcChange(ac)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && onAcChange(ac)}
                  className={`group relative min-w-[140px] rounded-2xl p-4 cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1 ${
                    isActive
                      ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-200"
                      : "bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl"
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    </div>
                  )}
                  <div
                    className={`relative z-10 ${isActive ? "text-white" : ""}`}
                  >
                    <div
                      className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 mb-3 transition-all duration-300 group-hover:scale-110 ${isActive ? "bg-white/20" : ""}`}
                    >
                      <img
                        src={ac.image}
                        alt={ac.name}
                        loading="lazy"
                        className="h-16 mx-auto object-contain"
                      />
                    </div>
                    <p className="text-sm text-center font-bold">{ac.name}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="block lg:hidden space-y-4">
        {/* AC Type Header */}
        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg border border-blue-100">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            AC
          </span>
          <h1 className="font-bold text-base bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {acName}
          </h1>
        </div>

        {/* Select AC Section */}
        <div>
          <p className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">
            Select AC Type
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {acTypes.map((ac) => {
              const isActive = activeAc === ac.id;
              return (
                <button
                  key={ac.id}
                  onClick={() => onAcChange(ac)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ease-out overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <span className="relative z-10">{ac.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Select Service Section */}
        <div>
          <p className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">
            Select Service
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {services.map((s) => {
              const isActive = activeService === s.name;
              return (
                <button
                  key={s.id}
                  onClick={() => onServiceChange(s)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ease-out overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg shadow-blue-200"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <span className="relative z-10">{s.name}</span>
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
