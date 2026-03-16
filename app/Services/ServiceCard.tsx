import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  icon: string;
};

const ServiceCard = ({ icon, image }: Props) => {
  return (
    <div className="rounded-lg group overflow-hidden bg-white">
      {/* Main image */}
      {/* <Image src={image} alt="img" width={300} height={179} /> */}
      <div className="p-4">
        <div className="w-22 h-22 -mt-14 relative group-hover:bg-black transition-all duration-200 z-10 ml-auto rounded-lg flex items-center justify-center flex-col bg-[#b69974]">
          {/* Icon image */}
          {/* <Image src={icon} alt="icon" width={60} height={60} /> */}
        </div>
        <div className="w-16 mt-6 h-px bg-gray-700"></div>
        <h1 className="text-gray-700 mt-2 text-sm">Our Services</h1>
        <p className="text-gray-800 mb-4 mt-2 font-semibold">Work From Home</p>
      </div>
    </div>
  );
};

export default ServiceCard;
