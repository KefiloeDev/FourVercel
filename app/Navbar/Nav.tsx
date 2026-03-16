"use client";

import React from "react";
import Logo from "@/app/components/Helper/Logo";
import { NAVLINKS } from "@/constant/conatant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type NavProps = {
  openNav: () => void; // called when hamburger is clicked
};

const Nav = ({ openNav }: NavProps) => {
  return (
    <nav className="h-[12vh] relative z-50 lg:mt-8">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />

        {/* Desktop links */}
        <div className="hidden lg:flex bg-white h-[10vh] md:pl-4 items-center space-x-10 p-2">
          {NAVLINKS.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-black hover:text-[#9f7c4e] font-semibold transition-all duration-200"
            >
              {link.lable}
            </Link>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <div onClick={openNav} className="lg:hidden cursor-pointer">
          <HiBars3BottomRight className="w-9 h-9 text-[#dfc39f]" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;