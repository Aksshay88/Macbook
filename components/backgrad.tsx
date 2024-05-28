import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  const products = [
    {
      id: 1,
      src: "/images/accs/keyboard.webp",
      alt: "Magic Keyboard with Touch ID",
      title: "Magic Keyboard with Touch ID",
      description: `Magic Keyboard is available with Touch ID, providing fast, easy, and secure authentication for logins and to unlock your Mac. Magic Keyboard with Touch ID delivers a remarkably comfortable and precise typing experience. It’s also wireless and rechargeable, with an incredibly long-lasting internal battery that’ll power your keyboard for about a month or more between charges.¹ It pairs automatically with your Mac, so you can get to work straightaway. And it includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac.`,
      url: "https://www.apple.com/in/shop/product/MK293HN/A/magic-keyboard-with-touch-id-for-mac-models-with-apple-silicon-us-english?fnode=292726e16e0fc3938df86b1cc98f0f8d9d45fb5d395cce9ebabef49407b2c22626c7428da5fa04e17db62d7daa46bddc72c74d8cecc9bfae727a9ebee4fa4752156daef15e177757a02125de24c88b9ce044fa5be09f81422633d2bfa433536e",
      price: "$175",
    },
    {
      id: 2,
      src: "/images/accs/display.webp",
      alt: "Studio Display",
      title: "Studio Display",
      description: `Studio Display includes a highly advanced camera with a 12MP sensor and a 122‑degree field of view. And thanks to Apple silicon, it features Centre Stage, which comes to Mac for the first time.Centre Stage keeps you centred in the frame as you move around, making video calls more engaging. When others join or leave the call, the view expands or zooms in. It also works beautifully with your go‑to video conferencing apps.`,
      url: "https://www.apple.com/in/shop/buy-mac/apple-studio-display/standard-glass-tilt-adjustable-stand?fnode=292726e16e0fc3938df86b1cc98f0f8d9d45fb5d395cce9ebabef49407b2c22626c7428da5fa04e17db62d7daa46bddc72c74d8cecc9bfae727a9ebee4fa4752156daef15e177757a02125de24c88b9ce044fa5be09f81422633d2bfa433536e",
      price: "$1923.43",
    },
    {
      id: 3,
      src: "/images/accs/mackeytouch.webp",
      alt: "Magic Keyboard with Touch ID and Numeric Keypad",
      title: "Magic Keyboard with Touch ID and Numeric Keypad",
      description: `Magic Keyboard is available with Touch ID, providing fast, easy, and secure authentication for logins and to unlock your Mac. Magic Keyboard with Touch ID and Numeric Keypad delivers a remarkably comfortable and precise typing experience. It features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys, which are great for gaming. The numeric keypad is also ideal for spreadsheets and finance applications. It’s wireless and features a rechargeable battery that will power your keyboard for about a month or more between charges.¹ It pairs automatically with your Mac, so you can get to work straightaway. And it includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac.`,
      url: "https://www.apple.com/in/shop/product/MMMR3HN/A/magic-keyboard-with-touch-id-and-numeric-keypad-for-mac-models-with-apple-silicon-us-english-black-keys?fnode=292726e16e0fc3938df86b1cc98f0f8d9d45fb5d395cce9ebabef49407b2c22626c7428da5fa04e17db62d7daa46bddc72c74d8cecc9bfae727a9ebee4fa4752156daef15e177757a02125de24c88b9ce044fa5be09f81422633d2bfa433536e",
      price: "$234",
    },
    {
      id: 4,
      src: "/images/accs/track.webp",
      alt: "Magic Trackpad-Back Multi-Touch Surface",
      title: "Magic Trackpad-Back Multi-Touch Surface",
      description: `Magic Trackpad is wireless and rechargeable, and it includes the full range of Multi-Touch gestures and Force Touch technology. Sensors underneath the trackpad surface detect subtle differences in the amount of pressure you apply, bringing more functionality to your fingertips and enabling a deeper connection to your content. It features a large edge-to-edge glass surface area, making scrolling and swiping through your favourite content more productive and comfortable than ever. Magic Trackpad pairs automatically with your Mac, so you can get to work straightaway. The rechargeable battery will power it for about a month or more between charges, and it also includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac.`,
      url: "https://www.apple.com/in/shop/product/MMMP3ZM/A/magic-trackpad-black-multi-touch-surface?fnode=292726e16e0fc3938df86b1cc98f0f8d9d45fb5d395cce9ebabef49407b2c22626c7428da5fa04e17db62d7daa46bddc72c74d8cecc9bfae727a9ebee4fa4752156daef15e177757a02125de24c88b9ce044fa5be09f81422633d2bfa433536e",
      price: "$174",
    },
    {
      id: 5,
      src: "/images/accs/magicmouse.webp",
      alt: "Magic Mouse - Black Multi-Touch Surface",
      title: "Magic Mouse - Black Multi-Touch Surface",
      description: `Magic Mouse is wireless and rechargeable, with an optimised foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents. The rechargeable battery will power your Magic Mouse for about a month or more between charges. It’s ready to go straight out of the box and pairs automatically with your Mac, and it includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac.`,
      url: "https://www.apple.com/in/shop/product/MMMQ3HN/A/magic-mouse-black-multi-touch-surface?fnode=292726e16e0fc3938df86b1cc98f0f8d9d45fb5d395cce9ebabef49407b2c22626c7428da5fa04e17db62d7daa46bddc72c74d8cecc9bfae727a9ebee4fa4752156daef15e177757a02125de24c88b9ce044fa5be09f81422633d2bfa433536e",
      price: "$114",
    },
    {
      id: 6,
      src: "/images/accs/usbc.webp",
      alt: "USB-C Digital AV Multiport Adapter",
      title: "USB-C Digital AV Multiport Adapter",
      description: `The USB-C Digital AV Multiport Adapter lets you connect your USB-C—enabled Mac, iPad or iPhone to an HDMI display, while also connecting a standard USB device and a USB-C charging cable. This adapter allows you to mirror your USB-C—enabled Mac, iPad or iPhone to your HDMI-enabled TV or display.`,
      url: "https://www.apple.com/in/shop/product/MUF82ZM/A/usb-c-digital-av-multiport-adapter?fnode=292726e16e0fc3938df86b1cc98f0f8d9d45fb5d395cce9ebabef49407b2c22626c7428da5fa04e17db62d7daa46bddc72c74d8cecc9bfae727a9ebee4fa4752156daef15e177757a02125de24c88b9ce044fa5be09f81422633d2bfa433536e",
      price: "$83",
    },
    {
      id: 7,
      src: "/images/accs/ca.webp",
      alt: "USB-C to USB Adapter",
      title: "USB-C to USB Adapter",
      description: `The USB-C to USB Adapter lets you connect iOS devices and many of your standard USB accessories to a USB-C- or Thunderbolt 3 (USB-C)-enabled Mac, iPad or iPhone. Plug the USB-C end of the adapter into a USB-C or Thunderbolt 3 (USB-C) port on your Mac, iPad or iPhone, and then connect your flash drive, camera or other standard USB device.`,
      url: "https://www.apple.com/in/shop/product/MJ1M2ZM/A/usb-c-to-usb-adapter?fnode=292726e16e0fc3938df86b1cc98f0f8d9d45fb5d395cce9ebabef49407b2c22626c7428da5fa04e17db62d7daa46bddc72c74d8cecc9bfae727a9ebee4fa4752156daef15e177757a02125de24c88b9ce044fa5be09f81422633d2bfa433536e",
      price: "$34",
    },
    {
      id: 7,
      src: "/images/accs/cable.webp",
      alt: "USB-C to MagSafe 3 Cable (2m) - Midnight",
      title: "USB-C to USB Adapter",
      description: `This 2-metre charge cable features a magnetic MagSafe 3 connector that helps guide the plug to the charging port of your Mac notebook. Pair it with a compatible USB-C power adapter to conveniently charge your notebook from a power point and take advantage of fast-charging capabilities. The magnetic connection is strong enough to resist most unintended disconnects, but if someone trips on the cable, it releases so your Mac notebook stays put. An LED turns amber when the battery is charging and green when it’s fully charged. Made with a woven design for long-lasting durability.`,
      url: "https://www.apple.com/in/shop/product/MLYV3ZM/A/USB-C%20to%20MagSafe%C2%A03%20Cable%20(2m)%20-%20Silver?fnode=292726e16e0fc3938df86b1cc98f0f8d9d45fb5d395cce9ebabef49407b2c22626c7428da5fa04e17db62d7daa46bddc72c74d8cecc9bfae727a9ebee4fa4752156daef15e177757a02125de24c88b9ce044fa5be09f81422633d2bfa433536e",
      price: "$58",
    },
    {
      id: 8,
      src: "/images/accs/airpodpro2grave.webp",
      alt: "AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)",
      title: "AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)",
      description:
        "Rebuilt from the sound up, AirPods Pro (2nd generation) with MagSafe Charging Case (USB-C) deliver up to 2x more Active Noise Cancellation than the previous generation, with Transparency mode that enables you to hear the world around you. All-new Adaptive Audio dynamically tailors noise control to your environment. Conversation Awareness helps lower media volume and enhance the voices in front of you while you’re interacting with others. A single charge delivers up to 6 hours of battery life. And Touch control lets you easily adjust volume with a swipe. The MagSafe Charging Case is a marvel on its own with Precision Finding, built-in speaker, and lanyard loop.",
      url: "https://www.apple.com/in/shop/product/MTJV3HN/A/airpods-pro?fnode=292726e16e0fc3938df86b1cc98f0f8d9d45fb5d395cce9ebabef49407b2c22626c7428da5fa04e17db62d7daa46bddc72c74d8cecc9bfae727a9ebee4fa4752156daef15e177757a02125de24c88b9ce044fa5be09f81422633d2bfa433536e",
      price: "$299",
    },
    {
      id: "airpods-max",
      src: "/images/accs/bluepod.webp",
      alt: "AirPods Max - Sky Blue",
      title: "AirPods Max - Sky Blue",
      description:
        "AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you’ll hear every note with a new sense of clarity.",
      url: "https://www.apple.com/in/shop/buy-airpods/airpods-max/sky-blue?fnode=292726e16e0fc3938df86b1cc98f0f8d9d45fb5d395cce9ebabef49407b2c22626c7428da5fa04e17db62d7daa46bddc72c74d8cecc9bfae727a9ebee4fa4752156daef15e177757a02125de24c88b9ce044fa5be09f81422633d2bfa433536e",
      price: "$720",
    },
    {
      id: "homepod-mini",
      src: "/images/accs/homepodmini.webp",
      alt: "Home Pod Mini - Blue",
      title: "Home Pod Mini - Blue",
      description:
        "HomePod mini is designed to fit anywhere in the house. Its elegant shape is wrapped in a perfectly seamless mesh fabric that's virtually transparent to the sound passing through it. A backlit touch surface on the top provides quick control.",
      url: "https://example.com/product2-url",
      price: "$131",
    },
    {
      id: "apple-4tb-ssd-upgrade-kit",
      src: "/images/accs/4tbssd.webp",
      alt: "Apple 4TB SSD Upgrade Kit for Mac Pro",
      title: "Apple 4TB SSD Upgrade Kit for Mac Pro",
      description:
        "The Apple 4TB SSD Upgrade Kit for Mac Pro enables you to upgrade the internal SSD storage capacity of your Mac Pro. This kit, containing two 2TB modules, replaces the current SSD module or modules in your system. Installation required.",
      url: "https://www.apple.com/in/shop/product/MR3A3ZM/A/apple-4tb-ssd-upgrade-kit-for-mac-pro?fnode=d5bea9ba2caaa204ed072e57afd5d1465a5265e108d706435508b42109b33ad3c8bdeec866d39a108197c3acced715352c956218401cded3428d048e7f1b56b14ebbd18f6c266bdf2a14b4a0b92d8d12522e17b3ada60aa2b4c52c589d64b834",
      price: "$1924",
    },
  ];

  return (
    <BackgroundGradient className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src={product.src}
              alt={product.alt}
              width={500}
              height={500}
              className="rounded-md mb-4 object-contain"
            />
            <h2 className="text-purple-800 text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-900 font-bold mb-4">{product.price}</p>
            <a
              href={product.url}
              className="inline-block bg-purple-800 text-white px-4 py-2 rounded-md"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </BackgroundGradient>
  );
}
