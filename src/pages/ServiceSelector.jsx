"use client";

import { BsChevronCompactRight, BsCheck2Circle } from "react-icons/bs";

const ServiceSelector = ({ acName, services, selectedService, onSelect }) => {
  return (
    <div className="bg-white rounded-xl p-4 w-full shadow-sm">
      {/* Header */}
      <div className="mb-3">
        <h1 className="font-bold text-2xl text-primary">{acName}</h1>

        <p className="text-gray-600 text-sm mt-1">
          Get #1 AC service & repair experts
        </p>
      </div>

      {/* Features */}
      <div className="pb-4 space-y-2">
        {[
          "100+ technicians in your area",
          "Usually response within 60 mins",
        ].map((t) => (
          <div key={t} className="flex gap-2 text-sm">
            <BsCheck2Circle className="text-green-500" size={16} />
            <span>{t}</span>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="border p-2 rounded-md">
        <h2 className="font-semibold pb-2">Select a service</h2>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {services.map((s) => {
            const active = selectedService === s.name;

            return (
              <button
                key={s.id}
                onClick={() => onSelect(s)}
                className={`
                  flex gap-3 items-center
                  border rounded-lg p-2
                  transition
                  ${
                    active
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }
                `}
              >
                {s.icon && (
                  <img
                    src={s.icon}
                    alt={s.name}
                    className="w-10 h-10 border p-1 rounded object-contain"
                  />
                )}

                <span className="flex-1 text-sm font-medium">{s.name}</span>

                <BsChevronCompactRight className="hidden md:block text-gray-400" />
              </button>
            );
          })}
        </div>
      </div>
       <div className="p-3 rounded-lg shadow mt-4 border hover:shadow-md transition cursor-pointer">
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
