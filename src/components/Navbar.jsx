import React from "react";
import { IoTimeOutline, IoSearch } from "react-icons/io5";
import { useState } from "react";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaMobileAlt,
  FaAngleDown,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const services = [
    "Services",
    "Services Style 2",
    "Power & Energy",
    "Mechanical Works",
    "Petroleum Refinery",
    "Oil & Gas Industry",
    "Logistics Services",
    "General Industry",
  ];
  const pages = ["About", "Terminologies", "Team", "FAQs", "404", "Contact"];

  return (
    <>
      <div className="w-full bg-[#020D26] text-white hidden lg:block">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center">
              <div className="flex items-center gap-2 px-4 border-r border-gray-600">
                <FaMobileAlt className="text-orange-600" />
                <span>+884574156414</span>
              </div>
              <div className="flex items-center gap-2 px-4 border-r border-gray-600">
                <HiOutlineMail className="text-orange-600" />
                <span>example@mail.com</span>
              </div>
              <div className="flex items-center gap-2 px-4">
                <IoTimeOutline className="text-orange-600" />
                <span>Sun – Fri 10AM – 8PM</span>
              </div>
            </div>

            <div className="flex items-center h-full">
              {[FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center h-full px-4 border-l border-gray-600 hover:text-orange-600 transition"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="w-full bg-white px-5 py-4 flex items-center justify-between lg:justify-around">
        <img
          width={180}
          className="cursor-pointer"
          src="https://quomodosoft.com/html/nictorys/assets/images/logo-2.png"
          alt="logo"
        />

        <ul className="hidden lg:flex items-center gap-6 uppercase text-[13px] font-semibold">
          <li className="hover:text-orange-600">
            <a href="#">Home</a>
          </li>

          <li className="relative group flex items-center gap-2 cursor-pointer">
            <span className="hover:text-orange-600">Pages</span>
            <FaAngleDown className="text-xs mt-1" />

            <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="divide-y divide-gray-200">
                {pages.map((item, index) => (
                  <li
                    key={index}
                    className="px-5 py-3 text-sm hover:text-orange-700 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="relative group flex items-center gap-2 cursor-pointer">
            <span className="hover:text-orange-600">Services</span>
            <FaAngleDown className="text-xs mt-1" />

            <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="divide-y divide-gray-200">
                {services.map((item, index) => (
                  <li
                    key={index}
                    className="px-5 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-orange-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="hover:text-orange-600 flex items-center gap-2">
            <a href="#">Projects</a>
          </li>

          <li className="hover:text-orange-600">
            <a href="#">Blog</a>
          </li>

          <li className="hover:text-orange-600">
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <div className="relative">
            <div
              onClick={() => setShowSearch(!showSearch)}
              className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
            >
              <IoSearch className="text-white text-lg" />
            </div>

            {showSearch && (
              <div className="absolute right-0 top-14 w-64 bg-white shadow-lg border border-gray-200 rounded-md p-2 z-50">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here"
                    className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-orange-600"
                  />
                  <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            )}
          </div>

          <GiHamburgerMenu
            size={36}
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white bg-orange-600 p-2 rounded cursor-pointer"
          />
          <div
            className={`fixed inset-0 z-50 transition-all duration-300 ${
              mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60"
            />

            <div
              className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              <ul className="px-6 space-y-4 text-sm font-semibold uppercase">
                {[
                  "Home",
                  "Pages",
                  "Services",
                  "Projects",
                  "Blog",
                  "Contact",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b pb-3 cursor-pointer"
                  >
                    {item}
                    {item !== "Contact" && <span className="text-lg">+</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="hidden lg:flex cursor-pointer items-center px-5 py-3 rounded-full bg-orange-600 hover:bg-orange-700 transition text-sm font-semibold text-white">
            GET A QUOTE
            <MdNavigateNext size={24} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
