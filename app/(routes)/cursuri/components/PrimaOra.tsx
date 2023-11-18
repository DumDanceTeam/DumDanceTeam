import { FC } from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

interface PrimaOraProps {}

const PrimaOra: FC<PrimaOraProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <p className="text-start text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold text-black sm:whitespace-nowrap mb-10">
        Prima oră de dans ...
      </p>
      <div className="flex flex-col gap-10 md:flex-row">
        <Image
          src="https://res.cloudinary.com/dwfidpghc/image/upload/v1700157482/ftxkcjfw2x8ymtbwhrfo.jpg"
          quality={100}
          width={80000}
          height={8000}
          className="max-h-[350px] rounded-[10px] object-cover flex-1"
          alt="primaora"
        />
        <div className="flex flex-col md:border-l md:border-l-slate-200 pl-10">
          <p className="font-semibold sm:text-[1.25em] mb-10">
            Ce avem nevoie la prima oră ?
          </p>
          <div className="flex items-start">
            <BsDot className="text-lg" />
            <p className="text-black sm:text-[1.05em] font-medium whitespace-break-spaces tracking-tight ml-1.5">
              O ținută comodă, lejeră care să-i permită copilului să se miște
              ușor
            </p>
          </div>
          <div className="flex items-start">
            <BsDot className="text-lg" />
            <p className="text-black sm:text-[1.05em] font-medium whitespace-break-spaces tracking-tight ml-1.5">
              Încălțămintea trebuie să fie curată pentru păstrarea curățeniei.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaOra;
