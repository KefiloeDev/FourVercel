"use client"; // ensure this is client-side

import Logo from "@/app/components/Helper/Logo";
import { NAVLINKS } from "@/constant/conatant";
import Link from "next/link";
import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import MobileNav from "./MobileNav"; // make sure this path is correct

const Nav = () => {
  // State for mobile nav
  const [showNav, setShowNav] = useState(false);

  const openNav = () => setShowNav(true);
  const closeNav = () => setShowNav(false);

  return (
    <nav className="h-[12vh] relative z-50 lg:mt-8">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Logo />

        {/* Nav links for large screens */}
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

           {/* Contact Button */}
          {/* <Link href="/Contact">
            <button className="h-full p-4.5 bg-[#b69974] cursor-pointer text-white font-bold">
              Contact Us
            </button>
          </Link> */}
        </div> 

        {/* Hamburger Icon for mobile */}
        <div onClick={openNav} className="lg:hidden">
          <HiBars3BottomRight className="w-9 h-9 text-[#dfc39f] cursor-pointer" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav showNav={showNav} closeNav={closeNav} />
    </nav>
  );
};

export default Nav;
