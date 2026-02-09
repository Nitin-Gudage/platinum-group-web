"use client";

import { useDispatch, useSelector } from "react-redux";
import Animate from "../utils/Animate";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getMeta } from "../store/features/metaSlice";

const AcTypes = () => {
  const dispatch = useDispatch();
  const { acTypes } = useSelector((s) => s.meta);

  useEffect(() => {
    dispatch(getMeta());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <section className="container pt-5">
      {/* Heading */}
      <Animate>
        <h1 className="heading dark:text-myGray">Types of AC We Service</h1>
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
        {acTypes.map((ac) => (
          <Animate
            key={ac.id}
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
                src={ac.image}
                alt={ac.name}
                loading="lazy"
                decoding="async"
                className="
                  max-h-28
                  object-contain
                  transition-opacity
                  duration-500
                  opacity-0
                "
                onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
              />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center">
              {ac.name}
            </h2>

            {/* Desc */}
            <p className="subtext mt-2 pb-5 max-w-64 text-center text-sm text-gray-600">
              {ac.description}
            </p>

            {/* Button */}
            <button
              className="btn-primary mt-auto"
              onClick={() =>
                navigate(
                  `/services?ac=${ac.name.toLowerCase().replace(/\s+/g, "-")}`,
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
