"use client";

import { useState } from "react";
import Animate from "./Animate"; // adjust path

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
  priority = true, // 👈 preload hero by default
  children,
}) => {
  const [loaded, setLoaded] = useState(false);

  /* Position */
  const positionClass = fromCenter
    ? "ml-auto w-full md:w-1/2"
    : "mr-auto w-full md:w-1/2";

  return (
    <section
      className={`
        relative overflow-hidden bg-gray-200
        ${className}
      `}
    >
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Background Image */}
      <img
        src={image}
        alt="Hero Background"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={`
          absolute inset-0 w-full h-full
          object-cover md:object-top object-left
          transition-opacity duration-700
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div
          className={`
            ${positionClass}
            px-6 md:px-12
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
