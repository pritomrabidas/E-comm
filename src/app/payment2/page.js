import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaCcVisa } from "react-icons/fa6";
import { PiSubtitlesFill } from "react-icons/pi";

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
              <li className="w-9 h-9 rounded-full bg-brand items-center justify-center flex text-base font-bold text-primary">
                2
              </li>
              <li className="w-9 h-9 rounded-full bg-[#999999] items-center justify-center flex text-base font-bold text-primary">
                3
              </li>
            </ul>
          </div>
          <div className="flex pt-5 gap-28">
            <div className="w-[380px] bg-gradient-to-r from-[#9A9A9A] to-[#5A5A5A] p-5 rounded">
              <div className="">
                <ul className="flex justify-between text-4xl text-[#a1a1a1]">
                <li>
                  <PiSubtitlesFill />
                </li>
                <li>
                  <FaCcVisa />
                </li>
              </ul>
              <h4 className="pt-5 pb-2 font-semibold text-xl text-primary">1234 5678 9123 4567</h4>
              <ul className="flex justify-between font-medium font-Raleway text-xl text-primary">
                <li>JOHN DOE</li>
                <li>00/00</li>
              </ul>
              </div>
            </div>
            <div className="flex flex-col">
            <input
                type="number"
                placeholder="Card Number"
                className="outline-none p-3 w-72 bg-[#DFDEDE] rounded-md"
              />
              <div className="">
              <input
                type="number"
                placeholder="Expiry"
                className="outline-none p-3 w-36 bg-[#DFDEDE] rounded-md my-7 mr-2"
              />
              <input
                type="number"
                placeholder="CVV"
                className="outline-none p-3 w-36 bg-[#DFDEDE] rounded-md my-7"
              />

              </div>
              <input
                type="number"
                placeholder="Holder Number"
                className="outline-none p-3 w-72 bg-[#DFDEDE] rounded-md"
              />
              <div className="flex gap-3 items-center pt-7">
              <input type="checkbox" className="w-4 h-4" />
              <h3 className="font-normal font-Raleway text-base text-[#999999]">Save this credit card</h3>
              </div>
            </div>
          </div>
          <button className="mt-6 px-8 py-3 rounded font-Raleway font-bold text-2xl text-primary bg-brand mx-auto flex ">
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
