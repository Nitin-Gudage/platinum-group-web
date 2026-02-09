import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { brandImages } from "../Data/Data";

const BrandSwiper = () => {
  return (
    <section className="container pt-5">
      {/* Heading */}
      <h1 className="heading dark:text-white text-center mb-6">
        Our Trusted Brands
      </h1>

      <Swiper
        modules={[Autoplay]}
        loop
        grabCursor
        centeredSlides={false}
        autoplay={{
          delay: 2000, // smoother than 0
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
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
            <div
              className="
                flex justify-center items-center
                h-24 md:h-32
                bg-white rounded-lg
              "
            >
              <img
                src={img}
                alt="Brand logo"
                loading="lazy"
                decoding="async"
                className="
                  
                  w-full
                  object-contain
                  p-3 md:p-5
                "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandSwiper;
