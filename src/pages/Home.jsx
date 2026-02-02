import React from "react";
import CustomSwiper from "../utils/CustomSwiper";
import AcTypes from "../components/AcTypes";
import OurServices from "../components/OurServices";
import BrandSwiper from "../components/BrandSwiper";
import Review from "../components/Review";
import WhyChoose from "../components/WhyChoose";

const Home = () => {
  return (
    <div className="bg-[#EEF5FF] dark:bg-secondary flex flex-col items-center gap-5">
      <CustomSwiper />
      <AcTypes />
      <OurServices />
      <BrandSwiper />
      <WhyChoose />
      <Review />
    </div>
  );
};

export default Home;
