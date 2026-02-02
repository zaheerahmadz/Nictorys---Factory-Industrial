import React from "react";
import Underline from "./Underline";
import CtnBtn from "./CtnBtn";
import News from "../Data/News";

const RecentNews = () => {
  return (
    <section className="w-[93%] mx-auto py-14">
      {/* Top 3-column section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Column 1 - Heading */}
        <div className="w-full lg:w-1/3">
          <p className="text-sm text-orange-600 font-semibold uppercase">
            Recent news
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl py-2 font-extrabold">
            See what’s happing
          </h2>

          <h3 className="text-2xl md:text-3xl lg:text-4xl">in our blog</h3>

          <Underline />
        </div>

        {/* Column 2 - Paragraph */}
        <div className="w-full lg:w-1/3">
          <p className="text-gray-500 text-md">
            Showed a lady fitted out with a fur hat and fur boa who sat upright,
            raising a heavy fur muff that covered the whole of her lower arm.
          </p>
        </div>

        {/* Column 3 - Button */}
        <div className="w-full lg:w-1/3 flex lg:justify-end">
          <CtnBtn />
        </div>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {News.map((item, index) => (
          <div key={index} className="rounded-md">
            <img
              className="rounded-md w-full h-56 object-cover"
              src={item.img}
              alt={item.id}
            />

            <h2 className="text-[20px] capitalize py-5 hover:text-orange-600 cursor-pointer transition-all duration-200 font-bold">
              {item.title}
            </h2>

            <p className="text-gray-500 font-semibold">{item.date}</p>

            <p className="text-gray-600 py-2 font-semibold">{item.info}</p>

            <a
              className="uppercase text-sm font-bold text-gray-700 hover:text-orange-600 underline"
              href="#"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentNews;
