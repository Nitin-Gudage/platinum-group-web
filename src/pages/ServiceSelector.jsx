"use client";

import React, { useEffect, useState } from "react";

import { BsChevronCompactRight, BsCheck2Circle } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { getMeta } from "../store/features/metaSlice";

const ServiceSelector = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(null);

  /* Redux */
  const { acTypes, serviceTypes } = useSelector((s) => s.meta);
  const { activeAc } = useSelector((s) => s.services);

  /* Load meta */
  useEffect(() => {
    dispatch(getMeta());
  }, [dispatch]);

  /* Selected AC name */
  const activeAcName =
    acTypes.find((a) => a.id === activeAc)?.name || "AC Services";

  /* Scroll Handler */
  const scrollToService = (id) => {
    const el = document.getElementById(`service-${id}`);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="h-max bg-white rounded-xl p-4 w-full">
      {/* Header */}
      <div className="mb-3">
        <h1 className="font-bold text-2xl text-primary ">{activeAcName}</h1>

        <p className="text-gray-600 text-sm mt-1">
          Get #1 AC service & repair experts
        </p>
      </div>

      {/* Features */}
      <div className="pb-4 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <BsCheck2Circle className="text-green-500" size={16} />
          <span>100+ technicians in your area</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <BsCheck2Circle className="text-green-500" size={16} />
          <span>Usually response within 60 mins</span>
        </div>
      </div>

      {/* Services */}
      <div className="border p-2 rounded-md">
        <h2 className="font-semibold pb-2">Select a service</h2>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {serviceTypes.map((item, index) => {
            const isActive = active === index;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActive(index);
                  scrollToService(item.id);
                }}
                className={`
                  btn-ghost flex items-center gap-3
                  border rounded-lg p-2 text-left
                  transition-all
                  ${isActive ? "border-blue-500 bg-blue-50" : "border-gray-200"}
                `}
              >
                {/* Icon */}
                {item.icon && (
                  <img
                    src={item.icon}
                    alt=""
                    className="w-10 h-10 object-contain border p-1 rounded"
                  />
                )}

                {/* Name */}
                <span className="flex-1 text-sm font-medium">{item.name}</span>

                <BsChevronCompactRight className="hidden md:block" />
              </button>
            );
          })}
        </div>
      </div>
      {/* feature image */}
      <div className="p-3 rounded-lg shadow mt-4 border cursor-pointer">
        <img
          src="https://img.freepik.com/free-photo/air-conditioner-repair-service_23-2149368973.jpg"
          alt="Repair"
          className="w-full h-40 object-cover rounded-lg mb-2"
        />

        <p className="font-medium text-center">Repair & Gas Refill</p>
      </div>
    </div>
  );
};

export default ServiceSelector;
