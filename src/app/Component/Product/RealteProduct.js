import React from "react";
import Product from "./Product";

const RealteProduct = () => {
  return (
    <section>
      <div className="container mx-auto flex pt-20">
        <div className="mx-auto">
          <h2 className="font-Poppins font-semibold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-xl text-xl text-[#22262A] mx-auto text-center pb-20">
            RELATED PRODUCTS
          </h2>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-5">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealteProduct;
