import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import prismadb from "@/lib/db";
import GalleryFeed from "./GalleryFeed";

const Gallery: React.FC = async () => {
  const images = await prismadb.image.findMany({
    take:4,
  });


  return (
    <div>
      <div className="bg-black rounded-lg p-2">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <hr className="hidden sm:block bg-ddtWhite" />
            <p className="text-center text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold text-ddtWhite sm:whitespace-nowrap">
              Galeria Dum <span className="text-lightRed">Dance</span> Team
            </p>
            <hr className="hidden sm:block bg-ddtWhite" />
          </div>
          <div className="flex flex-col gap-10 max-h-[1000px] overflow-y-scroll">
            <GalleryFeed initialImages={images}/>
            <div className="flex items-center justify-center mt-10 mb-2">
              <a
                href={"https://www.facebook.com/dumdanceteam/photos"}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "fill" }),
                  "text-sm xs:text-[.9em] font-medium"
                )}
              >
                Vezi mai mult
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
