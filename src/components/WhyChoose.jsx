import React from "react";
import { whyToChoose } from "../Data/Data";

const WhyChoose = () => {
  return (
    <section className="container max-w-5xl pt-5">
      <h1 className="heading dark:text-white">
        Why to choose Platinum Solutions for AC Service ?
      </h1>
      <div
        className="grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-4
          gap-6
          mx-auto
          py-10"
      >
        {whyToChoose.map((testimonial, index) => (
          <div
            key={index}
            className="flex md:flex-col flex-row gap-5 md:gap-3 items-center text-center p-8 border rounded-xl"
          >
            <img
              src={testimonial.icon}
              alt={testimonial.title}
              className="max-h-14"
            />
            <div>
              <h3 className="text-lg font-semibold my-2 text-secondary dark:text-myGray">
                {testimonial.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-justify md:text-center">
                {testimonial.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
