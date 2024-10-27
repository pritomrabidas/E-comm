import React from "react";
import Quality from "./Quality";
import Sneaker from "../Utilities/Sneaker";

const First = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto px-3">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-8 justify-center">
          <div className="2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-full sm:w-full w-full ">
            <Quality />
          </div>
          <div className="2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full">
          <Sneaker/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
