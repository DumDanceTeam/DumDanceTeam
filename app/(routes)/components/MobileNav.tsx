"use client";

import { useMenu } from "@/hooks/useMenu";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MobileNav: React.FC = () => {
  const { isActive, setIsActive, fromMenu, setFromMenu } = useMenu();
  const path = usePathname();
  
  useEffect(()=>{
    setIsActive(false);
  },[path]);

  return (
    <div className="xl:hidden relative z-20">
      <div
        className={`flex flex-col ${
          !isActive ? "gap-1" : "gap-0"
        } cursor-pointer`}
        onClick={() =>{
          if(fromMenu){
            setFromMenu(false);
            setIsActive(false);
          }else{
            setIsActive(!isActive);
            setFromMenu(true);
          }
        }}
      >
        <div
          className={`line1 duration-150 line w-[20px] h-[4.15px] bg-darkBlack ${
            isActive && "activeMenu bg-white"
          }`}
        />
        <div
          className={`line2 duration-150 line w-[20px] h-[4.15px] bg-darkBlack ${
            isActive && "activeMenu bg-white"
          }`}
        />
        <div
          className={`line3 duration-150 line w-[20px] h-[4.15px] bg-darkBlack ${
            isActive && "activeMenu bg-white"
          }`}
        />
      </div>
    </div>
  );
};

export default MobileNav;
