"use client";

import { motion } from "framer-motion";

const MacbookProducts = () => {
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Macbook Products <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          Discover the latest Macbook models. From the Macbook Air to the
          Macbook Pro, we have got you covered with top-notch performance and
          sleek designs.
        </p>
        <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          ></motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default MacbookProducts;
