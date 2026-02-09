"use client";

import { FiCheckCircle } from "react-icons/fi";
import { BsChevronCompactRight } from "react-icons/bs";

import { useSelector } from "react-redux";
import PageLoader from "../utils/PageLoader";

const BookService = () => {
  const { list, status } = useSelector((s) => s.services);

  /* Loader */
  if (status === "loading") {
    return <PageLoader />;
  }

  if (!list?.length) {
    return <p className="text-center mt-10 text-gray-600">No services found</p>;
  }

  /* Group By Service Type */
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

  return (
    <main className="space-y-16">
      {Object.entries(grouped).map(([typeId, group], groupIndex) => (
        <section key={typeId} id={`service-${typeId}`}>
          {/* Section Title */}
          <h1 className="text-2xl font-bold mb-6 border-b pb-3">
            {groupIndex + 1}. {group.name}
          </h1>

          {/* Cards */}
          <div className="flex flex-col gap-10">
            {group.items.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="rounded-xl shadow-2xl bg-white overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center gap-4 px-5 py-3 border-b">
                  <span
                    className="
                        bg-primary text-white
                        h-8 w-8 rounded-full
                        flex items-center justify-center
                        font-bold
                      "
                  >
                    {index + 1}
                  </span>

                  <h2 className="text-lg font-semibold">{item.name}</h2>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                  {/* Features */}
                  <ul className="space-y-3 md:col-span-2">
                    {(item.service_features || []).map((d, i) => (
                      <li key={`${d.id}-${i}`} className="flex gap-4">
                        <FiCheckCircle className="text-green-500 mt-1" />

                        <div>
                          <p className="font-semibold">{d.title}</p>

                          <p className="text-sm text-gray-600">{d.subtext}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Right Panel */}
                  <div className="flex flex-col gap-3">
                    {/* Image (16:9) */}
                    <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Price + Button */}
                    <div className="flex items-center justify-around bg-primary/5 rounded-lg py-2">
                      {item.price && (
                        <span className="font-bold text-secondary">
                          ₹ {item.price}
                        </span>
                      )}

                      <button
                        className="
                            btn-secondary
                            flex items-center gap-1
                            px-4 py-2 text-sm
                          "
                      >
                        Book Now
                        <BsChevronCompactRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default BookService;
