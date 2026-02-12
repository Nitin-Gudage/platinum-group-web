import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { brandImages } from "../Data/Data";

const BrandSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop={true}
      freeMode={{
        enabled: true,
        momentum: false, // ✅ Correct way
      }}
      slidesPerView="auto"
      spaceBetween={20}
      grabCursor={false}
      speed={3000} // 🔥 Smaller = Faster
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      allowTouchMove={false}
      className="w-full"
    >
      {/* Duplicate for smooth loop */}
      {[...brandImages, ...brandImages].map((img, i) => (
        <SwiperSlide key={i} className="!w-auto">
          <div className="flex justify-center items-center h-16 md:h-20 w-28 md:w-36 bg-white rounded-xl border border-gray-100 shadow-sm">
            <img
              src={img}
              alt="AC service brand partner logo"
              loading="lazy"
              decoding="async"
              className="w-full object-contain p-3 md:p-4"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandSwiper;
