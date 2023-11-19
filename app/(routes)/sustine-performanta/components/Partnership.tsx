import { Partnership } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { cn, extractYouTubeVideoID } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

interface PartnershipProps {
  index: number;
  partnership: Partnership;
}

const Partnership: React.FC<PartnershipProps> = ({ index, partnership }) => {
  const secondImages = partnership.secondImages.slice(0, 2);
  const videoId = extractYouTubeVideoID(partnership.youtubeLink || "");

  return (
    <div className={`w-full h-full flex flex-col gap-10`}>
      <div className="flex flex-col-reverse lg:flex-row gap-5">
        <div className="flex-1 flex flex-col gap-5 sm:gap-10 overflow-auto">
          <p className="font-bold text-[1.5em] text-center">
            {partnership.title}
          </p>
          <p className="font-light text-[1em] line-clamp-6 text-start sm:text-center lg:text-start break-words overflow-y-scroll min-h-[700px] sm:min-h-[400px] p-0 sm:p-2">
            {partnership.description}
          </p>
        </div>
        <Link
          className="cursor-pointer flex-1"
          href={partnership.mainImage}
          target="_blank"
        >
          <Image
            loading="lazy"
            src={partnership.mainImage}
            width={8000}
            height={8000}
            className="rounded-[5px] w-full h-full object-cover"
            quality={100}
            alt="partnership image"
          />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        {videoId && videoId.trim() !== "" ? (
          <iframe
            className="w-full h-full min-h-[400px]"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>
        ) : null}
        <div className="w-full">
          <div className="flex flex-col xs:flex-row  justify-center gap-2.5 w-full">
            {secondImages && secondImages.length > 0
              ? secondImages.map((sImage, index) => (
                  <Link
                    key={index}
                    href={sImage}
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <Image
                      loading="lazy"
                      src={sImage}
                      width={8000}
                      height={8000}
                      className="rounded-[10px] object-cover w-full h-full hover:scale-95 transition-transform max-w-[230px] max-h-[230px]"
                      quality={100}
                      alt="event image"
                    />
                  </Link>
                ))
              : null}
          </div>
            <div className="text-center">
            <Link
            className={cn(
              buttonVariants({ variant: "fill" }),
              "self-center mt-5 sm:mt-10"
            )}
            href={`https://wa.me/${process.env.PHONE_NUMBER}?text=Bună, aș dori mai multe informații despre ${partnership.title}`}
            target="_blank"
          >
            Contactează-ne
          </Link>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Partnership;
