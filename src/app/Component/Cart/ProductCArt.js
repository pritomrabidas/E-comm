import React from "react";

const ProductCArt = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex border-b-2 border-[#086fd6] pb-6 pt-11">
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
      </div>
    </section>
  );
};

export default ProductCArt;
