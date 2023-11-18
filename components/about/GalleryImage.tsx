"use client";

import Image from "next/image";
import Link from "next/link";

interface GalleryImageProps{
    galleryImage: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({galleryImage}) => {
  return (
    <div>
        <Link href={galleryImage} target="_blank" className="cursor-pointer hover:scale-95 duration-150">
            <Image src={galleryImage} width={8000} height={8000} className="object-cover max-w-[400px] max-h-[600px] mx-auto w-full h-full rounded-[5px]" priority quality={100} alt="gallery-image"/>
        </Link>
    </div>
  )
}

export default GalleryImage