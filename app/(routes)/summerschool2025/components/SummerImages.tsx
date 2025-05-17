"use client";
import Reveal from "@/components/Reveal/Reveal";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import Image from "next/image";
import { cn } from "@/lib/utils";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";

const SummerImages = () => {
  const images = [
    "/s1.jpg",
    "/s2.jpg",
    "/s3.jpg",
    "/s4.jpg",
    "/s5.jpg"
  ];

  return (
    <div>
      <div>
        {/* <Reveal>
          <Image
            src={"/1.jpg"}
            width={4000}
            height={5000}
            className="w-full h-full object-cover"
            priority
            quality={100}
            alt={`summer`}
          />
        </Reveal> */}
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
