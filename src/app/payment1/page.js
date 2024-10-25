import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaRegCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";

const page = () => {
  return (
    <section className=" absolute top-0 left-0 w-full h-full  items-center flex bg-[rgba(32,14,14,0.22)] z-50">
      <div className="container m-auto justify-center flex">
        <div className="bg-white py-16 px-20  rounded-md">
          <div>
            <ul className=" justify-between flex text-2xl font-bold text-[#40BFFF]">
              <li>
                <IoIosArrowRoundBack />
              </li>
              <li>
                <RxCross2 />
              </li>
            </ul>
          </div>
          <h3 className="font-semibold font-Raleway text-3xl text-[#40BFFF] text-center">
            Make Payment
          </h3>
          <div className="">
            <ul className="flex justify-center pt-10 gap-5">
              <li className="w-9 h-9 rounded-full bg-brand items-center justify-center flex text-base font-bold text-primary ">
                1
              </li>
              <li className="w-9 h-9 rounded-full bg-[#999999] items-center justify-center flex text-base font-bold text-primary">
                2
              </li>
              <li className="w-9 h-9 rounded-full bg-[#999999] items-center justify-center flex text-base font-bold text-primary">
                3
              </li>
            </ul>
          </div>
          <div className="flex pt-10 gap-10">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="First Name"
                className="outline-none p-3 w-72 bg-[#DFDEDE] rounded-md"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="outline-none p-3 w-72 bg-[#DFDEDE] rounded-md my-7"
              />
              <h3 className="font-semibold font-Raleway text-xl text-brand">
                Select Method of Payment
              </h3>
              <div className="pt-3.5">
                <div className="flex gap-4 items-center">
                  <span>
                    <FaRegCreditCard className="text-brand text-xl" />
                  </span>
                  <h3 className="font-bold font-Raleway text-base text-[#223263] ">
                    Credit Card Or Debit
                  </h3>
                  <input type="checkbox" className="w-4 h-4 ml-auto" />
                </div>
                <div className="flex gap-4 items-center py-5">
                  <span>
                    <FaPaypal className="text-brand text-xl" />
                  </span>
                  <h3 className="font-bold font-Raleway text-base text-[#223263] ">
                    Paypal
                  </h3>
                  <input type="checkbox" className="w-4 h-4 ml-auto" />
                </div>
                <div className="flex gap-4 items-center">
                  <span>
                    <FcMoneyTransfer className="text-brand text-xl" />
                  </span>
                  <h3 className="font-bold font-Raleway text-base text-[#223263] ">
                    Bank Transfer
                  </h3>
                  <input type="checkbox" className="w-4 h-4 ml-auto" />
                </div>
              </div>
            </div>
            <div className="w-1/2">
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
          <button className="mt-6 px-8 py-3 rounded font-Raleway font-bold text-2xl text-primary bg-brand mx-auto flex ">Go to Payment</button>
        </div>
      </div>
    </section>
  );
};

export default page;
