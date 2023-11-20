"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface CoursesWrapperProps{
  noutati?: boolean;
}

const CoursesWrapper: React.FC<CoursesWrapperProps> = ({noutati}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit">
            {noutati ? (
              <a href="/cursuri" className="text-[1.1em]">cursuri</a>
            ):(
              <Link prefetch={true} href="/cursuri" className="text-[1.1em]">
              cursuri
            </Link>
            )}
           
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-ddtWhite">
            <a href={"/cursuri/#curscopil"}>
              <div className="w-48 p-1.5 hover:bg-slate-200 transition-colors active:scale-95 active:border-none duration-200 border-b border-lightRed">
                <ul className="truncate text-black text-sm font-medium">
                  Copii
                </ul>
              </div>
            </a>
            <a href={"/cursuri/#cursadult"}>
              <div className="w-48 p-1.5 hover:bg-slate-200 transition-colors active:scale-95 active:border-none duration-200 border-b border-lightRed">
                <ul className="truncate text-black text-sm font-medium">
                  Adulți
                </ul>
              </div>
            </a>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CoursesWrapper;
