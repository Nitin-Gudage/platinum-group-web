"use client";

import { useState } from "react";
import { FiCheckCircle, FiInfo } from "react-icons/fi";
import { Tooltip } from "@mui/material";
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

  /* ================= LOADING ================= */

  if (status === "loading") return <PageLoader />;

  if (!list?.length) {
    return <p className="text-center mt-10 text-gray-600">No services found</p>;
  }

  /* ================= GROUP SERVICES ================= */

  const grouped = list.reduce((acc, item) => {
    const typeId = item.service_types?.id || "other";

    if (!acc[typeId]) {
      acc[typeId] = {
        name: item.service_types?.name || "Other",
        items: [],
      };
    }

    acc[typeId].items.push(item);

    return acc;
  }, {});

  /* ================= HANDLERS ================= */

  const handleBookNow = (item) => {
    setSelectedService(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  /* ================= UI ================= */

  return (
    <main className="space-y-6">
      {Object.entries(grouped).map(([typeId, group], groupIndex) => (
        <section
          key={typeId}
          id={`service-${typeId}`}
          className="bg-white rounded-3xl shadow-md p-6 md:p-8 scroll-mt-[200px]"
        >
          {/* HEADER */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="
                  w-12 h-12 rounded-2xl
                  bg-gradient-to-br from-blue-500 to-blue-700
                  flex items-center justify-center
                  text-white font-bold text-xl
                "
            >
              {groupIndex + 1}
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              {group.name}
            </h1>
          </div>

          {/* SERVICES */}
          <div className="space-y-6">
            {group.items.map((item, index) => (
              <Animate key={`${item.id}-${index}`} delay={index * 0.1}>
                <div
                  className="
                      bg-gray-50 rounded-2xl
                      p-5 md:p-6
                      border border-gray-100
                      shadow-sm
                      hover:shadow-md
                      transition-shadow
                    "
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* LEFT */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="
                              w-10 h-10 rounded-xl
                              bg-blue-100
                              flex items-center justify-center
                              text-blue-600 font-bold
                            "
                        >
                          {index + 1}
                        </div>

                        <h2 className="text-lg font-bold text-gray-800">
                          {item.name}
                        </h2>
                      </div>

                      {/* FEATURES */}
                      <ul className="space-y-3">
                        {(item.service_features || []).map((d, i) => (
                          <li key={`${d.id}-${i}`} className="flex gap-3">
                            <div
                              className="
                                  w-5 h-5 rounded-full
                                  bg-green-100
                                  flex items-center justify-center
                                  mt-0.5
                                "
                            >
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

                    {/* RIGHT */}
                    <div className="lg:w-80 flex-shrink-0">
                      {/* IMAGE */}
                      <div className="rounded-2xl overflow-hidden shadow mb-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          fetchPriority={index < 2 ? "high" : "auto"}
                          className="w-full aspect-[4/3] object-cover"
                        />
                      </div>

                      {/* PRICE + BUTTON */}
                      <div
                        className="
                            bg-white rounded-xl
                            p-3
                            flex items-center justify-between
                            border
                          "
                      >
                        {/* PRICE */}
                        {item.price && (
                          <Tooltip
                            title="Final price may vary based on inspection"
                            placement="top"
                            arrow
                          >
                            <div className="flex flex-col cursor-pointer">
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                Starting from
                                <FiInfo size={12} />
                              </span>

                              <span className="text-lg font-bold text-blue-600 ">
                                ₹{item.price}
                              </span>
                            </div>
                          </Tooltip>
                        )}

                        {/* BUTTON */}
                        <button
                          onClick={() => handleBookNow(item)}
                          className="
                              bg-blue-600 text-white
                              py-2 px-4
                              rounded-lg
                              text-sm font-medium
                              hover:bg-blue-700
                              transition
                              flex items-center gap-1
                            "
                        >
                          Book Now
                          <BsChevronCompactRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </section>
      ))}

      {/* MODAL */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ConfirmBooking
          serviceId={selectedService?.id}
          serviceItem={selectedService}
          onClose={handleCloseModal}
        />
      </Modal>
    </main>
  );
};

export default BookService;
