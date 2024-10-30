import React from "react";
import CartProduct from "./CartProduct";

const ProductCArt = () => {
  return (
    <section>
      <div className="container mx-auto px-2">
        <div className="hidden sm:hidden md:block lg:block xl:block 2xl:block">
          <div className="flex border-b-2 border-[#F6F7F8] pb-6 pt-11">
            <div className="w-1/2">
              <h3 className="font-Poppins font-medium 2xl:text-xl xl:text-xl lg:text-base md:text-base text-[#22262A]">
                PRODUCT
              </h3>
            </div>
            <div className="w-1/2">
              <ul className="flex font-Poppins font-medium 2xl:text-xl xl:text-xl lg:text-base md:text-sm text-[#22262A] gap-28">
                <li>PRICE</li>
                <li>UTY</li>
                <li>UNIT PRICE</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="2xl:pt-24 xl:pt-24 lg:pt-20 md:pt-16 sm:pt-10 pt-8">
          <CartProduct />
        </div>
        <div className="px-5">
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row py-24 px-2 w-full gap-20">
            <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-[60%] sm:w-full w-full">
              <div className="w-[80%] justify-end mr-auto 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm text-sm">
                <ul className="font-Poppins font-normal text-secondary py-5 flex justify-between">
                  <li>Subtotal</li>
                  <li>$998</li>
                </ul>
                <ul className="font-Poppins font-normal text-secondary py-5 flex justify-between">
                  <li>Shipping fee</li>
                  <li>$20</li>
                </ul>
                <ul className="font-Poppins font-normal text-secondary py-5 border-b-2 border-[#F6F7F8] flex justify-between">
                  <li>Coupon</li>
                  <li>NO</li>
                </ul>
                <ul className="font-Poppins font-medium 2xl:text-3xl xl:text-3xl lg:text-xl md:text-base sm:text-lg text-base text-secondary py-5 flex justify-between">
                  <li>Total</li>
                  <li>$20</li>
                </ul>
                <div className=" 2xl:pt-6 xl:pt-6 lg:pt-6 md:pt-5 sm:pt-4 pt-3">
                  <button className="py-4 w-full font-Poppins font-medium 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm text-sm text-[#FFFFFF] bg-[#33A0FF]">
                    Check out
                  </button>
                </div>
              </div>
            </div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-[40%] sm:w-full w-full">
              <div className="border-2 border-[#F1F3F4] font-Poppins font-normal 2xl:text-base xl:text-base lg:text-base md:text-xs sm:text-xs text-xs w-[80%] flex justify-between">
                <input
                  type="text"
                  placeholder="Voucher code"
                  className="outline-none py-3 px-4"
                />
                <button className="py-4 px-5 text-[#FFFFFF] bg-brand">
                  Redeem
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCArt;
