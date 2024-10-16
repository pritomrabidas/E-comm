import Image from "next/image";
import React from "react";

const Wearning = ({Imag,heading,Para}) => {
  return (
    <div className="w-1/3">
      <Image
        src={Imag}
        width={100}
        height={65}
        className="w-24 h-24"
      />
      <h3 className="font-medium font-Poppins text-2xl text-[#22262A] pt-14 pb-3">
        {heading}
      </h3>
      <p className="font-normal font-Poppins text-lg text-[#22262A] w-52">
        {Para}
      </p>
    </div>
  );
};

export default Wearning;
