import React from "react";
import CardStackDemo from "./CardStackDemo";
import EvervaultCardDemo from "./EvervaultCardDemo";
import { TracingBeam } from "../ui/tracing-beam";
import { TextRevealCardPreview } from "./TextReveal";

const Features: React.FC = () => {
  return (
    <div>
      <TracingBeam>
        <CardStackDemo />
        <EvervaultCardDemo />
        <TextRevealCardPreview />
      </TracingBeam>
    </div>
  );
};

export default Features;
