import React, { useState } from "react";
import { IoTimeOutline, IoSearch } from "react-icons/io5";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaMobileAlt,
  FaAngleDown,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import CtnBtn from "./CtnBtn";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    "Power & Energy",
    "Mechanical Works",
    "Petroleum Refinery",
    "Oil & Gas Industry",
    "Logistics Services",
    "General Industry",
  ];

  const pages = ["About", "Team", "FAQs", "Contact"];

  return (
    <>
      {/* ===== Top Bar ===== */}
      <div className="w-full bg-[#020D26] text-white hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-10 text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FaMobileAlt className="text-orange-600" />
              +884574156414
            </span>
            <span className="flex items-center gap-2">
              <HiOutlineMail className="text-orange-600" />
              example@mail.com
            </span>
            <span className="flex items-center gap-2">
              <IoTimeOutline className="text-orange-600" />
              Sun – Fri 10AM – 8PM
            </span>
          </div>

          <div className="flex">
            {[FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP].map(
              (Icon, i) => (
                <a key={i} href="#" className="px-3 hover:text-orange-600">
                  <Icon />
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      {/* ===== Navbar ===== */}
      <nav className="w-full bg-white shadow-md relative overflow-visible">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <img
            src="https://quomodosoft.com/html/nictorys/assets/images/logo-2.png"
            alt="logo"
            className="w-40 md:w-48 cursor-pointer"
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 uppercase text-[13px] font-semibold">
            <li className="hover:text-orange-600 cursor-pointer">Home</li>

            {/* Pages */}
            <li className="relative group cursor-pointer flex items-center gap-1">
              Pages <FaAngleDown className="text-xs" />
              <div
                className="absolute left-0 top-12 w-52 bg-white rounded shadow-lg
                opacity-0 invisible group-hover:visible group-hover:opacity-100
                transition-all duration-300 z-50"
              >
                {pages.map((item, i) => (
                  <p
                    key={i}
                    className="px-5 py-3 hover:bg-gray-100 hover:text-orange-600"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </li>

            {/* Services */}
            <li className="relative group cursor-pointer flex items-center gap-1">
              Services <FaAngleDown className="text-xs" />
              <div
                className="absolute left-0 top-12 w-60 bg-white rounded shadow-lg
                opacity-0 invisible group-hover:visible group-hover:opacity-100
                transition-all duration-300 z-50"
              >
                {services.map((item, i) => (
                  <p
                    key={i}
                    className="px-5 py-3 hover:bg-gray-100 hover:text-orange-600"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </li>

            <li className="hover:text-orange-600 cursor-pointer">Projects</li>
            <li className="hover:text-orange-600 cursor-pointer">Blog</li>
            <li className="hover:text-orange-600 cursor-pointer">Contact</li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <CtnBtn />
            </div>

            <GiHamburgerMenu
              size={34}
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white bg-orange-600 p-2 rounded cursor-pointer"
            />
          </div>
        </div>
      </nav>

      {/* ===== Mobile Drawer ===== */}
      <div
        className={`fixed inset-0 z-50 transition ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/60"
        />

        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setMobileMenuOpen(false)}>✕</button>
          </div>

          <ul className="px-6 space-y-5 text-sm font-semibold uppercase">
            <li>Home</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
