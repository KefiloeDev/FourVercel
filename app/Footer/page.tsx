import Logo from "@/app/components/Helper/Logo";
import Image from "next/image";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Top part */}
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* 1st part */}
        <div>
          {/* LOGO */}
          <Logo />
          
          {/* socials links */}
          <div className="flex items-center space-x-4 mt-6">
            {/* facebook icon */}
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-blue-600 transition-all duration-300">
              <FaFacebookF className="w-6 h-6 text-white" />
            </div>
            {/* Youtube */}
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-red-600 transition-all duration-300">
              <FaYoutube className="w-6 h-6 text-white" />
            </div>
            {/* Instagram */}
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-pink-600 transition-all duration-300">
              <FaInstagram className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* 2nd part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">Address</h1>
          <div className="mt-8">
            {/* Address */}
            <div className="flex items-center space-x-5">
              <FaPaperPlane className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">
                Randburg <br /> Johnnesburg{" "}
              </p>
            </div>
            {/* Phone */}
            <a
  href="https://wa.me/27719477676"
  target="_blank"
  rel="noopener noreferrer"
  className="flex mb-5 mt-5 items-center space-x-5 cursor-pointer"
>
  <FaPhone className="w-5 h-5 text-white" />
  <p className="font-medium text-sm text-white">
    +27 (71) 947 7676
  </p>
</a>
            {/* Email */}
            <div className="flex items-center space-x-5">
              <IoMailOpen className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">
                nthutekashe@4-four.co.za
              </p>
            </div>
          </div>
        </div>
        {/* 3rd part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">Services</h1>
          <div className="mt-8">
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">Payroll functions</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">Bookkeeping</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">Tax Consultation </p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">
                CIPC and SARS registrations/matters 
              </p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">Other advisory and compliance services</p>
            </div>
          </div>
        </div>
        
      </div>
      {/* Bottom part */}
      <div className="border-t-2 w-[80%] mx-auto border-gray-700 mt-8">
        <p className="mt-8 text-gray-300">
          4FOUR ACCOUNTING AND TAX SOLUTIONS (PTY) LTD | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
