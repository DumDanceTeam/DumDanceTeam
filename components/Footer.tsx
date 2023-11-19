import { FC } from "react";
import { navbarLinks } from "@/constants";
import { footerInfo } from "@/constants";
import { FaLocationDot } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import {
  BsTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import CoursesWrapper from "./CoursesWrapper";
import EventWrapper from "./EventWrapper";
import prismadb from "@/lib/db";
import Link from "next/link";

interface FooterProps {}

import Image from "next/image";

const Footer: FC<FooterProps> = async ({}) => {
  const events = await prismadb.event.findMany({
    take: 7,
    select: {
      id: true,
      title: true,
    },
  });
  const showRule = await prismadb.rule.findFirst();


  return (
    <div className="bg-black">
      <div className="container mx-auto text-ddtWhite max-w-full">
        <div className="flex flex-col gap-5 pb-4">
          <Link prefetch={true} href="/" className="self-center">
            <Image
            loading="lazy"
              src="/ddt-white.png"
              
              alt="ddt-white"
              width={1000}
              height={8000}
              quality={100}
              className="mx-auto w-full max-w-[500px] lg:w-[1000px]"
            />
          </Link>
          <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-10 items-start sm:gap-0 sm:flex-row sm:items-center sm:justify-around flex-1">
              <div className="flex flex-col gap-2.5">
                <div className="z-20 flex items-center gap-2">
                  <BsDot className="text-lightRed" />
                  <CoursesWrapper />
                </div>
                <div className="z-10 flex items-center gap-2">
                  <BsDot className="text-lightRed" />{" "}
                  <EventWrapper events={events} />
                </div>
                {navbarLinks.map((navLink, index) => {
                  if(navLink.label!=="Regulament")
                    return(
                    <div key={index} className="flex items-center gap-2">
                      <BsDot className="text-lightRed" />
                      <Link
                        prefetch={true}
                        href={navLink.link}
                        className="lowercase text-[.96em] tracking-widest hover:text-gray-200 text-ddtWhite font-roboto hover:font-medium hover:scale-95 active:scale-90 duration-200 after:content-[''] after:w-[0] after:h-[0] relative after:absolute after:-bottom-[2px] after:left-[50%] after:-translate-x-[50%] hover:after:w-full hover:after:h-[1px] hover:after:bg-lightRed after:duration-200"
                      >
                        {navLink.label}
                      </Link>
                    </div>
                  )
                  else if(showRule?.show) return (
                    <div key={index} className="flex items-center gap-2">
                      <BsDot className="text-lightRed" />
                      <Link prefetch={true}
                        key={index}
                        href={navLink.link}
                        className="lowercase text-[.96em] tracking-widest hover:text-gray-200 font-roboto hover:font-medium hover:scale-95 active:scale-90 duration-200 after:content-[''] after:w-[0] after:h-[0] relative after:absolute after:-bottom-[2px] after:left-[50%] after:-translate-x-[50%] hover:after:w-full hover:after:h-[1px] hover:after:bg-lightRed after:duration-200"
                      >
                        {navLink.label}
                      </Link>
                    </div>
                  )
                })}
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex text-xl justify-between w-full mb-10">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/dumdanceteam"
                  >
                    <BsFacebook className="hover:text-lightRed hover:scale-95 active:scale-90 transition" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/dumdanceteam"
                  >
                    <BsInstagram className="hover:text-lightRed hover:scale-95 active:scale-90 transition" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.tiktok.com/@dumdanceteam"
                  >
                    <BsTiktok className="hover:text-lightRed hover:scale-95 active:scale-90 transition" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/@dumdanceteam"
                  >
                    <BsYoutube className="hover:text-lightRed hover:scale-95 active:scale-90 transition" />
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-lightRed" />
                  <p className="text-ddtWhite text-sm font-normal">
                    {footerInfo[0].label}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <HiMail className="text-lightRed" />
                  <p className="text-ddtWhite text-sm font-normal truncate">
                    {footerInfo[1].label}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <BsTelephoneFill className="text-lightRed" />
                  <p className="text-ddtWhite text-sm font-normal">
                    {footerInfo[2].label}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <iframe
                title="location"
                className="w-full rounded-[10px] h-[250px] max-h-[250px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.020206982105!2d21.348446376218227!3d46.170253471094355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47459945cd214b5f%3A0xff0d372a84e6cae8!2sDum%20Dance%20Team%20-%20Scoala%20de%20dans!5e0!3m2!1sro!2sro!4v1697994662608!5m2!1sro!2sro"
                style={{ border: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
