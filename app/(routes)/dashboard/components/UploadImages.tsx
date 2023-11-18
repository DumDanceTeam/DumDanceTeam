"use client";
import { Dispatch, SetStateAction } from "react";
import {CldUploadWidget} from "next-cloudinary";
import { Button } from "@/components/ui/Button";

interface UploadImagesProps{
    images: Array<string>;
    setImages: Dispatch<SetStateAction<Array<string>>>;
}

const UploadImages: React.FC<UploadImagesProps> = ({images,setImages}) => {

  const onUpload = (result: any) =>{
    setImages(prev=>[...prev,result.info.secure_url]);
  }
  return (
    <div className="w-full">
      <div className="w-full">
      <CldUploadWidget onUpload={onUpload} uploadPreset="opphlmxz">
        {({open})=>{
          const onClick = () =>{
            open();
        }
        return (
            <Button type="button" variant="fill" className="bg-transparent text-black hover:text-black" onClick={onClick}>
                Încarcă alte imagini
            </Button>
        )
        }}
       </CldUploadWidget>
      </div>
    </div>
  );
};

export default UploadImages;
