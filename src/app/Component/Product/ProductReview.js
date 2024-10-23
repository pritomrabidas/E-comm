"use client";
import React, { useState } from "react";

const ProductReview = () => {
  const [activeTab, setActiveTab] = useState("product-info");
  return (
    <div className="px-6 py-8 bg-[#FAFAFB]">
      {/* Tabs */}
      <div className="flex  font-Poppins font-normal text-lg text-secondary border-b-4 border-[#E5E8EA] justify-start gap-20  pb-7">
        <button
          onClick={() => setActiveTab("product-info")}
          className={` ${activeTab === "product-info" ? "text-blue-500" : ""}`}
        >
          Product Information
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`${activeTab === "reviews" ? "text-blue-500" : ""}`}
        >
          Reviews
        </button>
        <button
          onClick={() => setActiveTab("another")}
          className={`${activeTab === "another" ? "text-blue-500" : ""}`}
        >
          Another
        </button>
      </div>

      {/* Tab Content */}
      <div className="font-normal font-Poppins text-base text-[9098B1] p-7 border border-gray-300 rounded-lg mt-5">
        {activeTab === "product-info" && (
          <div className="product-info">
            <p className="">
              air max are always very comfortable fit, clean and just perfect in
              every way. just the box was too small and scrunched the sneakers
              up a little bit, not sure if the box was always this small but the
              90s are and will always be one of my favorites. air max are always
              very comfortable fit, clean and just perfect in every way. just
              the box was too small and scrunched the sneakers up a little bit,
              not sure if the box was always this small but the 90s are and will
              always be one of my favorites.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="reviews">
            <p>Customer reviews will be displayed here...</p>
          </div>
        )}

        {activeTab === "another" && (
          <div className="another-tab">
            <p>Some other content will be shown here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductReview;
