import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useBook } from './BookContext';
import { useCart } from './CartContext';

export const BookDetail = () => {
    const {id} = useParams();
    const { books } = useBook();
    const { addToCart } = useCart();
    const product = books.find((b) => b.id === parseInt(id));

    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = ()=>{
        if(product.quantity > 0){
            addToCart(product);
            setShowPopup(true);
        }
        else{
            alert ("Product is out of stock!!");
        }
    }


    if(!product) return <div>No Book Found!</div>;
  return (
    <div className="bg-gray-200 dark:bg-dark dark:text-white duration-200 pb-10">
        <div className="container pb-8 sm:pb-0">
            <h1 className="text-[28px] text-center uppercase pt-9 font-bold pb-10">
            {product.title}
            </h1>
            <div className="flex gap:20px bg-white p-10 rounded-md dark:bg-[#4E4E4E]">
                <div className="flex-grow basis-[40%]">
                    <img src={`../${product.img}`} className="h-[490px] w-full object-contain"/>
                </div>
                <div className="flex-grow basis-[40%] mt-6">
                    {product.quantity === 0 ? (
                        <div className="badge-stock py-1 px-4 inline-flex justify-between items-center text-xs rounded-full bg-red-600 text-white mb-4">
                        Out Stock
                        </div>
                    ) : (
                        <div className="badge-stock py-1 px-4 inline-flex justify-between items-center text-xs rounded-full bg-green-500 text-white mb-4">
                        In Stock
                        </div>
                    )}
                    <h1 className="text-[27px] font-semibold">{product.title}</h1>
                    <p className="text-md text-gray-500 mt-3 dark:text-gray-200">{product.description}</p>

                    <div className="flex items-center text-[26px] mt-8 font-bold text-primary dark:text-gray-200">
                        {`${Number(product.price).toLocaleString()} ${product.currency}`} <small className="text-gray-500 pl-2 font-light text-sm dark:text-gray-200">- Limited Time Offer</small>
                    </div>
                        
                    <div className="flex gap-4 items-center">
                        <button
                            type="button"
                            className="bg-primary h-[55px] w-[230px] text-white text-[14px] uppercase  mt-8"
                            onClick={handleAddToCart}
                        >
                            <i class="bi bi-basket pr-2"></i>
                            Add to Cart
                        </button>

                        <Link to="/bestseller" className="mt-8 underline text-gray-500 hover:text-black transition-all hover:tracking-[1px] dark:text-gray-200"> Continue Shopping</Link>
                    </div>
                    
                    {/* Popup Notification */}
                    {showPopup && (
                        <div className="fixed bottom-10 right-10 bg-white p-4 shadow-md rounded-md">
                            <p className="text-green-600">Product added to cart!</p>
                            <button className="text-sm text-gray-500 hover:text-gray-700" onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}
