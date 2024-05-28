import { HoverEffect } from "../components/ui/hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Exchange",
    description:
      "Exchange your Mac ,get $200 - $720 in credit towards a new one *.",
    link: "https://www.apple.com/in/shop/browse/overlay/store/tradein",
  },
  {
    title: "Customize",
    description: "Customize your Mac.",
    link: "https://www.apple.com/in/shop/browse/overlay/store/cto",
  },
  {
    title: "Make them yours.",
    description: "Engrave a mix of emoji, names and numbers for free.",
    link: "https://www.apple.com/in/shop/browse/overlay/store/engraving",
  },
  {
    title: "Flexibity",
    description: "Flexible ways to pay. Plus No Cost EMI ",
    link: "https://www.apple.com/in/shop/browse/overlay/store/financing",
  },
  {
    title: "Free Delivery",
    description: "Enjoy Free Delivery or an easy pickup from an Apple Store .",
    link: "https://www.apple.com/in/shop/browse/overlay/store/delivery",
  },
  {
    title: "Trade",
    description:
      "Trade in your eligible Mac,Apple watch or ipad for instant credit.In -store only",
    link: "https://www.apple.com/in/shop/browse/overlay/store/instant_credit",
  },
];
