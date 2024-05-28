"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard text="MacBook Pro" revealText="Unleash your creativity.">
        <TextRevealCardTitle>Discover the power within.</TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover the card to unveil the hidden message.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
