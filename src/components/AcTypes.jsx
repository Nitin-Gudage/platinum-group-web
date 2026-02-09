"use client";

import { ACTypesData } from "../Data/Data";

import Animate from "../utils/Animate";
import { useNavigate } from "react-router-dom";

const AcTypes = () => {
  const navigate = useNavigate();

  return (
    <section className="container pt-5">

      {/* Heading */}
      <Animate>
        <h1 className="heading dark:text-myGray">
          Types of AC We Service
        </h1>
      </Animate>

      {/* Grid */}
      <Animate
        stagger
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-6
          mx-auto
          py-10
        "
      >
        {ACTypesData.map((service) => (
          <Animate
            key={service.id}
            className="
              flex flex-col
              items-center
              p-5
              rounded-xl
              bg-white
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            {/* Image Wrapper (16:9) */}
            <div className="w-full mb-4 flex items-center justify-center">

              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                decoding="async"
                className="
                  max-h-28
                  object-contain
                  transition-opacity
                  duration-500
                  opacity-0
                "
                onLoad={(e) =>
                  e.currentTarget.classList.remove("opacity-0")
                }
              />

            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center">
              {service.title}
            </h2>

            {/* Desc */}
            <p className="subtext mt-2 pb-5 max-w-64 text-center text-sm text-gray-600">
              {service.desc}
            </p>

            {/* Button */}
            <button
              className="btn-primary mt-auto"
              onClick={() =>
                navigate(
                  `/services?ac=${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
                )
              }
            >
              Book Service
            </button>

          </Animate>
        ))}
      </Animate>
    </section>
  );
};

export default AcTypes;
