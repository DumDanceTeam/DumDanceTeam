import { qualities } from "@/constants";
import { FC } from "react";
import { IoMdFlower } from "react-icons/io";
import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";

interface About2Props {}

const About2: FC<About2Props> = ({}) => {
  return (
    <Reveal>
      <div className="flex flex-col gap-10 bg-slate-300 opacity-[1] rounded-[10px] px-5 py-2.5">
        <p className="text-center text-black text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold">
          Valorile Dum Dance Team
        </p>
        <div className="flex flex-col items-center gap-5">
          {qualities.map((quality,index) => (
            <div key={index} className="flex items-center gap-10">
              <div className="flex-1">
                <p className="text-black sm:text-[1.25em] tracking-tight text-center leading-8 font-medium">
                  {quality.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-5">
          <Image
            src="/ddt-black.png"
            className="self-center"
            alt="ddt-white"
            width={300}
            height={200}
            quality={100}
          />
        </div>
      </div>
      </Reveal>
  );
};

export default About2;
