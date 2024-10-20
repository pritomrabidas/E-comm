
import React from "react";
import First from "../Component/HotDeal/first";
import Paginatijon from "../Component/HotDeal/Pagination";
const page = () => {
  return (
    <div className="2xl:pt-24 xl:pt-24 lg:pt-24 md:pt-16 sm:pt-16 pt-14">
      <First/>
      <Paginatijon/>
    </div>
  );
};

export default page;
