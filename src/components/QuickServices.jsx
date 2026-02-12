import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getMeta } from "../store/features/metaSlice";
import { getServices, setActiveAc } from "../store/features/servicesSlice";

import InlineSyncLoader from "../utils/PageLoader";
import Animate from "../utils/Animate";
import Modal from "../utils/Modal";
import ConfirmBooking from "./ConfirmBooking";

import { FiCheckCircle } from "react-icons/fi";
import { BsChevronCompactRight, BsSnow } from "react-icons/bs";

const QuickServices = ({ desktopItems = 2 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list, status, activeAc, activeServiceType } = useSelector(
    (s) => s.services,
  );

  const { acTypes } = useSelector((s) => s.meta);

  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);

  /* ================= INIT LOAD ================= */

  useEffect(() => {
    if (!initialized) {
      dispatch(setActiveAc(1));
      dispatch(getServices(1));
      dispatch(getMeta());
      setInitialized(true);
    }
  }, [dispatch, initialized]);

  /* ================= AC NAME ================= */

  const acName = useMemo(() => {
    return acTypes.find((a) => a.id === activeAc)?.name || "AC Services";
  }, [acTypes, activeAc]);

  /* ================= FIRST SERVICES ONLY ================= */

  const displayedServices = useMemo(() => {
    if (!list || list.length === 0) return [];

    return list.slice(0, desktopItems);
  }, [list, desktopItems]);

  /* ================= HANDLERS ================= */

  const handleBookNow = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  /* ================= LOADING ================= */

  if (status === "loading") {
    return <InlineSyncLoader />;
  }

  /* ================= UI ================= */

  return (
    <div className="container p-3">
      {/* ================= HEADER ================= */}

      <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-4 rounded-xl mb-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <BsSnow className="text-white" size={20} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">{acName}</h1>
            <p className="text-blue-100 text-xs">{activeServiceType}</p>
          </div>
        </div>
      </div>

      {/* ================= GRID ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 space-y-5 md:space-y-0">
        {displayedServices.map((service, index) => (
          <Animate key={service.id} delay={index * 0.08}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
              {/* Image */}
              <div className="relative overflow-hidden p-3">
                <img
                  src={service.image}
                  alt={`${service.name} AC Service`}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="p-3">
                <h2 className="font-bold text-gray-800 line-clamp-2 mb-2">
                  {service.name}
                </h2>

                {/* Features */}
                <ul className="space-y-1 mb-3">
                  {service.service_features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <FiCheckCircle className="text-green-500 w-2 h-2" />
                      </div>

                      <p className="text-[14px] text-gray-600 line-clamp-1">
                        {feature.title}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  {service.price && (
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{service.price}
                    </span>
                  )}

                  <button
                    onClick={() => handleBookNow(service)}
                    className="btn-primary flex items-center gap-1.5"
                    aria-label={`Inquire about ${service.name}`}
                  >
                    Inquire
                    <BsChevronCompactRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </Animate>
        ))}
      </div>

      {/* ================= VIEW ALL ================= */}

      <button
        onClick={() => navigate("/services")}
        className="w-full mt-4 bg-white text-blue-600 py-3 rounded-xl font-medium text-sm border-2 border-blue-600 flex items-center justify-center gap-2 hover:bg-blue-50 transition-all"
        aria-label="View all AC services"
      >
        View All Services
        <BsChevronCompactRight size={16} />
      </button>

      {/* ================= MODAL ================= */}

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="max-w-full mx-auto">
          <ConfirmBooking
            serviceId={selectedService?.id}
            serviceItem={selectedService}
            onClose={handleCloseModal}
          />
        </div>
      </Modal>
    </div>
  );
};

export default QuickServices;
