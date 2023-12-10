import prismadb from "@/lib/db";
import ManagerInfo from "../ManagerInfo";
import { BiPhotoAlbum } from "react-icons/bi";
import OnlineGalleryManagerImage from "./OnlineGalleryManagerImage";
import OnlinePostImage from "./OnlinePostImage";

const OnlineGallery = async () => {
  const gallery = await prismadb.onlineImage.findMany();

  return (
    <div>
      <div className="flex flex-col items-center sm:flex-row gap-3">
        <ManagerInfo title="Schimbă Galeria Online Dum Dance Team" icon={<BiPhotoAlbum className="w-4 h-4 xs:w-6 xs:h-6"/>}/>
        <OnlinePostImage/>
      </div>
      <div className="mt-6 grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[1200px] overflow-auto">
        {gallery.map((gImage, index) => (
          <OnlineGalleryManagerImage
            key={index}
            id={gImage.id}
            galleryImageUrl={gImage.url}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlineGallery;
