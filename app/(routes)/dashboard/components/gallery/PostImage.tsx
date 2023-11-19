"use client"

import { Button } from "@/components/ui/Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import toast from "react-hot-toast";


const PostImage = () => {
    const {mutate: addImage, isLoading} = useMutation({
        mutationFn: async(imageUrl: string)=>{
            const res = await axios.post(`/api/images`,{imageUrl});
    
            return res;
        },
        onSuccess:()=>{
            toast.success("Imaginea a fost adaugată cu succes !");
            window.location.reload();
        },
        onError:()=>{
            toast.error("Ceva a mers greșit. Te rugăm să încerci mai târziu !");
        }
      })

    const onUpload = (result: any) => {
        addImage(result.info.secure_url);
    };

  return (
    <div>
        <CldUploadWidget onUpload={onUpload} uploadPreset="opphlmxz">
          {({ open }) => {
            const onClick = () => {
              open();
            };
            return (
              <div className="">
                <Button
                  type="button"
                  isLoading={isLoading}
                  variant="outline"
                  className="bg-transparent text-black hover:text-white"
                  onClick={onClick}
                >
                  Adaugă imagine
                </Button>
               
              </div>
            );
          }}
        </CldUploadWidget>
    </div>
  )
}

export default PostImage