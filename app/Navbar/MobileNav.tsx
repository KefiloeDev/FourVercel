import { NAVLINKS } from "@/constant/conatant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";



type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  
  return (
    <>
      {/* Only render overlay if nav is open */}
      {showNav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-[#9f7c4e] z-50 transform transition-transform duration-500 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
        />

        <div className="flex flex-col justify-center h-full space-y-6 ml-12">
          {NAVLINKS.map((link) => (
            <Link key={link.id} href={link.url} onClick={closeNav}>
              <p className="text-white text-[20px] sm:text-[30px] border-b-[1.5px] border-white w-fit pb-1 cursor-pointer">
                {link.lable}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
