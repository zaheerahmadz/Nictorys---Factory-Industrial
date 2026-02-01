import React from "react";

const SingleService = ({ title, info, img, Icon }) => {
  return (
    <div className="card">
      <img className="w-full rounded-md" src={img} alt={title} />
      <div className="flex items-center gap-3 p-2">
        <Icon className="text-7xl text-orange-600" />
        <div className="text-start p-5">
          <h2 className="font-semibold cursor-pointer hover:text-orange-600 ">
            {title}
          </h2>
          <p className="text-gray-500">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
