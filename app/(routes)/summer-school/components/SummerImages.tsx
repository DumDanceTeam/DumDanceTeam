"use client";
import Reveal from "@/components/Reveal/Reveal";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import Image from "next/image";
import { cn } from "@/lib/utils";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";

const SummerImages = () => {
  const images = [
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/Copie a pt site.png",
    "/6.png",
    "/radu.png",
    "/radu (2).png",
    "/10.png",
    "/RDKU.png",
    "/RDKU (2).png",
    "/RDKU (3).png",
    "/14.png",
    "/15.png",
  ];

  return (
    <div>
      <div>
        <div className="relative">
          <Image
            src={"/1.png"}
            width={4000}
            height={5000}
            className="w-[100vw] h-[100vh] object-contain absolute top-0"
            priority
            quality={100}
            alt={`summer`}
          />
          <Reveal
            className={cn(
              "absolute left-[50%] -translate-x-[50%] -translate-y-[50%] top-[50%]"
            )}
          >
            <h1 className="text-white font-bold text-center text-[4em] sm:text-[5em] z-10">
              ȘCOALA DE VARĂ
            </h1>
          </Reveal>
        </div>
        {images.map((img, idx) => (
          <div key={idx}>
            {idx%2!==0 ? <RevealLeftSlideIn>
              <Image
                src={img}
                width={4000}
                height={5000}
                className="w-[100vw] h-[100vh] object-contain"
                priority
                quality={100}
                alt={`${img}`}
              />
            </RevealLeftSlideIn>:<RevealRightSlideIn>
            <Image
                src={img}
                width={4000}
                height={5000}
                className="lg:w-[100vw] h-[100vh] object-contain"
                priority
                quality={100}
                alt={`${img}`}
              />
              </RevealRightSlideIn>}
              
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummerImages;
