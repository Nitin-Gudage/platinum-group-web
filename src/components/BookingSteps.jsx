import { AnimatedContainer, AnimatedItem } from "../utils/Animate";
import Avatar from "../utils/Avatar";
// 👆 Adjust path if needed

const bookingSteps = [
  {
    id: 1,
    title: "Select Service",
    icon: "/icons/select-service.png",
    description: "Choose required AC service from available options.",
    step: 1,
  },
  {
    id: 2,
    title: "Pick Date & Time",
    icon: "/icons/pick-date-time.png",
    description: "Schedule your preferred service date and time.",
    step: 2,
  },
  {
    id: 3,
    title: "Technician Visits",
    icon: "/icons/technician-visit.png",
    description: "Certified technician visits your location on time.",
    step: 3,
  },
  {
    id: 4,
    title: "Pay After Service",
    icon: "/icons/pay-after-service.png",
    description: "Make payment only after service completion.",
    step: 4,
  },
];

export default function BookingSteps() {
  return (
    <section className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          How It Works
        </h2>

        {/* Steps Grid */}
        <AnimatedContainer
          once
          hover={false}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {bookingSteps.map((step) => (
            <AnimatedItem
              key={step.id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                p-6
                text-center
                cursor-pointer
                hover:shadow-xl
                transition-shadow
              "
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50">
                <Avatar src={step.icon} alt={step.title} />
              </div>

              {/* Step */}
              <span className="inline-block mb-2 text-sm font-semibold text-blue-600">
                Step {step.step}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
