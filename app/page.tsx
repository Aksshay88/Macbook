"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";

import GraphicDesign from "./graphic-design";
import { BackgroundGradientDemo } from "@/components/backgrad";
import Features from "@/components/Features/Features";
import TitleSpecial from "@/components/Features/Title";
import { GlowingStarsBackgroundCardPreview } from "@/components/glowing";
import { MacbookScrollDemo } from "@/components/mac";
import { ThreeDCardDemo } from "@/components/3d-cards";
import Sample from "@/components/Footer/Footer";
import { TabsDemo } from "@/components/animated-tabs";
import { CardHoverEffectDemo } from "@/components/hover-effect";
import { InfiniteMovingCardsDemo } from "../app/exmp/infinite-mov-cards";
import { MultiStepLoaderDemo } from "@/components/multi-step-load";
import { BentoGridThirdDemo } from "@/components/bento";
export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const macbookScrollDemoRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const tabsDemoRef = useRef<HTMLDivElement>(null);
  const glowingStarsBackgroundCardPreviewRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToMacbookScrollDemo = () => {
    macbookScrollDemoRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTabsDemo = () => {
    tabsDemoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGlowingStarsBackgroundCardPreview = () => {
    glowingStarsBackgroundCardPreviewRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToMacbookScrollDemo={scrollToMacbookScrollDemo}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToTabsDemo={scrollToTabsDemo}
        scrollToGlowingStarsBackgroundCardPreview={
          scrollToGlowingStarsBackgroundCardPreview
        }
        scrollToServices={scrollToServices}
      />
      <div className="relative">
        <Spotlight
          className="hidden md:flex md:-top-80 left-80"
          fill="purple"
        />
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-fuchsia-400">
            Unleash the Power of Mac <br /> Built for pro. Made for you.
          </div>
          <p className="mt-4 text-lg font-normal text-white max-w-lg text-center mx-auto px-4">
            Designed for Mac. Designed for you. Custom solutions that unlock
            your creative power.
          </p>

          <Link
            href="/book"
            className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-purple-800 border-purple-800"
          >
            Book a Mac
          </Link>
        </div>
        <div className="w-full pt-20">
          <SliderOne />
        </div>

        <div ref={macbookScrollDemoRef}>
          <MacbookScrollDemo />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
          <section>
            <BackgroundGradientDemo />
          </section>
          <section>
            <TitleSpecial />
            <Features />
          </section>
          <div ref={glowingStarsBackgroundCardPreviewRef}>
            <GlowingStarsBackgroundCardPreview />
          </div>
          <section>
            <BentoGridThirdDemo />
          </section>
          <div ref={tabsDemoRef}>
            <TabsDemo />
          </div>
          <section>
            <MultiStepLoaderDemo />
          </section>
          <InfiniteMovingCardsDemo />
          <section>
            <CardHoverEffectDemo />
          </section>
          <section>
            <ThreeDCardDemo />
          </section>
          <main>
            <Sample />
          </main>
        </div>
      </div>
    </div>
  );
}
