import prismadb from "@/lib/db";
import GalleryImage from "./GalleryImage";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const Gallery: React.FC = async () => {
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
          <div className="flex flex-col gap-10 max-h-[870px] overflow-y-scroll">
            <div className="mt-6 grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-6">
              <GalleryImage galleryImage={"https://res.cloudinary.com/dwfidpghc/image/upload/v1700157481/tm9ru02hlofxnayts2kl.jpg"} />
              <GalleryImage galleryImage={"https://res.cloudinary.com/dwfidpghc/image/upload/v1700157481/v3clc5qllsyi6wpmqcba.jpg"} />
              <GalleryImage galleryImage={"https://res.cloudinary.com/dwfidpghc/image/upload/v1700157482/nvhskzwyudlilk87y4ab.jpg"} />
              <GalleryImage galleryImage={"https://res.cloudinary.com/dwfidpghc/image/upload/v1700157481/kznzkyftvmkdg6yqkoty.jpg"} />
              <GalleryImage galleryImage={"https://res.cloudinary.com/dwfidpghc/image/upload/v1700157482/y8ufqnggyyvgkwrfqevz.jpg"} />
              <GalleryImage galleryImage={"https://res.cloudinary.com/dwfidpghc/image/upload/v1700157482/nscwlq7hwjvjrray4zgx.jpg"} />
            </div>
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
