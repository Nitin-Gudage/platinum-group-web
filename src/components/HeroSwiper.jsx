"use client";

import { useEffect, useRef, useState } from "react";

import { heroSwiper } from "../Data/Data";
import Rating from "../components/Rating";
import { Typewriter } from "react-simple-typewriter";

import Animate from "../utils/Animate"; // 👈 Universal animation

const SLIDE_TIME = 5000;

const HeroSwiper = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* Auto Slide */
  useEffect(() => {
    if (!heroSwiper?.length || isPaused) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSwiper.length);
    }, SLIDE_TIME);

    return () => clearInterval(timer);
  }, [isPaused]);

  /* Swipe */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 50) return;

    distance > 0 ? next() : prev();
  };

  const next = () => setIndex((i) => (i + 1) % heroSwiper.length);

  const prev = () => setIndex((i) => (i === 0 ? heroSwiper.length - 1 : i - 1));

  if (!heroSwiper?.length) return null;

  const current = heroSwiper[index];

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide */}
      <Animate
        key={index}
        type="slide"
        once={false}
        className="
          relative w-full
          h-[300px] sm:h-[360px] md:h-[80vh]
          rounded-xl overflow-hidden
        "
      >
        {/* Image */}
        <img
          src={current.image}
          alt={current.title}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-full object-cover object-top"
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-3 sm:inset-5 md:inset-7
            grid grid-cols-12
            text-secondary
          "
        >
          <div
            className="
              col-start-6 col-span-7
              flex flex-col justify-center
            "
          >
            {/* Title */}
            <Animate delay={0}>
              <h1
                className="
                  text-primary font-bold
                  text-3xl sm:text-3xl md:text-[80px]
                  leading-tight md:leading-[1]
                "
              >
                <Typewriter
                  key={index}
                  words={[current.title]}
                  typeSpeed={35}
                />
              </h1>
            </Animate>

            {/* Subtitle */}
            <Animate delay={0.3}>
              <p
                className="
                  text-primary font-bold
                  text-lg sm:text-2xl md:text-4xl
                  py-1 md:py-5
                "
              >
                {current.subtitle}
              </p>
            </Animate>

            {/* Rating */}
            {current.rating && (
              <Animate delay={0.5}>
                <Rating rating={current.rating} />
              </Animate>
            )}

            {/* Text */}
            <Animate delay={0.7}>
              <span
                className="
                  text-sm sm:text-base
                  bg-primary/70 p-1
                "
              >
                {current.text}
              </span>
            </Animate>

            {/* Buttons */}
            <Animate delay={0.9}>
              <div
                className="flex gap-3 pt-3"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                <button className="btn-primary">Book Now</button>

                <button className="btn-outline">Learn More</button>
              </div>
            </Animate>
          </div>
        </div>
      </Animate>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 sm:right-6 flex gap-2">
        {heroSwiper.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`
              w-3 h-1.5 sm:w-4 sm:h-1.5
              rounded transition
              ${
                index === i
                  ? "bg-primary scale-125"
                  : "bg-white/80 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSwiper;
