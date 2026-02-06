"use client";

import { serviceByType, serviceImages } from "../Data/Data";

import { FiCheckCircle } from "react-icons/fi";
import { BsChevronCompactRight, BsCheck2Circle } from "react-icons/bs";

import Animate from "../utils/Animate";

import bgimage from "../assets/cloudsbg.png";

const SERVICE_ID = 1;

const BookService = () => {
  /* Get Data */
  const selectedService = serviceByType.find((item) => item.id === SERVICE_ID);

  const images =
    serviceImages.find((item) => item.id === SERVICE_ID)?.images || [];

  const services = [
    { name: "super Saver Package", image: "" },
    { name: "service", image: "" },
    { name: "Repair & gas refill", image: "" },
    { name: "Installation / Uninstallation", image: "" },
  ];

  if (!selectedService) {
    return <p className="text-center mt-10">Service not found</p>;
  }

  return (
    <main className="container grid grid-cols-1 md:grid-cols-12 w-full gap-10 mt-20">
      {/* LEFT */}
      <Animate
        type="fade"
        className="h-max bg-white rounded-xl p-4 col-span-12 md:col-span-3 w-full"
      >
        {/* Header */}
        <div className="mb-4">
          <h1 className="font-bold text-2xl">AC</h1>

          <p className="text-gray-600 text-sm mt-1">
            Get #1 AC service & repair experts
          </p>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg p-3 shadow-sm mb-4 space-y-2">
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
        <div className="space-y-3 border p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800 border-b border-gray-300 pb-2">
            Select a service
          </h2>

          {/* Service List */}
          <div className="grid grid-cols-2 md:grid-cols-1 space-y-2">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow cursor-pointer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2933/2933914.png"
                  alt="AC"
                  className="w-12 h-12 object-contain border border-gray-300 p-2 rounded-sm"
                />

                <div className="w-full flex items-center justify-between">
                  <p className="font-medium">{item.name}</p>
                  <BsChevronCompactRight />
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
      </Animate>

      {/* RIGHT */}
      <section className="col-span-9 w-full">
        <Animate stagger className="flex flex-col gap-10">
          {selectedService.service.map((item, index) => (
            <Animate key={item.id} type="fade">
              {/* Card */}
              <div
                className="rounded-lg bg-cover bg-top-right shadow-2xl bg-white"
                // style={{
                //   backgroundImage: images[index]
                //     ? `url(${images[index]})`
                //     : "none",
                // }}
              >
                {/* Header */}
                <div className="relative overflow-hidden">
                  {/* Border */}
                  <div
                    className="
                      absolute bottom-0 left-0 right-0
                      h-[1px] max-w-[80%]
                      bg-gradient-to-r
                      from-primary/30
                      via-primary/30
                      to-transparent
                    "
                  />

                  {/* Content */}
                  <div className="flex items-center gap-4 px-5 py-3">
                    <span
                      className="
                        bg-primary
                        flex items-center justify-center
                        sm:h-8 w-8
                        rounded-full
                        font-bold text-white
                      "
                    >
                      {index + 1}
                    </span>

                    <h2 className="subheading sm:text-lg md:xl">{item.name}</h2>
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 items-center h-full md:grid-cols-2 gap-4 p-5">
                  {/* Features */}
                  <ul className="space-y-3">
                    {item.data.map((d) => (
                      <li
                        key={d.id}
                        className="flex items-start gap-4 text-gray-900"
                      >
                        <FiCheckCircle className="text-[#08CB00] mt-1 shrink-0" />

                        <div>
                          <p className="subheading">{d.title}</p>
                          <p className="subtext ">{d.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="relative flex flex-col rounded-lg border-8 border-white justify-center ">
                    {/* Image Wrapper */}
                    <div className="flex items-center justify-center w-full h-full">
                      <img
                        src={images[index]}
                        alt=""
                        className="rounded-xl max-w-full max-h-full object-cover"
                      />
                    </div>
                    <div
                      className=" absolute bottom-0
                        bg-primary/40 justify-center object-cover 
                        flex items-center gap-5
                        px-5 py-3 w-full
                      "
                    >
                      {item.price && (
                        <span className="text-secondary font-bold">
                          Starting at: ₹ {item.price}
                        </span>
                      )}

                      <button className="btn-secondary flex items-center gap-1">
                        Book Now
                        <BsChevronCompactRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          ))}
        </Animate>
      </section>
    </main>
  );
};

export default BookService;
