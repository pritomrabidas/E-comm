import Image from "next/image";
import React from "react";

const Sneakers = () => {
  return (
    <section className="bg-brand mt-24 ">
      <div className="container grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1   w-full">
        <div className=" pl-2 2xl:py-40 xl:py-40 lg:py-36 md:py-32 sm:py-24 py-20 mx-auto 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center text-center">
          <h2 className="font-medium font-Poppins 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-[#FFFFFF]  pb-5 w-full">
            Adidas Men Running Sneakers
          </h2>
          <p className="font-normal font-Poppins 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#FFFFFF] pb-1">
            Performance and design. Taken right to the edge.
          </p>
          <a
            href="/"
            className="font-normal font-Poppins 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#FFFFFF] 2xl:border-b-[3px] xl:border-b-[3px] lg:border-b-[3px] md:border-b-2 sm:border-b-2 border-b w-fit border-[#FFFFFF] "
          >
            Show now
          </a>
        </div>
      <div className="py-0">
      <div className="">
        <Image src="/sneakers.png" width={1000} height={1000} className="w-full h-full"/>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Sneakers;
