import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { AiTwotoneDelete } from "react-icons/ai";
import Link from "next/link";

const SideCart = ({ HandleSideCart }) => {
  return (
    <div className="fixed top-0 left-0 bg-[rgba(0,0,0,0.1)] w-full h-full">
      <div className="w-2/5 h-[90%] bg-primary top-[5%] right-0 absolute rounded-2xl p-14">
        <ul className="justify-between flex border-b-2 border-[#c4c4c4] pb-8 mb-5">
          <li className="font-Raleway font-medium text-2xl text-secondary">
            Shopping Cart
          </li>
          <li className="text-2xl" >
            <RxCross2 onClick={() => HandleSideCart(false)}/>
          </li>
        </ul>
        <div className="h-[50%] overflow-y-scroll pt-5">
          <div className="justify-between flex items-center px-5 mb-3">
            <div>
              <Image
                src="/bages-1.jpg"
                alt="bages"
                width={100}
                height={100}
                className="w-32 h-28 rounded-md"
              />
            </div>
            <div>
              <p className="font-Raleway font-normal text-lg text-secondary">
                Classic Black Hooded Sweatshirt
              </p>
              <div className="flex items-center font-Poppins font-normal text-lg text-secondary pt-2">
                <p>1</p>
                <RxCross2 />
                <p className="text-brand">70</p>
              </div>
            </div>
            <div className="">
              <AiTwotoneDelete className="text-2xl text-red" />
            </div>
          </div>
        </div>
        <div className="flex justify-between font-Raleway font-bold text-2xl text-secondary py-10 border-b-2 border-[#c4c4c4] ">
          <p>Subtotal</p>
          <p className="text-brand">70</p>
        </div>
        <div className="flex justify-center pt-6">
          <Link
            href="/cart"
            className="border-2 px-10 py-3 rounded-lg font-Raleway font-medium text-2xl text-secondary"
          >
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
