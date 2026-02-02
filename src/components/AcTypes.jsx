import { ACTypesData } from "../Data/Data";

const AcTypes = () => {
  return (
    <div className="container pt-5">
      {/* Heading */}
      <h1 className="heading dark:text-myGray">Types of AC We Service</h1>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-6
          mx-auto
          py-10
        "
      >
        {ACTypesData.map((service, index) => (
          <div key={index} className="custom-card flex flex-col items-center">
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              onLoad={(e) => e.target.classList.add("loaded")}
              className="
                max-h-32
                rounded-lg
                mx-auto
                mb-4
                object-contain

                opacity-0
                transition-opacity
                duration-500

                [&.loaded]:opacity-100
              "
            />

            {/* Title */}
            <h2
              className="
                text-2xl font-bold mb-4
                text-gray-900 dark:text-gray-100
              "
            >
              {service.title}
            </h2>

            {/* Button */}
            <button className="btn-primary">Book Service</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcTypes;
