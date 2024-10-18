import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="pt-40 pb-16 bg-[#BCDDFE]">
      <div className="container">
        <div className=" grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 justify-center 2xl:px-40 xl:px-40 lg:px-10 md:px-2 sm:px-10 px-10">
          <div className="">
            <Image src="/logo.png" width={100} height={100} className="w-fit" />
            <p className="w-56 font-normal font-Poppins text-xs text-[#22262A] pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              dicta, deserunt nisi labore nostrum expedita.
            </p>
          </div>
          <div className="2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-10 pt-10">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              Follow Us
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
          </div>
          <div className="2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-10 pt-10">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              Contact Us
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>
        <div className=" grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center 2xl:px-40 xl:px-40 lg:px-10 md:px-2 sm:px-10 px-10 pt-20">
          <div className="">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              Infomation
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              About Us Infomation Privacy Policy Terms & Conditions
            </p>
          </div>
          <div className="2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-10 pt-10">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              Service
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              About Us Infomation Privacy Policy Terms & Conditions
            </p>
          </div>
          <div className="2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-10 pt-10">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              My Account
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              About Us Infomation Privacy Policy Terms & Conditions
            </p>
          </div>
          <div className="2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-10 pt-10">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              Our Offers
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              About Us Infomation Privacy Policy Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
