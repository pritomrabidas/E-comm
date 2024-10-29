import React from "react";

const Banner = () => {
  return (
    <section className='bg-[url("/banner.png")] w-full bg-cover bg-no-repeat 2xl:pt-[280px] xl:pt-[280px] lg:pt-[240px] md:pt-[200px] sm:pt-[180px] pt-[140px] 2xl:pb-[180px] xl:pb-[180px] lg:pb-[160px] md:pb-[140px] sm:pb-[120px] pb-[100px] '>
      <div className="container">
        <h2 className="font-bold font-Poppins pl-5 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-[#FFFFFF]  2xl:w-[570px] xl:w-[570px] lg:w-[500px] md:w-[400px] sm:w-[320px] w-[270px]">
          Super Flash Sale 50% Off
        </h2>
      </div>
    </section>
  );
};

export default Banner;
