import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaCcVisa } from "react-icons/fa6";
import { PiSubtitlesFill } from "react-icons/pi";

const page = () => {
  return (
    <section className=" absolute top-0 left-0 w-full h-full  items-center flex bg-[rgba(32,14,14,0.22)] z-50">
      <div className="container m-auto justify-center flex">
        <div className="bg-white 2xl:py-16 xl:py-16 lg:py-16 md:py-12 sm:py-8 py-7 2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-14 px-12  rounded-md">
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
          <h3 className="font-semibold font-Raleway 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg text-lg text-[#40BFFF] text-center">
            Make Payment
          </h3>
          <div className="">
          <ul className="flex justify-center 2xl:pt-10 xl:pt-10 lg:pt-10 md:pt-7 sm:pt-4 pt-3 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-4 sm:gap-3 gap-2">
              <li className="2xl:w-9 xl:w-9 lg:w-9 md:w-8 sm:w-6 w-5 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-6 h-5 rounded-full bg-brand items-center justify-center flex 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-bold text-primary ">
                1
              </li>
              <li className="2xl:w-9 xl:w-9 lg:w-9 md:w-8 sm:w-6 w-5 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-6 h-5 rounded-full bg-brand items-center justify-center flex 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-bold text-primary">
                2
              </li>
              <li className="2xl:w-9 xl:w-9 lg:w-9 md:w-8 sm:w-6 w-5 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-6 h-5 rounded-full bg-[#999999] items-center justify-center flex 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-bold text-primary">
                3
              </li>
            </ul>
          </div>
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col pt-5 2xl:gap-28 xl:gap-28 lg:gap-28 md:gap-24 sm:gap-10 gap-10">
            <div className="2xl:w-[380px] xl:w-[380px] lg:w-[380px] md:w-[360px] sm:w-[340px] w-[300px] bg-gradient-to-r from-[#9A9A9A] to-[#5A5A5A] p-5 rounded">
              <div className="">
                <ul className="flex justify-between 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-[#a1a1a1]">
                <li>
                  <PiSubtitlesFill />
                </li>
                <li>
                  <FaCcVisa />
                </li>
              </ul>
              <h4 className="pt-5 pb-2 font-semibold  2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-base text-base text-primary">1234 5678 9123 4567</h4>
              <ul className="flex justify-between font-medium font-Raleway 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-base text-base text-primary">
                <li>JOHN DOE</li>
                <li>00/00</li>
              </ul>
              </div>
            </div>
            <div className="flex flex-col">
            <input
                type="number"
                placeholder="Card Number"
                className="outline-none 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-2 p-2 w-72 bg-[#DFDEDE] rounded-md text-sm"
              />
              <div className="">
              <input
                type="number"
                placeholder="Expiry"
                className="outline-none 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-2 p-2 w-36 bg-[#DFDEDE] rounded-md 2xl:my-7 xl:my-7 lg:my-7 md:my-7 sm:my-5 my-3 mr-2 text-sm"
              />
              <input
                type="number"
                placeholder="CVV"
                className="outline-none 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-2 p-2 w-36 bg-[#DFDEDE] rounded-md 2xl:my-7 xl:my-7 lg:my-7 md:my-7 sm:my-5 my-3 text-sm"
              />

              </div>
              <input
                type="number"
                placeholder="Holder Number"
                className="outline-none 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-2 p-2 w-72 bg-[#DFDEDE] rounded-md text-sm"
              />
              <div className="flex gap-3 items-center pt-7">
              <input type="checkbox" className="2xl:w-4 xl:w-4 lg:w-4 md:w-4 sm:w-3 w-3 2xl:h-4 xl:h-4 lg:h-4 md:h-4 sm:h-3 h-3" />
              <h3 className="font-normal font-Raleway 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-sm text-[#999999]">Save this credit card</h3>
              </div>
            </div>
          </div>
          <button className="mt-6 2xl:px-8 xl:px-8 lg:px-8 md:px-7 sm:px-5 px-4 2xl:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-2 py-2 rounded font-Raleway font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-base text-primary bg-brand mx-auto flex ">
          Confirm
          </button>
            
        </div>
      </div>
    </section>
  );
};

export default page;
