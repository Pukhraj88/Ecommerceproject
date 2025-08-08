


import React, { useState } from "react";
import "../media.css";
import "../index.css";
import { NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("UserisLogged");
  const userName = localStorage.getItem("UserTokenName");

  const categories = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Aboutus", path: "/about" },
    { label: "Products", path: "/product" },
    { label: "Working", path: "/working" },
    { label: "Quality", path: "/cservice" },
    { label: "Rodi", path: "/product" },
    { label: "Latest Items", path: "/product" },
    { label: "Paints", path: "/product" },
  ];

  return (
    <div className="owncontainer fixed top-0 left-0 z-50 sm:relative sm:top-0 sm:left-0">
      {/* mobile view  */}
      <div
        className="relative grid grid-cols-[1fr_2fr_1fr] block min-[664px]:hidden
        h-[90px]
  color-#04211F  font-harmonia bg-white">
        {/* icon hamburger */}
        <div class="text-[14px] h-[24px] w-[24px] p-4">
          {isMenuOpen ? (
            <RiMenu2Fill
              className="text-[28px] text-[#04211F] cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <RiMenu2Fill
              className="text-[28px] text-[#04211F] cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
        {/* logo */}
        <div class="w-[130px] h-[26px] p-4">
          <img src="aa.png" alt="logo" />
        </div>

        {/* search cart mobiel*/}
        <div class="grid grid-cols-10 gap-3 py-4">
            <FaRegHeart
              className="col-span-5 text-[28px] text-[#04211F] cursor-pointer"
            />
          <NavLink to={"/cart"}>
            <FiShoppingCart className="col-span-5 text-[28px] text-[#04211F] cursor-pointer" />
          </NavLink>
        </div>

<div className="absolute bg-white top-[55px] left-0 right-0 mx-auto w-[90%] bg-[#F2F2F2] rounded-[4px] px-2 py-1 flex items-center 
shadow-md z-50">
              <IoSearch className=" text-[20px] text-[#04211F] mr-2" />
              <input
                type="text"
                placeholder="Search for products"
                className="w-full bg-transparent outline-none text-[#04211F] text-[14px] font-harmonia xl:text-[22px] xl:font-bold"
              />
            </div>
            
      </div>
      {/* search cart mobiel end*/}






      {/* SLIDER TRANSTION START ====*/}
      {isMenuOpen && (
        <div
          className={`fixed w-[70%] top-0 left-0 h-full bg-white
        transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        >
          <div className="flex items-center justify-between px-5 py-2">
            <h3 className="text-2xl m-auto font-mono font-bold">MENU</h3>
            <IoMdClose
              className="text-3xl text-[#04211F] cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <div className="w-[96%] h-[1px] bg-gray-400 mx-auto"></div>

          {/* signup login show if user not login*/}
          {isLoggedIn === null ? (
            <>
              <div className="pt-5">
                <div className="text-lg font-semibold flex flex-col items-center ">
                  <NavLink to="/register">
                    <span className=" px-10 py-2 rounded-3xl bg-green-500  text-white font-bold">
                      Sign up
                    </span>
                  </NavLink>
                </div>
                <div className="flex items-center text-lg text-black-600 cursor-pointer px-2 pt-6 py-2">
                  <FaArrowRightToBracket className="ml-1 mr-1" />
                  <NavLink to="/login">
                    <span>Log in</span>
                  </NavLink>
                </div>
              </div>
              <div className="w-[96%] h-[1px] bg-gray-400 mx-auto"></div>
            </>
          ) : (
            <div className="pt-3">
              <div
                className="flex flex-col items-start text-lg text-black cursor-pointer px-2 py-1 space-y-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="flex items-center space-x-2">
                  <FiUser />
                  <NavLink to={"/profile"}>
                    <span>
                      Hi,{" "}
                      {userName &&
                        userName.charAt(0).toUpperCase() + userName.slice(1)}
                    </span>
                  </NavLink>
                </div>
                <div className="w-[96%] h-[1px] bg-gray-400 mx-auto"></div>
                <div className="flex items-center space-x-2">
                  <FaRegHeart />
                  <NavLink to={"/cart"}>
                    <span>Favorite</span>
                  </NavLink>
                </div>
                <div className="w-[96%] h-[1px] bg-gray-400 mx-auto"></div>
                <div className="flex items-center space-x-2">
                  <FiShoppingCart />
                  <NavLink to={"/cart"}>
                    <span>Cart</span>
                  </NavLink>
                </div>
                <div className="w-[96%] h-[1px] bg-gray-400 mx-auto"></div>
              </div>
            </div>
          )}
          {/* signup login show end*/}

          {/* links section nav inline menu */}
          <p className="text-xl font-bold text-black cursor-pointer px-2 pt-3">
            Categories
          </p>
          <ul
            className="flex flex-col items-center text-[#04211F] font-harmonia text-[18px] space-y-2 w-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {categories.map((cat, index) => (
              <li key={index} className="w-full flex flex-col items-center">
                <NavLink
                  to={cat.path}
                  className="flex items-center justify-center cursor-pointer group w-full text-center"
                >
                  {cat.label}
                  <IoIosArrowDown className="inline ml-1 text-[16px] transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>
                <div className="w-[90%] h-[1px] bg-gray-200 mt-1"></div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* SLIDER TRANSTION END ======*/}




      {/* Desktop view  */}
      <div className="block max-[664px]:hidden">
        <div className="grid lg:grid-cols-[20%_60%_20%] sm:grid-cols-[25%_50%_25%] h-[60px] color-#04211F  font-harmonia bg-white p-4">
          {/* logo */}
          <div class="w-[140px] flex justify-center">
            <img src="aa.png" alt="logo" className="h-9" />
          </div>
          {/* serarch button */}
          <div class="bg-[#F2F2F2] h-[40px] rounded-[4px] py-2 px-2 flex items-center justify-between">
            <IoSearch className="text-[28px] text-[#04211F] cursor-pointer px-1" />
            <input
              type="text"
              placeholder="Search for products"
              className="w-full h-full bg-transparent outline-none text-[#04211F] text-[12px] font-harmonia"
            />
          </div>
          {/* icon */}
          <div class="flex justify-end lg:gap-8 sm:gap-4 sm:p-2 p-4">
            <NavLink to={"/cart"}>
              <FaRegHeart className="lg:text-[28px] sm:text-[22px] text-[#04211F] cursor-pointer" />
            </NavLink>

            {/* isLoggedIn  if value true tehen show prfile link other wise login */}
            <NavLink to={isLoggedIn?"/profile":"/login"}>
            {/* <NavLink to={"/profile"}> */}
              <FiUser className="lg:text-[28px] sm:text-[22px] text-[#04211F] cursor-pointer" />
            </NavLink>
            <NavLink to={"/cart"}>
              <FiShoppingCart className="lg:text-[28px] sm:text-[22px] text-[#04211F] cursor-pointer" />
            </NavLink>
          </div>
        </div>

        {/* links section nav inline menu */}
        <nav className="bg-white shadow-md py-4">
          <ul className="flex justify-center items-center lg:space-x-11 xl:space-x-14 sm:space-x-4 text-[#04211F] font-harmonia text-[10px] lg:text-[14px] xl:text-[20px]">
            {categories.map((cat, index) => (
              <li key={index} className="relative group cursor-pointer">
                <NavLink
                  to={cat.path}
                  className="flex items-center transition-colors duration-200 hover:text-green-700"
                >
                  {cat.label}
                  <IoIosArrowDown className="ml-1 text-[16px] transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
