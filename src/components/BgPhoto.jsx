import React from "react";
import CtnBtn from "./CtnBtn";
import { MdNavigateNext } from "react-icons/md";

const BgPhoto = () => {
  return (
    <>
      <section
        className="h-140 bg-cover bg-center  flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2585539/pexels-photo-2585539.jpeg?cs=srgb&dl=pexels-kelly-2585539.jpg&fm=jpg')",
        }}
      >
        <h2 className="text-2xl lg:text-3xl lg:mt-20">
          We take care of your industry
        </h2>
        <div className=" sm:w-full lg:w-2/3 py-2 text-center">
          <h2 className="mt-4 text-4xl lg:text-7xl font-bold">
            Best industrial solution in the world
          </h2>
          <div className="flex justify-center my-5">
            <button className=" flex  cursor-pointer items-center px-5 py-3 rounded-full bg-orange-600 hover:bg-orange-700 transition text-sm font-semibold text-white">
              CONTACT US
              <MdNavigateNext size={24} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BgPhoto;
