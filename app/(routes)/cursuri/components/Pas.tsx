import { FC } from "react";
import { BsCheckLg } from "react-icons/bs";
import Reveal from "@/components/Reveal/Reveal";

interface PasProps {
  pasNumber: number;
  pasTitle: string,
  pasDescription: string;
}

const Pas: FC<PasProps> = ({ pasNumber, pasDescription, pasTitle }) => {
  return <Reveal>
    <div className="flex items-center gap-2.5">
      <div className="text-xs font-bold self-start text-white bg-black px-3 py-2.5 flex items-center whitespace-break-spaces justify-center rounded-full text-center">
        <BsCheckLg className="text-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold sm:text-[1.25em] mb-2.5">Pasul {pasNumber} : {pasTitle}</p>
        <p className="text-black sm:text-[1.05em] font-medium whitespace-break-spaces tracking-tight max-w-[850px]">{pasDescription}</p>
      </div>
    </div>
  </Reveal>;
};

export default Pas;
