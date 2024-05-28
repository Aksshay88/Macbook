"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The Macbook Pro has completely transformed the way I work. It's fast, reliable, and the Retina display is stunning.",
    name: "John",
    title: "Software Developer",
  },
  {
    quote:
      "Switching to a Mac was the best decision I ever made. The performance and design are top-notch.",
    name: "Emily",
    title: "Graphic Designer",
  },
  {
    quote:
      "As a photographer, having a Macbook Pro is essential. The color accuracy and processing power are unmatched.",
    name: "Sarah",
    title: "Photographer",
  },
  {
    quote:
      "I've been a Mac user for over a decade, and I can't imagine using anything else. The ecosystem is seamless and intuitive.",
    name: "Michael",
    title: "Marketing Manager",
  },
  {
    quote:
      "Macbook Air is perfect for my on-the-go lifestyle. It's lightweight, yet powerful enough to handle all my tasks.",
    name: "Jennifer",
    title: "Freelance Writer",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-purple-800 text-3xl font-bold mb-8">Testimonials</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default InfiniteMovingCardsDemo;
