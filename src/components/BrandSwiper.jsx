import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { brandImages } from "../Data/Data";

const BrandSwiper = () => (
  <Swiper
    modules={[Autoplay]}
    loop
    grabCursor
    centeredSlides={false}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    speed={1000}
    slidesPerView={2}
    spaceBetween={20}
    breakpoints={{
      320: { slidesPerView: 2.5 },
      480: { slidesPerView: 3 },
      640: { slidesPerView: 3.5 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
      1280: { slidesPerView: 6 },
      1536: { slidesPerView: 7 },
    }}
    className="w-full"
  >
    {brandImages.map((img, i) => (
      <SwiperSlide key={i}>
        <div className="flex justify-center items-center h-16 md:h-20 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <img
            src={img}
            alt="Brand logo"
            loading="lazy"
            decoding="async"
            className="w-full object-contain p-3 md:p-4  transition-all duration-300"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default BrandSwiper;
