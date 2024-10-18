import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const FeaturedProduct = ({ Imag, Heading }) => {
  return (
    <div className="mx-auto flex w-full  pt-10 sm:pt-10 md:pt-10 lg:pt-0 xl:pt-0 2xl:pt-0">
      <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full w-full flex gap-9 items-center">
        <div className="flex gap-9 items-center">
          <div className="2xl:w-48 xl:w-48 lg:w-44 md:w-40 sm:w-36 w-36 2xl:h-36 xl:h-36 lg:h-32 md:h-28 sm:h-24 h-24">
            <Image
              src={Imag}
              alt="latest"
              width={1000}
              height={1000}
              className="2xl:w-40 xl:w-36 lg:w-32 md:w-28 sm:w-24 w-24 2xl:h-36 xl:h-36 lg:h-32 md:h-28 sm:h-24 h-24"
            />
          </div>
          <div className="">
            <p className="font-normal font-Poppins text-xl text-secondary">
              {Heading}{" "}
            </p>
            <ul className="flex pt-11 pb-5 text-[#FFC600] text-lg gap-1">
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
            <div className="flex gap-1">
              <p className="font-medium font-Poppins text-xl text-[#FF4858]">
                $499
              </p>
              <p className="font-medium font-Poppins text-xl text-[#C1C8CE]">
                $499
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
