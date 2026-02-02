import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import Underline from "./Underline";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <section className="w-[93%] mx-auto py-16">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div>
            <h2 className="font-bold text-xl uppercase">About Us</h2>
            <Underline />
            <p className="mt-4 text-gray-300">
              Who sat upright, raising a heavy fur muff that covered the whole
              of her lower arm towards the viewer.
            </p>

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center border border-white rounded-md hover:bg-orange-600 hover:border-orange-600 transition-all duration-300"
                  >
                    <Icon className="text-lg" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="font-bold text-xl uppercase">Important Links</h2>
            <Underline />

            <div className="grid grid-cols-2 gap-8 mt-6 text-gray-300">
              <div className="space-y-3 border-l border-white/30 pl-4">
                <p className="hover:text-orange-600 cursor-pointer">About Us</p>
                <p className="hover:text-orange-600 cursor-pointer">The Team</p>
                <p className="hover:text-orange-600 cursor-pointer">
                  Our Services
                </p>
                <p className="hover:text-orange-600 cursor-pointer">Contact</p>
              </div>

              <div className="space-y-3 border-l border-white/30 pl-4">
                <p className="hover:text-orange-600 cursor-pointer">
                  Privacy Policy
                </p>
                <p className="hover:text-orange-600 cursor-pointer">FAQ</p>
                <p className="hover:text-orange-600 cursor-pointer">News</p>
                <p className="hover:text-orange-600 cursor-pointer">
                  Testimonials
                </p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h2 className="font-bold text-xl uppercase">Address Location</h2>
            <Underline />
            <div className="mt-6 space-y-3 text-gray-300">
              <p>House no 25, Green street, Melbourne Downtown</p>
              <p>Phone: +852 5120</p>
              <p>Office Time: 8AM - 4PM</p>
              <p>Email: demo@ex.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-bold text-xl uppercase">Newsletter</h2>
            <Underline />
            <p className="mt-4 text-gray-300">
              You will be notified when something new appears.
            </p>

            {/* Input with icon */}
            <div className="relative mt-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 pr-14 rounded-md bg-transparent border border-white/40 focus:outline-none focus:border-orange-600 text-white placeholder-gray-400"
              />
              <MdMarkEmailUnread className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-orange-600 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
