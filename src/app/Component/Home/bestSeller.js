"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BestSeller = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterSelection = (category) => {
    setSelectedCategory(category);
  };

  // Portfolio data for each category
  const portfolioData = {
    Sneakers: [
      {
        imgSrc: "/images/mountains.jpg",
        alt: "Mountains",
        title: "Mountains",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/images/lights.jpg",
        alt: "Lights",
        title: "Lights",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/images/nature.jpg",
        alt: "Nature",
        title: "Forest",
        description: "Lorem ipsum dolor..",
      },
    ],
    Bags: [
      {
        imgSrc: "/images/cars1.jpg",
        alt: "Retro Car",
        title: "Retro",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/images/cars2.jpg",
        alt: "Fast Car",
        title: "Fast",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/images/cars3.jpg",
        alt: "Classic Car",
        title: "Classic",
        description: "Lorem ipsum dolor..",
      },
    ],
    Belt: [
      {
        imgSrc: "/images/people1.jpg",
        alt: "Girl",
        title: "Girl",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/images/people2.jpg",
        alt: "Man",
        title: "Man",
        description: "Lorem ipsum dolor..",
      },
      {
        imgSrc: "/images/people3.jpg",
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
            <div className="  grid-cols-3 flex">
              {(selectedCategory === "all"
                ? allItems
                : portfolioData[selectedCategory]
              ).map((item, index) => (
                <div key={index}>
                  <div className="">
                    <Image
                      width={100}
                      height={100}
                      src={item.imgSrc}
                      alt={item.alt}
                      style={{ width: "100%" }}
                    />
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a
            href="/"
            className="font-medium font-Poppins text-xl text-[#33A0FF] flex mx-auto pt-5 border-b-[3px] border-[#33A0FF] w-fit mb-6 "
          >
            LOAD MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
