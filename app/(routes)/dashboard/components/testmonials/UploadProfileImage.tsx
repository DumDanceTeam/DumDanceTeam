"use client";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/Button";

interface UploadProfileImageProps{
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  uploadProgress: number;
  setUploadProgress: Dispatch<SetStateAction<number>>;
  isUploading: boolean;
  setIsUploading: Dispatch<SetStateAction<boolean>>;
}

const UploadProfileImage: React.FC<UploadProfileImageProps> = ({imageUrl,setImageUrl,uploadProgress,setUploadProgress, isUploading, setIsUploading}) => {
  const onUpload = (result: any) =>{
    setImageUrl(result.info.secure_url);
  }
  return (
    <div className="">
      <div className="flex flex-col gap-2">
        {imageUrl && imageUrl.trim() !== "" ? (
            <Image
                src={imageUrl}
                width={200}
                height={200}
                loading="lazy"
                className="object-cover w-[150px] h-[150px] mx-auto rounded-full"
                quality={100}
                
                alt="profile image"
            />
          
        ) : null}
      <CldUploadWidget onUpload={onUpload} uploadPreset="opphlmxz">
        {({open})=>{
          const onClick = () =>{
            open();
        }
        return (
            <Button aria-label="Încarcă imaginea de profil" type="button" variant="outline" className="bg-transparent text-black hover:text-white" onClick={onClick}>
                Încarcă imaginea de profil
            </Button>
        )
        }}
       </CldUploadWidget>
      </div>
    </div>
  );
};

export default UploadProfileImage;
