"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Configuring your new MacBook",
  },
  {
    text: "Setting up macOS on your MacBook",
  },
  {
    text: "Installing essential software on your MacBook",
  },
  {
    text: "Transferring data to your new MacBook",
  },
  {
    text: "Exploring the features of your MacBook",
  },
  {
    text: "Customizing settings on your MacBook",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-purple-800 text-3xl font-bold mb-4">
        Guidelines to Follow After Buying a MacBook
      </h2>

      <div className="flex flex-col items-center justify-center">
        {/* Core Loader Modal */}
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />
      </div>

      <button
        onClick={() => setLoading(true)}
        className="bg-purple-800 hover:bg-purple-800/90 text-black mx-auto mt-4 text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to load
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-white dark:text-purple z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
