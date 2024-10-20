import React from "react";
import Quality from "./Quality";
import Sneaker from "../Utilities/Sneaker";

const First = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto">
        <div className="flex gap-8">
          <div className="w-1/4">
            <Quality />
          </div>
          <div className="w-3/4">
          <Sneaker/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
