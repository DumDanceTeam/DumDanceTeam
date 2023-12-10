"use client";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { AiOutlineRight } from "react-icons/ai";
import { usePathname } from "next/navigation";

const EventWrapper = ({
  events,
  noutati,
}: {
  events: { id: string; title: string }[];
  noutati?: boolean;
}) => {
  const path = usePathname();
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    setShowContent(false);
  }, [path]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit">
            {noutati ? (
              <a href="/evenimente" className="text-[1.1em]">
                evenimente
              </a>
            ) : (
              <Link prefetch={true} href="/evenimente" className="text-[1.1em]">
                evenimente
              </Link>
            )}
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-ddtWhite">
            <a href={`/evenimente/GalerieOnline`}>
              <div className="w-48 p-1.5 hover:bg-slate-200 transition-colors active:scale-95 active:border-none duration-200 border-b border-lightRed">
                <ul className="truncate text-black text-sm font-medium">
                  Galerie Online Gala Dum Dance Team
                </ul>
              </div>
            </a>{" "}
            {events.map((ev, index) => (
              <a href={`/evenimente/${ev.id}`} key={index}>
                <div className="w-48 p-1.5 hover:bg-slate-200 transition-colors active:scale-95 active:border-none duration-200 border-b border-lightRed">
                  <ul className="truncate text-black text-sm font-medium">
                    {ev.title}
                  </ul>
                </div>
              </a>
            ))}
            {noutati ? (
              <a
                href="/evenimente"
                className={cn(
                  buttonVariants({ variant: "fill" }),
                  "w-full mt-5 hover:scale-100 rounded-[2px] whitespace-nowrap"
                )}
              >
                Vezi mai mult <AiOutlineRight className="ml-1 h-4 w-4" />
              </a>
            ) : (
              <Link
                prefetch={true}
                href="/evenimente"
                className={cn(
                  buttonVariants({ variant: "fill" }),
                  "w-full mt-5 hover:scale-100 rounded-[2px] whitespace-nowrap"
                )}
              >
                Vezi mai mult <AiOutlineRight className="ml-1 h-4 w-4" />
              </Link>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default EventWrapper;
