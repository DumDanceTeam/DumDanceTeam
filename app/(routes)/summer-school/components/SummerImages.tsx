"use client"
import Reveal from "@/components/Reveal/Reveal"
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn"
import Image from "next/image"
import { useIntersection } from '@mantine/hooks';
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";



const SummerImages = () => {
    const [ints, setInts] = useState(true);
    const images = ["/2.png","/3.png","/4.png","/5.png","/6.png","/7.png","/8.png","/9.png","/10.png",];

    const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1
    ,
  });
  useEffect(()=>{
    if(entry?.isIntersecting){
        setInts(false);
        console.log("ints");
      }
  },[entry, ref, containerRef])
  

  return (
    <div className="">
        
        <div >
        <div className="relative">
            <Image src={"/summer.jpeg"} width={4000} height={5000} className="w-[100vw] h-[100vh] object-cover" priority quality={100} alt={`summer`}/>
            {/* <Reveal className={cn("fixed left-[50%] -translate-x-[50%]",ints ? "-translate-y-[50%] top-[50%]":"top-[30px]")}>
                <h1 ref={ref} className="text-white font-bold text-[5em] z-10">SCOALA DE VARA</h1>
            </Reveal> */}
        </div>
        {images.map((img, idx)=>(
            <div key={idx} ref={containerRef}>
                <RevealLeftSlideIn>
                    <Image src={img} width={4000} height={5000} className="w-[100vw] h-[100vh] object-cover" priority quality={100} alt={`${img}`}/>
                </RevealLeftSlideIn>
            </div>
            
        ))}
        </div>
        
    </div>
  )
}

export default SummerImages
