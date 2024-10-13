"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const HeroEvent = ({imgUrl, linkUrl}:{imgUrl:string, linkUrl:string}) => {
    const router = useRouter()
  return (
    <Image
    onClick={()=>router.push(linkUrl)}
      src={imgUrl}
      alt="main-image"
      className="w-full h-full min-h-[90vh] md:h-[60vh] max-h-[80vh] brightness-50"
      width={8000}
      height={8000}
    />
  );
};
