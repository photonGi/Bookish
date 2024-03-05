import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, setCart } = useCart();
  const itemCount = cart.length;
  const totalPrice = cart.reduce((total,product) => total + Number(product.price), 0);
  const deliverCharges = 200;
  const finalAmount = totalPrice + 200;

  function handleClick(product){
    const updateCart = cart.filter(item => item.id !== product.id);
    setCart(updateCart);
  }

  return (
    <div className="min-h-[550px] sm:min-h-[650px] bg-gray-200 dark:bg-dark dark:text-white duration-200">
      <div className="container pb-8 sm:pb-0">
        <h1 className="text-[28px] text-center uppercase pt-9 font-bold pb-10">
          CART
        </h1>
        <div className="bg-white p-10 rounded-md dark:bg-[#4E4E4E] flex gap-6">
            <div className="w-[70%]">
              <div className="w-full flex gap-6 flex-wrap justify-start">
                {cart.length === 0 ? (
                  <p>Your Cart is empty.</p>
                ): ( 
                cart.map((product,index)=>(
                  <div className="p-3 border mb-4 rounded-xl border-gray-200 w-[30%]" key={index}>
                    <div className="relative">
                      <button onClick={() => handleClick(product)} type="button" className="bg-white text-[11px] px-3 py-1 opacity-70 hover:opacity-100 absolute right-[1em] top-[1em] rounded-3xl text-gray-500  transition-all">Remove Product</button>
                      <img src={product.img} alt={product.title} className="h-[291px] object-cover rounded-xl w-full" />
                    </div>

                    <div className="mt-4 text-[17px] leading-5 mb-2 pl-4 font-medium">
                      {product.title}
                    </div>
                    
                    <div className="font-medium pl-4 text-[16px] mb-2 text-gray-400">{`${Number(product.price).toLocaleString()} ${product.currency}`}</div>
                  </div>
                  ))
                )} 
              </div> 
            </div>
            <div className="w-[30%]">
              <div className="card">
                <div className="card-header p-3 bg-gray-100 text-sm text-gray-600 font-bold dark:text-dark">Cart Summary</div>
                <div className="card-body">
                  <div className="card-row flex justify-between gap-2 p-3 pb-1">
                    <p className="text-sm text-gray-700 dark:text-white">Qty</p>
                    <span className="text-sm text-gray-700 dark:text-white">{itemCount}</span>
                  </div>
                  
                  <div className="card-row flex justify-between gap-2 p-3 pb-1">
                    <p className="text-sm text-gray-700 dark:text-white">Total</p>
                    <span className="text-sm text-gray-700 dark:text-white">
                      {`${Number(totalPrice).toLocaleString()} PKR`}
                    </span>
                  </div>

                  <div className="card-row flex justify-between gap-2 p-3 pb-1">
                    <p className="text-sm text-gray-700 dark:text-white">Delivery Charges</p>
                    <span className="text-sm text-gray-700 dark:text-white">{`${Number(deliverCharges).toLocaleString()} PKR`}</span>
                  </div>
                  
                  <div className="card-row flex justify-between gap-2 p-3 pb-1">
                    <p className="text-[15px] text-gray-700 font-bold dark:text-white">Total</p>
                    <span className="text-[15px] text-gray-700 font-bold dark:text-white">{`${Number(finalAmount).toLocaleString()} PKR`}</span>
                  </div>
                </div>
                <div className="card-footer mx-3 mt-4">
                  <button className="bg-primary text-gray-50 h-[45px] w-full rounded-md text-sm shadow-lg shadow-orange-300 transition-[.5s] hover:scale-105">Proceed To Checkout</button>
                </div>
              </div>
            </div> 
        </div>
      </div>
    </div>
  );
};

export default Cart;
