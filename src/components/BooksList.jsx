import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useBook } from "../BookContext";

const BooksList = ({ limit }) => {
  const { books } = useBook();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
      {books && books.slice(0,limit).map((book, index) => (
        <ProductCard item={book} key={index} />
      ))}
    </div>
  );
};

export default BooksList;
