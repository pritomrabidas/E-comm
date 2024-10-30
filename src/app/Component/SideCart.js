import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { AiTwotoneDelete } from "react-icons/ai";
import Link from "next/link";

const SideCart = ({ HandleSideCart }) => {
  return (
    <div className="fixed top-0 left-0 bg-[rgba(0,0,0,0.1)] w-full h-full">
      <div className=" 2xl:w-2/5 xl:w-1/2 lg:w-8/12 md:w-3/4 sm:w-4/5 w-11/12 h-[90%] bg-primary top-[5%] right-0 absolute rounded-2xl 2xl:p-14 xl:p-14 lg:p-14 md:p-12 sm:p-10 p-8">
        <ul className="justify-between flex border-b-2 border-[#c4c4c4] 2xl:pb-8 xl:pb-8 lg:pb-8 md:pb-7 sm:pb-5 pb-5 mb-5">
          <li className="font-Raleway font-medium 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl text-secondary">
            Shopping Cart
          </li>
          <li className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl" >
            <RxCross2 onClick={() => HandleSideCart(false)}/>
          </li>
        </ul>
        <div className=" 2xl:h-[50%] xl:h-[50%] lg:h-[50%] md:h-[50%] sm:h-[40%] h-[40%] overflow-y-scroll pt-5">
          <div className="justify-between flex items-center 2xl:px-5 xl:px-5 lg:px-5 md:px-4 sm:px-2 px-1 mb-3">
            <div>
              <Image
                src="/bages-1.jpg"
                alt="bages"
                width={100}
                height={100}
                className=" 2xl:w-32 xl:w-32 lg:w-32 md:w-32 sm:w-24 w-20 2xl:h-28 xl:h-28 lg:h-28 md:h-28 sm:h-20 h-14 rounded-md"
              />
            </div>
            <div className="2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-base text-xs items-center pl-1">
              <p className="font-Raleway font-normal text-secondary">
                Classic Black Hooded Sweatshirt
              </p>
              <div className="flex items-center font-Poppins font-normal text-secondary pt-2">
                <p>1</p>
                <RxCross2 />
                <p className="text-brand">70</p>
              </div>
            </div>
            <div className="">
              <AiTwotoneDelete className=" 2xl:text-2xl xl:text-2xl md:text-2xl lg:text-2xl sm:text-xl text-lg  text-red" />
            </div>
          </div>
        </div>
        <div className="flex justify-between font-Raleway font-bold 2xl:text-2xl xl:text-2xl md:text-2xl lg:text-2xl sm:text-lg text-lg text-secondary py-10 border-b-2 border-[#c4c4c4] ">
          <p>Subtotal</p>
          <p className="text-brand">70</p>
        </div>
        <div className="flex justify-center pt-6">
          <Link
            href="/cart"
            className="border-2 px-10 py-3 rounded-lg font-Raleway font-medium 2xl:text-2xl xl:text-2xl md:text-2xl lg:text-2xl sm:text-xl text-lg text-secondary"
          >
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
