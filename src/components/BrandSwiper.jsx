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
          320: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 4.5,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
          1536: {
            slidesPerView: 7,
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
                className="bg-white w-full rounded-2xl h-14 md:h-24 object-contain p-3 md:p-6 md:my-8"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
