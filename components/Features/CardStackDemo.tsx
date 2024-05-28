"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "../../lib/utils";
import { TiFlowSwitch } from "react-icons/ti";
export function CardStackDemo() {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      className="flex flex-col lg:flex-row items-center justify-between w-full 
    space-x-4 space-y-16 lg:space-y-0 px-8 sm:px-20 md:px-8 py-12 md:text-left text-center"
    >
      <div className="flex flex-col items-center sm:items-start md:justify-center justify-between md:w-[60%]">
        <div className="text-3xl lg:text-5xl font-semibold inline-flex space-x-3 items-center justify-center">
          <h1 className="text-white">Seamless Experience</h1>
          <TiFlowSwitch style={{ color: "purple" }} />
        </div>
        <p className="text-white text-md md:text-lg lg:text-xl mt-12 text-justify">
          Intuitive and user-friendly experience, ensuring that every
          interaction with our platform is smooth and effortless.
        </p>
      </div>

      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-fuchsia-400 text-fuchsia-900 dark:bg-fuchsia-500/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Aswin ",
    designation: "Software Developer",
    content: (
      <p>
        These Mac are amazing,{" "}
        <Highlight>Since I am working on a project on my Mac</Highlight> I would
        love to integrate them. Mac is Awesome ngl tbh guys 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "John Doe",
    designation: "Senior Developer",
    content: (
      <p>
        This new Mac feature just is not cutting it for me,{" "}
        <Highlight>I am thinking of</Highlight> ditching it and building my own.
        because #innovation{" "}
        <Highlight>
          it will be the most powerful, user-friendly machine ever created, and
          of course, it will be called
        </Highlight>{" "}
        iBrain.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Head of User Experience",
    content: (
      <p>
        The first rule of
        <Highlight>Apple ? </Highlight> You **respect the user experience**. The
        second rule ?<Highlight>Apple</Highlight> That means intuitive design,
        seamless workflows, and keeping things simple. We dont talk about bad
        UIs, we fix them.
      </p>
    ),
  },
];

export default CardStackDemo;
