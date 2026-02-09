"use client";

import { useMemo, useState, useEffect } from "react";

import { testimonials } from "../Data/Data";
import { Animate, AnimateGroup } from "../utils/Animate";

/* Build rows in 3-2-3-2 pattern (Desktop) */
function buildRows(data) {
  const rows = [];

  let index = 0;
  let three = true;

  while (index < data.length) {
    const size = three ? 3 : 2;

    rows.push(data.slice(index, index + size));

    index += size;
    three = !three;
  }

  return rows;
}

const Review = () => {
  /* Detect Mobile */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  /* Limit Data */
  const limitedTestimonials = useMemo(() => {
    return isMobile
      ? testimonials.slice(0, 4) // Mobile → max 4
      : testimonials.slice(0, 8); // Desktop → max 8
  }, [isMobile]);

  /* Build Rows */
  const rows = useMemo(() => {
    if (isMobile) {
      // Mobile → 2 per row
      return buildRowsMobile(limitedTestimonials);
    }

    // Desktop → 3-2-3-2
    return buildRows(limitedTestimonials);
  }, [limitedTestimonials, isMobile]);

  return (
    <section
      className="pb-10 overflow-hidden"
      aria-label="Why Choose Platinum Group AC Services"
    >
      {/* Heading */}
      <Animate>
        <h1 className="heading dark:text-white text-center mb-8">
          Customer Reviews
        </h1>
      </Animate>

      {/* Reviews */}
      <AnimateGroup className="max-w-7xl mx-auto px-4 space-y-6">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-6 flex-wrap sm:flex-nowrap"
          >
            {row.map((item) => (
              <Animate
                key={item.id || item.name}
                className="
                  bg-white dark:bg-myGray/5
                  p-6 rounded-xl
                  shadow-md
                  dark:shadow-[0_8px_25px_rgba(0,0,0,0.5)]
                  border border-black/5 dark:border-white/5
                  flex flex-col justify-between
                  h-full
                  w-full
                  sm:w-[45%]
                  lg:w-[30%]
                "
              >
                {/* Review */}
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  “{item.review}”
                </p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold dark:text-white">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.position}
                    </p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        ))}
      </AnimateGroup>
    </section>
  );
};

/* Mobile → 2 per row */
function buildRowsMobile(data) {
  const rows = [];

  for (let i = 0; i < data.length; i += 2) {
    rows.push(data.slice(i, i + 2));
  }

  return rows;
}

export default Review;
