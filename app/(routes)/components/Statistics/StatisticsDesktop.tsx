import InfoCard from "@/components/ui/InfoCard";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlinePeople } from "react-icons/md";
import { GiDiamondTrophy } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
import Reveal from "@/components/Reveal/Reveal";
import { FC } from "react";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";

interface StatisticsProps {
  whereClause?: string;
}

const StatisticsDesktop: FC<StatisticsProps> = ({ whereClause }) => {
  return (
    <div className="container mx-auto max-w-full">
      <div className="flex items-center gap-4">
        <hr />
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">

          <div className="flex-1 flex items-center gap-10">
              {whereClause === "despre-noi" ? (
                <RevealLeftSlideIn className="w-full">
                  <InfoCard
                    icon={<AiOutlineFieldTime className="w-8 h-8 text-lightRed" />}
                    label="10k+"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat dolorem cupiditate nostrum nemo quas?"
                  />
                </RevealLeftSlideIn>
              ) : (
                <Reveal className="w-full">
                  <InfoCard
                    icon={
                      <AiOutlineFieldTime className="text-[2.3em] text-lightRed" />
                    }
                    label="10k+"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat dolorem cupiditate nostrum nemo quas?"
                  />
                </Reveal>
              )}
              <Reveal className="w-full">
                <InfoCard
                  icon={<MdOutlinePeople className="text-[2.3em] text-lightRed" />}
                  label="3000+"
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, eligendi?"
                />
              </Reveal>
          </div>
            <div className="flex-1 flex items-center gap-10">
              {whereClause === "despre-noi" ? (
                <RevealRightSlideIn className="w-full">
                  <InfoCard
                    icon={
                      <GiDiamondTrophy className="text-[1.5em] text-lightRed" />
                    }
                    label="1570+"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas impedit a?"
                  />
                </RevealRightSlideIn>
              ) : (
                <Reveal className="w-full">
                  <InfoCard
                    icon={
                      <GiDiamondTrophy className="text-[2.3em] text-lightRed" />
                    }
                    label="1570+"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas impedit a?"
                  />
                </Reveal>
              )}

              <Reveal className="w-full">
                <InfoCard
                  icon={<MdGroups2 className="text-[2.3em] text-lightRed" />}
                  label="5+ cursuri"
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, eligendi?"
                />
              </Reveal>
            </div>
          
        </div>
        <hr/>
      </div>
    </div>
  );
};

export default StatisticsDesktop;
