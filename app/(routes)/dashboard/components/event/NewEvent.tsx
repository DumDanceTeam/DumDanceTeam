"use client";

import { Text } from "lucide-react";
import { MdLink, MdTitle } from "react-icons/md";
import { Button } from "@/components/ui/Button";
import UploadMain from "../UploadMain";
import UploadImages from "../UploadImages";
import { useForm } from "react-hook-form";
import { EventRequest, EventValidator } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";

const NewEvent: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [secondImages, setSecondImages] = useState<Array<string>>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [youtubeLink, setYoutubeLink] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EventRequest>({
    resolver: zodResolver(EventValidator),
  });

  const { mutate: createEvent, isLoading } = useMutation({
    mutationFn: async function (data: EventRequest) {
      const res = await axios.post("/api/event", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Evenimentul a fost creat !");
      window.location.reload();
    },
    onError: () => {
      toast.error("Ceva a mers greșit, te rugăm să încerci mai tărziu !");
    },
    onSettled: () => {
      setValue("title", "");
      setValue("description", "");
      setImageUrl("");
      setSecondImages([]);
      setUploadProgress(0);
      setIsUploading(false);
      setYoutubeLink("");
    },
  });

  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  useEffect(() => {
    if (errors) {
      setShowErrorMessage(true);
      const timer = setTimeout(() => {
        setShowErrorMessage(false);
      }, 2300);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    setValue("mainImage", imageUrl);
  }, [imageUrl]);
  useEffect(() => {
    setValue("secondImages", [...secondImages]);
  }, [secondImages]);

  return (
    <div>
      <form
        className="bg-gray-200 p-4 rounded-sm"
        onSubmit={handleSubmit((data) => createEvent(data))}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <MdTitle className="w-6 h-6" />
            <input
              {...register("title")}
              className="bg-ddtWhite h-full w-full md:max-w-fit p-2 rounded-md outline-none"
              placeholder="numele evenimentului"
            />
          </div>
          {showErrorMessage && errors.title ? (
            <p className="text-sm text-lightRed">{errors.title.message}</p>
          ) : null}
        </div>
        <div className="flex mt-3 gap-2 w-full">
          <Text className="w-6 h-6" />
          <textarea
            {...register("description")}
            className="resize-none bg-ddtWhite outline-none p-2 rounded-md w-full"
            rows={4}
            placeholder="descrierea evenimentului"
          ></textarea>
        </div>
        {showErrorMessage && errors.description ? (
          <p className="text-sm text-lightRed">{errors.description.message}</p>
        ) : null}
        <div className="flex items-center gap-2 mt-3">
          <MdLink className="w-6 h-6" />
          <input
            {...register("youtubeLink")}
            className="bg-ddtWhite h-full w-full md:max-w-fit p-2 rounded-md outline-none"
            placeholder="link videoclip (optional)"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-3 justify-between">
          <div className="max-flex-1">
            <UploadMain
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              uploadProgress={uploadProgress}
              setUploadProgress={setUploadProgress}
              isUploading={isUploading}
              setIsUploading={setIsUploading}
            />
            <input
              className="hidden"
              {...register("mainImage")}
              value={imageUrl}
            />
            {showErrorMessage && errors.mainImage ? (
              <p className="text-sm text-lightRed">
                {errors.mainImage.message}
              </p>
            ) : null}
          </div>
          <div className="max-flex-1">
            <UploadImages images={secondImages} setImages={setSecondImages} />
              <p>poți selecta imagini nelimitate</p>

            {secondImages && secondImages.length > 0 ? (
              <div className="mt-2 flex flex-col gap-5 max-h-[500px] overflow-scroll overflowContainer">
                {secondImages.map((imgUrl, index) => (
                  <Image
                    width={600}
                    key={index}
                    loading="lazy"
                    height={600}
                    className="max-w-[600px] max-h-[600px] min-w-[240px] sm:min-w-[500px] h-full w-full mx-auto object-cover rounded-sm"
                    quality={100}
                    
                    src={imgUrl}
                    alt="uploaded-image"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex items-center justify-center  mt-3">
          <Button type="submit" isLoading={isLoading}>
            Creează evenimentul
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewEvent;
