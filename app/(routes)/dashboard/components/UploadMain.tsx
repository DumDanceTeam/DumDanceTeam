"use client";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import {CldUploadWidget} from "next-cloudinary";
import { Button } from "@/components/ui/Button";

interface UploadMainProps{
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  uploadProgress: number;
  setUploadProgress: Dispatch<SetStateAction<number>>;
  isUploading: boolean;
  setIsUploading: Dispatch<SetStateAction<boolean>>;
}

const UploadMain: React.FC<UploadMainProps> = ({imageUrl,setImageUrl,uploadProgress,setUploadProgress, isUploading, setIsUploading}) => {

  const onUpload = (result: any) =>{
    setImageUrl(result.info.secure_url);
  }

  return (
    <div className="">
      <div className="flex flex-col gap-2">
        {imageUrl && imageUrl.trim() !== "" ? (
          <Link href={imageUrl} className="cursor-pointer" target="_blank">
            <Image
              width={8000}
              height={8000}
              className="max-w-[600px] max-h-[600px] min-w-[240px] sm:min-w-[500px] h-full w-full mx-auto object-cover rounded-sm"
              quality={100}
              priority
              src={imageUrl}
              alt="uploaded-image"
            />
          </Link>
          
        ) : null}
       <CldUploadWidget onUpload={onUpload} uploadPreset="opphlmxz">
        {({open})=>{
          const onClick = () =>{
            open();
        }
        return (
            <Button type="button" variant="fill" onClick={onClick}>
                Încarcă imaginea principală
            </Button>
        )
        }}
       </CldUploadWidget>
      </div>
    </div>
  );
};

export default UploadMain;
