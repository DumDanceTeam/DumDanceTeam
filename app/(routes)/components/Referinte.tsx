import { FC } from "react";
import Image from "next/image";
import About2 from "./About/About2";

interface ReferinteProps {}

const Referinte: FC<ReferinteProps> = ({}) => {
  return (
    <div className="">
      <p className="text-black text-center mb-5 text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold tracking-tight">
        Referințe și valori DDT
      </p>
      <div className="text-black tracking-tight text-center leading-8 font-semibold sm:text-[1.25em]">
        Principiile prin care ne educăm copiii ne diferențiază indiferent dacă
        vrei doar să faci mișcare sau să ajungi un dansator de performanță.
        <br />
        <br />
        <p className="text-sm text-left sm:text-center italic sm:text-[1.008em] text-slate-600 font-medium tracking-tight leading-7 border-t pt-2.5">
          &#34;Disciplina, unitatea si munca sunt principiile care ne fac sa
          dezvoltam copiii din simplii dansatori in adevarati campioni.
          Educatia, disciplina, respectul si valorile morale pe care copiii si
          le insusesc practicand dansul sunt nepretuite si negasite in orice alt
          sport. &#34; -{" "}
          <span className="not-italic text-sm text-black tracking-tight leading-8 font-semibold sm:text-[1.1em]">
            antrenor Andrei Claudiu Dumitrascu
          </span>
        </p>
      </div>
      <br />
      <Image
      loading="lazy"
        src={"https://res.cloudinary.com/dwfidpghc/image/upload/v1700157482/pbxwkna0szjryxr8b7b9.jpg"}
        quality={100}
        width={2048}
        height={400}
        alt="referinte"
        className="rounded-[10px] max-h-[400px] object-cover brightness-95"
      />
      <br />
      <p className="text-black text-center tracking-tight leading-8 font-semibold sm:text-[1.25em]">
        Dansul este o arta, dar si un sport de lunga durata, dupa ani de zile
        veti reusi sa va bucurati de adevaratele satisfactii, dar va spunem
        sigur ca vorfi enorme Sa faci parte dintr-o echipa de top este un
        privilegiu, vei renunta sa fii egoist,mediocru, cand esti inconjurat de
        prieteni profesionisti.
      </p>
      <br />
      <p className="text-sm text-left sm:text-center italic sm:text-[1.15em] text-slate-600 font-medium tracking-tight leading-7 border-t pt-2.5">
        &quot;Să faci parte dintr-o echipă de top este un privilegiu, vei
        renunța să fii egoist,mediocru, când ești înconjurat de prieteni
        profesioniști.&quot;
      </p>
      <div className="my-10">
        <About2 />
      </div>
    </div>
  );
};

export default Referinte;
