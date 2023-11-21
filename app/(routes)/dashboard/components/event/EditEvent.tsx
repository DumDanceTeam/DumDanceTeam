"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { extractYouTubeVideoID } from "@/lib/utils";
import { EventValidator } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Event } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Edit, ImageIcon, Text, Youtube } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineTitle } from "react-icons/md";

interface EditEventProps {
  ev: Event;
}

const EditEvent: React.FC<EditEventProps> = ({ ev }) => {
  const [mainImageUrl, setMainImageUrl] = useState(ev.mainImage);
  const [secondImages, setSecondImages] = useState(ev.secondImages);
  const [youtubeLink, setYoutubeLink] = useState(ev.youtubeLink);
  const [title, setTitle] = useState(ev.title);
  const [description, setDescription] = useState(ev.description);

  const [currentSecondImage, setCurrentSecondImage] = useState<number | undefined>();
  const { handleSubmit, register, setValue, getValues } = useForm({
    resolver: zodResolver(EventValidator),
    values: {
      title: ev.title,
      description: ev.description,
      mainImage: ev.mainImage,
      secondImages: ev.secondImages,
      youtubeLink: ev.youtubeLink,
    },
  });
  const videoId = extractYouTubeVideoID(youtubeLink || "");

  const onUpload = (result: any) => {
    setMainImageUrl(result.info.secure_url);
  };

  const onUploadSecondImage = (result: any)=>{
    setSecondImages(prev=>{
      return prev.map((sI,i)=>{
        if(i==currentSecondImage) return result.info.secure_url;

        return sI;
      });
    });
    
  }

  const {mutate: updateEvent, isLoading} = useMutation({
    mutationFn: async(data)=>{
      const res = await axios.patch(`/api/event/${ev.id}`,{
        title,
        description,
        mainImage:mainImageUrl,
        secondImages,
        youtubeLink,
      });

      return res;
    },
    onSuccess:()=>{
      toast.success("Evenimentul a fost actualizat !");
      window.location.reload();
    },
    onError:()=>{
      toast.error("Ceva a mers greșit. Te rugăm să încerci mai târziu !");
    }
  })


  return (
    <form onSubmit={handleSubmit(data=>updateEvent())}>
        <div className="">
          <div className="w-full max-h-[700px] overflow-y-scroll">
            <div>
              <p className="text-center text-[2em] font-medium">Editează evenimentul</p>
              <p>
                Schimbă datele evenimentului. Apasă pe butonul salvează când ai
                terminat.
              </p>
            </div>
            <div className="">
              <div className="">
                <div className="flex gap-1 items-center">
                  <MdOutlineTitle className="w-4 h-4" />
                  <p className="font-bold">Titlul</p>
                </div>
                <Input
                  {...register("title")}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="outline-none border-b"
                />
              </div>
              <div className="mt-4">
                <div className="flex gap-1 items-center">
                  <Text className="w-4 h-4" />
                  <p className="font-bold">Descrierea</p>
                </div>
                <textarea
                  {...register("description")}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 w-full h-[200px] resize-none outline-none"
                ></textarea>
              </div>

              <div className="mt-4">
                <div className="flex gap-1 items-center">
                  <ImageIcon />
                  <p className="font-bold">Imaginea principală</p>
                </div>
                <Image
                  loading="lazy"
                  src={mainImageUrl}
                  width={8000}
                  height={8000}
                  className="rounded-[5px] w-full h-full object-cover min-h-[300px] max-w-[525px] sm:max-h-[700px]"
                  quality={100}
                  alt="event image"
                />
                <CldUploadWidget onUpload={onUpload} uploadPreset="opphlmxz">
                  {({ open }) => {
                    const onClick = () => {
                      open();
                    };
                    return (
                      <Button
                        type="button"
                        variant={"outline"}
                        className="mt-1"
                        aria-label="Schimbă imaginea principală"
                        onClick={onClick}
                      >
                        Schimbă imaginea principală
                      </Button>
                    );
                  }}
                </CldUploadWidget>
              </div>

              <div className="mt-4">
                <div className="flex gap-1 items-center">
                  <ImageIcon />
                  <p className="font-bold">Imagini secundare</p>
                </div>
                <div className="flex flex-col gap-5">
                  {secondImages.map((sI, i) => (
                    <div key={i} className="flex flex-col items-center sm:flex-row gap-2">
                      <Image
                        loading="lazy"
                        width={525}
                        height={400}
                        className="w-full h-full max-w-[525px] max-h-[400px] min-h-[235px] min-w-[250px] object-cover rounded-sm"
                        alt="main-image"
                        src={sI}
                      />
                      <CldUploadWidget onUpload={onUploadSecondImage} uploadPreset="opphlmxz">
                        {({ open }) => {
                          const onClick = () => {
                            setCurrentSecondImage(i);
                            open();
                          };
                          return (
                            <Button
                              type="button"
                              variant={"outline"}
                              aria-label="Schimbă imaginea"
                              onClick={onClick}
                            >
                              Schimbă imaginea
                            </Button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex gap-2 items-center">
                  <Youtube className="w-4 h-4"/>
                  <p>Link video YouTube</p>
                </div>
                <Input value={youtubeLink || ""} className="outline-none border-b mb-2" onChange={(e)=>setYoutubeLink(e.target.value)}/>
                {videoId && videoId.trim() !== "" ? (
                  <iframe
                    className="w-full h-full max-w-[500px] min-h-[400px] max-h-[500px] min-w-[240px]"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allowFullScreen
                  ></iframe>
                ) : null}
              </div>
            </div>

            <Button type="submit" variant={"fill"} isLoading={isLoading} className="mt-2">Salvează</Button>
          </div>
        </div>
    </form>
  );
};
export default EditEvent;
