import React from "react";
import Logo from "../assets/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Darkmode from "./Darkmode";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="dark:bg-dark shadow-md">
      <div className="container flex justify-between items-center pt-4 pb-4">
        <div className="logo">
          <a href="#">
            <img src={Logo} alt="Bookish Logo" className="w-28" />
          </a>
        </div>
        <div className="links flex items-center gap-5">
          <div className="theme-mode relative">
            <Darkmode />
          </div>
          <div className="flex items-center gap-8">
            <Link to="/" className="navLinks dark:text-white">Home</Link>
            <Link to="/bestseller" className="navLinks dark:text-white">Best Seller</Link>
          </div>
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-5">
              <li className="relative group">
                <a href="#" className="navLinks dark:text-white">
                  Quick Link
                  <span>
                    <i className="bi bi-caret-down-fill text-xs pl-2"></i>
                  </span>
                </a>
                <div className="dropdown-menu absolute top-[25px] right-0 bg-white border-slate-500 p-3 shadow-md w-[180px] hidden group-hover:block dark:bg-[#4e4e4e]">
                  <Link to="/" className="text-[13px] p-2 pl-3 pr-3 flex hover:bg-black hover:text-white transition-all hover:shadow-md rounded-md dark:hover:bg-[#282828] dark:text-white">Trending Books</Link>
                  <Link to="/bestseller" className="text-[13px] p-2 pl-3 pr-3 flex hover:bg-black hover:text-white transition-all hover:shadow-md rounded-md dark:hover:bg-[#282828] dark:text-white">Best Sellers</Link>
                </div>
              </li>

              <li>
                <Link to="/cart">
                  <button
                    type="button"
                    className="bg-primary h-8 w-[110px] text-white text-[13px] uppercase rounded-[50px]"
                  >
                    <i class="bi bi-basket pr-2"></i>
                    Order
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
