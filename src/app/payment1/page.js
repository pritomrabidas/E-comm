import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaRegCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";

const page = () => {
  return (
    <section className=" absolute top-0 left-0 w-full h-full  items-center flex bg-[rgba(32,14,14,0.22)] z-50">
      <div className="container m-auto justify-center flex p-10">
        <div className="bg-white 2xl:py-16 xl:py-16 lg:py-16 md:py-12 sm:py-8 py-7 2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-14 px-12  rounded-md">
          <div>
            <ul className=" justify-between flex 2xl:text-2xl xl:text-2xl lg:text-xl text-xl font-bold text-[#40BFFF]">
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
              <li className="2xl:w-9 xl:w-9 lg:w-9 md:w-8 sm:w-6 w-5 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-6 h-5 rounded-full bg-[#999999] items-center justify-center flex 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-bold text-primary">
                2
              </li>
              <li className="2xl:w-9 xl:w-9 lg:w-9 md:w-8 sm:w-6 w-5 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-6 h-5 rounded-full bg-[#999999] items-center justify-center flex 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-bold text-primary">
                3
              </li>
            </ul>
          </div>
          <div className="flex 2xl:pt-10 xl:pt-10 lg:pt-10 md:pt-9 sm:pt-6 pt-2 gap-10">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="First Name"
                className="outline-none 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-2 p-2 w-72 bg-[#DFDEDE] rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="outline-none 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-2 p-2 w-72 bg-[#DFDEDE] rounded-md my-7 text-sm"
              />
              <div className="flex-col block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden pb-5">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-none 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-2 p-2 w-72 bg-[#DFDEDE] rounded-md text-sm"
                />
                <input
                  type="text"
                  placeholder="Address for Delivery"
                  className="outline-none 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-2 p-2 w-72 bg-[#DFDEDE] rounded-md my-7 text-sm"
                />
                <input
                  type="number"
                  placeholder="Address for Delivery"
                  className="outline-none 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-2 p-2 w-72 bg-[#DFDEDE] rounded-md text-sm"
                />
              </div>
              <h3 className="font-semibold font-Raleway 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-base text-sm text-brand">
                Select Method of Payment
              </h3>
              <div className="pt-3.5 w-full">
                <div className="flex gap-2 items-center">
                  <span>
                    <FaRegCreditCard className="text-brand 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-base text-sm" />
                  </span>
                  <h3 className="font-bold font-Raleway 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs text-[#223263] ">
                    Credit Card Or Debit
                  </h3>
                  <input type="checkbox" className="2xl:w-4 xl:w-4 lg:w-4 md:w-4 sm:w-3 w-3 2xl:h-4 xl:h-4 lg:h-4 md:h-4 sm:h-3 h-3 ml-auto" />
                </div>
                <div className="flex gap-4 items-center py-5">
                  <span>
                    <FaPaypal className="text-brand 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-base text-sm" />
                  </span>
                  <h3 className="font-bold font-Raleway 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs text-[#223263] ">
                    Paypal
                  </h3>
                  <input type="checkbox" className="2xl:w-4 xl:w-4 lg:w-4 md:w-4 sm:w-3 w-3 2xl:h-4 xl:h-4 lg:h-4 md:h-4 sm:h-3 h-3 ml-auto" />
                </div>
                <div className="flex gap-4 items-center">
                  <span>
                    <FcMoneyTransfer className="text-brand 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-base text-sm" />
                  </span>
                  <h3 className="font-bold font-Raleway 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs text-[#223263] ">
                    Bank Transfer
                  </h3>
                  <input type="checkbox" className="2xl:w-4 xl:w-4 lg:w-4 md:w-4 sm:w-3 w-3 2xl:h-4 xl:h-4 lg:h-4 md:h-4 sm:h-3 h-3 ml-auto" />
                </div>
              </div>
            </div>
            <div className="w-1/2 2xl:block xl:block lg:block md:block sm:hidden hidden">
              <div className="flex-col flex">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-none p-3 w-72 bg-[#DFDEDE] rounded-md"
                />
                <input
                  type="text"
                  placeholder="Address for Delivery"
                  className="outline-none p-3 w-72 h-20 bg-[#DFDEDE] rounded-md my-10"
                />
                <input
                  type="number"
                  placeholder="Address for Delivery"
                  className="outline-none p-3 w-72 bg-[#DFDEDE] rounded-md"
                />
              </div>
            </div>
          </div>
          <button className="mt-6 2xl:px-8 xl:px-8 lg:px-8 md:px-7 sm:px-5 px-4 2xl:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-2 py-2 rounded font-Raleway font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-base text-primary bg-brand mx-auto flex ">
            Go to Payment
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
