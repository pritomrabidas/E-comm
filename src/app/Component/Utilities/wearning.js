import Image from "next/image";
import React from "react";

const Wearning = ({ Imag, heading, Para }) => {
  return (
    <div className="mx-auto flex">
      <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full w-full ">
        <Image
          src={Imag}
          width={100}
          height={65}
          className="2xl:w-24 xl:w-24 lg:w-24 md:w-20 sm:w-20 w-16 2xl:h-24 xl:h-24 lg:h-24 md:h-20 sm:h-20 h-16"
        />
        <h3 className="font-medium font-Poppins 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl text-[#22262A] pt-14 pb-3">
          {heading}
        </h3>
        <p className="font-normal font-Poppins 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-base text-base text-[#22262A] w-52">
          {Para}
        </p>
      </div>
    </div>
  );
};

export default Wearning;
