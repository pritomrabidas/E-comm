import React from "react";

const Banner = () => {
  return (
    <section className='bg-[url("/banner.png")] w-full bg-cover bg-no-repeat pt-[280px] pb-[180px] '>
      <div className="container">
        <h2 className="font-bold font-Poppins text-6xl text-[#FFFFFF] w-[570px]">
          Super Flash Sale 50% Off
        </h2>
      </div>
    </section>
  );
};

export default Banner;
