import { whyToChoose } from "../Data/Data";
import Animate, { AnimateGroup } from "../utils/Animate";

const WhyChoose = () => {
  return (
    <section className="container pt-10">
      <Animate>
        <div className="text-center mb-8">
          <h2 className="section-title">
            Why Platinum Solutions for AC Service?
          </h2>
          <p className="section-subtitle mt-2">
            Experience excellence with our industry-leading AC services
          </p>
        </div>
      </Animate>

      <AnimateGroup
        stagger={0.15}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto"
      >
        {whyToChoose.map((item, index) => (
          <Animate
            key={index}
            delay={index * 0.1}
            className="bg-white rounded-xl border border-gray-100 p-5 text-center"
          >
            <div className="relative mb-4">
              <div className="relative w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="max-h-8 object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold  mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Animate>
        ))}
      </AnimateGroup>
    </section>
  );
};

export default WhyChoose;
