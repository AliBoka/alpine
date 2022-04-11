import React, { useState } from "react";
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
import pen from "../assets/pen.png";
import circle from "../assets/Group 2.png";
import Rosario from "../assets/Rosario-img.png";
import RosarioIcon from "../assets/Rosario-icon.png";
import Dan from "../assets/Dan-img.png";
import DanIcon from "../assets/Dan-icon.png";

const Main = () => {
  return (
    <div className="flex flex-col relative mx-8 md:mx-28 xl:mx-36 mt-14 px-6 py-12 bg-linear-bg  shadow-rgba-shadow border-rgba-gray text-white">
      <div className="w-96 xl:w-[35rem] flex flex-col">
        <div className="font-paytoneone mb-3">
          <h1 className="text-4xl xl:text-6xl">ALPINE</h1>
          <h4 className="text-lg xl:text-2xl mt-1">SOCIAL MEDIA MARKETING PLATFORM</h4>
        </div>
        <p className="text-justify xl:text-xl">
          The core systems of record for marketing that provide a common way of
          orchestring the experiences across channels and applications,
          including operational managment and measurement, with the ultimate
          goal of driving customer engagement.
        </p>
        <div className="mt-6 flex">
          <input
            type="text"
            placeholder="Enter your work email !"
            className="rounded-full bg-transparent  border-2 border-rgba-white text-sm xl:text-lg box-border pt-[2px] pb-1 px-6 mr-3 w-9/12 placeholder:text-xs xl:placeholder:text-sm "
          />
          <button className="rounded-full bg-transparent bord border-2 border-[#FF1640] text-xs box-border px-2 flex  py-[7px] justify-center items-center mr-3 w-4/12 text-rgba-white hover:bg-[#FF1640] hover:text-white xl:text-sm">
            Request access
          </button>
        </div>
      </div>
      <div className="border-t border-rgba-gray mt-14 w-full  "></div>
      <div className="flex flex-col">
        <div
          className="my-3 p-4 px-8 xl:px-14 w-full flex h-9 justify-between items-center mx-2
  "
        >
          <img
            className="  mb-2 cursor-pointer"
            src={facebook}
            alt="facebook"
          />
          <img className="  cursor-pointer" src={insta} alt="insta" />
          <img className="  cursor-pointer" src={twitter} alt="twitter" />
          <img className="  cursor-pointer" src={youtube} alt="youtube" />
          <img
            className="  cursor-pointer"
            src={pinterest}
            alt="pinterest"
          />
          <img className="  cursor-pointer" src={google} alt="google" />
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
            <div className="flex -mt-1">
              {" "}
              __ __ __ __ __ __ __ __ __ __ __ __
            </div>
            <div className="flex h-8 ">
              <img src={messageLogo} alt="" className="mx-2 h-7" />
              <button className="flex justify-center items-center py-2 px-4 bg-amber-900 w-36 rounded-2xl text-sm">
                <img src={pen} alt="" className="mr-2 " /> Start a thread
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 px-14 pb-28">
          <div className="flex">
            <div className="flex items-center  w-1/2">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center rounded-full bg-[#FF1640] w-9 h-9 text-xl font-bold mr-2">
                      1
                    </div>
                    <h3 className="flex items-center">Unread Notifications</h3>
                  </div>
                  <button className="flex justify-center items-center py-1 pl-2 pr-3 rounded-3xl text-black bg-light-gray">
                    <img src={circle} alt="circle" className="mr-1" /> Dismiss
                    all
                  </button>
                </div>
                <div className="flex justify-between bg-white-bg bg-cover mt-5 text-black w-full p-6">
                  <div className="flex items-start w-auto">
                    <div className="mr-3 relative w-10">
                      <img
                        src={Rosario}
                        alt="Rosario-img"
                        className="w-10 h-10"
                      />
                      <img
                        src={RosarioIcon}
                        alt="Rosario-icon"
                        className="absolute -bottom-1 -right-1"
                      />
                    </div>
                    <div className="flex flex-col w-14 ">
                      <p className="font-medium text-sm">Rosario</p>
                      <p className=" text-sm font-extralight w-full">
                        just now
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col pl-8">
                    <h3 className="font-bold xl:text-xl">Showcasing Customers</h3>
                    <p className="text-sm xl:text-lg  mt-3 w-full">
                      Our customers have continued to send in pictures of their
                      finished artwork...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 pl-12 text-justify justify-center">
              <h3 className="text-xl xl:text-2xl xl:font-bold font-medium">Start thread</h3>
              <p className="text-sm xl:text-lg mt-3 font-light tracking-widest">
                Technology trends have the potential to drive significant
                disruption and deliver significant opportunity. Digital trends
                such as autonomous things, blockchain, digital twins and smart
                spaces are rapidly approaching maturity.
              </p>
            </div>
          </div>
          <div className="flex mt-20">
            <div className="flex items-center  w-1/2">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h3 className="flex items-center">Recent</h3>
                  <div className="flex justify-center items-center py-1 pl-2 pr-3 rounded-3xl text-black bg-light-gray">
                    Unread

                    <label htmlFor="toggle-switch" className="flex ml-3">
                      <input type="checkbox"  id="toggle-switch" className="cursor-pointer h-7 w-14 rounded-full appearance-none bg-white bg-opacity-5 checked:bg-[#ff1640] transition-all duration-300 relative" />
                    </label>
                   

                   
                  </div>
                </div>
                <div className="flex justify-between bg-white-bg bg-cover mt-5 text-black w-full p-6">
                  <div className="flex items-start w-auto">
                    <div className="mr-3 relative w-10">
                      <img src={Dan} alt="Dan-img" className="w-10 h-10" />
                      <img
                        src={DanIcon}
                        alt="Dan-icon"
                        className="absolute -bottom-1 -right-1"
                      />
                    </div>
                    <div className="flex flex-col w-14 ">
                      <p className="font-medium text-sm">Dan</p>
                      <p className=" text-sm font-extralight w-full">
                        2 hrs ago
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col pl-8">
                    <h3 className="font-bold xl:text-xl">Thoughts on attendin...</h3>
                    <p className="text-sm xl:text-lg  mt-3 w-full">
                      Our customers have continued to send in pictures of their
                      finished artwork...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 pl-12 text-justify justify-center">
              <h3 className="text-xl xl:text-2xl xl:font-bold font-medium">Mark the decision</h3>
              <p className="text-sm xl:text-lg mt-3 font-light tracking-widest">
                This continuous technology innovation will enable the alignment
                of the physical and digital worlds and create competitive
                advantage for some. Are you ready?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
