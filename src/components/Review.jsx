"use client";

import React from "react";
import { testimonials } from "../Data/Data";

import { AnimatedContainer, AnimatedItem } from "../utils/Animate";
// Adjust path if needed

const Review = () => {
  let row = 0;
  let count = 0;
  const total = testimonials.length;

  return (
    <section className="pb-5 overflow-hidden">
      {/* Section Heading */}
      <h1 className="heading dark:text-white text-center mb-5">
        Customer Reviews
      </h1>

      {/* Reviews Grid */}
      <AnimatedContainer
        once
        className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto px-4"
      >
        {testimonials.map((item, i) => {
          const max = row % 2 === 0 ? 3 : 2;

          const left = total - i;
          const size = left < max ? left : max;

          const first = count === 0;

          const colStart =
            first && size === 1
              ? "md:col-start-5"
              : first && size === 2
                ? "md:col-start-3"
                : "";

          count++;

          if (count >= max) {
            count = 0;
            row++;
          }

          return (
            <AnimatedItem
              key={i}
              className={`
                col-span-12 md:col-span-4 ${colStart}

                bg-white dark:bg-myGray/5
                p-6 rounded-xl

                shadow-md
                dark:shadow-[0_8px_25px_rgba(0,0,0,0.5)]

                border border-black/5 dark:border-white/5

                flex flex-col justify-between
                h-full
              `}
            >
              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                “{item.review}”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold dark:text-white">{item.name}</h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.position}
                  </p>
                </div>
              </div>
            </AnimatedItem>
          );
        })}
      </AnimatedContainer>
    </section>
  );
};

export default Review;
