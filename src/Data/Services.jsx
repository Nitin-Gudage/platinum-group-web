import { useState } from "react";
import { PiStarDuotone } from "react-icons/pi";
import { BsCheck2Circle } from "react-icons/bs";
import { LuChevronRight } from "react-icons/lu";

export default function Services() {
  const [active, setActive] = useState(1);
 

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-sky-100 to-white rounded-xl p-4 shadow">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">AC</h1>

        <p className="text-gray-600 text-sm mt-1">
          Get #1 AC service & repair experts in Solapur
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2 text-sm">
          <div className="flex items-center text-blue-600 font-medium">
            <PiStarDuotone size={16} fill="currentColor" />
            <span className="ml-1">4.7</span>
          </div>

          <span className="text-gray-500">(11.5M bookings)</span>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg p-3 shadow-sm mb-4 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <BsCheck2Circle className="text-green-500" size={16} />
          <span>100+ technicians in your area</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <BsCheck2Circle className="text-green-500" size={16} />
          <span>Usually arrives within 60 mins</span>
        </div>
      </div>

      {/* Services */}
      <div className="space-y-3">
        <h2 className="font-semibold text-gray-800">Select a service</h2>

        {/* Super Saver */}
        
        {/* Service */}
        <div className="flex flex-col space-y-2">
          {services.map((item, index) => (
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2933/2933914.png"
                alt="AC"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Repair */}
        <div className="bg-white p-3 rounded-lg shadow cursor-pointer">
          <img
            src="https://img.freepik.com/free-photo/air-conditioner-repair-service_23-2149368973.jpg"
            alt="Repair"
            className="w-full h-40 object-cover rounded-lg mb-2"
          />

          <p className="font-medium text-center">Repair & gas refill</p>
        </div>
      </div>
    </div>
  );
}
