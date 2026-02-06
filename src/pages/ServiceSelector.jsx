import React from "react";
import Animate from "../utils/Animate";
import { BsChevronCompactRight, BsCheck2Circle } from "react-icons/bs";

const ServiceSelector = () => {
  const services = [
    { name: "super Saver Package", image: "" },
    { name: "service", image: "" },
    { name: "Repair & gas refill", image: "" },
    { name: "Installation / Uninstallation", image: "" },
  ];

  return (
    <>
      <Animate
        type="fade"
        className="h-max bg-white rounded-xl p-4 col-span-12 sm:col-span-5 md:col-span-3 w-full"
      >
        {/* Header */}
        <div className="mb-4">
          <h1 className="font-bold text-2xl">AC</h1>

          <p className="text-gray-600 text-sm mt-1">
            Get #1 AC service & repair experts
          </p>
        </div>

        {/* Features */}
        <div className="pb-4">
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
        <div className=" border py-4 px-2 rounded-md">
          <h2 className="font-semibold pb-2">Select a service</h2>

          {/* Service List */}
          <div className="grid grid-cols-2 md:grid-cols-1 md:gap-2 gap-1">
            {services.map((item, index) => (
              <button className="btn-ghost" key={index}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2933/2933914.png"
                  alt="AC"
                  className="w-12 h-12 object-contain border border-gray-300 p-2 rounded-sm"
                />

                {item.name}
                <BsChevronCompactRight className="hidden md:block" />
              </button>
            ))}
          </div>

          {/* Repair */}
        </div>
        {/* service image */}
        <div className="bg-white p-3 rounded-lg shadow cursor-pointer mt-3">
          <img
            src="https://img.freepik.com/free-photo/air-conditioner-repair-service_23-2149368973.jpg"
            alt="Repair"
            className="w-full h-40 object-cover rounded-lg mb-2"
          />

          <p className="font-medium text-center">Repair & gas refill</p>
        </div>
      </Animate>
    </>
  );
};

export default ServiceSelector;
