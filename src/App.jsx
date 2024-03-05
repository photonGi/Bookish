import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./Cart";
import ProductList from "./components/BooksList";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from "./Home";
import { BestSeller } from "./BestSeller";
import { BookDetail } from "./BookDetail";
import { BookProvider } from "./BookContext";
import { CartProvider } from "./CartContext";

const App = () => {
  return (
    <div className="h-[100%]">
      <BrowserRouter>
        <Navbar/>
        <BookProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/bestseller" element={<BestSeller/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/bookdetail/:id" element={<BookDetail />}></Route>
          </Routes>
          </CartProvider>
        </BookProvider>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
