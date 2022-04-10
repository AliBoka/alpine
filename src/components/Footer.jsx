import React from "react";
import { FaVk, FaTwitter, FaFacebookF } from "react-icons/fa";
import smile from '../assets/smile.png'
const Footer = () => {
  return (
    <div className="flex w-full bg-footer-bg text-white bg-cover bg-no-repeat">
      <div className="flex flex-col justify-between p-7 w-full">
        <div className="flex w-1/2">
          <div className="flex justify-between w-full">
            <h1 className="text-3xl font-paytoneone">ALPINE</h1>
            <div className="flex flex-col px-3 justify-between">
              <h5 className="text-sm font-semibold">EXPLORE</h5>
              <p className="text-xs my-3"> Pricing</p>
              <p className="text-xs "> Mobile</p>
            </div>
            <div className="flex flex-col px-3 ">
              <h5 className="text-sm font-semibold">RECOURCES</h5>
              <p className="text-xs my-3"> Blog</p>
            </div>
            <div className="flex flex-col  px-3 justify-between">
              <h5 className="text-sm font-semibold">COMPANY</h5>
              <p className="text-xs my-3"> About us</p>
              <p className="text-xs "> Contact</p>
            </div>
          </div>
          <div className="flex justify-end absolute right-12">
              <div className="flex flex-col ">
                  <div className="flex justify-between w-24 ">
                      <FaVk/>
                      <FaTwitter/>
                      <FaFacebookF/>
                  </div>
                  <p className="text-xs font-medium my-2">Terms & Privacy</p>
                  <p className="text-xs"> © 2019 Threads Group inc.</p>
              </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full pt-10 pb-8">
            <div className="bg-white p-3 flex w-96  justify-center items-center text-black font-paytoneone">THANKS FOR WATCHING 
            <img src={smile} alt="smile" className="w-5 h-5 ml-2" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
