"use client";

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { BsChevronCompactRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import PageLoader from "../utils/PageLoader";
import Animate from "../utils/Animate";
import Modal from "../utils/Modal";
import ConfirmBooking from "./ConfirmBooking";

const BookService = () => {
  const { list, status } = useSelector((s) => s.services);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (status === "loading") return <PageLoader />;
  if (!list?.length)
    return <p className="text-center mt-10 text-gray-600">No services found</p>;

  const grouped = list.reduce((acc, item) => {
    const typeId = item.service_types?.id || "other";
    if (!acc[typeId])
      acc[typeId] = { name: item.service_types?.name || "Other", items: [] };
    acc[typeId].items.push(item);
    return acc;
  }, {});

  const handleBookNow = (item) => {
    setSelectedService(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <main className="space-y-10">
      {Object.entries(grouped).map(([typeId, group], groupIndex) => (
        <section
          key={typeId}
          id={`service-${typeId}`}
          className="bg-white rounded-3xl shadow-lg p-6 md:p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
              {groupIndex + 1}
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              {group.name}
            </h1>
          </div>

          <div className="space-y-6">
            {group.items.map((item, index) => (
              <Animate
                key={`${item.id}-${index}`}
                delay={index * 0.1}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </h2>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {(item.service_features || []).map((d, i) => (
                          <li key={`${d.id}-${i}`} className="flex gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <FiCheckCircle className="text-green-500 w-3.5 h-3.5" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                {d.title}
                              </p>
                              <p className="hidden md:block text-xs text-gray-500">
                                {d.subtext}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:w-80 flex-shrink-0 relative">
                      <div className="rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full aspect-[4/3] object-cover"
                        />
                        {item.price && (
                          <div className="absolute top-[-20px] -right-6 w-14 h-14 rounded-full bg-blue-600 flex flex-col items-center justify-center shadow-lg z-10">
                            <span className="text-[8px] text-white font-medium">
                              Starting
                            </span>
                            <span className="text-white font-bold text-sm">
                              ₹{item.price}
                            </span>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => handleBookNow(item)}
                        className="w-full mt-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 text-sm"
                      >
                        Book Now <BsChevronCompactRight />
                      </button>
                    </div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </section>
      ))}

      {/* Booking Modal */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Book Service</h2>
          <ConfirmBooking
            serviceId={selectedService?.id}
            serviceItem={selectedService}
            onClose={handleCloseModal}
          />
        </div>
      </Modal>
    </main>
  );
};

export default BookService;
