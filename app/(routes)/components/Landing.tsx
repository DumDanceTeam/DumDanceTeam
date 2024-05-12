import { Button } from "@/components/ui/Button";
import { BsArrowRight } from "react-icons/bs";
import Socials from "@/components/Socials";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import Link from "next/link";
import Image from "next/image";

interface LandingProps {
  label?: string;
  noutati?: boolean;
}

const Landing: React.FC<LandingProps> = ({ label, noutati }) => {
  return (
    <div className="flex flex-col items-center gap-20 sm:gap-10 mt-10 mx-2">
      <RevealLeftSlideIn className="flex-1 w-full">
        <div className="flex justify-center">
          {noutati === true ? (
            <a href="/" className="cursor-pointer">
              <Image
                loading="lazy"
                src={"/ddt-white.png"}
                quality={100}
                height={500}
                width={1000}
                alt="logo"
                className="mx-auto w-full max-w-[500px] lg:w-[1000px] mb-20 sm:mb-10"
              />
            </a>
          ) : (
            <Link href="/" prefetch={true} className="cursor-pointer">
              <Image
                loading="lazy"
                src={"/ddt-white.png"}
                quality={100}
                height={500}
                width={1000}
                alt="logo"
                className="mx-auto w-full max-w-[500px] lg:w-[1000px] mb-20 sm:mb-10"
              />
            </Link>
          )}
        </div>

        <div className="w-full flex flex-col items-center justify-center md:items-start">
          <p className="font-bold text-center w-full mb-3 text-[.9em] xss:text-[1.05em] xs:text-[1.25em] xsBig:text-[1.3em] sm:text-[1.4em] md:text-[1.7em] lg:text-[3em] text-ddtWhite font-roboto tracking-wider whitespace-break-spaces">
            <span className="text-slate-700 ">&quot;</span>{" "}
            {label && label.trim() !== ""
              ? label
              : "Educație prin mișcare, performanță prin dedicare !"}{" "}
            <span className="text-slate-700">&quot;</span>
          </p>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
            {noutati ? (
              <a href="/#faq" className="cursor-pointer">
                <Button
                  aria-label="Programează o ședință gratuită"
                  variant={"fill"}
                  className="text-xs xss:text-[.5em] xs:text-[.9em] xsBig:text-[1em] sm:text-[1.1em] flex whitespace-break-spaces items-center w-full gap-2 xs:p-2"
                >
                  <span>
                    Programează o ședință
                    <span className="font-bold"> gratuită</span>
                  </span>
                </Button>
              </a>
            ) : (
              <Link href="/#faq" className="max-w-full">
                <Button
                  aria-label="Programează o ședință gratuită"
                  variant={"fill"}
                  className="text-xs xss:text-[.5em] xs:text-[.9em] xsBig:text-[1em] sm:text-[1.1em] flex whitespace-break-spaces items-center w-full gap-2 xs:p-2"
                >
                  <span>
                    Programează o ședință
                    <span className="font-bold"> gratuită</span>
                  </span>
                </Button>
              </Link>
            )}

            {noutati ? (
              <a href="/#faq">
                <Button
                  variant={"fill"}
                  className="bg-transparent text-xs xss:text-[.5em] xs:text-[.9em] xsBig:text-[1em] sm:text-[1.1em] flex whitespace-break-spaces items-center w-full gap-2 p-2"
                >
                  Întrebări frecvente{" "}
                  <BsArrowRight className="font-bold text-[1.3em]" />
                </Button>
              </a>
            ) : (
              <Link href="/#faq" className="max-w-content">
                <Button
                  variant={"fill"}
                  className="bg-transparent text-xs xss:text-[.5em] xs:text-[.9em] xsBig:text-[1em] sm:text-[1.1em] flex whitespace-break-spaces items-center w-full gap-2 p-2"
                >
                  Întrebări frecvente{" "}
                  <BsArrowRight className="font-bold text-[1.3em]" />
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="flex mt-2 items-center justify-center">
        {noutati ? (
              <a href="/summer-school">
                <Button
                  className="bg-transparent text-xs xss:text-[.5em] xs:text-[.9em] xsBig:text-[1em] sm:text-[1.1em] flex whitespace-break-spaces items-center w-full gap-2 p-2 border-none animate-bounce font-bold text-[#4290c8]"
                >
                  Înscrie-te acum la Școala de Vară, și nu rata momentele unice pregătite pentru tine!{" "}
                  <BsArrowRight className="font-bold text-[1.3em]" />
                </Button>
              </a>
            ) : (
              <Link href="/summer-school" className="max-w-content">
                <Button
                  variant={"fill"}
                  className="bg-transparent text-xs xss:text-[.5em] xs:text-[.9em] xsBig:text-[1em] sm:text-[1.1em] flex whitespace-break-spaces items-center w-full gap-2 p-2 border-none animate-bounce font-bold text-[#4290c8]"
                >
                  Înscrie-te acum la Școala de Vară, și nu rata momentele unice pregătite pentru tine!{" "}
                  <BsArrowRight className="font-bold text-[1.3em]" />
                </Button>
              </Link>
            )}
        </div>
        
        <div className="hidden md:block mt-6 w-full space-y-2">
          <p className="text-ddtWhite tracking-tight leading-8 font-medium text-[1.1em] opacity-[0.8] text-center">
            Ne găsiți și pe rețelele de socializare !
          </p>

          <Socials />
        </div>
      </RevealLeftSlideIn>
      <div className="md:hidden xsBig:mt-6 w-fit mb-20">
        <p className="text-gray-400 mb-4 font-roboto tracking-wide italic text-[.9em] text-center">
          Ne găsiți și pe rețelele de socializare !
        </p>
        <Socials />
      </div>
    </div>
  );
};

export default Landing;
