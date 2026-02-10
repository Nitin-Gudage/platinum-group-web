import { Animate, AnimateGroup } from "../utils/Animate";

const bookingSteps = [
  {
    id: 1,
    title: "Select Service",
    desc: "Choose required AC service from available options.",
    step: 1,
  },
  {
    id: 2,
    title: "Pick Date & Time",
    desc: "Schedule your preferred service date and time.",
    step: 2,
  },
  {
    id: 3,
    title: "Technician Visits",
    desc: "Certified technician visits your location on time.",
    step: 3,
  },
  {
    id: 4,
    title: "Pay After Service",
    desc: "Make payment only after service completion.",
    step: 4,
  },
];

const icons = [
  <svg
    key="1"
    className="w-8 h-8 text-blue-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />
  </svg>,
  <svg
    key="2"
    className="w-8 h-8 text-blue-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>,
  <svg
    key="3"
    className="w-8 h-8 text-blue-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>,
  <svg
    key="4"
    className="w-8 h-8 text-blue-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>,
];

export default function BookingSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <AnimateGroup once className="text-center mb-12">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle mt-2">
            Book your AC service in 4 simple steps
          </p>
        </AnimateGroup>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {bookingSteps.map((item, index) => (
            <Animate
              key={item.id}
              delay={index * 0.1}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                {icons[index]}
              </div>
              <span className="text-xs font-semibold text-blue-600 mb-2">
                Step {item.step}
              </span>
              <h3 className="text-base font-bold text-secondary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
