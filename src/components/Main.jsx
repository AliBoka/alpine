import React from "react";
import "../index.css";
import facebook from "../assets/facebook_logo.png";
import insta from "../assets/insta-logo.png";
import twitter from "../assets/twitter-logo.png";
import youtube from "../assets/unnamed 1.png";
import pinterest from "../assets/pinterest_logo.png";
import google from "../assets/Google-logo.png";
import post1 from "../assets/post-1.png";
import post2 from "../assets/post-2.png";
import post3 from "../assets/post-3.png";
import messageLogo from "../assets/message-logo.png";
import pen from '../assets/pen.png'

const Main = () => {
  return (
    <div className="flex flex-col relative mx-8 md:mx-28 xl:mx-36 mt-14 px-6 py-12 bg-linear-bg h-[900px] shadow-rgba-shadow border-rgba-gray text-white">
      <div className="w-96 flex flex-col">
        <div className="font-paytoneone mb-3">
          <h1 className="text-4xl">ALPINE</h1>
          <h4 className="text-lg mt-1">SOCIAL MEDIA MARKETING PLATFORM</h4>
        </div>
        <p className="text-justify">
          The core systems of record for marketing that provide a common way of
          orchestring the experiences across channels and applications,
          including operational managment and measurement, with the ultimate
          goal of driving customer engagement.
        </p>
        <div className="mt-6 flex">
          <input
            type="text"
            placeholder="Enter your work email !"
            className="rounded-full bg-transparent bord border-2 border-rgba-white text-sm box-border pt-[2px] pb-1 px-6 mr-3 w-9/12 placeholder:text-xs "
          />
          <button className="rounded-full bg-transparent bord border-2 border-[#FF1640] text-xs box-border px-2 flex  py-[7px] justify-center items-center mr-3 w-4/12 text-rgba-white hover:bg-[#FF1640] hover:text-white">
            Request access
          </button>
        </div>
      </div>
      <div className="border-t border-rgba-gray mt-14 w-full  "></div>
      <div className="flex flex-col">
        <div
          className="my-3 p-4 w-full flex h-9 justify-center items-center mx-2
  "
        >
          <img
            className=" mr-4 mb-2 cursor-pointer"
            src={facebook}
            alt="facebook"
          />
          <img className=" mr-4 cursor-pointer" src={insta} alt="insta" />
          <img className=" mr-4 cursor-pointer" src={twitter} alt="twitter" />
          <img className=" mr-4 cursor-pointer" src={youtube} alt="youtube" />
          <img
            className=" mr-4 cursor-pointer"
            src={pinterest}
            alt="pinterest"
          />
          <img className=" mr-4 cursor-pointer" src={google} alt="google" />
        </div>
        <div className="flex flex-col">
          <div className="grid grid-flow-col w-full px-5 py-7 relative ">
            <img src={post1} alt="coffee" className="w-full" />
            <img src={post2} alt="coffee" className="w-full" />
            <img src={post3} alt="coffee" className="w-full" />
          </div>
          <div className="my-5 flex justify-center h-8">
            <h3 className="font-paytoneone text-xl mr-2">MARKETING</h3>
            {/* <div className="border-t-2 border-white border-dashed w-full "></div> */}
           <div className="flex -mt-1"> __ __ __ __ __ __ __ __ __ __ __ __</div> 
           <div className="flex h-8">
            <img src={messageLogo} alt="" className="mx-2 h-7" />
            <button className="flex justify-center items-center py-2 px-4 bg-amber-900 w-36 rounded-2xl text-sm">
              <img src={pen} alt="" className="mr-2 "/> Start a thread
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
