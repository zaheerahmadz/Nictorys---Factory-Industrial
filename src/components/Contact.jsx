import React from "react";
import Underline from "./Underline";
import { GrNext } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="w-full py-20">
      <section className="flex flex-col lg:flex-row items-center w-[93%] mx-auto gap-10 lg:gap-20">
        <div className="w-full lg:w-1/2">
          <img
            className="w-2/3 h-auto"
            src="https://quomodosoft.com/html/nictorys/assets/images/contact-man.png"
            alt="contact"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <p className="text-sm text-orange-600 font-semibold uppercase">
            Contact us
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl py-2 font-bold">
            You can contact us,
          </h2>

          <h3 className="text-2xl md:text-3xl lg:text-4xl">
            if you have any query
          </h3>

          <Underline />

          <form className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name*"
                className="border border-cyan-200 p-4 outline-none focus:border-orange-500 w-full"
              />
              <input
                type="email"
                placeholder="Email*"
                className="border border-cyan-200 p-4 outline-none focus:border-orange-500 w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone*"
                className="border border-cyan-200 p-4 outline-none focus:border-orange-500 w-full"
              />
              <select className="border border-cyan-200 p-4 outline-none focus:border-orange-500 text-gray-500 w-full">
                <option>Contact subject</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Business</option>
              </select>
            </div>

            <textarea
              rows="6"
              placeholder="Case Description..."
              className="w-full border border-cyan-200 p-4 outline-none resize-none focus:border-orange-500"
            ></textarea>

            <button
              type="submit"
              className="flex items-center bg-orange-600 text-white px-9 py-3 rounded-full font-semibold gap-3 hover:bg-orange-700 transition"
            >
              SUBMIT NOW
              <GrNext size={20} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
