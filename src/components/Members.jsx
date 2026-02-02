import React from "react";
import Underline from "./Underline";
import Person from "../Data/Person";
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";

const Members = () => {
  return (
    <section className="flex bg-white py-20 flex-col justify-center lg:flex-row items-center gap-10 lg:gap-20 w-[93%] mx-auto">
      <div className="w-full">
        <div className="text-center">
          <p className="text-sm text-orange-600 tracking-widest py-2 font-semibold uppercase">
            Members
          </p>
          <h2 className="text-3xl md:text-3xl lg:text-4xl py-2 font-bold">
            Our Dedicated Team
          </h2>
          <h3 className="text-3xl md:text-3xl lg:text-4xl">For your service</h3>
          <div className="flex justify-center">
            <Underline />
          </div>
          <div className="grid grid-cols-2 py-5 lg:grid-cols-4 gap-6 rounded-md ">
            {Person.map((item, index) => {
              const { img, firstName, job } = item;
              return (
                <div
                  key={index}
                  className="relative p-5 group rounded-md overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={firstName}
                    className="w-full h-auto rounded-md object-cover"
                  />
                  {/* Hover overlay with icons */}
                  <div className="absolute inset-0 bg-gray-400 cursor-pointer bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                    <a
                      href="#"
                      className="text-white hover:text-orange-500 text-xl"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-orange-500 text-xl"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-orange-500 text-xl"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                  <h2 className="font-semibold mt-3">{firstName}</h2>
                  <h3 className="text-sm text-orange-600">{job}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
