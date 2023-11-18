"use client";
import { Button } from "@/components/ui/Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface GalleryManagerImageProps {
    id: string;
    galleryImageUrl: string;
}
const GalleryManagerImage: React.FC<GalleryManagerImageProps> = ({
    id,
  galleryImageUrl,
}: {
    id: string;
  galleryImageUrl: string;
}) => {
  const [imageUrl, setImageUrl] = useState(galleryImageUrl);
  const [changes, setChanges] = useState(false);
  const onUpload = (result: any) => {
    setImageUrl(result.info.secure_url);
  };

  useEffect(() => {
    if (imageUrl !== galleryImageUrl) setChanges(true);
    else setChanges(false);
  }, [imageUrl]);

  const {mutate: changeImage, isLoading} = useMutation({
    mutationFn: async()=>{
        const res = await axios.patch(`/api/images/${id}`,{newUrl: imageUrl});

        return res;
    },
    onSuccess:()=>{
        toast.success("Imaginea a fost schimbată cu succes !");
        window.location.reload();
    },
    onError:()=>{
        toast.error("Ceva a mers greșit. Te rugăm să încerci mai târziu !");
    }
  })

  return (
    <div className="">
      <div className="cursor-pointer hover:scale-95 duration-150">
        <Link href={imageUrl} target="_blank">
          <Image
            src={imageUrl}
            width={8000}
            height={8000}
            className="object-cover max-w-[400px] max-h-[600px] mx-auto w-full h-full rounded-[5px]"
            priority
            quality={100}
            alt="gallery-image"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center mt-2">
        <CldUploadWidget onUpload={onUpload} uploadPreset="opphlmxz">
          {({ open }) => {
            const onClick = () => {
              open();
            };
            return (
              <div className="">
                <Button
                  type="button"
                  disabled={isLoading}
                  variant="outline"
                  className="bg-transparent text-black hover:text-white"
                  onClick={onClick}
                >
                  Schimbă imaginea
                </Button>
                {changes ? (
                  <Button
                    type="button"
                    variant="outline"
                    isLoading={isLoading}
                    className="bg-transparent ml-1 text-black hover:text-white"
                    onClick={()=>changeImage()}
                  >
                    Salvează
                  </Button>
                ) : null}
              </div>
            );
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
};

export default GalleryManagerImage;
