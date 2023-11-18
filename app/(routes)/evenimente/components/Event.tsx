import { buttonVariants } from "@/components/ui/Button";
import { cn, formatDateToDDMMYY } from "@/lib/utils";
import { Event } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { extractYouTubeVideoID } from "@/lib/utils";

interface EventProps {
  index: number;
  event: Event;
  fullLayout: boolean;
}

const Event: React.FC<EventProps> = ({ index, event, fullLayout }) => {
  const secondImages = event.secondImages.slice(0, 2);
  const createdDate = formatDateToDDMMYY(new Date(event.createdAt));
  const videoId = extractYouTubeVideoID(event.youtubeLink || "");

  return (
    <div
      className={`w-full h-full flex flex-col gap-5 ${
        index % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${fullLayout ? "justify-center" : ""}`}
    >
      <Link
        className="cursor-pointer flex items-center justify-center"
        href={event.mainImage}
        target="_blank"
      >
        <Image
          src={event.mainImage}
          width={8000}
          height={8000}
          className="self-start rounded-[5px] w-full max-w-[400px] max-h-[400px] sm:max-w-[500px] sm:max-h-[500px] sm:min-w-[400px] sm:min-h-[400px] md:max-w-[600px] md:max-h-[600px] object-cover"
          quality={100}
          priority
          alt="event image"
        />
      </Link>
      <div className={` ${!fullLayout ? "flex-1" : ""}`}>
        <div
          className={`flex items-center ${
            fullLayout
              ? "flex-col justify-center h-full"
              : "justify-center md:justify-around lg:justify-between"
          } gap-2 lg:gap-0`}
        >
          <p
            className={`font-bold text-[1.5em] text-center ${
              fullLayout
                ? "xsBig:text-[1.7em] sm:text-[1.8em] md:text-[2em]"
                : ""
            }`}
          >
            {event.title}
          </p>
          <small
            className={`${
              fullLayout ? "text-[.9em] xs:text-[1em] xsBig:text-[1.1em]" : ""
            }`}
          >
            {createdDate}
          </small>
        </div>
        <div className="">
          {!fullLayout ? (
            <div className="">
              <p className="font-light text-[1em] line-clamp-6 text-center lg:text-start">
                {event.description}
              </p>
              {videoId && videoId.trim() !== "" ? (
                <iframe
                  className="w-full h-full max-w-[500px] max-h-[500px] min-w-[230px] min-h-[230px] mt-6"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allowFullScreen
                ></iframe>
              ) : null}
            </div>
          ) : null}

          {!fullLayout ? (
            <div className="flex justify-center lg:justify-start">
              <Link prefetch={true}
                href={`/evenimente/${event.id}`}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "my-5 active:scale-95 transition-transform"
                )}
              >
                Vezi mai mult
              </Link>
              
            </div>
          ) : null}
        </div>
        {!fullLayout ? (
          <div className="flex flex-col xs:flex-row items-center justify-center gap-2.5 w-full mt-auto">
            {secondImages && secondImages.length > 0
              ? secondImages.map((sImage, index) => (
                  <Link
                    key={index}
                    href={sImage}
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <Image
                      src={sImage}
                      width={8000}
                      height={8000}
                      className="rounded-[10px] object-cover w-full h-full hover:scale-95 transition-transform max-w-[230px] max-h-[230px]"
                      quality={100}
                      priority
                      alt="event image"
                    />
                  </Link>
                ))
              : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Event;
