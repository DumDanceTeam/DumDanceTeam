import prismadb from "@/lib/db";
import GalleryManagerImage from "./GalleryManagerImage";
import ManagerInfo from "../ManagerInfo";
import { BiPhotoAlbum } from "react-icons/bi";
import PostImage from "./PostImage";

const GalleryManager = async () => {
  const gallery = await prismadb.image.findMany();

  return (
    <div>
      <div className="flex flex-col items-center sm:flex-row gap-3">
        <ManagerInfo title="Schimbă galeria" icon={<BiPhotoAlbum className="w-4 h-4 xs:w-6 xs:h-6"/>}/>
        <PostImage/>
      </div>
      <div className="mt-6 grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((gImage, index) => (
          <GalleryManagerImage
            key={index}
            id={gImage.id}
            galleryImageUrl={gImage.url}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryManager;
