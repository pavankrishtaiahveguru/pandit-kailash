import React from "react";
import Hero from "@/components/home/Hero";
import PromotionalVideos from "@/components/home/PromotionalVideos";
import GuidanceCategories from "@/components/home/GuidanceCategories";
import Services from "@/components/home/Services";
import MeetAstrologer from "@/components/home/MeetAstrologer";
import Pricing from "@/components/home/Pricing";
import HowItWorks from "@/components/home/HowItWorks";
import Reviews from "@/components/home/Reviews";
import Locations from "@/components/home/Locations";
import FAQ from "@/components/home/FAQ";


const page = () => {
  return (
    <>
      <Hero />
      <PromotionalVideos />
      {/* <GuidanceCategories /> */}
      <Services />
      <MeetAstrologer />
      <Pricing />
      <HowItWorks />
      <Reviews />
      <Locations />
      <FAQ />
    </>
  );
};

export default page;
