import React from "react";
import Underline from "./Underline";
import { GoSun } from "react-icons/go";
import { IoIosGitNetwork } from "react-icons/io";
import { GiSodaCan } from "react-icons/gi";
import { FaOilCan } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdWarehouse } from "react-icons/md";
import Data from "../Data/Data";
import SingleService from "./SingleService";
const Services = () => {
  return (
    <>
      <div className="w-full bg-gray-50">
        <section className="flex bg-gray-50 py-20 flex-col justify-center lg:flex-row items-center gap-10 lg:gap-20 w-[93%] mx-auto">
          <div className="text-center">
            <p className="text-sm text-orange-600 tracking-widest  py-2 font-semibold uppercase">
              Services
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl py-2 font-bold">
              The Best Services
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl">we provide</h3>
            <div className="flex justify-center">
              <Underline />
            </div>
            <div className="grid col-1 my-4 md:grid-cols-2 lg:grid-cols-3 gap-3 shadow ">
              {Data.map((item, index) => {
                return <SingleService {...item} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
