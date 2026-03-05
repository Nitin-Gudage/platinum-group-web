"use client";

import { useState, useEffect, useRef, memo } from "react";

/**
 * LazyImage Component
 * Efficiently loads images using Intersection Observer with blur placeholder
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for image
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional img element props
 */
const LazyImage = memo(({ 
  src, 
  alt, 
  className = "",
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3C/svg%3E",
  threshold = 0.1,
  rootMargin = "100px",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef} 
      className={`lazy-image-container ${className}`}
      style={{
        overflow: 'hidden',
        backgroundColor: !isLoaded ? '#f3f4f6' : 'transparent'
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={handleLoad}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}
      {!isLoaded && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)`,
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
});

LazyImage.displayName = "LazyImage";

export default LazyImage;

/**
 * PreloadImage - Component for hero images that should load immediately
 * but use a placeholder until loaded
 */
export const PreloadImage = memo(({ 
  src, 
  alt, 
  className = "",
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Start loading immediately for priority images
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...props}
    />
  );
});

PreloadImage.displayName = "PreloadImage";

/**
 * BlurImage - High-quality blur-up image loading
 */
export const BlurImage = memo(({ 
  src, 
  alt, 
  className = "",
  thumbnail,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Thumbnail placeholder */}
      {thumbnail && !isLoaded && (
        <img
          src={thumbnail}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
        />
      )}
      
      {/* Full image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`relative transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}
    </div>
  );
});

BlurImage.displayName = "BlurImage";
