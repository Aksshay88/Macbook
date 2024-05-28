"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  scrollToMacbookScrollDemo: () => void;
  scrollToGraphicDesign: () => void;
  scrollToTabsDemo: () => void;
  scrollToGlowingStarsBackgroundCardPreview: () => void;
}

const Navbar = ({
  scrollToMacbookScrollDemo,
  scrollToGraphicDesign,
  scrollToTabsDemo,
  scrollToGlowingStarsBackgroundCardPreview,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/apple-logo-white.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
              style={{ backgroundColor: " white" }}
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <div
            onClick={scrollToMacbookScrollDemo}
            className="hover:text-purple-800"
          >
            Mac
          </div>
          <div
            onClick={scrollToGraphicDesign}
            className="hover:text-purple-800"
          >
            Macbook Products
          </div>

          <div onClick={scrollToTabsDemo} className="hover:text-purple-800">
            Software
          </div>
          <div
            onClick={scrollToGlowingStarsBackgroundCardPreview}
            className="hover:text-purple-800 cursor-pointer"
          >
            Features
          </div>

          <Link href="/pricing" className="hover:text-purple-800">
            Pricing
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
            hover:text-purple-800 hover:border-purple-800 hover:bg-gradient-to-r
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
