import About from "./components/About/About";
import Hero from "../../components/Hero";
import StatisticsDesktop from "./components/Statistics/StatisticsDesktop";
import StatisticsMobile from "./components/Statistics/StatisticsMobile";
import Testmonials from "./components/Testmonials";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import AboutSection from "@/components/about/AboutSection";
import FAQ from "@/components/FAQ";
import Appointment from "@/components/Appointment";
import Reveal from "@/components/Reveal/Reveal";
import Gallery from "@/components/about/Gallery";
import Referinte from "./components/Referinte";
import Recommends from "./components/Recommends";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="my-10 sm:mb-20 w-full">
        <div className="hidden sm:block">
          <StatisticsDesktop />
        </div>
        <div className="sm:hidden flex justify-center">
          <StatisticsMobile />
        </div>
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <AboutSection />
      </div>
      <div className="my-20">
        <Testmonials />
      </div>
      <div className="container mx-auto">
        <div className="mb-10 -mt-5">
          <RevealLeftSlideIn>
            <Referinte />
          </RevealLeftSlideIn>
        </div>
        <RevealRightSlideIn>
          <Recommends />
          <div className="flex-1 text-black text-center mt-6">
              <p className="text-center text-black tracking-tight leading-8 font-semibold sm:text-[1.25em]">
                Faptul că suntem cel mai bun club de dans din Arad încă din 2015
                încoace, ascunde în spate multă muncă, sacrificii, multe ore
                petrecute în sală de dans. Sute de copii ne-au trecut pragul,
                iar progresul și succesul perechilor noastre mari stau drept
                dovadă.
                <br />
                Principiile prin care ne educăm copiii ne diferențiază
                indiferent dacă vrei doar să faci mișcare sau să ajungi un
                dansator de performanță.
              </p>
              <div className="border-b border-b-ddtWhite my-3" />
            </div>
        </RevealRightSlideIn>
      </div>

      <div className="my-20">
          <Reveal>
            <Gallery />
          </Reveal>
      </div>
      <div className="">
        <FAQ />
      </div>
      <div id="calendar" className="">
        <Appointment />
      </div>
    </main>
  );
}
