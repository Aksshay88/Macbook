"use client";

import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";

import Navbar from "@/components/navbar";

const plans = [
  {
    index: 0,
    name: "Basic",
    price: " US $40",
    features: [
      "Fully responsive on all screens",

      "icloud+ (50GB)",

      "Apple Music",
      "Apple TV+",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Access to exclusive content and features across all your Apple devices.",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Premium",
    price: "US $129",
    features: [
      "Fully responsive on all screens",
      "iCloud+ (2TB)",
      "Apple Music",
      "24-hour support response time",
      "Private communication channel",
      "Apple TV+",
      "Apple Fitness+",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description: "Priority support and expert assistance whenever you need it.",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Enterprise",
    feature: "Contact Us",
    price: "Let's Talk!",
    features: [
      "Fully responsive on all screens",
      "Seamless integration with iCloud and Apple services",
      "Unlimited Revisions",
      "24-hour support response time",
      "Private communication channel",
      "Priority Development Queue",
      "Dedicated Project Manager",
      "Enhanced Security Features",
      "Apple Arcade",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "Discover our subscription plans designed to elevate your Apple experience. Choose the plan that’s right for you and enjoy:",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <div
      className="w-full  md:items-center md:justify-center
     bg-black/[0.96] antialiased 
     bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Navbar
        scrollToMacbookScrollDemo={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToTabsDemo={() => {}}
        scrollToGlowingStarsBackgroundCardPreview={() => {}}
      />

      <div className="flex items-center justify-center flex-col   ">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Simple Pricing <br /> Choose your plan
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start ">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6  "
            >
              <div className={plan.style}>
                <div className="text-4xl flex  items-center font-medium">
                  {plan.name}
                  {/* render feature tag only for enterprise tab*/}
                  {plan.feature === "Contact Us" && (
                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center ">
                      Contact Us
                    </div>
                  )}
                </div>
                <div className="text-3xl pt-6 ">{plan.price}</div>
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg  py-2 flex space-x-2 items-center"
                    >
                      {/* render checkmark only for enterprise tab*/}
                      {plan.feature === "Contact Us" ? (
                        <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                      ) : (
                        <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                      )}

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={plan.button}>
                {index === 0 && (
                  <Link
                    href="https://buy.stripe.com/test_00g3cH6Ts2kP1DW3cc"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 1 && (
                  <Link
                    href="https://buy.stripe.com/test_14k4gLa5E9Nhbew3cd"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 2 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                  >
                    Contact Us
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
