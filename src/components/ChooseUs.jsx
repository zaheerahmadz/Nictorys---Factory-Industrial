import React from "react";
import Underline from "./Underline";
import ProgressBar from "./ProgressBar";

const ChooseUs = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-[93%] mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <p className="text-sm text-orange-600 font-semibold uppercase">
            Why Choose us
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl py-2 font-bold">
            37 years of experience,
          </h2>

          <h3 className="text-2xl md:text-3xl lg:text-4xl">in this industry</h3>

          <Underline />

          <p className="text-gray-500 text-base md:text-lg mb-4 pr-2 lg:pr-10">
            Cut out of an illustrated magazine and housed in a nice, gilded
            frame. It showed a lady fitted out with a fur hat and fur boa who
            sat upright, raising a heavy fur muff that covered the whole of her
            lower arm towards the viewer ne and housed in a nice, gilded frame.
            It showed a lady fitted out with
          </p>
          <div className="w-full flex justify-start">
            <ProgressBar />
          </div>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img
            className="w-full h-120 object-cover rounded-lg"
            src="https://quomodosoft.com/html/nictorys/assets/images/skill-img.jpg"
            alt="About"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
