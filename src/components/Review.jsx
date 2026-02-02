import React from "react";
import { testimonials } from "../Data/Data";

const Review = () => {
  let row = 0; // row counter
  let countInRow = 0; // items in current row

  return (
    <section className="pb-5">
      <h1 className="heading dark:text-white text-center mb-10">
        Customer Reviews
      </h1>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-12
          gap-6
          max-w-7xl
          mx-auto
          px-4
        "
      >
        {testimonials.map((item, i) => {
          // How many cards in this row?
          const maxInRow = row % 2 === 0 ? 3 : 2;

          // Is first card of odd row?
          const center = row % 2 === 1 && countInRow === 0;

          const classes = `
            col-span-12
            md:col-span-4
            ${center ? "md:col-start-3" : ""}

            bg-white dark:bg-myGray/5
            p-6 rounded-xl

            shadow-md
            dark:shadow-[0_8px_25px_rgba(0,0,0,0.5)]

            border border-black/5
            dark:border-white/5
          `;

          // Update counters
          countInRow++;

          if (countInRow >= maxInRow) {
            countInRow = 0;
            row++;
          }

          return (
            <div key={i} className={classes}>
              {/* Review */}
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                “{item.review}”
              </p>

              {/* User */}
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Review;
