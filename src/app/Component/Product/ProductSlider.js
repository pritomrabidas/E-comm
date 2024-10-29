"use client";
import ProductSlide from "product-slide";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const ProductSlider = () => {
  const [selectcolor, setSelectcolor] = useState("");
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
      <div className="container mx-auto flex p-10">
        <div className="w-full flex ">
          <div className="w-1/2">
            <div style={{ width: "500px" }}>
              <ProductSlide settings={settings} api={API.images} />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="font-Raleway font-medium text-2xl text-secondary">
              Nike Airmax 270 React
            </h3>
            <div className="flex pt-5 gap-5 border-b-2 border-[#C1C8CE] pb-5">
              <ul className="flex gap-1 text-[#FFC600] ">
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
              <p className="font-normal font-Raleway text-base text-[#C1C8CE]">
                0 reviews
              </p>
              <p className="font-normal font-Raleway text-base text-[#33A0FF]">
                Submit a review
              </p>
            </div>
            <ul className="flex pt-6 gap-2.5 items-center">
              <li className="font-bold font-Poppins text-2xl text-brand">
                $299,43
              </li>
              <li className="font-normal font-Poppins text-base text-[#9098B1]">
                $534,33
              </li>
              <li className="font-normal font-Poppins text-lg text-[#FB7181]">
                24% Off
              </li>
            </ul>
            <div className="flex pt-4 font-normal font-Poppins text-secondary text-base  border-b-2 border-[#C1C8CE] pb-5">
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
