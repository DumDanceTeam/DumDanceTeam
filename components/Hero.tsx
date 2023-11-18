import Landing from "../app/(routes)/components/Landing";
import Navbar from "../app/(routes)/components/Navbar";

interface HeroProps {
  label?: string;
}

const Hero: React.FC<HeroProps> = ({ label }) => {
  return (
    <div className="text-ddtWhite relative z-20 h-full">
      <video
        src="/Edited.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        className="object-cover w-full h-full min-h-[90vh] md:h-[60vh] max-h-[80vh]"
      ></video>

      <div className="absolute w-full h-full -top-[30px] big:top-0 bg-[rgba(0,0,0,.7)]" />
      <div className="container mx-auto w-full h-full">
        <div className="w-full absolute top-0 left-0 right-0 p-2 sm:px-5 sm:py-2.5 md:px-10 md:py-5 z-50">
          <Navbar />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-full w-full">
          <Landing label={label} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
