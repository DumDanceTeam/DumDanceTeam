"use client";
import Reveal from "@/components/Reveal/Reveal";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import Image from "next/image";
import { cn } from "@/lib/utils";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";

const SummerImages = () => {
  const images = [
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
  ];

  return (
    <div>
      <div>
        <Reveal>
          <Image
            src={"/1.jpg"}
            width={4000}
            height={5000}
            className="w-full h-full object-cover"
            priority
            quality={100}
            alt={`summer`}
          />
        </Reveal>
        {images.map((img, idx) => (
          <div key={idx}>
            <Reveal>
              <Image
                src={img}
                width={4000}
                height={5000}
                className="w-full h-full object-cover "
                priority
                quality={100}
                alt={`${img}`}
              />
            </Reveal>
          </div>
        ))}
        <Reveal>
          <Image
            src={"/16.jpg"}
            width={4000}
            height={5000}
            className="w-full h-full object-cover lg:w-[100vw] lg:h-[100vh]"
            priority
            quality={100}
            alt={`15`}
          />
        </Reveal>{" "}
      </div>
    </div>
  );
};

export default SummerImages;
