import Image from "next/image";
import { navbarLinks } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";
import EventWrapper from "@/components/EventWrapper";
import CoursesWrapper from "@/components/CoursesWrapper"
import prismadb from "@/lib/db";

const Navbar: React.FC = async () => {
  const events  = await prismadb.event.findMany({
    take:7,
    select:{
      id:true,
      title:true
    },
  });
  const showRule = await prismadb.rule.findFirst();
  
  return (
    <nav>
      <div className="w-full flex items-center justify-between sm:gap-3">
       
        <div className="hidden xl:flex flex-1 items-center justify-around">
          {navbarLinks.map((navItem,index) =>{
            if(navItem.label!=="Regulament")
             return (
            <Link prefetch={true}
              key={index}
              target={navItem.label==="Donații" ? "_blank":""}
              href={navItem.link}
              className="lowercase text-[1.1em] tracking-widest hover:text-gray-200 font-roboto hover:font-medium hover:scale-95 active:scale-90 duration-200 after:content-[''] after:w-[0] after:h-[0] relative after:absolute after:-bottom-[2px] after:left-[50%] after:-translate-x-[50%] hover:after:w-full hover:after:h-[1px] hover:after:bg-lightRed after:duration-200"
            >
              {navItem.label}
            </Link>)
            else if(showRule?.show) return (
              <Link prefetch={true}
                key={index}
                href={navItem.link}
                className="lowercase text-[1.1em] tracking-widest hover:text-gray-200 font-roboto hover:font-medium hover:scale-95 active:scale-90 duration-200 after:content-[''] after:w-[0] after:h-[0] relative after:absolute after:-bottom-[2px] after:left-[50%] after:-translate-x-[50%] hover:after:w-full hover:after:h-[1px] hover:after:bg-lightRed after:duration-200"
              >
                {navItem.label}
              </Link>
            )
          })}

          <CoursesWrapper/>
          <EventWrapper events={events}/>
        </div>

        <div className="hidden xl:block ml-4">
          <Link href={"/#faq"}>
            <Button variant={"fill"} className="hover:bg-transparent">
              Înscrie-te
            </Button>
          </Link>
        </div>
          <div className="flex-1 xl:flex-[0]"></div>
        <MobileNav />
      </div>
      <div className="">
        <MobileMenu showRule={showRule?.show!} events={events}/>
      </div>
    </nav>
  );
};

export default Navbar;
