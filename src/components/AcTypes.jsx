"use client";

import { ACTypesData } from "../Data/Data";
import clouds from "../assets/clouds.png";

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
        {ACTypesData.map((service, index) => (
          <Animate
            key={index}
            className="
              custom-card
              flex flex-col
              items-center
              bg-no-repeat
              bg-center
              bg-contain
            "
            style={{
              backgroundImage: `url(${clouds})`,
            }}
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className="
                max-h-32
                rounded-lg
                mx-auto
                mb-4
                object-contain
                opacity-0
                animate-fadeIn
              "
              onLoad={(e) => e.target.classList.add("opacity-100")}
            />

            {/* Title */}
            <h2 className="text-2xl font-bold p-2 text-gray-900 dark:text-gray-100">
              {service.title}
            </h2>

            {/* Desc */}
            <p className="subtext pb-5 max-w-64 text-center">
              {service.desc}
            </p>

            {/* Button */}
            <button
              className="btn-primary"
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
