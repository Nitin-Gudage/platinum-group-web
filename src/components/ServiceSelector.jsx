"use client";

import {
  BsChevronCompactRight,
  BsCheck2Circle,
  BsTools,
  BsSnow,
  BsDroplet,
  BsLightning,
  BsThermometer,
  BsWrench,
} from "react-icons/bs";

// Default icon mapper based on service name
const getDefaultIcon = (name) => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes("repair")) return BsTools;
  if (nameLower.includes("gas") || nameLower.includes("refill"))
    return BsDroplet;
  if (nameLower.includes("install") || nameLower.includes("installation"))
    return BsSnow;
  if (nameLower.includes("service") || nameLower.includes("maintenance"))
    return BsWrench;
  if (nameLower.includes("cooling")) return BsThermometer;
  if (nameLower.includes("power") || nameLower.includes("electrical"))
    return BsLightning;
  return BsSnow;
};

const ServiceSelector = ({ acName, services, selectedService, onSelect }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 w-full shadow-xl border border-gray-100/50 backdrop-blur-sm">
      {/* Header */}
      <div className="relative mb-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl transform -skew-x-6" />
        <div className="relative">
          <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            {acName}
          </h1>
          <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Get #1 AC service & repair experts
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="pb-4 space-y-2">
        {[
          "100+ technicians in your area",
          "Usually response within 60 mins",
        ].map((t) => (
          <div key={t} className="flex gap-2.5 text-sm items-start">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <BsCheck2Circle className="text-green-500" size={14} />
            </div>
            <span className="text-gray-600 font-medium">{t}</span>
          </div>
        ))}
      </div>

      {/* Services List */}
      <div className="border-t border-gray-100 pt-5">
        <h2 className="font-bold pb-3 text-gray-700 text-sm uppercase tracking-wide">
          Select a service
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {services.map((s) => {
            const active = selectedService === s.name;
            // Check if icon is a valid React component or a string URL
            const isValidIcon = s.icon && typeof s.icon !== "string";
            const IconComponent = isValidIcon ? s.icon : getDefaultIcon(s.name);

            return (
              <button
                key={s.id}
                onClick={() => onSelect(s)}
                className={`group relative flex gap-3 items-center border rounded-xl p-3 transition-all duration-300 ease-out overflow-hidden ${
                  active
                    ? "border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100/50 shadow-lg shadow-blue-100"
                    : "border-gray-200 hover:border-blue-300 hover:bg-white hover:shadow-lg"
                }`}
              >
                {/* Active indicator bar */}
                {active && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600" />
                )}

                {/* Icon container */}
                <div
                  className={`relative w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-md"
                      : "bg-gray-100 border border-gray-200 group-hover:bg-white group-hover:border-blue-200"
                  }`}
                >
                  <IconComponent
                    size={22}
                    className={
                      active
                        ? "text-white"
                        : "text-gray-600 group-hover:text-blue-500"
                    }
                  />
                </div>

                <span
                  className={`flex-1 text-sm font-bold text-left transition-colors duration-300 ${
                    active
                      ? "text-blue-700"
                      : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  {s.name}
                </span>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    active
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500"
                  }`}
                >
                  <BsChevronCompactRight size={18} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Card */}
      <div className="mt-5 relative overflow-hidden p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-200 group cursor-pointer hover:shadow-xl hover:shadow-blue-300 transition-all duration-300">
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />

        <div className="relative flex items-center gap-4">
          <div className="rounded-lg overflow-hidden w-20 h-20 flex-shrink-0 border-2 border-white/30 shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/air-conditioner-repair-service_23-2149368973.jpg"
              alt="Repair"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-base leading-tight">
              Repair & Gas Refill
            </p>
            <div className="mt-2 px-3 py-1 bg-white/20 rounded-full inline-flex items-center gap-1">
              <span className="text-white text-xs font-semibold">Book Now</span>
              <BsChevronCompactRight className="text-white" size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelector;
