import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { brandImages } from "../Data/Data";

const BrandSwiper = () => {
  return (
    <div className="container pt-5">
      <h1 className="heading dark:text-white">Our Trusted Brands</h1>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className=""
      >
        {brandImages.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center items-center">
              <img
                src={img}
                alt="Brand"
                loading="lazy"
                className="bg-white w-full rounded-2xl max-h-24 object-contain p-6 my-8"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
