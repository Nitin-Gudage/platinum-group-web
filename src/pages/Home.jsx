import React from "react";
import AcTypes from "../components/AcTypes";
import OurServices from "../components/OurServices";
import BrandSwiper from "../components/BrandSwiper";
import Review from "../components/Review";
import WhyChoose from "../components/WhyChoose";
import HeroSwiper from "../components/HeroSwiper";

const Home = () => {
  return (
    <div className="bg-transparent flex flex-col items-center gap-5">
      <HeroSwiper />
      <AcTypes />
      <OurServices />
      <BrandSwiper />
      <WhyChoose />
      <Review />
    </div>
  );
};

export default Home;
