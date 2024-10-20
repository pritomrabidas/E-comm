"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";


const BestSeller = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterSelection = (category) => {
    setSelectedCategory(category);
  };

  // Portfolio data for each category
  const portfolioData = {
    Sneakers: [
      {
        imgSrc: "/sneakers-1.jpg",
        alt: "Mountains",
        title: "Mountains",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/sneakers-2.jpg",
        alt: "Lights",
        title: "Lights",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/sneakers-3.jpg",
        alt: "Nature",
        title: "Forest",
        description: "Lorem ipsum dolor..",
      },
    ],
    Bags: [
      {
        imgSrc: "/bages-1.jpg",
        alt: "Retro Car",
        title: "Retro",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/bages-2.jpg",
        alt: "Fast Car",
        title: "Fast",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/bages-3.jpg",
        alt: "Classic Car",
        title: "Classic",
        description: "Lorem ipsum dolor..",
      },
    ],
    Belt: [
      {
        imgSrc: "/belt-1.jpg",
        alt: "Girl",
        title: "Girl",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/belt-2.jpg",
        alt: "Man",
        title: "Man",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/belt-3.jpg",
        alt: "Woman",
        title: "Woman",
        description: "Lorem ipsum dolor..",
      },
    ],
  };

  // Combine all categories when "all" is selected
  const allItems = [
    ...portfolioData.Sneakers,
    ...portfolioData.Bags,
    ...portfolioData.Belt,
  ];
  return (
    <section className="relative">
      <div className="container  m-auto">
        <div className="w-full">
          <h2 className="font-semibold font-Poppins text-4xl text-[#22262A] pt-14 pb-6 mx-auto flex justify-center">
            BEST SELLER
          </h2>
          <div id="myBtnContainer " className="pb-10">
            <ul className="list-none flex gap-20 justify-center font-Poppins font-normal text-xl text-secondary cursor-pointer">
              <li
                className={`btn ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => filterSelection("all")}
              >
                Show all
              </li>
              <li
                className={`btn ${
                  selectedCategory === "Sneakers" ? "active" : ""
                }`}
                onClick={() => filterSelection("Sneakers")}
              >
                Sneakers
              </li>
              <li
                className={`btn ${selectedCategory === "Bags" ? "active" : ""}`}
                onClick={() => filterSelection("Bags")}
              >
                Bags
              </li>
              <li
                className={`btn ${selectedCategory === "Belt" ? "active" : ""}`}
                onClick={() => filterSelection("Belt")}
              >
                Belt
              </li>
            </ul>
          </div>

          {/* Portfolio Gallery Grid */}
          <div className="m-auto flex justify-center w-full">
            <div className="  grid-cols-3 grid gap-2 w-full">
              {(selectedCategory === "all"
                ? allItems
                : portfolioData[selectedCategory]
              ).map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="relative  group">
                      <Image
                        width={100}
                        height={100}
                        src={item.imgSrc}
                        alt={item.alt}
                        style={{ width: "100%" }}
                        className="rounded"
                      />
                      <div className="absolute top-0 w-full h-full group-[]:scale-90 cursor-pointer ">
                        <div className="hover:bg-[#FFFFFF] w-full h-full rounded-md hover:duration-1000 delat-100 justify-center flex items-center">
                          <ul className="flex gap-x-2.5 text-3xl  text-[#33A0FF] ">
                            <li className="border rounded-full border-[#BsCart] p-4"><FaRegHeart/></li>
                            <li className="border rounded-full border-[#BsCart] p-4"><BsCart/></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-lg font-Poppins font-medium text-secondary">
                      {item.title}
                    </h4>
                    <p className="text-base font-Poppins font-normal text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/"
            className="font-medium font-Poppins text-xl text-[#33A0FF] flex mx-auto pt-5 border-b-[3px] border-[#33A0FF] w-fit my-6 "
          >
            LOAD MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
