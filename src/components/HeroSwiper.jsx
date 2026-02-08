"use client";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Rating from "../components/Rating";
import { Typewriter } from "react-simple-typewriter";
import Animate from "../utils/Animate";
import { useNavigate } from "react-router-dom";

/* Slide interval (3 seconds) */
const SLIDE_TIME = 5000;

const HeroSwiper = () => {
  const { data, status } = useSelector((s) => s.hero);
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);

  /* Reset index when data changes */
  useEffect(() => {
    if (data?.length) {
      setIndex(0);
    }
  }, [data]);

  /* Auto Slide */
  useEffect(() => {
    if (!data?.length || isPaused) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, SLIDE_TIME);

    return () => clearInterval(timer);
  }, [data, isPaused]); // ✅ important

  /* Swipe Start */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  /* Swipe End */
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;

    const diff = touchStartX.current - endX;

    if (Math.abs(diff) < 50) return;

    diff > 0 ? next() : prev();
  };

  /* Controls */
  const next = () => {
    setIndex((i) => (i + 1) % data.length);
  };

  const prev = () => {
    setIndex((i) => (i === 0 ? data.length - 1 : i - 1));
  };

  /* Loading */
  if (status === "loading") return <p>Loading...</p>;

  if (!data?.length) return null;

  const current = data[index];

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
          h-[40vh] sm:h-[360px] md:h-[80vh]
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
                  text-2xl sm:text-3xl md:text-[80px]
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
                  text-secondary font-bold
                  sm:text-lg md:text-4xl
                  md:py-4
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
              <p
                className="
                  text-sm sm:text-base
                  rounded-lg
                  bg-primary/60 p-1
                "
              >
                {current.subtext}
              </p>
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
                <button
                  className="btn-primary"
                  onClick={() =>
                    navigate(
                      `/services?ac=${current.ac_types.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`,
                    )
                  }
                >
                  Book Now
                </button>

                <button className="btn-outline">Learn More</button>
              </div>
            </Animate>
          </div>
        </div>
      </Animate>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 sm:right-6 flex gap-2">
        {data.map((_, i) => (
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
