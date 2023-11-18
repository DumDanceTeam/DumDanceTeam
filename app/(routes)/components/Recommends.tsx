import { FC } from "react";

interface RecommendsProps {}

const Recommends: FC<RecommendsProps> = ({}) => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dwfidpghc/image/upload/v1700157482/dvxqhoxksounrxgek1l2.jpg')] recommendBg rounded-[10px]">
      <div className="bgWrapper z-10 bg-[rgba(0,0,0,.6)] h-[700px] rounded-[10px]">
        <div className="p-2 flex flex-col items-center">
          <p className="text-lightRed text-center sm:text-start border-b border-b-ddtWhite border-opacity-25 text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold font-roboto tracking-tight">
            Ce ne recomandă?
          </p>

          <div className="flex flex-col items-center sm:items-start lg:flex-row sm:justify-evenly mt-7 gap-10 w-full">
            <div className="flex items-center gap-3">
              <div className="self-start text-xs font-bold bg-ddtWhite w-[130px] h-[130px] sm:text-[1.15em] flex items-center whitespace-break-spaces justify-center rounded-full text-black text-center">
                96 de medalii
              </div>
              <p className="text-xs text-center mt-1 max-w-[170px] text-[1em] sm:text-[1.2em] leading-8 text-ddtWhite font-medium whitespace-break-spaces">
                adunate în doar 8 competiții in 2021
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="self-start text-xs font-bold bg-ddtWhite w-[130px] h-[130px] sm:text-[1.15em] flex items-center whitespace-break-spaces justify-center rounded-full text-black text-center">
                63 cupe
              </div>
              <p className="text-xs text-center mt-1 max-w-[170px] text-[1em] sm:text-[1.2em] leading-8 text-ddtWhite font-medium whitespace-break-spaces">
                obținute de perechi clasate pe locurile 1, 2 și 3 la competiții
                importante{" "}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="self-start text-xs font-bold bg-ddtWhite w-[130px] h-[130px] sm:text-[1.15em] flex items-center whitespace-break-spaces justify-center rounded-full text-black text-center">
                29 trofee de locul I
              </div>
              <p className="text-xs text-center mt-1 max-w-[170px] text-[1em] sm:text-[1.2em] leading-8 text-ddtWhite font-medium whitespace-break-spaces">
                15 trofee de locul II și 18 trofee de locul 3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommends;
