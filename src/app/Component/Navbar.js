"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import SideCart from "./SideCart";
import Sidebart from "./Utilities/Sidebart";

const Navbar = () => {
  // const [close,Setclose] = useState(true)
  const [search, Setsearch] = useState(false);
  const [sideCart, SetsideCart] = useState(false);
  const [sidebar, Setsidebar] = useState(false);

  const HandleSearch = () => {
    Setsearch(true);
  };

  const HandleSideCart = (result) => {
    SetsideCart(result);
  };
  const HandleClick = (result) => {
    Setsidebar(result);
  };
  return (
    <nav className="bg-white border-b border-gray-200 w-full fixed z-30 shadow cursor-pointer">
      <div className="container m-auto flex justify-between  items-center 2xl:py-6 xl:py-6 lg:py-6 md:py-3 sm:py-3 py-2 px-2 ">
        <div className="text-3xl font-bold pr-1">
          <Image
            src="/logo.png"
            alt="hello"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block  mx-auto">
          <ul className="flex text-secondary duration-100 font-normal font-Poppins text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl gap-24 2xl:gap-24 xl:gap-24 lg:gap-16  ">
            <Link
              href="/"
              className="hover:text-brand  hover:duration-100 relative group"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-brand  hover:duration-100"
            >
              BAGS
            </Link>
            <Link
              href="/contact"
              className="hover:text-brand  hover:duration-100"
            >
              SNEAKERS
            </Link>
            <Link href="/blog" className="hover:text-brand  hover:duration-100">
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-brand  hover:duration-100"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className=" ">
          <ul className="flex 2xl:gap-5x xl:gap-5 lg:gap-5 md:gap-5 sm:gap-4 gap-2 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl items-center m-auto">
            <li className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden ">
              <span className=" border-2 flex items-center 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-1 px-0 rounded bg-white  ">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  className="md:w-[300px] sm:w-[300px] w-[150px] outline-none  py-1 px-4 md:text-lg sm:text-lg text-xs placeholder:font-Poppins font-Poppins font-normal"
                />
                <CiSearch
                  onClick={() => Setsearch(false)}
                  className="text-[#40BFFF] font-bold text-lg"
                />
              </span>
            </li>
            <li onClick={() => SetsideCart(true)}>
              <FaShoppingCart />
            </li>
            <li className="2xl:block xl:block lg:block md:hidden sm:hidden hidden">
              <IoIosSearch onClick={HandleSearch} />
              {search && (
                <div className="absolute -bottom-14 right-5 border-2 flex items-center px-2 rounded bg-white ">
                  <input
                    type="search"
                    placeholder="Enter Keyword"
                    className=" outline-none  py-3 px-5 text-xl placeholder:font-Poppins font-Poppins font-normal"
                  />
                  <CiSearch
                    onClick={() => Setsearch(false)}
                    className="text-[#40BFFF] font-bold text-4xl"
                  />
                </div>
              )}
            </li>
            <li>
              <FiAlignRight onClick={() => Setsidebar(true)} />
            </li>
          </ul>
        </div>
      </div>
      {sideCart && <SideCart HandleSideCart={HandleSideCart} />}
      {sidebar && <Sidebart HandleClick={HandleClick} />}
    </nav>
  );
};

export default Navbar;
