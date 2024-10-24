import React from "react";
import CartProduct from "./CartProduct";

const ProductCArt = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex border-b-2 border-[#F6F7F8] pb-6 pt-11">
          <div className="w-1/2">
            <h3 className="font-Poppins font-medium text-xl text-[#22262A]">
              PRODUCT
            </h3>
          </div>
          <div className="w-1/2">
            <ul className="flex font-Poppins font-medium text-xl text-[#22262A] gap-28">
              <li>PRICE</li>
              <li>UTY</li>
              <li>UNIT PRICE</li>
            </ul>
          </div>
        </div>
        <div className="pt-24">
          <CartProduct />
        </div>
        <div className="flex py-24">
          <div className="w-1/2">
            <div className="border-2 border-[#F1F3F4] font-Poppins font-normal text-base w-2/3 flex justify-between">
              <input
                type="text"
                placeholder="Voucher code"
                className="outline-none py-3 px-5"
              />
              <button className="py-4 px-5 text-[#FFFFFF] bg-brand">
                Redeem
              </button>
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="w-1/2 justify-end mr-auto">
              <ul className="font-Poppins font-normal text-lg text-secondary py-5 flex justify-between">
                <li>Subtotal</li>
                <li>$998</li>
              </ul>
              <ul className="font-Poppins font-normal text-lg text-secondary py-5 flex justify-between">
                <li>Shipping fee</li>
                <li>$20</li>
              </ul>
              <ul className="font-Poppins font-normal text-lg text-secondary py-5 border-b-2 border-[#F6F7F8] flex justify-between">
                <li>Coupon</li>
                <li>NO</li>
              </ul>
              <ul className="font-Poppins font-medium text-3xl text-secondary py-5 flex justify-between">
                <li>Total</li>
                <li>$20</li>
              </ul>
              <div className="pt-6">
                <button className="py-4 w-full font-Poppins font-medium text-lg text-[#FFFFFF] bg-[#33A0FF]">Check out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCArt;
