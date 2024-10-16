import Image from "next/image";
import React from "react";

const Sneakers = () => {
  return (
    <section className="bg-brand mt-24 ">
      <div className="container flex gap-10">
        <div className="w-1/2 py-40">
          <h2 className="font-medium font-Poppins text-6xl text-[#FFFFFF]  pb-5">
            Adidas Men Running Sneakers
          </h2>
          <p className="font-normal font-Poppins text-2xl text-[#FFFFFF] pb-1">
            Performance and design. Taken right to the edge.
          </p>
          <a
            href="/"
            className="font-normal font-Poppins text-2xl text-[#FFFFFF] border-b-[3px] w-fit border-[#FFFFFF] "
          >
            Show now
          </a>
        </div>
      <div className=" w-1/2">
      <div className="">
        <Image src="/sneakers.png" width={1000} height={1000} className="w-full h-full"/>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Sneakers;
