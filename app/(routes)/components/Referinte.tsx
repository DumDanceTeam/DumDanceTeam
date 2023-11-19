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
          &#34;Disciplină, unitatea și munca sunt principiile care ne fac să
          dezvoltăm copiii din simplii dansatori în adevarăți campioni.
          Educația, disciplina, respectul și valorile morale pe care copii și
          le însușesc practicând dansul sunt neprețuite și negșsite în orice alt
          sport. &#34; -{" "}
          <span className="not-italic text-sm text-black tracking-tight leading-8 font-semibold sm:text-[1.1em]">
            antrenor Andrei Claudiu Dumitrașcu
          </span>
        </p>
      </div>
      <br />
      <Image
      loading="lazy"
        src={"https://res.cloudinary.com/dwfidpghc/image/upload/v1700383221/omp27vokrpaqqe35rc8p.jpg"}
        quality={100}
        width={2048}
        height={400}
        alt="referinte"
        className="rounded-[10px] max-w-[750px] mx-auto max-h-[600px] object-cover object-center brightness-95"
      />
      <br />
      <p className="text-black text-center tracking-tight leading-8 font-semibold sm:text-[1.25em]">
        Dansul este o artă, dar și un sport de lungă durată, după ani de zile
        veți reuși să vă bucurați de adevăratele satisfacții, dar vă spunem
        sigur că vor fi enorme. Să faci parte dintr-o echipă de top este un
        privilegiu, vei renunța să fii egoist,mediocru, când ești înconjurat de
        prieteni profesioniști.
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
