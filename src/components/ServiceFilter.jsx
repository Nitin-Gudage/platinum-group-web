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
  const observerRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // Use Intersection Observer to detect when page is at top
  useEffect(() => {
    // Create a sentinel element at the top of the page
    const createSentinel = () => {
      let sentinel = document.getElementById("scroll-sentinel");
      if (!sentinel) {
        sentinel = document.createElement("div");
        sentinel.id = "scroll-sentinel";
        sentinel.style.position = "absolute";
        sentinel.style.top = "0";
        sentinel.style.left = "0";
        sentinel.style.width = "1px";
        sentinel.style.height = "1px";
        document.body.appendChild(sentinel);
      }
      return sentinel;
    };

    const sentinel = createSentinel();

    // Use Intersection Observer for better performance than scroll events
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsAcVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0,
      },
    );

    observer.observe(sentinel);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear any pending timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      // Debounce the state update
      hideTimeoutRef.current = setTimeout(() => {
        // Show AC section only when at the very top
        setIsAcVisible(currentScrollY < 1);
      }, 16); // ~60fps debounce
    };

    // Add passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-gray-50  border-b border-gray-200 lg:relative sticky md:top-[0px] top-[72px] z-40 lg:static will-change-transform">
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
        <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-gray-100 rounded-xl">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            AC
          </span>
          <h1 className="font-bold text-base text-gray-800">{acName}</h1>
        </div>

        {/* Select AC Section - Hides on scroll down */}
        <div
          className={`overflow-hidden transition-all duration-200 ease-out ${
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
