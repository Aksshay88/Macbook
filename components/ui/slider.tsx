"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }
  if (!isClient) {
    return null;
  }

  const slides = [
    "/images/macmainspec.webp",
    "/images/frontback.webp",
    "/images/spec1.webp",
    "/images/mac.webp",
    "/images/specmain.webp",
    "/images/a14.webp",
    "/images/mac8.webp",
    "/images/mac6.webp",
    "/images/keypad.webp",
    "/images/m1chiplap.webp",
    "/images/mac1.webp",
  ];
  return (
    <div>
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index} className="rounded-md px-2 md:p-10">
            <Image
              priority
              src={src}
              alt={`slide-${index}`}
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderOne;
