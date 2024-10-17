import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="pt-40 pb-16 bg-[#BCDDFE]">
      <div className="container">
        <div className="flex justify-between px-40">
          <div className="">
            <Image src="/logo.png" width={100} height={100} className="w-fit" />
            <p className="w-56 font-normal font-Poppins text-sm text-[#22262A] pt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum
              perferendis voluptates necessitatibus quisquam natus, vitae ipsam
              totam hic quod.
            </p>
          </div>
          <div className="">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              Follow Us
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
          </div>
          <div className="">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              Contact Us
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>
        <div className="flex justify-between px-40 pt-20">
          <div className="">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              Infomation
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              About Us Infomation Privacy Policy Terms & Conditions
            </p>
          </div>
          <div className="">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              Service
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              About Us Infomation Privacy Policy Terms & Conditions
            </p>
          </div>
          <div className="">
            <h3 className="font-medium font-Poppins text-lg text-[#22262A]">
              My Account
            </h3>
            <p className="font-normal font-Poppins text-xs text-[#22262A] w-48 pt-5">
              About Us Infomation Privacy Policy Terms & Conditions
            </p>
          </div>
          <div className="">
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
