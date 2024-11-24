"use client";
// import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import Route from "@/app/api/route";

const BestSeller = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [productList, setProductList] = useState([]);
  // productList.length < 2
  useEffect(() => {
    Route()
      .then((res) => {
        setProductList(res.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  productList.length = 15
  console.log();

  return (
    <section className="relative">
      <div className="container  m-auto px-3">
        <div className="w-full">
          <h2 className="font-semibold font-Poppins 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-[#22262A] pt-14 pb-6 mx-auto flex justify-center">
            BEST SELLER
          </h2>
          <div id="myBtnContainer " className="pb-10">
            <ul className="list-none flex justify-center font-Poppins font-normal 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-12 sm:gap-10 gap-5 text-xs sm:text-sm md:text-xl lg:text-xl 2xl:text-xl text-secondary cursor-pointer">
              <li
                onClick={() => setActiveTab("all")}
                className={` ${activeTab === "all" ? "text-blue-500" : ""}`}
              >
                Show all
              </li>
              <li
                onClick={() => setActiveTab("electronics")}
                className={`${
                  activeTab === "electronics" ? "text-blue-500" : ""
                }`}
              >
                Electronics
              </li>
              <li
                onClick={() => setActiveTab("change")}
                className={`${activeTab === "change" ? "text-blue-500" : ""}`}
              >
                Change title
              </li>
              <li
                onClick={() => setActiveTab("shoes")}
                className={`${activeTab === "shoes" ? "text-blue-500" : ""}`}
              >
                Shoes
              </li>
            </ul>
          </div>

          {/* Portfolio Gallery Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-10">
            {productList.map((item, index) => (
              <div key={index.id}>
                {activeTab === "all" && (
                  <div>
                    <div className="relative  group ">
                      <img
                        width={100}
                        height={100}
                        src={item.images?.[0] || "belt-1.jpg"}
                        alt={item.title || "Product image"} // Use a descriptive alt property
                        style={{ width: "100%" }}
                        className="rounded"
                      />
                      <div className="absolute top-0 w-full h-full group-[]:scale-90 cursor-pointer ">
                        <div className="hover:bg-[#09030364] w-full h-full rounded-md hover:duration-1000 delat-100 justify-center flex items-center">
                          <ul className="flex 2xl:gap-x-2.5 xl:gap-x-2.5 lg:gap-x-2.5 md:gap-2 sm:gap-x-1.5 gap-1 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl  text-[#33A0FF] ">
                            <li className="border rounded-full border-[#BsCart] 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2">
                              <FaRegHeart />
                            </li>
                            <li className="border rounded-full border-[#BsCart] 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2">
                              <BsCart />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h4 className="2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-base text-[10px] font-Poppins font-medium text-secondary py-2">
                      {item.title || "No title available"}
                    </h4>
                    <p className="2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-Poppins font-normal text-secondary">
                      {item.description.substring(0, 20) ||
                        "No description available"}{" "}
                      .....
                    </p>
                    <h4 className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs text-[10px] font-Poppins font-medium text-secondary py-2">
                      $ {item.price || "No title available"}
                    </h4>
                  </div>
                )}
                {activeTab === "electronics" && (
                  <div>
                    <div className="relative  group ">
                      <img
                        width={100}
                        height={100}
                        src={item.images?.[0] || "belt-1.jpg"}
                        alt={item.title || "Product image"} // Use a descriptive alt property
                        style={{ width: "100%" }}
                        className="rounded"
                      />
                      <div className="absolute top-0 w-full h-full group-[]:scale-90 cursor-pointer ">
                        <div className="hover:bg-[#09030364] w-full h-full rounded-md hover:duration-1000 delat-100 justify-center flex items-center">
                          <ul className="flex 2xl:gap-x-2.5 xl:gap-x-2.5 lg:gap-x-2.5 md:gap-2 sm:gap-x-1.5 gap-1 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl  text-[#33A0FF] ">
                            <li className="border rounded-full border-[#BsCart] 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2">
                              <FaRegHeart />
                            </li>
                            <li className="border rounded-full border-[#BsCart] 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2">
                              <BsCart />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h4 className="2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-base text-[10px] font-Poppins font-medium text-secondary py-2">
                      {item.title || "No title available"}
                    </h4>
                    <p className="2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-Poppins font-normal text-secondary">
                      {item.description.substring(0, 20) ||
                        "No description available"}{" "}
                      .....
                    </p>
                  </div>
                )}
                {activeTab === "change" && (
                  <div>
                    <div className="relative  group ">
                      <img
                        width={100}
                        height={100}
                        src={item.images?.[0] || "belt-1.jpg"}
                        alt={item.title || "Product image"} // Use a descriptive alt property
                        style={{ width: "100%" }}
                        className="rounded"
                      />
                      <div className="absolute top-0 w-full h-full group-[]:scale-90 cursor-pointer ">
                        <div className="hover:bg-[#09030364] w-full h-full rounded-md hover:duration-1000 delat-100 justify-center flex items-center">
                          <ul className="flex 2xl:gap-x-2.5 xl:gap-x-2.5 lg:gap-x-2.5 md:gap-2 sm:gap-x-1.5 gap-1 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl  text-[#33A0FF] ">
                            <li className="border rounded-full border-[#BsCart] 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2">
                              <FaRegHeart />
                            </li>
                            <li className="border rounded-full border-[#BsCart] 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2">
                              <BsCart />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h4 className="2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-base text-[10px] font-Poppins font-medium text-secondary py-2">
                      {item.title || "No title available"}
                    </h4>
                    <p className="2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-Poppins font-normal text-secondary">
                      {item.description.substring(0, 20) ||
                        "No description available"}{" "}
                      .....
                    </p>
                  </div>
                )}
                {activeTab === "shoes" && (
                  <div>
                    <div className="relative  group ">
                      <img
                        width={100}
                        height={100}
                        src={item.images?.[0] || "belt-1.jpg"}
                        alt={item.title || "Product image"} // Use a descriptive alt property
                        style={{ width: "100%" }}
                        className="rounded"
                      />
                      <div className="absolute top-0 w-full h-full group-[]:scale-90 cursor-pointer ">
                        <div className="hover:bg-[#09030364] w-full h-full rounded-md hover:duration-1000 delat-100 justify-center flex items-center">
                          <ul className="flex 2xl:gap-x-2.5 xl:gap-x-2.5 lg:gap-x-2.5 md:gap-2 sm:gap-x-1.5 gap-1 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl  text-[#33A0FF] ">
                            <li className="border rounded-full border-[#BsCart] 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2">
                              <FaRegHeart />
                            </li>
                            <li className="border rounded-full border-[#BsCart] 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2">
                              <BsCart />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h4 className="2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-base text-[10px] font-Poppins font-medium text-secondary py-2">
                      {item.title || "No title available"}
                    </h4>
                    <p className="2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-Poppins font-normal text-secondary">
                      {item.description.substring(0, 20) ||
                        "No description available"}{" "}
                      .....
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="font-medium font-Poppins 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-base text-base text-[#33A0FF] flex mx-auto pt-5 border-b-2 border-[#33A0FF] w-fit my-6 "
          >
            LOAD MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
