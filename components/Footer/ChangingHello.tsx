"use client";
import { Open_Sans } from "next/font/google";
import React, { useEffect, useState } from "react";

interface ChangingHelloProps {}

const openSans = Open_Sans({ subsets: ["latin"] });

const thankyouList = [
  "thank you",
  "gracias",
  "धन्यवाद",
  "merci",
  "danke",
  "ありがとう",
  "谢谢",
  "Спасибо",
  "شكراً",
  "감사합니다",
];

const ChangingHello: React.FC<ChangingHelloProps> = () => {
  const [currthank, setCurrThank] = useState<string>(thankyouList[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = thankyouList.indexOf(currthank);
      const nextIndex = (currentIndex + 1) % thankyouList.length;
      setCurrThank(thankyouList[nextIndex]);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [currthank]);

  return (
    <div
      className={`${openSans.className} md:pl-36 flex flex-col items-center justify-center text-6xl font-semibold`}
    >
      <p>
        {currthank === "شكراً" && "!"} {currthank}{" "}
        {currthank !== "شكراً" && "!"}
      </p>
    </div>
  );
};

export default ChangingHello;
