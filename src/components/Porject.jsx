import React from "react";
import Underline from "./Underline";

const Porject = () => {
  return (
    <>
      <section className="flex bg-white py-20 flex-col justify-center lg:flex-row items-center gap-10 lg:gap-20 w-[93%] mx-auto">
        <div className="">
          <div className="text-center">
            <p className="text-sm text-orange-600 tracking-widest  py-2 font-semibold uppercase">
              Projects
            </p>
            <h2 className="text-33xl md:text-3xl lg:text-4xl py-2 font-bold">
              See Latest Projects
            </h2>
            <h3 className="text-3xl md:text-3xl lg:text-4xl">For our client</h3>
            <div className="flex justify-center">
              <Underline />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Porject;
