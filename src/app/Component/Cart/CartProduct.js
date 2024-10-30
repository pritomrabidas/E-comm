"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const CartProduct = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="border-b-2 2xl:pb-16 xl:pb-16 lg:pb-14 md:pb-10 sm:pb-8 pb-6 border-[#F6F7F8] flex">
      <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-[70%] flex items-center">
        <span className="2xl:pr-10 xl:pr-10 lg:pr-8 md:pr-7 sm:pr-5 pr-3">
          <RxCross2 className="2xl:text-xl xl:text-xl lg:text-base md:text-base" />
        </span>
        <div className="pr-5">
          <Image
            width={100}
            height={100}
            src={"/cartproduct.png"}
            alt="CARTPRODUCT"
            className="2xl:w-32 xl:w-32 lg:w-28 md:w-24 sm:w-20 w-16 2xl:h-24 xl:h-24 lg:h-20 md:h-20 sm:h-16 h-12"
          />
        </div>
        <div className="">
          <h3 className="font-Poppins font-normal 2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] text-secondary ">
            Nike Airmax 270 react
          </h3>
          <h2 className="font-Poppins font-normal 2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-xs text-secondary block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden pt-1">
          $498
        </h2>
        </div>
      </div>
      <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-[30%] justify-between flex items-center 2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-xs text-[10px] ">
        <h2 className="font-Poppins font-normal text-secondary hidden sm:block md:block lg:block xl:block 2xl:block">
          $498
        </h2>
        <div className="flex 2xl:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-2 py-1 2xl:px-4 xl:px-4 lg:px-4 md:px-3 sm:px-2 px-2 bg-[#F6F7F8] gap-4 text-brand items-center rounded-md text-xs sm:text-base md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className=""
          >
            -
          </button>
          <h4 className="text-secondary">{quantity}</h4>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <h2 className="font-Poppins font-normal text-secondary">$996</h2>
      </div>
    </div>
  );
};

export default CartProduct;
