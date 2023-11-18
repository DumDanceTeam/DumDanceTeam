import { FC } from "react";
import { BiTimeFive } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { BiSolidMapPin } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

interface InformatiiCursuriProps {
  durata:string,
  descriere:string
}

const InformatiiCursuri: FC<InformatiiCursuriProps> = ({durata, descriere}) => {
  return (
    <div className="bg-slate-200 opacity-[0.8] rounded-[10px] p-6 self-start w-full">
      <p className="font-bold text-2xl text-black tracking-wider uppercase border border-b-lightRed pb-3">
        detalii
      </p>
      <div className="flex flex-col gap-5 mt-6">
        <div className="flex items-center gap-2.5">
          <BiTimeFive className="text-lightRed w-5 h-5" />{" "}
          <span className="text-lg">Durata</span> : {durata}
        </div>
        <div>
          <div className="flex items-center gap-2.5 whitespace-nowrap">
            <MdDateRange className="text-lightRed w-5 h-5" />{" "}
            <span className="text-lg">Program :</span>flexibil
          </div>
          <span className="text-sm">
            &#x28; Vă oferim posibilitatea unui{" "}
            <span className="underline underline-offset-4">
              program flexibil
            </span>{" "}
            astfel încât fiecare copil poate avea acces la{" "}
            <span className="underline underline-offset-4">
              oricare si oricâte
            </span>{" "}
            cursuri într-o lună calendaristică &#x29;
          </span>
        </div>

        <div className="flex items-center gap-2.5 whitespace-nowrap">
          <BiSolidMapPin className="text-lightRed w-6 h-6 md:w-8 md:h-8" />{" "}
          <span className="text-lg">Locație : </span>
          <span className="whitespace-break-spaces">
            Șc. Gimnazială Caius Iacob, Arad
          </span>
        </div>

        <div className="items-start gap-2.5 mt-5 hidden md:flex">
                <BsDot className="text-5xl" />
                <p className="text-black tracking-tight leading-8 font-medium sm:text-[1.25em] mb-2.5">
                 {descriere}
                </p>
              </div>
      </div>
    </div>
  );
};

export default InformatiiCursuri;


