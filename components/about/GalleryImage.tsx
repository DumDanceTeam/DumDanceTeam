"use client";

import Image from "next/image";

interface GalleryImageProps{
    galleryImage: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({galleryImage}) => {
  return (
    <div>
        <div className="cursor-pointer hover:scale-95 duration-150">
            <Image src={galleryImage} width={8000} height={8000} className="object-cover max-w-[400px] max-h-[600px] mx-auto w-full h-full rounded-[5px]" priority quality={100} alt="gallery-image"/>
        </div>
    </div>
  )
}

export default GalleryImage