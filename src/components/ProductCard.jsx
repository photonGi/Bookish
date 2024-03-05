import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    
    <div className="product-card dark:bg-[#4e4e4e] bg-white shadow-md rounded-xl p-5">
      <div class="product-image flex flex-col items-center w-[100%]">
        <img
          src={item.img}
          className="h-[400px] object-cover rounded-xl w-full"
        />
      </div>
      <div className="product-content pt-5 pl-5">
        <h2 className="text-lg font-bold uppercase">{item.title}</h2>
        <div className="flex justify-between items-center mt-2">
          <div className="text-[17px] font-medium text-gray-400 dark:text-gray-200">
            {`${Number(item.price).toLocaleString()} ${item.currency}`}
          </div>
          {item.quantity === 0 ? (
            <div className="badge-stock py-1 px-4 flex justify-between items-center text-xs rounded-full bg-red-600 text-white">
              Out Stock
            </div>
          ) : (
            <div className="badge-stock py-1 px-4 flex justify-between items-center text-xs rounded-full bg-green-500 text-white">
              In Stock
            </div>
          )}
        </div>

        <div className="text-center">
          {item.quantity === 0 ? (
            <Link to="/">
              <button
                type="button"
                className="bg-[#fbb47b] h-11 w-[170px] ml-auto mr-auto text-white text-[13px] uppercase rounded-[50px] mt-6 cursor-not-allowed"
                disabeld
              >
                <i class="bi bi-basket pr-2"></i>
                View Product
              </button>
            </Link>
          ) : (
            <Link to={`/bookdetail/${item.id}`}>
              <button
                type="button"
                className="bg-primary h-11 w-[170px] ml-auto mr-auto text-white text-[13px] uppercase rounded-[50px] mt-6"
              >
                <i class="bi bi-basket pr-2"></i>
                View Product
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
