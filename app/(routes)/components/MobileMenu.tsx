"use client";

import { navbarLinks } from "@/constants";
import { useMenu } from "@/hooks/useMenu";
import EventWrapper from "@/components/EventWrapper";
import CoursesWrapper from "@/components/CoursesWrapper";
import { useOnClickOutside } from 'usehooks-ts'
import { useRef } from "react"
import Link from "next/link"


const MobileMenu =({events, showRule}: {events: { id: string; title: string }[], showRule: boolean}) => {

    const {isActive, setIsActive} = useMenu();

    const handleClickOutside = () => {
        setIsActive(false)
    }
    const ref = useRef(null)
  
    useOnClickOutside(ref, handleClickOutside)
  return (
    <div ref={ref} className={`-z-10 absolute left-0 right-0 top-0 bottom-0 duration-150 ${!isActive ? "-z-10 h-0 opacity-0 pointer-events-none":"text-ddtWhite backdrop-blur-md h-[220px] w-full z-[5] py-3"}`}>
      <div className="flex flex-col justify-evenly h-full">

        {navbarLinks.map((navItem, index)=>{
          if(navItem.label!=="Regulament")
          return(
            <Link
            prefetch={true}
            key={index}
            href={navItem.link}
            className="lowercase max-w-fit mx-auto text-center text-[1em] tracking-widest hover:text-gray-200 font-roboto hover:font-medium hover:scale-95 active:scale-90 duration-200 after:content-[''] after:w-[0] after:h-[0] relative after:absolute after:-bottom-[2px] after:left-[50%] after:-translate-x-[50%] hover:after:w-full hover:after:h-[1px] hover:after:bg-lightRed after:duration-200"
          >
            {navItem.label}
          </Link>
          )
          else if(showRule) return (
            <Link
            prefetch={true}
            key={index}
            href={navItem.link}
            className="lowercase max-w-fit mx-auto text-center text-[1em] tracking-widest hover:text-gray-200 font-roboto hover:font-medium hover:scale-95 active:scale-90 duration-200 after:content-[''] after:w-[0] after:h-[0] relative after:absolute after:-bottom-[2px] after:left-[50%] after:-translate-x-[50%] hover:after:w-full hover:after:h-[1px] hover:after:bg-lightRed after:duration-200"
          >
            {navItem.label}
          </Link>
          )
        })}
        <div className="mx-auto z-20">
          <CoursesWrapper/>
          </div>
          <div className="mx-auto z-10">
          <EventWrapper events={events}/>
          </div>
      </div>
    </div>
  )
}

export default MobileMenu
