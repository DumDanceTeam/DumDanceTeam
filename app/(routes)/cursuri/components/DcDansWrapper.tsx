import { FC } from "react";
import DcDans from "./DcDans";
import Reveal from "@/components/Reveal/Reveal";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";
import Image from "next/image";

interface DcDansWrapperProps {}

const DcDansWrapper: FC<DcDansWrapperProps> = ({}) => {
  return (
    <div className="my-20">
      <Reveal>
        <p className="text-center text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold text-black sm:whitespace-nowrap mb-5">
          De ce <span className="text-lightRed">dans</span>... ?
        </p>
        <div className="bg-[url('https://res.cloudinary.com/dwfidpghc/image/upload/v1700157481/xe8rmyg0lnj4jw5ejru9.jpg')] xl:h-[800px] rounded-[10px] recommendBg">
          <div className="bgWrapper z-10 p-5 bg-[rgba(0,0,0,.4)] rounded-[10px] xl:h-[800px]">
              <div className="flex flex-col xl:flex-row xl:mt-20 mx-auto h-full">
                <DcDans
                  colorClause="black"
                  number={1}
                  title={"Dezvoltare armonioasa"}
                  description="Dansul formează o postură corectă demnă de invidiat, dezvoltă calitățile motrice ale copiilor și coordonarea, într-un mod unic și elegant."
                />
                <DcDans
                  colorClause="black"
                  number={2}
                  title="Socializare"
                  description="Apartenența la un grup educat, civilizat și sănătos, care sunt ca o mare familie îi ajută pe copiii să-și dezvolte încrederea în sine și curajul și să devină adevărați oameni de valoare."
                />
                  <DcDans
                  colorClause="black"
                  number={3}
                  title="Disciplina și eleganța"
                  description="Într-un colectiv disciplinat cu ambiții comune, copiii își dezvoltă valori morale sănătoase, pentru că dansul mai mult decat orice sport, educă copiii în cel mai elegant mod posibil"
                />
              </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10">
        <p className="font-bold uppercase border-b-2 mb-5">
          AȘADAR ÎȚI PREZENTĂM
        </p>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <RevealLeftSlideIn>
            <DcDans
              colorClause="white"
              number={1}
              title="Standard"
              description="Eleganță, rafinament și splendoare.. de la Vals Lent la Vals Vienez, de la Slow Fox, la celebrul Tango si energicul Quickstep"
            />
          </RevealLeftSlideIn>
          <Reveal>
            <DcDans
              colorClause="white"
              number={2}
              title="Latino-americane"
              description="Veselie, energie și culoare pe ritmuri de Cha Cha, Samba, Rumba, Paso Doble și Jive"
            />
          </Reveal>
          <RevealRightSlideIn>
            <DcDans
              colorClause="white"
              number={3}
              title="Dans modern"
              description="De la mișcări simple până la dansuri faimoase în toată lumea. De la dans popular românesc până la celebrul dans rusesc Polka"
            />
          </RevealRightSlideIn>
        </div>
      </div>

      <div className="mt-10">
        <p className="mb-10 text-black text-center text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold">
          Asta nu e tot !
        </p>
        <div className="flex flex-col md:flex-row gap-10">
        <RevealLeftSlideIn className="flex-1 rounded-[10px]">
            <Image
              src="https://res.cloudinary.com/dwfidpghc/image/upload/v1700157483/xxkihojjqii7vcjejxxo.jpg"
              alt="camp"
              width={1078}
              height={806}
              
              loading="lazy"
              quality={100}
              className="self-center max-w-full object-cover"
            />
          </RevealLeftSlideIn>
          <RevealRightSlideIn className="flex-1 self-center">
            <p className="tracking-tight leading-8 font-medium sm:text-[1.4em]">
              Copiii înscriși în cadrul clubului nostru participă regulat la
              diverse activități de dezvoltare personală, cantonamente, tabere,
              competiții, spectacole și multe activități de voluntariat.
            </p>
            <p className="tracking-tight leading-8 font-medium sm:text-[1.4em]">
              Cu o experiență de peste 10 ani, organizăm cele mai frumoase
              cantonamente și excursii, experiențe care devin amintiri de
              neuitat pentru orice copil.
            </p>
          </RevealRightSlideIn>
        </div>
      </div>
    </div>
  );
};

export default DcDansWrapper;
