"use client";

import { serviceByType, serviceImages } from "../Data/Data";

import { FiCheckCircle } from "react-icons/fi";
import { BsChevronCompactRight, BsCheck2Circle } from "react-icons/bs";

import Animate from "../utils/Animate";

import bgimage from "../assets/cloudsbg.png";
import ServiceSelector from "./ServiceSelector";

const SERVICE_ID = 1;

const BookService = () => {
  /* Get Data */
  const selectedService = serviceByType.find((item) => item.id === SERVICE_ID);

  const images =
    serviceImages.find((item) => item.id === SERVICE_ID)?.images || [];

  if (!selectedService) {
    return <p className="text-center mt-10">Service not found</p>;
  }

  return (
    <main className="container grid grid-cols-1 md:grid-cols-12 w-full gap-y-10 sm:gap-10 mt-20">
      {/* LEFT */}
      <ServiceSelector />
      {/* RIGHT */}
      <section className="col-span-12 sm:col-span-7 md:col-span-9 w-full">
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
