"use client";

import { useEffect, useRef, useState, useMemo, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Rating from "../utils/Rating";
import { Typewriter } from "react-simple-typewriter";
import Animate from "../utils/Animate";
import PageLoader from "../utils/PageLoader";
import { getHeroSlides } from "../store/features/heroSlice";

const SLIDE_TIME = 6000;

const NavArrow = memo(({ dir, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${dir === "left" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 hidden md:flex`}
    aria-label={dir === "left" ? "Previous slide" : "Next slide"}
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </button>
));

const DotBtn = memo(({ active, onClick, i }) => (
  <button
    onClick={onClick}
    aria-label={`Slide ${i + 1}`}
    className={`h-2 rounded-full transition-all duration-300 ${active ? "w-8 bg-blue-500" : "w-2 bg-white/50 hover:bg-white/80"}`}
  />
));

const HeroSwiper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status } = useSelector((s) => s.hero);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  /* ================= FETCH ================= */

  useEffect(() => {
    if (status === "idle") dispatch(getHeroSlides());
  }, [dispatch, status]);

  /* ================= RESET ================= */

  useEffect(() => {
    data?.length && setIndex(0);
  }, [data]);

  /* ================= PRELOAD + SEO ================= */

  useEffect(() => {
    if (!data?.length) return;
    const firstImage = data[0].image;
    const img = new Image();
    img.src = firstImage;
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
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % data.length),
      SLIDE_TIME,
    );
    return () => clearInterval(timer);
  }, [data, paused]);

  /* ================= CURRENT ================= */

  const current = useMemo(() => data?.[index], [data, index]);

  /* ================= SWIPE ================= */

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    diff > 0
      ? setIndex((i) => (i === 0 ? data.length - 1 : i - 1))
      : setIndex((i) => (i + 1) % data.length);
  };

  /* ================= LOADING ================= */

  if (status === "loading") return <PageLoader />;
  if (!data?.length) return null;

  /* ================= UI ================= */

  return (
    <div
      className="relative w-full md:pt-1"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ================= SLIDE ================= */}

      <Animate
        key={index}
        type="zoom"
        duration={0.5}
        className="relative w-full h-[50vh] lg:h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent z-10" />

        <img
          src={current.image}
          alt={current.title}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl w-full px-5 grid grid-cols-12">
            <div className="max-w-1/2 w-full col-span-12 md:col-span-6 md:col-start-6">
              <Animate delay={0.1}>
                <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
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
              </Animate>

              <Animate delay={0.2}>
                <p className="text-gray-300 font-medium text-lg md:text-2xl mb-6">
                  {current.subtitle}
                </p>
              </Animate>

              {current.rating && (
                <Animate delay={0.3}>
                  <Rating rating={current.rating} />
                </Animate>
              )}

              <Animate delay={0.4}>
                <p className="text-gray-300 text-base rounded-2xl bg-white/20 p-4 backdrop-blur-xl border border-white/5 mb-8 max-w-lg">
                  {current.subtext}
                </p>
              </Animate>

              <Animate delay={0.5}>
                <div
                  className="flex flex-wrap gap-4"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  onTouchStart={() => setPaused(true)}
                  onTouchEnd={() => setPaused(false)}
                >
                  <button
                    className="btn-primary flex items-center gap-2"
                    onClick={() =>
                      navigate(
                        `/services?ac=${current.ac_types.name.toLowerCase().replace(/\s+/g, "-")}`,
                      )
                    }
                  >
                    Take a look
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </Animate>
            </div>
          </div>
        </div>
      </Animate>

      {/* ================= NAVIGATION ARROWS ================= */}
      <NavArrow
        dir="left"
        onClick={() => setIndex((i) => (i === 0 ? data.length - 1 : i - 1))}
      />
      <NavArrow
        dir="right"
        onClick={() => setIndex((i) => (i + 1) % data.length)}
      />

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-6 right-8 z-30 flex gap-3">
        {data.map((_, i) => (
          <DotBtn
            key={i}
            i={i}
            active={index === i}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSwiper;
