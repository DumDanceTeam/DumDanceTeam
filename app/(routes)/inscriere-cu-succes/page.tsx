import { CheckCircle } from "lucide-react";
import Image from "next/image";

const InscriereCuSucces = () => {
  return (
    <div className="container mx-auto py-10">
      <p className="font-bold text-center text-xl flex items-center justify-center gap-10 mb-2.5">
        Înscrierea s-a realizat cu succes!{" "}
        <CheckCircle className="w-[100px] h-[100px] text-green-500" />
      </p>
      <Image
        width={6000}
        height={3140}
        src={"/mihai.png"}
        quality={100}
        priority
        className="w-full h-full rounded-[10px]"
        alt="event"
      />
      <p className="text-center mt-2.5">
      🎉Mulțumim pentru înscrierea ta la evenimentul nostru extraordinar,
        &quot;Ritmul DDT: Aradul dansează cu Mihai Petre și Dum Dance
        Team&quot;! Suntem încântați să te avem alături de noi! După încheierea
        perioadei de înscriere, vom lua legătura personal cu tine pentru a-ți
        oferi toate detaliile necesare privind desfășurarea evenimentului.
        Așteaptă cu încredere un e-mail, un mesaj sau un apel telefonic din
        partea noastră! Până atunci, te rugăm să fii atent la comunicările
        noastre ulterioare și să te pregătești pentru o zi plină de distracție
        și dans! Cu cele mai bune urări, Echipa Dum Dance Team Arad!
      </p>
      {/* <div className="flex lg:flex-row items-center justify-center h-full">
        <div className="flex flex-col lg:flex-row items-center">
          <div>
           
          </div>
         
        </div>
      </div> */}
    </div>
  );
};

export default InscriereCuSucces;
