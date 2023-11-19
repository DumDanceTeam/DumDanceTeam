import Hero from "@/components/Hero";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";
import Curs from "./components/Curs";
import InformatiiCursuri from "./components/InformatiiCursuri";
import Pasi from "./components/Pasi";
import PrimaOra from "./components/PrimaOra";
import DcDansWrapper from "./components/DcDansWrapper";

const page = () => {
  return (
    <div>
      <Hero label="Cursuri" />
      <div className="container mx-auto mt-5">
        <p className="text-center text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold text-black sm:whitespace-nowrap">
          Alege un <span className="text-lightRed">curs</span>
        </p>

        <div className="flex flex-col gap-10 mt-10 mb-20">
          <div className="flex flex-col gap-10 md:flex-row mb-10">
            <RevealLeftSlideIn id="curscopil">
              <Curs
                imageUrl="https://res.cloudinary.com/dwfidpghc/image/upload/v1700157481/kznzkyftvmkdg6yqkoty.jpg"
                title="curs de dans pentru copii"
                description=" Cursurile noastre de dans au o abordare cu totul aparte ! Cu
                  prietenie, profesionalism și creativitate, asigurăm o
                  experiență educativă deosebită pentru copii. Vă așteptăm la
                  dezvoltare prin mișcare și dans !"
                whatsappMessage="Bună, sunt interesat/ă de cursul de dans pentru copii cu vârsta de peste 4 ani pentru <numele fiului/fiicei dvs.> ."
              />
            </RevealLeftSlideIn>
            <RevealLeftSlideIn className="flex-1">
              <InformatiiCursuri
                descriere="Cursurile noastre de dans au o abordare cu totul aparte ! Cu
prietenie, profesionalism și creativitate, asigurăm o
experiență educativă deosebită pentru copii. Vă așteptăm la
dezvoltare prin mișcare și dans !"
                durata="1 oră"
              />
            </RevealLeftSlideIn>
          </div>
          <div className="flex flex-col gap-10 md:flex-row-reverse">
            <RevealLeftSlideIn id="cursadult">
              <Curs
                imageUrl="https://res.cloudinary.com/dwfidpghc/image/upload/v1700317461/u2mjmzm04nfofkyykftw.jpg"
                title="curs de dans pentru adulți"
                description="Descoperă experiența inedită a cursurilor noastre de dans pentru adulți! Cu prietenie, profesionalism și creativitate, te invităm să explorezi dezvoltarea personală prin mișcare și dans!"
                whatsappMessage="Bună, sunt interesat/ă de cursul de dans pentru copii cu vârsta de peste 4 ani pentru <numele fiului/fiicei dvs.> ."
              />
            </RevealLeftSlideIn>
            <RevealLeftSlideIn className="flex-1">
              <InformatiiCursuri
                descriere="Descoperă experiența inedită a cursurilor noastre de dans pentru adulți! Cu prietenie, profesionalism și creativitate, te invităm să explorezi dezvoltarea personală prin mișcare și dans!"
                durata="1 oră (doar lecții private)"
              />
            </RevealLeftSlideIn>
          </div>
        </div>

        <Pasi />

        <RevealRightSlideIn className="mt-10">
          <PrimaOra />
        </RevealRightSlideIn>

        <DcDansWrapper />
      </div>
    </div>
  );
};

export default page;
