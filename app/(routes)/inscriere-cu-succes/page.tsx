import { CheckCircle } from "lucide-react";
import Image from "next/image";

const InscriereCuSucces = () => {
  return (
    <div className="container mx-auto py-10">
              <CheckCircle className="w-[100px] h-[100px] text-green-500 mx-auto" />
      <p className="font-bold text-center text-3xl flex items-center justify-center gap-10 mb-2.5">
        Înscrierea s-a realizat cu succes!{" "}
      </p>
      <p className="text-center mb-2.5">
      🎉Mulțumim pentru înscrierea ta la evenimentul nostru extraordinar,
        Ritmul DDT: Aradul dansează cu Mihai Petre și Dum Dance
        Team! Suntem încântați să te avem alături de noi! <br/>După încheierea
        perioadei de înscriere, vom lua legătura personal cu tine pentru a-ți
        oferi toate detaliile necesare privind desfășurarea evenimentului.
        Așteaptă cu încredere un e-mail, un mesaj sau un apel telefonic din
        partea noastră! <br/>Până atunci, te rugăm să fii atent la comunicările
        noastre ulterioare și să te pregătești pentru o zi plină de distracție
        și dans!<br/> Cu cele mai bune urări, <span className="font-bold">Echipa Dum Dance Team Arad!</span>
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
     
    </div>
  );
};

export default InscriereCuSucces;
