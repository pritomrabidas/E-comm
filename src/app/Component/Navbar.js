"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Navbar = () => {
  // const [close,Setclose] = useState(true)
  const [search, Setsearch] = useState(false);
  const [sidebar, Setsidebar] = useState(false);

  const HandleSearch = () => {
    Setsearch(true);
  };
  const HandleClick = () => {
    Setsidebar(true);
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
            <li>
              <IoIosNotifications />
            </li>
            <li>
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
              {sidebar ? (
                <div className=" absolute top-0 right-0 2xl:w-1/2 xl:w-1/2 lg:w-3/4 md:w-3/4 sm:w-4/5 w-full  h-screen bg-brand p-10 ">
                  <span className="justify-end flex px-10">
                    <HiOutlineArrowNarrowRight onClick={()=>Setsidebar(false)} className="text-white text-3xl" />
                  </span>
                  <ul className="flex-col flex text-[#fff] duration-100 font-normal font-Poppins text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl gap-20 text-center pt-10">
                    <Link
                      href="/"
                      onClick={()=>Setsidebar(false)}
                      className="hover:text-secondary  hover:duration-100 delay-100 relative group"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      onClick={()=>Setsidebar(false)}
                      className="hover:text-secondary duration-700 delay-100  hover:duration-100"
                    >
                      BAGS
                    </Link>
                    <Link
                      href="/contact"
                      onClick={()=>Setsidebar(false)}
                      className="hover:text-secondary duration-700 delay-100  hover:duration-100"
                    >
                      SNEAKERS
                    </Link>
                    <Link
                      href="/blog"
                      onClick={()=>Setsidebar(false)}
                      className="hover:text-secondary duration-700 delay-100  hover:duration-100"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/contact"
                      onClick={()=>Setsidebar(false)}
                      className="hover:text-secondary duration-700 delay-100  hover:duration-100"
                    >
                      Contact
                    </Link>
                  </ul>
                </div>
              ) : (
                <FiAlignRight onClick={HandleClick} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
