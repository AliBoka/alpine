import React from "react";
import "../index.css";
const Main = () => {
  return (
    <div className="flex mx-8 md:mx-28 xl:mx-36 mt-14 px-6 py-12 bg-linear-bg h-[900px] shadow-rgba-shadow border-rgba-gray text-white">
      <div className="w-96 flex flex-col">
        <div className="font-paytoneone mb-3">
          <h1 className="text-4xl">ALPINE</h1>
          <h4 className="text-lg mt-1">SOCIAL MEDIA MARKETING PLATFORM</h4>
        </div>
        <p className="text-justify">The core systems of record for marketing that provide a common way of orchestring the experiences across channels and applications, including operational managment and measurement, with the ultimate goal of driving customer engagement.</p>
      <div className="mt-6 flex">
          <input type="text" placeholder="Enter your work email !" className="rounded-full bg-transparent bord border-2 border-rgba-white text-sm box-border pt-[2px] pb-1 px-6 mr-3 w-9/12 placeholder:text-xs " />
          <button className="rounded-full bg-transparent bord border-2 border-[#FF1640] text-xs box-border px-2 flex  py-[7px] justify-center items-center mr-3 w-4/12 text-rgba-white hover:bg-[#FF1640] hover:text-white">
          Request access
          </button>
      </div>
      </div>
    </div>
  );
};

export default Main;
