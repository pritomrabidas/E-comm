import React from "react";
import Wearning from "../Utilities/wearning";
import LatestNews from "../Utilities/latestNews";
import FeaturedProduct from "../Utilities/featuredProduct";

const LatestFeatured = () => {
  return (
    <section className="2xl:py-24 xl:py-24 lg:py-24 md:py-20 sm:py-16 py-12">
      <div className="container px-10">
        <div className=" grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 2xl:gap-60 xl:gap-60 lg:gap-56 md:gap-40 sm:gap-20 gap-14">
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
          <h2 className="font-semibold font-Poppins 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl text-[#22262A] pt-28 pb-16 flex justify-center">
            Latest News
          </h2>
          <div className="gap-20  grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
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
          <h2 className="font-semibold font-Poppins 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl text-[#22262A] pt-28 pb-16 flex justify-center">
            FEATURED PRODUCTS
          </h2>
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full">
            <FeaturedProduct
              Imag="/feaProduct-1.png"
              Heading="Blue Swade Nike Sneakers"
            />
            <FeaturedProduct
              Imag="/feaProduct-1.png"
              Heading="Blue Swade Nike Sneakers"
            />
            <FeaturedProduct
              Imag="/feaProduct-1.png"
              Heading="Blue Swade Nike Sneakers"
            />
          </div>
        </div>
        <div className="2xl:py-24 xl:py-24 lg:py-24 md:py-20 sm:py-16 py-16 justify-center flex">
          <div className="border-2 border-[#BCDDFE] flex rounded-tr rounded-br">
            <input
              type="search"
              placeholder="Search query...."
              className="outline-none 2xl:pl-5 xl:pl-5 lg:pl-5 md:pl-4 sm:pl-3 pl-3 2xl:py-5 xl:py-5 lg:py-5 md:py-5 sm:py-4 py-3 2xl:pr-80 xl:pr-80 lg:pr-80 md:pr-72 sm:pr-64 pr-14 placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl lg:placeholder:text-xl xl:placeholder:text-xl 2xl:placeholder:text-xl  placeholder:text-secondary"
            />
            <button className="font-semibold font-Poppins 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg text-[#FFFFFF] bg-brand w-full 2xl:py-4 xl:py-4 lg:py-4 md:py-4 sm:py-3 py-3 2xl:px-7 xl:px-7 lg:px-7 md:px-6 sm:px-5 px-5 ">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestFeatured;
