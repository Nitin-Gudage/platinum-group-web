"use client";

import { useEffect, useRef, useState, useMemo, memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Rating from "../utils/Rating";
import { Typewriter } from "react-simple-typewriter";
import HeroSchema from "../utils/SeoComponents/HeroSchema";

const SLIDE_TIME = 6000;

/* ================= ARROWS ================= */

const NavArrow = memo(({ dir, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${
      dir === "left" ? "left-4" : "right-4"
    } top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hidden md:flex`}
    aria-label={dir === "left" ? "Previous slide" : "Next slide"}
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </button>
));

/* ================= DOT ================= */

const DotBtn = memo(({ active, onClick }) => (
  <span
    onClick={onClick}
    className={`h-2 rounded-full transition ${
      active ? "w-8 bg-blue-500" : "w-2 bg-white/50"
    }`}
  />
));

/* ================= MAIN ================= */

const HeroSwiper = () => {
  const navigate = useNavigate();

  const { data } = useSelector((s) => s.hero);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const timer = useRef(null);
  const touchStartX = useRef(0);

  /* Reset */
  useEffect(() => {
    if (data?.length) setIndex(0);
  }, [data]);

  /* Auto Slide */
  useEffect(() => {
    if (!data?.length || paused) return;

    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, SLIDE_TIME);

    return () => clearInterval(timer.current);
  }, [data, paused]);

  const current = useMemo(() => data?.[index], [data, index]);

  /* Swipe */
  const start = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const end = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) < 50) return;

    diff > 0
      ? setIndex((i) => (i + 1) % data.length)
      : setIndex((i) => (i === 0 ? data.length - 1 : i - 1));
  };

  if (!data?.length) return null;

  return (
    <>
      {/* SEO Schema */}
      <HeroSchema slides={data} />

      <div className="relative w-full" onTouchStart={start} onTouchEnd={end}>
        <div
          key={index}
          className="relative w-full h-[50vh] lg:h-[70vh] md:h-[70vh] animate-zoom-in"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-black/30 z-10" />

          {/* Image */}
          <img
            src={current.image}
            alt={`${current.title} - AC Service in India`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="900"
            className="w-full h-full object-top object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center px-4 md:px-10">
            <div className="max-w-7xl grid grid-cols-12 w-full">
              <div className="col-span-12 md:col-span-6 md:col-start-6">
                <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                  {index === 0 ? (
                    current.title
                  ) : (
                    <Typewriter
                      key={index}
                      words={[current.title]}
                      typeSpeed={40}
                    />
                  )}
                </h1>

                <p className="text-gray-300 text-lg">{current.subtitle}</p>

                {current.rating && <Rating rating={current.rating} />}

                <p className="text-gray-200 bg-white/15 p-4 rounded-xl backdrop-blur mb-5 max-w-lg">
                  {current.subtext}
                </p>

                <div
                  className="flex gap-4"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
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
                    Explore Services →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <NavArrow
          dir="left"
          onClick={() => setIndex((i) => (i === 0 ? data.length - 1 : i - 1))}
        />

        <NavArrow
          dir="right"
          onClick={() => setIndex((i) => (i + 1) % data.length)}
        />

        <div className="absolute bottom-6 right-8 z-30 flex gap-3">
          {data.map((_, i) => (
            <DotBtn key={i} active={index === i} onClick={() => setIndex(i)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSwiper;
