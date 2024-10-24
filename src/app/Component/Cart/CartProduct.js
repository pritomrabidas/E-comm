import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const CartProduct = () => {
  return (
    <div className="border-b-2 pb-16 border-[#F6F7F8] flex">
      <div className="w-1/2 flex items-center">
        <span className="pr-10">
          <RxCross2 />
        </span>
        <div className="pr-5">
            <Image  width={100} height={100} src={"/cartproduct.png"} alt="CARTPRODUCT" className="w-32 h-24"/>
        </div>
        <h3 className="font-Poppins font-normal text-lg text-secondary">Nike Airmax 270 react</h3>
      </div>
      <div className="w-1/2 gap-28 flex items-center">
      <h2 className="font-Poppins font-normal text-lg text-secondary">$998</h2>
      <div className="flex py-3 px-4 bg-[#F6F7F8] gap-3 text-brand text-xl items-center">
        <button className="text-3xl">-</button>
        <h4 className="text-secondary">0</h4>
        <button>+</button>
      </div>
      <h2 className="font-Poppins font-normal text-lg text-secondary">$498</h2>
      </div>
    </div>
  );
};

export default CartProduct;
