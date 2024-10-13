"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const HeroCarousel = () => {
  return (
    <div>
      <div className="sliderContainer overflow-hidden">
        <div className="slider overflow-hidden w-[100%] flex h-[100%] md:hidden">
          <Image
            src={"/halloweenparty.jpg"}
            alt="main-image"
            className="object-cover w-[100vw] h-full min-h-[90vh] md:h-[60vh] max-h-[80vh] brightness-50"
            width={8000}
            height={8000}
          />
          <Image
            src={"/autumnschool.jpg"}
            alt="main-image"
            className=" w-[100vw] h-full min-h-[90vh] md:h-[60vh] max-h-[80vh] brightness-50"
            width={8000}
            height={8000}
          />
        </div>
        <div className="slidermd w-[100%] h-[100%] hidden md:flex">
          <Image
            src={"/halloweenparty.jpg"}
            alt="main-image"
            className="w-[100vw] h-full min-h-[90vh] md:h-[60vh] max-h-[80vh] brightness-50"
            width={8000}
            height={8000}
          />
          <Image
            src={"/autumnschool.jpg"}
            alt="main-image"
            className="w-[100vw] h-full min-h-[90vh] md:h-[60vh] max-h-[80vh] brightness-50"
            width={8000}
            height={8000}
          />
        </div>
      </div>
    </div>
    // <Carousel
    //   opts={{
    //     loop: true,
    //   }}
    //   className="w-fit"
    // >
    //   <CarouselContent>
    //     <CarouselItem>
    //       {" "}
    //
    //     </CarouselItem>
    //     <CarouselItem>
    //       {" "}
    //
    //     </CarouselItem>
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext className="w-full h-full min-h-[90vh] md:h-[60vh] max-h-[80vh] brightness-50 z-50" />
    // </Carousel>
  );
};
