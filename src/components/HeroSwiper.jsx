"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Rating from "../components/Rating";
import { Typewriter } from "react-simple-typewriter";
import Animate from "../utils/Animate";
import PageLoader from "../utils/PageLoader";

import { getHeroSlides } from "../store/features/heroSlice";

/* Slide interval */
const SLIDE_TIME = 5000;

const HeroSwiper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, status } = useSelector((s) => s.hero);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);

  /* Fetch hero slides */
  useEffect(() => {
    if (status === "idle") {
      dispatch(getHeroSlides());
    }
  }, [dispatch, status]);

  /* Reset index */
  useEffect(() => {
    if (data?.length) {
      setIndex(0);
    }
  }, [data]);

  /* Preload first image */
  useEffect(() => {
    if (data?.length) {
      const img = new Image();
      img.src = data[0].image;
    }
  }, [data]);

  /* Auto slide */
  useEffect(() => {
    if (!data?.length || isPaused) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, SLIDE_TIME);

    return () => clearInterval(timer);
  }, [data, isPaused]);

  /* Current slide (memoized) */
  const current = useMemo(() => {
    return data[index];
  }, [data, index]);

  /* Swipe handlers */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff =
      touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) < 50) return;

    diff > 0 ? next() : prev();
  };

  /* Controls */
  const next = () => {
    setIndex((i) => (i + 1) % data.length);
  };

  const prev = () => {
    setIndex((i) =>
      i === 0 ? data.length - 1 : i - 1
    );
  };

  /* Loading */
  if (status === "loading") return <PageLoader />;

  if (!data?.length) return null;

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
          h-[40vh] md:h-[75vh]
          rounded-xl overflow-hidden
        "
      >
        {/* Image */}
        <img
          src={current.image}
          alt={current.title}

          loading={index === 0 ? "eager" : "lazy"}
          fetchpriority={index === 0 ? "high" : "auto"}
          decoding="async"

          className="w-full h-full object-cover object-top"
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-3 sm:inset-5 md:inset-7
            grid grid-cols-12 text-secondary
          "
        >
          <div className="col-start-6 col-span-7 flex flex-col justify-center">

            {/* Title */}
            <Animate delay={0}>
              <h1
                className="
                  text-primary font-bold
                  text-2xl sm:text-3xl md:text-[80px]
                  leading-tight md:leading-[1]
                "
              >
                {index === 0 ? (
                  current.title
                ) : (
                  <Typewriter
                    key={index}
                    words={[current.title]}
                    typeSpeed={35}
                  />
                )}
              </h1>
            </Animate>

            {/* Subtitle */}
            <Animate delay={0.3}>
              <p className="text-secondary font-bold sm:text-lg md:text-4xl md:py-4">
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
              <p className="text-sm sm:text-base rounded-lg bg-primary/60 p-1">
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
                        .replace(/\s+/g, "-")}`
                    )
                  }
                >
                  Book Now
                </button>

                <button className="btn-outline">
                  Learn More
                </button>
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
            className={`w-3 h-1.5 sm:w-4 sm:h-1.5 rounded transition
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
