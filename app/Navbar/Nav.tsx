"use client";

import Logo from "@/app/components/Helper/Logo";
import { NAVLINKS } from "@/constant/conatant";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <nav className="h-[12vh] relative z-50 lg:mt-8">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        
        {/* LOGO */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex bg-white h-[10vh] md:pl-4 items-center space-x-10 p-2">
          {NAVLINKS.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-black hover:text-[#9f7c4e] font-semibold transition-all duration-200"
            >
              <p>{link.lable}</p>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div onClick={openNav} className="lg:hidden">
          <HiBars3BottomRight className="w-9 h-9 text-[#dfc39f] cursor-pointer" />
        </div>

      </div>
    </nav>
  );
};

export default Nav;