import { FC } from "react";
import Image from "next/image";
import RevealLeftSlideIn from "@/components/Reveal/RevealLeftSlideIn";
import RevealRightSlideIn from "@/components/Reveal/RevealRightSlide";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface About1Props {
  whereClause?: string;
  title: React.ReactNode;
  description: string;
  imageUrl: string;
}

const About1: FC<About1Props> = ({
  whereClause,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      className={`flex flex-col-reverse items-center ${
        whereClause === "despre-noi" ? "xlmd:flex-row-reverse" : "xlmd:flex-row"
      } xlmd:items-stretch gap-2.5`}
    >
      {whereClause === "despre-noi" ? (
        <RevealRightSlideIn className="flex flex-col gap-2.5 max-w-2xl flex-1 justify-between">
          <div className="flex flex-col gap-2.5">
            {title}
            <Image
            loading="lazy"
              src={imageUrl}
              width={2048}
              height={525}
              quality={100}
              
              alt="about1.jpg"
              className="xsBig:hidden max-h-[525px] min-h-[100px] min-w-[100px] sm:min-w-[500px] sm:min-h-[500px] object-cover rounded-[10px] brightness-75"
            />
            <p
              className={`text-black tracking-tight leading-8 font-semibold sm:text-[1.25em] ${
                whereClause === "despre-noi" && "xlmd:text-end"
              }`}
            >
              {description}
            </p>
          </div>
         <Image
          loading="lazy"
            src="/ddt-black.png"
            className="self-center sm:max-w-[400px]"
            alt="ddt-white"
            
            width={686}
            height={364}
            quality={100}
          />
          {whereClause != "despre-noi" && whereClause !="despre-noi2" && (
            <Link
              href={"/#despre-noi"}
              className={cn(
                buttonVariants({ variant: "fill" }),
                "text-sm relative xs:text-[.9em] bg-transparent text-black font-medium self-start hover:bg-lightRed hover:text-ddtWhite"
              )}
            >
              Află mai multe
            </Link>
          )}
        </RevealRightSlideIn>
      ) : (
        <RevealLeftSlideIn className="flex flex-col gap-2.5 max-w-2xl flex-1 justify-between">
          <div className="flex flex-col gap-2.5">
            {title}
            <Image
              src={imageUrl}
              width={8000}
              height={8000}
              quality={100}
              
              alt="about1.jpg"
              className="xsBig:hidden max-h-[525px] min-h-[100px] min-w-[100px] sm:min-w-[500px] sm:min-h-[500px] object-cover rounded-[10px] brightness-75"
            />
            <p
              className={`text-black tracking-tight leading-8 font-semibold sm:text-[1.25em] ${
                whereClause === "despre-noi" && "xlmd:text-end"
              }`}
            >
              {description}
            </p>
          </div>
          <Image
          loading="lazy"
            src="/ddt-black.png"
            className="self-center sm:max-w-[400px]"
            alt="ddt-white"
            
            width={686}
            height={364}
            quality={100}
          />
          {whereClause != "despre-noi" && whereClause!="despre-noi2" && (
            <Link
              href={"/#despre-noi"}
              className={cn(
                buttonVariants({ variant: "fill" }),
                "text-sm relative xs:text-[.9em] bg-transparent text-black font-medium self-start hover:bg-lightRed hover:text-ddtWhite"
              )}
            >
              Află mai multe
            </Link>
          )}
        </RevealLeftSlideIn>
      )}

      {whereClause === "despre-noi" ? (
        <RevealLeftSlideIn className="hidden xsBig:block">
          <Image
            src={imageUrl}
            width={700}
            height={525}
            quality={100}
            loading="lazy"
            
            alt="about1.jpg"
            className="min-h-[100px] min-w-[100px] max-h-[525px] sm:min-w-[500px] sm:min-h-[500px] object-cover rounded-[10px] brightness-75"
          />
        </RevealLeftSlideIn>
      ) : (
        <RevealRightSlideIn className="hidden xsBig:block">
          <Image
            src={imageUrl}
            width={700}
            height={525}
            quality={100}
            loading="lazy"
            
            alt="about1.jpg"
            className="min-h-[100px] max-h-[525px] min-w-[100px] sm:min-w-[500px] sm:min-h-[500px] object-cover rounded-[10px] brightness-75"
          />
        </RevealRightSlideIn>
      )}
    </div>
  );
};

export default About1;
