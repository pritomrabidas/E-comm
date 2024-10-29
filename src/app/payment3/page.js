import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

const page = () => {
  return (
    <section className=" absolute top-0 bottom-0 right-0 left-0 w-full h-full  items-center flex bg-[rgba(32,14,14,0.22)] z-50">
      <div className="container m-auto justify-center flex">
        <div className="bg-white 2xl:py-16 xl:py-16 lg:py-16 md:py-12 sm:py-8 py-7 2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-14 px-12 rounded-md">
        <div>
            <ul className=" justify-between flex 2xl:text-2xl xl:text-2xl lg:text-xl text-xlfont-bold text-[#40BFFF]">
              <li>
                <IoIosArrowRoundBack />
              </li>
              <li>
                <RxCross2 />
              </li>
            </ul>
          </div>
          <h3 className="font-semibold font-Raleway 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg text-lg text-[#40BFFF] text-center p-5">
            Make Payment
          </h3>
          <div className="pb-6">
          <ul className="flex justify-center 2xl:pt-10 xl:pt-10 lg:pt-10 md:pt-7 sm:pt-4 pt-3 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-4 sm:gap-3 gap-2">
              <li className="2xl:w-9 xl:w-9 lg:w-9 md:w-8 sm:w-6 w-5 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-6 h-5 rounded-full bg-brand items-center justify-center flex 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-bold text-primary ">
                1
              </li>
              <li className="2xl:w-9 xl:w-9 lg:w-9 md:w-8 sm:w-6 w-5 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-6 h-5 rounded-full bg-brand items-center justify-center flex 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-bold text-primary">
                2
              </li>
              <li className="2xl:w-9 xl:w-9 lg:w-9 md:w-8 sm:w-6 w-5 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-6 h-5 rounded-full bg-brand items-center justify-center flex 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-bold text-primary">
                3
              </li>
            </ul>
          </div>
            <li className="bg-brand 2xl:p-5 xl:p-5 lg:p-5 md:p-5 sm:p-3 p-3 rounded-full flex justify-center mx-auto w-fit list-none">
              <FaCheck className="text-base text-primary " />
            </li>
            <button className="mt-6 2xl:px-8 xl:px-8 lg:px-8 md:px-7 sm:px-5 px-4 2xl:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-2 py-2 rounded font-Raleway font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-base text-primary bg-brand mx-auto flex ">
            Complete
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default page;
