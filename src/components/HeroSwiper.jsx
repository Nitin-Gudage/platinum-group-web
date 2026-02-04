import { useEffect, useRef, useState } from "react";
import { heroSwiper } from "../Data/Data";
import Rating from "../components/Rating";

import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSwiper = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* ---------------- Auto Slide ---------------- */
  useEffect(() => {
    if (!heroSwiper?.length || isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSwiper.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  /* ---------------- Swipe Logic ---------------- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    // Minimum swipe distance
    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      // Swipe Left → Next
      setIndex((prev) => (prev + 1) % heroSwiper.length);
    } else {
      // Swipe Right → Prev
      setIndex((prev) => (prev === 0 ? heroSwiper.length - 1 : prev - 1));
    }
  };

  if (!heroSwiper?.length) {
    return <>No Data Found</>;
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="flex">
        <AnimatePresence mode="wait">
          {heroSwiper.map(
            (item, i) =>
              i === index && (
                <motion.div
                  key={i}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="
                    relative w-full flex-shrink-0
                    h-[300px] sm:h-[360px] md:h-[80vh]
                    rounded-xl overflow-hidden
                  "
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Content */}
                  <div
                    className="
                      absolute inset-3 sm:inset-5 md:inset-7
                      grid grid-cols-12
                      p-0 sm:p-5 md:p-5
                      text-secondary dark:text-gray-200
                    "
                  >
                    <div
                      className="
                        col-start-6 col-span-7
                        flex flex-col justify-center
                      "
                    >
                      {/* Title */}
                      <h1
                        className="
                          text-primary font-bold
                          text-3xl sm:text-3xl md:text-[80px]
                          leading-tight md:leading-[1]
                        "
                      >
                        <Typewriter
                          words={[item.title]}
                          typeSpeed={40}
                          deleteSpeed={0}
                          delaySpeed={100}
                        />
                      </h1>

                      {/* Subtitle */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="
                          text-primary font-bold
                          text-lg sm:text-2xl md:text-4xl
                          py-0 md:py-5
                        "
                      >
                        {item.subtitle}
                      </motion.p>

                      {/* Rating */}
                      {item.rating && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 }}
                          className="flex gap-1"
                        >
                          <Rating rating={item.rating} />
                        </motion.div>
                      )}

                      {/* Text */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        <span className="ml-2 text-sm sm:text-base dark:text-gray-300">
                          {item.text}
                        </span>
                      </motion.div>

                      {/* Buttons (Pause Only Here) */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex gap-3 pt-2"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                      >
                        <button className="btn-primary">Book Now</button>

                        <button className="btn-outline">Learn More</button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 sm:right-6 flex gap-2">
        {heroSwiper.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
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
