import React from "react";
import Product from "../HotDeal/Product";

const RealteProduct = () => {
  return (
    <section>
      <div className="container mx-auto flex pt-20">
        <div className="mx-auto">
          <h2 className="font-Poppins font-semibold text-4xl text-[#22262A] mx-auto text-center pb-20">
            RELATED PRODUCTS
          </h2>
          <div className="flex gap-10">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealteProduct;
