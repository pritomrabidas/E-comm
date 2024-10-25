import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

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
            <FaCheck className="text-base text-primary"/>
          <button className="mt-6 px-8 py-3 rounded font-Raleway font-bold text-2xl text-primary bg-brand mx-auto flex ">
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
