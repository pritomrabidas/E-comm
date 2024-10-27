"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
const Product = ({ itemsPerPage }) => {
  return (
    <div className="m-auto flex justify-center w-full pb-5">
      <div className="bg-[#F6F7F8] shadow">
        <div className="">
          <div className="relative  group">
            <Image
              width={100}
              height={100}
              src="/bages-1.jpg"
              alt="bages"
              className="rounded w-72 h-64"
            />
            <div className="absolute top-0 w-full h-full group-[]:scale-90 cursor-pointer">
              <div className="hover:bg-[#FFFFFF] w-full h-full rounded-md hover:duration-1000 delat-100 justify-center flex items-center">
                <ul className="flex 2xl:gap-x-2.5 xl:gap-x-2.5 lg:gap-x-2.5 md:gap-2 sm:gap-x-1.5 gap-1 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl  text-[#33A0FF] ">
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
          <div className="py-5 px-10 ">
            <h4 className="text-lg font-Poppins font-bold text-[#223263]">
              Nike Air Max 270 React
            </h4>
            <ul className="flex gap-3.5 text-[#FFC600] text-sm justify-center py-1">
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
            <ul className="flex gap-2 text-sm justify-center py-1 items-center">
              <li className="text-lg text-[#40BFFF] font-bold font-Poppins">
                $299,43
              </li>
              <li className="text-sm text-[#9098B1] font-normal font-Poppins">
                $534,33
              </li>
              <li className="text-sm text-[#FB7181] font-bold font-Poppins">
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
