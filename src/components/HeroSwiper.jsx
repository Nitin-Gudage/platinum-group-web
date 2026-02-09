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
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef(0);

  /* ================= FETCH ================= */

  useEffect(() => {
    if (status === "idle") {
      dispatch(getHeroSlides());
    }
  }, [dispatch, status]);

  /* ================= RESET ================= */

  useEffect(() => {
    if (data?.length) {
      setIndex(0);
    }
  }, [data]);

  /* ================= PRELOAD + SEO ================= */

  useEffect(() => {
    if (!data?.length) return;

    const firstImage = data[0].image;

    /* JS preload */
    const img = new Image();
    img.src = firstImage;

    /* SEO preload */
    if (!document.querySelector(`link[rel="preload"][href="${firstImage}"]`)) {
      const link = document.createElement("link");

      link.rel = "preload";
      link.as = "image";
      link.href = firstImage;

      document.head.appendChild(link);
    }
  }, [data]);

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    if (!data?.length || paused) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, SLIDE_TIME);

    return () => clearInterval(timer);
  }, [data, paused]);

  /* ================= CURRENT ================= */

  const current = useMemo(() => {
    return data[index];
  }, [data, index]);

  /* ================= SWIPE ================= */

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) < 50) return;

    diff > 0 ? next() : prev();
  };

  /* ================= CONTROLS ================= */

  const next = () => {
    setIndex((i) => (i + 1) % data.length);
  };

  const prev = () => {
    setIndex((i) => (i === 0 ? data.length - 1 : i - 1));
  };

  /* ================= LOADING ================= */

  if (status === "loading") return <PageLoader />;

  if (!data?.length) return null;

  /* ================= UI ================= */

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ================= SLIDE ================= */}

      <Animate
        key={index}
        type="slide"
        once={false}
        className="
          relative w-full
          h-[70vh] md:h-[75vh]
          rounded-xl overflow-hidden
        "
      >
        {/* IMAGE */}
        <img
          src={current.image}
          alt={current.title}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
          className="w-full h-full object-cover object-top"
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-3 sm:inset-5 md:inset-7
            grid grid-cols-12 text-secondary
          "
        >
          <div className="col-start-6 col-span-7 flex flex-col justify-center">
            {/* TITLE */}
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

            {/* SUBTITLE */}
            <Animate delay={0.3}>
              <p className="text-secondary font-bold sm:text-lg md:text-4xl md:py-4">
                {current.subtitle}
              </p>
            </Animate>

            {/* RATING */}
            {current.rating && (
              <Animate delay={0.5}>
                <Rating rating={current.rating} />
              </Animate>
            )}

            {/* TEXT */}
            <Animate delay={0.7}>
              <p className="text-sm sm:text-base rounded-lg bg-primary/60 p-2">
                {current.subtext}
              </p>
            </Animate>

            {/* BUTTONS */}
            <Animate delay={0.9}>
              <div
                className="flex gap-3 pt-4"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={() => setPaused(true)}
                onTouchEnd={() => setPaused(false)}
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

      {/* ================= DOTS ================= */}

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
