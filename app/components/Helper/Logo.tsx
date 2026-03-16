import React from "react";
import { BiSolidBusiness } from "react-icons/bi";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center ">
      <div className=" rounded-full flex items-center justify-center flex-col">
        {/* <BiSolidBusiness className="w-6 h-6 text-white" /> */}
        <Image src="/images/LOGO.png" width={100} height={100} alt="img" />
      </div>
      <h1 className="text-xl hidden sm:block md:text-2xl text-[#d5b68c] font-bold">
        4FOUR
      </h1>
    </div>
  );
};

export default Logo;
