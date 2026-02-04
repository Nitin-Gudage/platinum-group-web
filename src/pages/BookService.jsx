import { serviceByType, serviceImages } from "../Data/Data";
import { FiCheckCircle } from "react-icons/fi";
import { BsChevronCompactRight } from "react-icons/bs";
import { AnimatedContainer, AnimatedItem } from "../utils/Animate";
import bgimage from "../assets/cloudsbg.png";

const BookService = () => {
  const serviceId = 1;

  const selectedService = serviceByType.find((item) => item.id === serviceId);

  const selectedImages = serviceImages.find((item) => item.id === serviceId);

  const images = selectedImages?.images || [];

  if (!selectedService) {
    return <p className="text-center mt-10">Service not found</p>;
  }

  return (
    <div
      className="bg-fixed bg-repeat bg-center bg-auto"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <ul className="container mx-auto flex flex-col gap-6 py-5 list-none p-0 ">
        {selectedService.service.map((item, index) => (
          <AnimatedContainer hover={false} key={item.id}>
            <AnimatedItem>
              <li key={item.id}>
                {/* Card */}
                <div
                  className="
              rounded-lg overflow-hidden
              bg-cover bg-top-right
              shadow-2xl
              dark:shadow-[0_10px_30px_rgba(255,255,255,0.4)]"
                  style={{
                    backgroundImage: images[index]
                      ? `url(${images[index]})`
                      : "none",
                  }}
                >
                  {/* Header */}
                  <div className="relative rounded-lg overflow-hidden">
                    {/* Glass BG (Blur → Clear) */}
                    <div
                      className="
      absolute inset-0

      backdrop-blur-xl
      bg-white/25
      dark:bg-white/10

      border border-white/30

      [mask-image:linear-gradient(to_right,black,transparent)]
    "
                    />

                    {/* Content (Sharp) */}
                    <div className="relative z-10 flex items-center gap-4 px-5 py-2">
                      <span
                        className="
        bg-primary
        flex items-center justify-center
        h-10 w-10
        rounded-full
        font-bold text-white
      "
                      >
                        {index + 1}
                      </span>

                      <h2 className="subheading">{item.name}</h2>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
                    {/* Feature List */}
                    <ul className="space-y-2">
                      {item.data.map((d) => (
                        <li
                          key={d.id}
                          className="flex items-start gap-5 text-gray-900 "
                        >
                          <FiCheckCircle className="text-[#08CB00] mt-2 flex-shrink-0" />
                          <div>
                            <p className="subheading">{d.title}</p>
                            <p className="subtext">{d.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {/* Price + Button */}
                    <div className="self-end justify-self-end relative rounded-lg overflow-hidden">
                      {/* Glass BG */}
                      <div
                        className="
                    absolute inset-0
                    backdrop-blur-xl
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                    dark:via-white/10
                    border border-white/30 rounded"
                      />
                      {/* Content */}
                      <div
                        className="
                  relative z-10
                  flex items-center gap-5
                  px-5 py-2"
                      >
                        {item.price && (
                          <span className="text-secondary font-bold">
                            Starting at: ₹ {item.price}
                          </span>
                        )}
                        <button
                          className="
                    btn-secondary
                    bg-yellow-500
                    text-secondary
                    flex items-center gap-2"
                        >
                          Book Now <BsChevronCompactRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </AnimatedItem>
          </AnimatedContainer>
        ))}
      </ul>
    </div>
  );
};

export default BookService;
