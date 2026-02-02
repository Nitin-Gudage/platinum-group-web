import { useEffect, useState } from "react";
import { heroSwiper } from "../Data/Data";
import SwiperCard from "../components/SwiperCard";

const CustomSwiper = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSwiper.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {heroSwiper.map((item, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <SwiperCard data={item} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 sm:right-6 flex gap-2">
        {heroSwiper.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-1.5 sm:w-4 sm:h-1.5
              rounded
              transition
              ${
                index === i
                  ? "bg-primary scale-125"
                  : "bg-white/80 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSwiper;
