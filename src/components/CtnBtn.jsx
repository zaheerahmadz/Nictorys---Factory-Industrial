import React from "react";
import { MdNavigateNext } from "react-icons/md";

const CtnBtn = () => {
  return (
    <button className="hidden lg:flex cursor-pointer items-center px-5 py-3 rounded-md bg-orange-600 hover:bg-orange-700 transition text-sm font-semibold text-white">
      GET A QUOTE
      <MdNavigateNext size={24} />
    </button>
  );
};

export default CtnBtn;
