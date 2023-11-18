import prismadb from "@/lib/db"
import GalleryManagerImage from "./GalleryManagerImage";

const GalleryManager = async() => {
    const gallery = await prismadb.image.findMany();


  return (
    <div className="mt-6 grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((gImage)=>(
            <GalleryManagerImage id={gImage.id} galleryImageUrl={gImage.url}/>
        ))}
    </div>
  )
}

export default GalleryManager