"use client";
import { Open_Sans } from "next/font/google";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ChangingHello from "./ChangingHello";
import React from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

const Sample: React.FC = () => {
  return (
    <>
      <footer className={`${openSans.className} text-fuchsia-600`}>
        <div className="flex flex-col-reverse items-center justify-between space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-12 border-t border-t-neutral-300 dark:border-neutral-700">
          <div className="flex flex-col items-center md:items-start justify-start pt-16 md:pl-24 md:pt-0">
            <h2 className="text-4xl md:text-6xl font-bold text-center md:text-left pb-2">
              Mac
            </h2>
            <p className="text-gray-400 text-center">A way to buy Mac .</p>
            <div className="flex mt-4 space-x-4 items-baseline justify-center md:items-start md:justify-start">
              <a href="https://X.com/@Aksshay88" target="_blank">
                <FaXTwitter className="dark:text-white text-2xl" />
              </a>
              <a href="https://www.instagram.com/Aksshay88/" target="_blank">
                <FiInstagram className="dark:text-white text-2xl " />
              </a>
              <a
                href="https://www.linkedin.com/in/aksshay-balasubramanian-40279825b/"
                target="_blank"
              >
                <FaLinkedin className="dark:text-white text-2xl " />
              </a>
              <a
                href="https://github.com/Aksshay88/Mac-Website/"
                target="_blank"
              >
                <FaGithub className="dark:text-white text-2xl " />
              </a>
            </div>
            <a
              href="/docs/privacy-policy"
              className="text-md text-neutral-500 uppercase mt-2 hover:underline hover:underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="/docs/terms"
              className="text-md text-neutral-500 uppercase hover:underline hover:underline-offset-4"
            >
              TERMS AND CONDITIONS
            </a>
          </div>
          <ChangingHello />
        </div>

        <div className="pb-8">
          <p className="text-sm dark:text-neutral-400 text-center">
            &copy; {new Date().getFullYear()} Mac | All rights reserved.
          </p>
          <p className="text-center dark:text-neutral-400 text-lg font-bold space-x-2 mt-2"></p>
        </div>
      </footer>
    </>
  );
};

export default Sample;
