"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="container mx-auto px-1">
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-5">
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      <Product currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        className="flex justify-center py-8 gap-9 font-Poppins font-normal text-lg paginate_product"
      />
    </div>
  );
};

export default Pagination;
