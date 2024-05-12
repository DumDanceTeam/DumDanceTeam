import Image from "next/image";
import Landing from "../app/(routes)/components/Landing";
import Navbar from "../app/(routes)/components/Navbar";

interface HeroProps {
  label?: string;
  noutati?: boolean;
}

const Hero: React.FC<HeroProps> = ({ label, noutati }) => {
  return (
    <div className="text-ddtWhite relative z-20 h-full">
      <Image
        src={"/summer-hero.jpg"}
        alt="main-image"
        className="object-cover w-full h-full min-h-[90vh] md:h-[60vh] max-h-[80vh] brightness-50"
        width={8000}
        height={8000}
      />
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

        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-full w-full">
          <Landing label={label} noutati={noutati} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
