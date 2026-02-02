import React from "react";
import { serviceByType } from "../Data/Data";

const BookService = () => {
  return (
    <div>
      <h1 className="heading">Book Our Service</h1>
      <div className="p-10">
        {serviceByType.map((serv) => (
          <div key={serv.id} className="service-card">
            <h2 className="text-xl font-bold">{serv.type}</h2>
            <ol className="service-list">
              {serv.service.map((item, index) => (
                <li key={item.id} className="text-md mb-2 font-semibold">
                  {item.name}
                  {item.price && (
                    <span className="text-sm text-red-600 font-bold ml-2">
                      - ${item.price}
                    </span>
                  )}
                  {item.data.map((d, index) => (
                    <li key={d.id} className="text-gray-500 ml-4 list-disc">
                      {d.desc}
                    </li>
                  ))}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookService;
