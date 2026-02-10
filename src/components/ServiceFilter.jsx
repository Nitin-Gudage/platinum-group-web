"use client";

import React, { memo, useState, useEffect, useRef } from "react";

const ServiceFilter = ({
  acTypes = [],
  services = [],
  activeAc,
  activeService,
  onAcChange,
  onServiceChange,
  acName,
}) => {
  const [isAcVisible, setIsAcVisible] = useState(true);
  const containerRef = useRef(null);
  const prevScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show AC section only when at the top (within 100px)
      setIsAcVisible(currentScrollY < 1);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-gray-50 border-b border-gray-200 lg:relative sticky top-[72px] z-40"
    >
      {/* Desktop */}
      <div className="hidden lg:block max-w-6xl mx-auto px-4 py-4">
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
      <div className="lg:hidden">
        {/* AC Type Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-gray-100">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            AC
          </span>
          <h1 className="font-bold text-base text-gray-800">{acName}</h1>
        </div>

        {/* Select AC Section - Hides on scroll down */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isAcVisible ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-3 bg-white">
            <p className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wide">
              Select AC Type
            </p>
            <div className="flex flex-wrap gap-2">
              {acTypes.map((ac) => {
                const isActive = activeAc === ac.id;
                return (
                  <button
                    key={ac.id}
                    onClick={() => onAcChange(ac)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 border border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {ac.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Select Service Section */}
        <div className="px-4 py-3 bg-white">
          <p className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wide">
            Select Service
          </p>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => {
              const isActive = activeService === s.name;
              return (
                <button
                  key={s.id}
                  onClick={() => onServiceChange(s)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 border border-gray-200 hover:border-blue-300"
                  }`}
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
