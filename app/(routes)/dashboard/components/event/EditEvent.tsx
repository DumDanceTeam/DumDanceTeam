"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { extractYouTubeVideoID } from "@/lib/utils";
import { EventValidator } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Event } from "@prisma/client";
import { Edit, ImageIcon, Text } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineTitle } from "react-icons/md";

interface EditEventProps {
  ev: Event;
}

const EditEvent: React.FC<EditEventProps> = ({ ev }) => {
  const [mainImageUrl, setMainImageUrl] = useState(ev.mainImage);
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
  const videoId = extractYouTubeVideoID(ev.youtubeLink || "");

  const onUpload = (result: any) => {
    setMainImageUrl(result.info.secure_url);
  };

  return (
    <form onSubmit={handleSubmit(data=>console.log(data))}>
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
                  onChange={(e) => setValue("title", e.target.value)}
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
                  onChange={(e) => setValue("description", e.target.value)}
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
                        variant={"outline"}
                        className="mt-1"
                        aria-label="Schimbă imaginea"
                        onClick={onClick}
                      >
                        Schimbă imaginea
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
                  {ev.secondImages.map((sI, i) => (
                    <div key={i} className="flex flex-col items-center sm:flex-row gap-2">
                      <Image
                        loading="lazy"
                        width={525}
                        height={400}
                        className="w-full h-full max-w-[525px] max-h-[400px] min-h-[235px] min-w-[250px] object-cover rounded-sm"
                        alt="main-image"
                        src={sI}
                      />
                      <Button variant={"outline"}>Schimbă imaginea</Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                {videoId && videoId.trim() !== "" ? (
                  <iframe
                    className="w-full h-full max-w-[500px] min-h-[400px] max-h-[500px] min-w-[240px]"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allowFullScreen
                  ></iframe>
                ) : null}
              </div>
            </div>

            <Button type="submit" variant={"fill"} className="mt-2">Salvează</Button>
          </div>
        </div>
    </form>
  );
};
export default EditEvent;
