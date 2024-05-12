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
  ];

  return (
    <div>
      <div>
        <div className="relative">
          <Image
            src={"/1.jpg"}
            width={4000}
            height={5000}
            className="w-full h-full object-cover xl:w-[100vw] xl:h-[100vh]"
            priority
            quality={100}
            alt={`summer`}
          />
          <Reveal
            className={cn(
              "hidden lg:block"
            )}
          >
            <h1 className="absolute text-white top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] font-bold text-[4em] sm:text-5em text-center">
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
                className="w-full h-full object-cover xl:w-[100vw] xl:h-[100vh]"
                priority
                quality={100}
                alt={`${img}`}
              />
            </RevealLeftSlideIn>:<RevealRightSlideIn>
            <Image
                src={img}
                width={4000}
                height={5000}
                className="w-full h-full object-cover xl:w-[100vw] xl:h-[100vh]"
                priority
                quality={100}
                alt={`${img}`}
              />
              </RevealRightSlideIn>}
              
          </div>
        ))}
        <div className="relative">
        <RevealLeftSlideIn>
              <Image
                src={"/15.png"}
                width={4000}
                height={5000}
                className="w-full h-full object-cover xl:w-[100vw] xl:h-[100vh]"
                priority
                quality={100}
                alt={`15`}
              />
            </RevealLeftSlideIn>
            <Image src={"/ddt-white.png"} width={700} height={344} quality={100} className="w-full max-w-[500px] h-[60px] top-3 object-cover animate-pulse absolute xl:top-10 xl:h-[300px] left-[50%] -translate-x-[50%]" alt="ddt"/>
        </div>
      </div>
    </div>
  );
};

export default SummerImages;
