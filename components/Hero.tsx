import Image from "next/image";
import Navbar from "../app/(routes)/components/Navbar";
import Link from "next/link";
import { Button } from "./ui/Button";

interface HeroProps {
  label?: string;
  noutati?: boolean;
}

const Hero: React.FC<HeroProps> = ({ label, noutati }) => {
  return (
    <div className="text-ddtWhite relative z-20 h-full">
      <p className=" xl:hidden text-3xl font-bold text-black text-center py-2.5 px-4">Nu rata următoarele evenimente <span className="text-lightRed">DDT</span></p>
      <Link href="/summerschool2025">
       <Image
          src={"/ddtSummer.jpg"}
          width={4000}
            height={5000}
            className="w-full h-full object-cover brightness-80 xl:brightness-50"
            priority
            quality={100}
            alt={`summer`}
          />
     
      </Link>

          <a href={"/summerschool2025"} className=" w-full ml-[38%] mr-[38%]">
              <Button
                aria-label="Înscrie-te aici la SummerSchool2025"
                variant={"fill"}
                className="bg-[#ffcc00] border-[#ffcc00] text-xl"
              >
                Înscrie-te aici la SummerSchool2025
              </Button>
            </a>
       {/* <Link href="https://forms.gle/yfMhHghERybHwy3N6">
       <Image
          src={"/saladans.jpg"}
          width={4000}
            height={5000}
            className="w-full h-full object-cover brightness-80 xl:brightness-50"
            priority
            quality={100}
            alt={`summer`}
          />
     
      </Link>

      <Link href="https://forms.gle/JZBDrn7TApuBesXS8">
        <Image
          src={"/autumnschool.jpg"}
          width={4000}
            height={5000}
            className="w-full h-full object-cover brightness-80 xl:brightness-50"
            priority
            quality={100}
            alt={`summer`}
        />
      </Link>

      <Link href="https://forms.gle/qtSSPhdVgVcuRCwR7">
      <Image
        src={"/halloweenparty.jpg"}
        width={4000}
        height={5000}
        className="w-full h-full object-cover brightness-80 xl:brightness-50"
        priority
        quality={100}
        alt={`summer`}
      />
      </Link> */}
    
      {/* <video
        src="/Edited.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        className="object-cover w-full h-full min-h-[90vh] md:h-[60vh] max-h-[80vh] brightness-50"
      ></video> */}

      <div className="container mx-auto w-full h-full">
        <div className="w-full absolute top-0 left-0 right-0 p-2 sm:px-5 sm:py-2.5 md:px-10 md:py-5 z-50">
          <Navbar noutati={noutati} />
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-full w-full">
          <Landing label={label} noutati={noutati} />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
