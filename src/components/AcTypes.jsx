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
    <section className="container pt-10">
      {/* ================= HEADING ================= */}
      <Animate>
        <div className="text-center mb-8 ">
          <h2 className="section-title">Types of AC We Service</h2>
          <p className="section-subtitle mt-2">
            Expert repair and maintenance for all AC types
          </p>
        </div>
      </Animate>

      {/* ================= GRID ================= */}
      <Animate
        stagger
        staggerDelay={0.1}
        className="
          grid
          grid-cols-2
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4
          mx-auto
        "
      >
        {acTypes.map((ac, index) => (
          <Animate
            key={ac.id}
            delay={index * 0.1}
            className="
              flex flex-col
              items-center
              p-4
              rounded-xl
              bg-white
              border border-gray-100
              shadow-md hover:shadow-lg
              transition-all duration-300
              hover:-translate-y-1
              group
              cursor-pointer
            "
            onClick={() =>
              navigate(
                `/services?ac=${ac.name.toLowerCase().replace(/\s+/g, "-")}`,
              )
            }
          >
            {/* ================= IMAGE WRAPPER ================= */}
            <div className="w-full mb-3 flex items-center justify-center relative">
              <img
                src={ac.image}
                alt={ac.name}
                loading="lazy"
                decoding="async"
                className="
                  max-h-16
                  object-contain
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>

            {/* ================= TITLE ================= */}
            <h2 className="text-base font-bold text-secondary text-center mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {ac.name}
            </h2>

            {/* ================= DESC ================= */}
            <p className="text-gray-600 text-xs text-center line-clamp-2 mb-3 group-hover:text-gray-700 transition-colors duration-300">
              {ac.description}
            </p>

            {/* ================= BUTTON ================= */}
            <button
              className="
                mt-auto
                px-3 py-2
                rounded-lg
                bg-primary
                text-white
                font-medium
                text-xs
                transition-all duration-300
                hover:from-blue-700 hover:to-blue-800
              "
              onClick={(e) => {
                e.stopPropagation();
                navigate(
                  `/services?ac=${ac.name.toLowerCase().replace(/\s+/g, "-")}`,
                );
              }}
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
