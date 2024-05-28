"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Software Development",
      value: "Software Development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>Xcode</p>
          <ImageContent src="/images/tabs/xcode.webp" alt="xcode" />
        </div>
      ),
    },
    {
      title: "Photo Editing",
      value: "Photo Editing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>Adobe Photoshop</p>
          <ImageContent
            src="/images/tabs/Adobephotoshop.webp"
            alt="Photo Editing"
          />
        </div>
      ),
    },
    {
      title: "STEM",
      value: "STEM",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>MATLAB</p>
          <ImageContent src="/images/tabs/matlab.webp" alt="Playground Image" />
        </div>
      ),
    },
    {
      title: "Graphic Design",
      value: "Graphic Design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>Adobe InDesign</p>
          <ImageContent
            src="/images/tabs/adobeindesign.webp"
            alt="Content Image"
          />
        </div>
      ),
    },
    {
      title: "Productivity",
      value: "Productivity",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>Safari,Excel</p>
          <ImageContent src="/images/tabs/safariexcel.webp" alt="Random Image" />
        </div>
      ),
    },
    {
      title: "3D Rendering",
      value: "3D Rendering",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>Octane X</p>
          <ImageContent src="/images/tabs/octane_X.webp" alt="Product Image" />
        </div>
      ),
    },
    {
      title: "Music Creation",
      value: "Music Creation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>Pro tools with Spitfire</p>
          <ImageContent src="/images/tabs/spitfire.webp" alt="Product Image" />
        </div>
      ),
    },
    {
      title: "Video Editing",
      value: "Video Editing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>DaVinci Resolve Studio</p>
          <ImageContent
            src="/images/tabs/davinciresolvestudio.webp"
            alt="Product Image"
          />
        </div>
      ),
    },
    {
      title: "Gaming",
      value: "Gaming",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>Lies of P</p>
          <ImageContent src="/images/tabs/liesofp.webp" alt="Product Image" />
        </div>
      ),
    },
    {
      title: "Lock Screen",
      value: "Lock Screen",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>Lock</p>
          <ImageContent src="/images/tabs/lock.webp" alt="Product Image" />
        </div>
      ),
    },
    {
      title: "Intergration",
      value: "Intergration",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>iphone connectivity</p>
          <ImageContent src="/images/tabs/web1.webp" alt="Product Image" />
        </div>
      ),
    },
    {
      title: "Other",
      value: "Other",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#161617] to-violet-900">
          <p>Software</p>
          <ImageContent src="/images/tabs/web6.webp" alt="Product Image" />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-purple-800 text-3xl md:text-6xl font-bold text-center mb-10">
        Software
      </h1>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const ImageContent: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
