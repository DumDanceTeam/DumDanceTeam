import TestmonialCard from "@/components/ui/TestmonialCard";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";
import prismadb from "@/lib/db";
import { Testmonial } from "@prisma/client";

const Testmonials: React.FC = async () => {
  const testmonials = await prismadb.testmonial.findMany({
    orderBy:{
      createdAt:"asc",
    },
  });

  //change .env

  return (
    <div>
      <RevealRightSlideIn>
        <div className="container mx-auto flex flex-col items-center">
        <p className="text-black text-center mb-5 text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold font-roboto tracking-tight">
            Ce spun <span className="text-lightRed">clienții</span> noștrii?
          </p>
          <div className="mt-7 grid grid-cols-1 items-center justify-center lg:grid-cols-3 lg:justify-between gap-6 lg:gap-5">
            {!testmonials || testmonials.length === 0 ? (
              <div>
                <p className="text-center mt-6 lg:mt-2 text-[1.2em] xs:text-[1.5em] sm:text-[2em] md:text-[2.3em] lg:text-[2.6em] font-bold font-roboto">
                  Nu există recenzii
                </p>
              </div>
            ) : (
              testmonials.map((t:any, index) => (
                <TestmonialCard
                  key={index}
                  profileImage={t?.profileUrl}
                  profileName={t?.name}
                  label={t?.description}
                />
              ))
            )}
          </div>
        </div>
      </RevealRightSlideIn>
    </div>
  );
};
export default Testmonials;
