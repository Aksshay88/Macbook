import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { FaLock } from "react-icons/fa6";

export function EvervaultCardDemo() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex flex-col lg:flex-row-reverse items-center justify-between w-full 
       space-y-16 lg:space-y-0 px-8 sm:px-20 md:px-8 py-12 md:text-left text-center"
      >
        <div className="flex flex-col items-center sm:items-start lg:justify-center justify-between lg:w-[50%] ml-4 ">
          <div className="text-3xl lg:text-5xl font-semibold inline-flex space-x-3 items-center justify-center">
            <h1 className="text-md md:text-lg lg:text-xl font-extrabold bg-gradient-to-r from-purple-300 to-fuchsia-800 text-transparent bg-clip-text">
              Privacy Matters
            </h1>
            <FaLock style={{ color: "fuchsia" }} />
          </div>
          <p className="text-white text-md md:text-lg lg:text-xl mt-12 text-justify">
            Safeguarding your privacy is our utmost priority. We employ robust
            industry-standard security protocols to protect your data
          </p>
        </div>
        <div className="border border-purple-700 dark:border-purple-700/[0.4] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-purple-700 text-purple-700" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-purple-700 text-purple-700" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-purple-700 text-purple-700" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-purple-700 text-purple-700" />
          <EvervaultCard text="Identity" />
          <h2 className="dark:text-white text-white mt-4 text-sm font-light">
            Your entire Identity is protected and encrypted (Hover)
          </h2>
          <a
            href="/docs/privacy-policy"
            className="text-sm border font-light dark:border-purple-800/[0.7] border-purple-800/[0.8] rounded-full mt-4 text-white dark:text-white px-2 py-0.5"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default EvervaultCardDemo;
