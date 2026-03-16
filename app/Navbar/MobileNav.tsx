"use client";

import React from "react";
import Link from "next/link";
import { NAVLINKS } from "@/constant/conatant";

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
  if (!showNav) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex flex-col items-center justify-center space-y-6">
      {NAVLINKS.map((link) => (
        <Link
          href={link.url}
          key={link.id}
          className="text-white text-2xl font-semibold"
          onClick={closeNav}
        >
          {link.lable}
        </Link>
      ))}
      <button
        onClick={closeNav}
        className="mt-6 px-6 py-3 bg-[#dfc39f] text-black font-bold rounded"
      >
        Close
      </button>
    </div>
  );
};

export default MobileNav;