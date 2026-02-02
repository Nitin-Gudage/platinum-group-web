import React from "react";
import { OurServicesData } from "../Data/Data";

const OurServices = () => {
  return (
    <div className="container pt-5">
      <h1 className="heading dark:text-white">Our Services</h1>
      <div
        className=" grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-6
          mx-auto
          py-10"
      >
        {OurServicesData.map((service, index) => (
          <div
            key={index}
            className="custom-card flex flex-col items-center text-center"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="max-h-28 object-contain m-auto"
            />
            <h2 className="text-2xl text-secondary font-bold dark:text-white">
              {service.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {service.description}
            </p>
            <button className="btn-primary mt-4">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
