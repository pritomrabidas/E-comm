"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
const Product = () => {
  return (
    <div className="m-auto flex justify-center w-full 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-3 sm:pb-2 pb-0">
      <div className="bg-[#F6F7F8] shadow">
        <div className="">
          <div className="relative  group">
            <Image
              width={100}
              height={100}
              src="/bages-1.jpg"
              alt="bages"
              className="rounded 2xl:w-72 xl:w-72 lg:w-64 md:w-60 sm:w-48 w-44 2xl:h-64 xl:h-64 lg:h-60 md:h-48 sm:h-32 h-28"
            />
            <div className="absolute top-0 w-full h-full group-[]:scale-90 cursor-pointer">
              <div className="hover:bg-[#FFFFFF] w-full h-full rounded-md hover:duration-1000 delat-100 justify-center flex items-center">
                <ul className="flex 2xl:gap-x-2.5 xl:gap-x-2.5 lg:gap-x-2.5 md:gap-2 sm:gap-x-1.5 gap-1 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-xl sm:text-base text-sm  text-[#33A0FF] ">
                  <li className="border rounded-full border-[#BsCart] 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2">
                    <FaRegHeart />
                  </li>
                  <li className="border rounded-full border-[#BsCart] 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2">
                    <BsCart />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="2xl:py-5 xl:py-5 lg:py-5 md:py-4 sm:py-3 py-2 2xl:px-10 xl:px-10 lg:px-9 md:px-8 sm:px-5 px-2 ">
            <h4 className="2xl:text-lg xl:text-lg lg:text-lg md:text-[8px] sm:text-[6px] text-[5px] font-Poppins font-bold text-[#223263] 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-1/2 w-1/2  mx-auto text-center">
              Nike Air Max 270 React
            </h4>
            <ul className="flex 2xl:gap-3.5 xl:gap-3.5 lg:gap-3 md:gap-3 sm:gap-1.5 gap-1 text-[#FFC600] 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-[9px] text-[8px] justify-center py-1">
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
            <ul className="flex gap-2 2xl:text-sm xl:text-sm lg:text-sm md:text-[10px] sm:text-[7px] text-[6px] justify-center py-1 items-center">
              <li className="2xl:text-lg xl:text-lg lg:text-lg md:text-sm sm:text-[8px] text-[7px] text-[#40BFFF] font-bold font-Poppins">
                $299,43
              </li>
              <li className=" text-[#9098B1] font-normal font-Poppins">
                $534,33
              </li>
              <li className=" text-[#FB7181] font-bold font-Poppins">
                24% Off
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
