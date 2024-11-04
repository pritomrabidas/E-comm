"use client";
import ProductSlide from "product-slide";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const ProductSlider = () => {
  // const [selectcolor, setSelectcolor] = useState("");
  const API = {
    images: [
      "https://i.imgur.com/QkIa5tT.jpeg",
      "https://i.imgur.com/jb5Yu0h.jpeg",
      "https://i.imgur.com/UlxxXyG.jpeg",
    ],
  };
  const settings = {
    direction: "horizontal", // or "vertical"
    zoom: true, // or false
  };
  return (
    <section>
      <div className="container mx-auto flex ">
        <div className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col ">
          <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full p-10 ">
            <div className="w-[80%] mx-auto sm:mx-auto md:mx-0 lg:mx-0">
              <ProductSlide settings={settings} api={API.images} />
            </div>
          </div>
          <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full p-10">
            <h3 className="font-Raleway font-medium text-secondary 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-base">
              Nike Airmax 270 React
            </h3>
            <div className="flex pt-5 gap-5 2xl:border-b-2 xl:border-b-2 lg:border-b-2 md:border-b sm:border-b border-b border-[#C1C8CE] pb-5">
              <ul className="flex gap-1 text-[#FFC600] 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li className="text-[#C1C8CE]">
                  <FaStar />
                </li>
              </ul>
              <p className="font-normal font-Raleway 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs text-xs text-[#C1C8CE]">
                0 reviews
              </p>
              <p className="font-normal font-Raleway 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs text-xs text-[#33A0FF]">
                Submit a review
              </p>
            </div>
            <ul className="flex pt-6 gap-2.5 items-center">
              <li className="font-bold font-Poppins 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg sm:text-base text-sm text-brand">
                $299,43
              </li>
              <li className="font-normal font-Poppins 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs text-xs text-[#9098B1]">
                $534,33
              </li>
              <li className="font-normal font-Poppins 2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-base text-sm text-[#FB7181]">
                24% Off
              </li>
            </ul>
            <div className="flex pt-4 font-normal font-Poppins text-secondary 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs text-xs  2xl:border-b-2 xl:border-b-2 lg:border-b-2 md:border-b sm:border-b border-b border-[#C1C8CE] pb-5">
              <ul className="pr-20">
                <li className="pb-4">Availability :</li>
                <li>Category: </li>
              </ul>
              <ul>
                <li className="pb-4">In Stock </li>
                <li>Accessories</li>
              </ul>
            </div>
            <div className="flex pt-5 gap-6">
              <h1 className="font-normal font-Poppins text-base text-secondary">
                Select Color:
              </h1>
              <div className="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
