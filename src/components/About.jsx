import React from "react";
import { CiCircleChevRight } from "react-icons/ci";
import Underline from "./Underline";

const About = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-[93%] mx-auto">
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img
            className="w-full h-auto rounded-lg"
            src="https://quomodosoft.com/html/nictorys/assets/images/about-s2.jpg"
            alt="About"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <p className="text-sm text-orange-600 font-semibold uppercase">
            About us
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl py-2 font-bold">
            Most Modern & Powerful
          </h2>

          <h3 className="text-2xl md:text-3xl lg:text-4xl">
            Industry in the world
          </h3>

          <Underline />

          <p className="text-gray-500 text-base md:text-lg mb-4 pr-2 lg:pr-10">
            A collection of textile
            <span className="font-bold px-1">
              samples lay spread out on the table
            </span>
            Samsa was a travelling salesman and above it there hung a picture
            that he had recently cut out of an illustrated magazine and housed
            in a nice, gilded frame.
          </p>

          <div className="space-y-3">
            {[
              "Fitted out with a fur hat and fur boa",
              "Fitted out with a fur hat and fur boa",
              "It showed a lady fitted out with a fur hat and fur boa who sat",
              "Samsa was a travelling salesman and above it there hung",
              "Muff that covered the whole of her",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <CiCircleChevRight className="text-xl text-orange-600" />
                <p className="text-gray-500">{text}</p>
              </div>
            ))}
          </div>

          <div className="bg-pink-100 px-5 py-4 w-full mt-6 rounded-md">
            <p className="text-gray-600 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              explicabo nemo ab iste laboriosam deserunt ipsa eius dolores
              veritatis.
            </p>
            <p className="text-gray-600 mt-3">- Adam ( CEO of the company )</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
