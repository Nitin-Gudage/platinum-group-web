"use client";

import { useState } from "react";
import Animate from "./Animate";

/**
 * Reusable Hero Banner (Optimized)
 *
 * Props:
 * image      → background image
 * fromCenter → true | false
 * priority   → true (eager load)
 * className  → extra classes
 * children   → custom content
 */
const ImageOverlay = ({
  className = "",
  image,
  fromCenter = true,
  priority = true,
  children,
}) => {
  const [loaded, setLoaded] = useState(false);

  /* Position */
  const positionClass = fromCenter
    ? "ml-auto w-full md:w-2/3 lg:w-3/5"
    : "mr-auto w-full md:w-2/3 lg:w-3/5";

  return (
    <section
      className={`
        relative overflow-hidden bg-gray-900
        h-[40vh] md:h-[55vh]
        ${className}
      `}
    >
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent z-10" />

      {/* Decorative blur effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-cyan-500/5 z-10" />

      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}

      {/* Background Image */}
      <img
        src={image}
        alt="AC repair service in Kolkata - Professional HVAC solutions"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={`
          absolute inset-0 w-full h-full
          object-cover md:object-top
          transition-opacity duration-1000
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center ">
        <div
          className={`
            ${positionClass}
            px-6 md:px-12 lg:px-16
            text-left
          `}
        >
          {/* Fade-in Content */}
          <Animate delay={0.2}>{children}</Animate>
        </div>
      </div>
    </section>
  );
};

export default ImageOverlay;
