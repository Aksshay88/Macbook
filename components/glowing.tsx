"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../components/ui/glowing-stars";

interface Technology {
  title: string;
  description: string;
}

const technologies: Technology[] = [
  {
    title: "Retina Display",
    description:
      "Stunning high-resolution display with vibrant colors and sharp text.",
  },
  {
    title: "Apple M1/M2 Chip",
    description:
      "Powerful, energy-efficient processor designed by Apple, offering high performance.",
  },
  {
    title: "macOS",
    description:
      "Intuitive operating system with seamless integration with other Apple devices and services.",
  },
  {
    title: "Battery Life",
    description:
      "Long battery life, often lasting up to 20 hours on a single charge depending on the model.",
  },
  {
    title: "Design",
    description:
      "Sleek, lightweight, and durable aluminum body available in various colors.",
  },
  {
    title: "Magic Keyboard",
    description:
      "Comfortable typing experience with a redesigned scissor mechanism and backlit keys.",
  },
  {
    title: "Touch Bar and Touch ID",
    description:
      "Dynamic touch bar for quick access to tools and Touch ID for secure login and Apple Pay.",
  },
  {
    title: "Thunderbolt/USB 4 Ports",
    description:
      "Versatile ports for high-speed data transfer, charging, and connecting external devices.",
  },
  {
    title: "FaceTime HD Camera",
    description: "High-definition camera for video calls and meetings.",
  },
  {
    title: "Studio-Quality Mics and Speakers",
    description: "Advanced microphone array for clear audio during calls.",
  },
  {
    title: "Wi-Fi 6 and Bluetooth 5.0",
    description:
      "Latest wireless standards for fast internet connectivity and reliable connections with other devices.",
  },
  {
    title: "Storage Options",
    description:
      "Various SSD storage options for fast data access and ample storage space.",
  },
];

export function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-purple-800 text-4xl font-bold mb-8">
        Features of Mac
      </h2>
      <div className="flex flex-wrap justify-center gap-6 py-20">
        {technologies.map((tech, index) => (
          <GlowingStarsBackgroundCard key={index}>
            <GlowingStarsTitle>{tech.title}</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                {tech.description}
              </GlowingStarsDescription>
              <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                <Icon />
              </div>
            </div>
          </GlowingStarsBackgroundCard>
        ))}
      </div>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
