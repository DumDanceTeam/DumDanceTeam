import InfoCard from "@/components/ui/InfoCard";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlinePeople } from "react-icons/md";
import { GiDiamondTrophy } from "react-icons/gi";
import Reveal from "@/components/Reveal/Reveal";
import { FC } from "react";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";
import { MdGroups2 } from "react-icons/md"

interface StatisticsProps {
  whereClause?: string;
}

const StatisticsMobile: FC<StatisticsProps> = ({ whereClause }) => {
  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col xss:flex-row gap-5 items-center justify-evenly">
          {whereClause === "despre-noi" ? (
            <RevealLeftSlideIn className="">
              <InfoCard
                icon={
                  <AiOutlineFieldTime className="text-[1.5em] text-lightRed" />
                }
                label="10k+"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat dolorem cupiditate nostrum nemo quas?"
              />
            </RevealLeftSlideIn>
          ) : (
            <Reveal className="">
              <InfoCard
                icon={
                  <AiOutlineFieldTime className="text-[1.5em] text-lightRed" />
                }
                label="10k+"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat dolorem cupiditate nostrum nemo quas?"
              />
            </Reveal>
          )}

          <Reveal className="">
            <InfoCard
              icon={<MdOutlinePeople className="text-[1.5em] text-lightRed" />}
              label="3000+"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, eligendi?"
            />
          </Reveal>
        </div>
        <div className="flex flex-col xss:flex-row items-center justify-evenly gap-5">
        {whereClause === "despre-noi" ? (
          <RevealRightSlideIn className="">
            <InfoCard
              icon={<GiDiamondTrophy className="text-[1.5em] text-lightRed" />}
              label="1570+"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas impedit a?"
            />
          </RevealRightSlideIn>
          
        ) : (
          <Reveal>
            <InfoCard
              icon={<GiDiamondTrophy className="text-[1.5em] text-lightRed" />}
              label="1570+"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas impedit a?"
            />
          </Reveal>
        )}
         <Reveal className="flex justify-center">
            <InfoCard
              icon={<MdGroups2 className="text-[2.3em] text-lightRed" />}
              label="5+ cursuri"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, eligendi?"
            />
          </Reveal>
        </div>
        
      </div>
    </div>
  );
};

export default StatisticsMobile;
