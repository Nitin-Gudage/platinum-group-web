import { ACTypesData } from "../Data/Data";
import clouds from "../assets/clouds.png";
import { AnimatedContainer, AnimatedItem } from "../utils/Animate";

const AcTypes = () => {
  return (
    <div className="container pt-5">
      {/* Heading */}
      <h1 className="heading dark:text-myGray">Types of AC We Service</h1>

      <AnimatedContainer
      
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
          <AnimatedItem
            key={index}
            className="custom-card flex flex-col items-center"
            style={{
              backgroundImage: `url(${clouds})`,
            }}
          >
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
                text-2xl font-bold p-2
                text-gray-900 dark:text-gray-100
              "
            >
              {service.title}
            </h2>
            <p className="subtext pb-5 max-w-64 text-center">{service.desc}</p>

            {/* Button */}
            <button className="btn-primary">Book Service</button>
          </AnimatedItem>
        ))}
      </AnimatedContainer>
    </div>
  );
};

export default AcTypes;
