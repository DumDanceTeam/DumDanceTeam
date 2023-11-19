import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal/Reveal";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";
import { buttonVariants } from "@/components/ui/Button";
import InfoCard from "@/components/ui/InfoCard";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiDiamondTrophy } from "react-icons/gi";
import { MdGroups2, MdOutlinePeople } from "react-icons/md";

const page = () => {
  return (
    <div>
      <Hero label="Dansul mirilor" />
      <div className="container mx-auto mt-10">
        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-10">
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-10">
            <RevealLeftSlideIn className="w-full flex justify-center">
              <InfoCard
                className="w-[220px] rounded-[10px] xsBig:w-[270px]"
                icon={<AiOutlineFieldTime className="w-8 h-8 text-lightRed" />}
                label="370+ perechi miri"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat dolorem cupiditate nostrum nemo quas?"
              />
            </RevealLeftSlideIn>

            <Reveal className="w-full flex justify-center">
              <InfoCard
                className="w-[220px] rounded-[10px] xsBig:w-[270px]"
                icon={<MdOutlinePeople className="w-8 h-8 text-lightRed" />}
                label="220+ spectacole"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, eligendi?"
              />
            </Reveal>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-10">
            <RevealRightSlideIn className="w-full flex justify-center">
              <InfoCard
                className="w-[220px] rounded-[10px] xsBig:w-[270px]"
                icon={<GiDiamondTrophy className="w-8 h-8 text-lightRed" />}
                label="90k+ spectatori"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas impedit a?"
              />
            </RevealRightSlideIn>

            <Reveal className="w-full flex justify-center">
              <InfoCard
                className="w-[220px] rounded-[10px] xsBig:w-[270px]"
                icon={<MdGroups2 className="text-[2.3em] text-lightRed" />}
                label="10+ stiluri de dans"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, eligendi?"
              />
            </Reveal>
          </div>
        </div>

        <div className="bg-lightRed h-[.5px] mt-10" />

        <div className="flex flex-col md:flex-row gap-2 items-center my-20">
          <RevealLeftSlideIn className="flex-1">
            <div className="flex flex-col gap-2">
              <div className="">
                <p className="text-black mb-5 text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold tracking-tight">
                  Nunta ta... CEA MAI{" "}
                  <span className="text-lightRed">IMPORTANTĂ</span> PENTRU NOI
                </p>
              </div>
              <p className="text-black tracking-tight leading-8 font-semibold sm:text-[1.25em]">
                Dansul mirilor este unul dintre cele mai importante momente în
                cadrul nunții. Acesta reprezintă deschiderea ringului de dans și
                începerea petrecerii, însă poate avea nenumărate semnificații:
                un drum nou pentru cei doi căsătoriți, o nouă călătorie și o
                nouă poveste!
              </p>
              <hr />
              <p className="text-black tracking-tight leading-8 font-semibold sm:text-[1.25em]">
                Toți invitații așteaptă ca voi să dați tonul și trebuie să fie
                impresionați! Dansul vostru trebuie să fie melodia care vă
                reprezintă cel mai bine, melodia voastră de suflet, pentru
                momentul pe care nu o să-l uitați niciodată!
              </p>
            </div>
          </RevealLeftSlideIn>

          <RevealRightSlideIn className="flex-1">
            <div>
              <Image
                src={
                  "https://res.cloudinary.com/dwfidpghc/image/upload/v1700318915/l6ebdbirpuzd8i82g8xt.jpg"
                }
                width={1920}
                height={1280}
                className="object-cover rounded-[10px] brightness-75"
                quality={100}
                alt="dansul mirilor"
              />
            </div>
          </RevealRightSlideIn>
        </div>
        <p className="text-black text-center mb-5 text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold tracking-tight">
          Serviciile noastre
        </p>
        <div className="mb-20 flex flex-col items-center gap-5">
          <div className="flex-1 space-y-3 flex flex-col xl:flex-row text-center gap-5 items-baseline">
            <Reveal className="flex-1">
              <div className="border-[5px] py-10 px-2">
                <div className="flex items-center justify-center gap-1">
                  <p className="font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em] mb-5">
                    Dansul mirilor
                  </p>
                </div>
                <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight my-5">
                  Ore private adresate mirilor pentru un dans simplu, elegant și
                  de efect.
                </p>
              </div>
            </Reveal>
            <Reveal className="flex-1">
              <div className="border-[5px] py-10 px-2">
                <div className="flex items-center justify-center gap-1">
                  <p className="font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em] mb-5">
                    Pachete DDT pentru miri
                  </p>
                </div>
                <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight my-5">
                  Pentru un dans mai complex sau în cazul în care sunteți mai
                  stangați, pachetele pentru miri cuprind mai multe cursuri care
                  te vor ajuta.
                </p>
              </div>
            </Reveal>
            <Reveal className="flex-1">
              <div className="border-[5px] py-10">
                <div className="flex items-center justify-center gap-1">
                  <p className="font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em] mb-5">
                    Spectacole cu dansatori la evenimente
                  </p>
                </div>
                <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight my-5">
                  Oferă-le parinților, nașilor și invitaților tăi o supriză
                  elegantă, care cu siguranță va impresiona pe toată lumea și va
                  da startul petrecerii tale. O explozie de ritm și culoare pe
                  ritmuri latino-americane sau un spectacol elegant de dansuri
                  standard sunt ceea ce pot face nunta ta unică și de neuitat.
                </p>
              </div>
            </Reveal>
          </div>
          <p className="text-black text-center mt-10 text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold tracking-tight">
            Pachetele DDT
          </p>

          <div className="flex-1 h-full flex flex-col mt-5 gap-5">
            <div className="flex h-full flex-col sm:flex-row gap-5">
              <RevealLeftSlideIn className="flex-1">
                <div className="bg-white p-5 rounded-[10px] h-full flex flex-col">
                  <p className="uppercase font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em]">
                    DDT LOVE&DANCE PRO
                  </p>
                  <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight my-5">
                    1 ședință de consultanță <br /> 10 lecții de dans private cu
                    accent pe un singur dans
                    <br /> 1 spectacol de dans la nuntă cu o pereche de
                    dansatori profesioniști &#40;standard sau latino&#41;
                  </p>
                  <div className="flex-1 my-2 flex items-end justify-center">
                    <Link
                      target="_blank"
                      href={`https://wa.me/${process.env.PHONE_NUMBER}?text=Bună, aș dori mai multe detalii despre pachetul DDT LOVE DANCE PRO pentru dansul miriilor.`}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "bg-lightRed sm:text-[1.15em]"
                      )}
                    >
                      Întreabă acum
                    </Link>
                  </div>
                </div>
              </RevealLeftSlideIn>

              <RevealRightSlideIn className="flex-1">
                <div className="bg-white h-full p-5 flex-1 rounded-[10px] flex flex-col">
                  <p className="uppercase font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em]">
                    DDT LOVE PRO
                  </p>
                  <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight my-5">
                    1 ședință de consultanță <br /> 10 lecții de dans private cu
                    accent pe un singur dans + câțiva pali din alte dansuri
                    alese de comun acord &#40; Salsa, Cha - Cha, Tango etc &#41;
                  </p>
                  <div className="flex-1 flex items-end justify-center">
                    <Link
                      target="_blank"
                      href={`https://wa.me/${process.env.PHONE_NUMBER}?text=Bună, aș dori mai multe detalii despre pachetul DDT LOVE PRO pentru dansul miriilor.`}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "bg-lightRed sm:text-[1.15em] my-2"
                      )}
                    >
                      Întreabă acum
                    </Link>
                  </div>
                </div>
              </RevealRightSlideIn>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <RevealLeftSlideIn className="flex-1">
                <div className="bg-white h-full p-5 flex-1 rounded-[10px] flex flex-col">
                  <p className="uppercase font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em]">
                    DDT LOVE&DANCE
                  </p>
                  <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight my-5">
                    1 ședință de consultanță <br />5 lecții de dans private cu
                    accent pe un singur dans <br />1 spectacol de dans la nuntă
                    cu o pereche de dansatori profesioniști &#40;standard sau
                    latino&#41;
                  </p>
                  <div className="flex-1 flex items-end justify-center">
                    <Link
                      target="_blank"
                      href={`https://wa.me/${process.env.PHONE_NUMBER}?text=Bună, aș dori mai multe detalii despre pachetul DDT LOVE DANCE pentru dansul miriilor.`}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "bg-lightRed sm:text-[1.15em] my-2"
                      )}
                    >
                      Întreabă acum
                    </Link>
                  </div>
                </div>
              </RevealLeftSlideIn>

              <RevealRightSlideIn className="flex-1">
                <div className="bg-white h-full p-5 flex-1 rounded-[10px] flex flex-col">
                  <p className="uppercase font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em]">
                    DDT LOVE
                  </p>
                  <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight my-5">
                    1 sedință consultanță <br /> 5 lecții de dans private cu
                    accent pe un singur dans
                  </p>
                  <div className="flex-1 flex items-end justify-center">
                    <Link
                      target="_blank"
                      href={`https://wa.me/${process.env.PHONE_NUMBER}?text=Bună, aș dori mai multe detalii despre pachetul DDT LOVE pentru dansul miriilor.`}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "bg-lightRed sm:text-[1.15em] my-2"
                      )}
                    >
                      Întreabă acum
                    </Link>
                  </div>
                </div>
              </RevealRightSlideIn>
            </div>
          </div>
        </div>
        <p className="text-black text-center mb-6 text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold tracking-tight">
          Pachetele DDT conțin:{" "}
        </p>
        <div className="font-semibold flex flex-col gap-5">
          <Reveal>
            <p className="text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
              &#8226; Coregrafie conform dorințelor vostre, recomandări în
              alegerea melodiei și a ritmului potrivit personalității voastre
              &#40;în cazul în care sunteți nehotărâții sau aveți nevoie de o
              altă părere &#41;.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
              &#8226; Sfaturi în privința esteticii dansului realizat,
              recomandări privind regia intrării și ieșirii din ring. Adaptarea
              dificultății coregrafice la timpul avut la dispozitie și la
              dorințele voastre.
            </p>
          </Reveal>

          <Reveal>
            <p className="text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
              &#8226; Flexibilitate în alegerea zilelor și orelor de curs,
              filmările antrenamentelor și a coregrafiilor, plus indicațiile
              profesorului CCD audio cu o selecție de moduri pentru dansul
              mirilor, preluarea melodiilor alese pentru dansul mirilor
              &#40;tăierea, modificarea tempo, realizarea colajului etc. &#41;.{" "}
            </p>
          </Reveal>

          <Reveal>
            <p className="text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
              &#8226; Posibilitate de efectuare a ultimei sedințe de dans în
              locația de desfășurare a nunții.
            </p>
          </Reveal>
        </div>

        <Image
          alt="logo"
          src={"/ddt-black.png"}
          width={686}
          loading="lazy"
          height={430}
          className="my-10 w-full max-w-screen h-[130px] xs:h-[150px] sm:w-full sm:h-full  sm:max-w-[500px] sm:max-h-[430px] object-cover mx-auto"
          quality={100}
        />

        <p className="text-black text-center mb-6 text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold tracking-tight">
          Informații utile
        </p>
        <div className="font-semibold flex flex-col gap-5">
          <Reveal>
            <p className="text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
              &#8226; Ședința de consultanță: vorbim și ne sfătuim! Ne gândim
              asupra stilurilor de dans pe care le puteți aborda și stabilim cea
              mai potrivită alegere pentru dansul vostru.
            </p>
          </Reveal>

          <Reveal>
            <p className="text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
              &#8226; Analizăm melodiile pe care le puteți alege &#40;în cazul
              în care nu v-ați hotarat deja asupra unei melodii anume &#41;, ne
              arătați videoclipuri cu dansurile care v-au placut, discutăm
              despre figurile de dans care vă încantă, stabilim care este
              pachetul cel mai potrivit nevoilor voastre și, nu în ultimul rând,
              programăm prima sedință de dans.
            </p>
          </Reveal>

          <Reveal>
            <p className="text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
              &#8226; Primele două ședințe &#40;I si II &#41;: Începem cu
              începutul ! Învățăm pașii de bază din stilul ales și figurile de
              legatură pe care le vom utiliza ulterior la alcătuirea
              coregrafiei;
            </p>
          </Reveal>

          <Reveal>
            <p className="text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
              &#8226; Următoarele două ședințe &#40;III și IV &#41;: Cu primii
              pași deja știuți, trecem mai departe ! Învățăm să dansăm cu muzică
              pe fundal, alcătuim coregrafia și prelucrăm melodia pentru a o
              aduce la forma finală
            </p>
          </Reveal>

          <Reveal>
            <p className="text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
              &#8226; Ultima ședință &#40;V&#41;: Cu nunta tot mai aproape,
              repetăm dansul pentru a-i corecta micile greșeli. În plus, acum
              adăugăm câteva elemente de expresivitate și spectacol! Micile
              detalii care fac diferența. Se poate face la sală sau la locația
              de desfașurare a nunții.
            </p>
          </Reveal>

          <Reveal>
            <p className="text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
              &#8226; De reușita unei nunți depind foarte multe! Noi suntem aici
              să ne asigurăm că putem să te ajutăm cu tot ce depinde de noi!
              Dacă doriți un show cu dansatori profesioniști care sa vă încânte
              invitații cu mișcările lor și să-i ridice de pe scaune.
            </p>
          </Reveal>
        </div>

        <div className="my-20">
          <RevealLeftSlideIn>
            <div className="bg-[rgba(160,163,166,0.2)] p-5 rounded-[10px]">
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold tracking-tight">
                  DE <span className="text-lightRed">CE</span> SĂ NE ALEGI PE{" "}
                  <span className="text-lightRed">NOI</span> ?
                </p>
                <div className="w-[100px] h-[1.5px] my-5 bg-lightRed" />
                <p className="text-center text-black tracking-tight leading-8 font-semibold sm:text-[1.25em] mb-5">
                  Știm ce înseamnă organizarea celui mai important eveniment
                  pentru viitorii miri, iar noi vom face tot posibilul să ai un
                  dans al mirilor așa cum ți-l dorești și o nuntă de neuitat,
                  fără prea multe bătăi de cap.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-white p-2.5 rounded-[10px] flex flex-col">
                    <p className="uppercase font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em]">
                      Fără stres
                    </p>
                    <div className="w-[80px] mx-auto h-[1px] my-2.5 bg-lightRed" />
                    <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
                      Nu-ți face griji, noi ne ocupăm de tot. Voi doar să fiți
                      prezenți la cursuri !
                    </p>
                  </div>
                  <div className="bg-white p-2.5 rounded-[10px] flex flex-col">
                    <p className="uppercase font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em]">
                      Servicii personalizate
                    </p>
                    <div className="w-[80px] mx-auto h-[1px] my-2.5 bg-lightRed" />
                    <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
                      Dansul mirilor trebuie să fie povestea voastră. Noi o
                      transpunem în pași de dans !!
                    </p>
                  </div>
                  <div className="bg-white p-1 rounded-[10px] flex flex-col">
                    <p className="uppercase font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em]">
                      De la idee la realitate
                    </p>
                    <div className="w-[80px] mx-auto h-[1px] my-2.5 bg-lightRed" />
                    <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
                      Ne plac provocările. Orice idee, o punem în practică ! De
                      la un vals la un mix de dansuri, e simplu !
                    </p>
                  </div>
                  <div className="bg-white p-1 rounded-[10px] flex flex-col">
                    <p className="uppercase font-semibold text-[1.2em] text-center xsBig:text-[1.4em] sm:text-[1.6em]">
                      Asistență profesională
                    </p>
                    <div className="w-[80px] mx-auto h-[1px] my-2.5 bg-lightRed" />
                    <p className="text-center text-black sm:text-[1.25em] font-medium whitespace-break-spaces tracking-tight">
                      Vei întâlnii numai antrenori și dansatori profesioniști
                      pentru care dansul este viața lor !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealLeftSlideIn>
          <div className="flex justify-center">
            <Link
              target="_blank"
              href={`https://wa.me/${process.env.PHONE_NUMBER}?text=Bună, sunt interesat/ă pentru pachetul <numele_pachetului>, dansul mirilor .`}
              className={cn(buttonVariants({ variant: "fill" }), "mt-5")}
            >
              Contactează-ne
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
