import React from "react";
import Wearning from "../Utilities/wearning";
import LatestNews from "../Utilities/latestNews";
import FeaturedProduct from "../Utilities/featuredProduct";

const LatestFeatured = () => {
  return (
    <section className="py-24">
      <div className="container px-10">
        <div className="w-full flex gap-60">
          <Wearning
            Imag="/wearning-1.png"
            heading="FREE SHIPPING"
            Para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, iste
        impedit."
          />
          <Wearning
            Imag="/wearning-1.png"
            heading="FREE SHIPPING"
            Para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, iste
        impedit."
          />
          <Wearning
            Imag="/wearning-1.png"
            heading="FREE SHIPPING"
            Para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, iste
        impedit."
          />
        </div>
        <div className="w-full">
          <h2 className="font-semibold font-Poppins text-3xl text-[#22262A] pt-28 pb-16 flex justify-center">
            Latest News
          </h2>
          <div className="gap-20 flex">
            <LatestNews
              Imag="/latest-1.png"
              date="01 Jan, 2015"
              Heading="Fashion Industry"
              Paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vitae?"
            />
            <LatestNews
              Imag="/latest-1.png"
              date="01 Jan, 2015"
              Heading="Fashion Industry"
              Paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vitae?"
            />
            <LatestNews
              Imag="/latest-1.png"
              date="01 Jan, 2015"
              Heading="Fashion Industry"
              Paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vitae?"
            />
          </div>
        </div>
        <div className="w-full">
        <h2 className="font-semibold font-Poppins text-3xl text-[#22262A] pt-28 pb-16 flex justify-center">
        FEATURED PRODUCTS
          </h2>
          <div className="flex">
            <FeaturedProduct Imag="/feaProduct-1.png" Heading="Blue Swade Nike Sneakers"/>
            <FeaturedProduct Imag="/feaProduct-1.png" Heading="Blue Swade Nike Sneakers"/>
            <FeaturedProduct Imag="/feaProduct-1.png" Heading="Blue Swade Nike Sneakers"/>
          </div>
        </div>
        <div className="py-24 justify-center flex">
          <div className="border-2 border-[#BCDDFE] flex rounded-tr rounded-br">
            <input type="search" placeholder="Search query...." className="outline-none pl-5 py-5 pr-80 placeholder:text-xl placeholder:text-secondary" />
            <button className="font-semibold font-Poppins text-xl text-[#FFFFFF] bg-brand w-full py-4 px-7 ">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestFeatured;
