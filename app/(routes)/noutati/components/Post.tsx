"use client";

import { Button } from "@/components/ui/Button";
import { formatDateToDDMMYY } from "@/lib/utils";
import { FacebookPost } from "@/types";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa"

interface PostProps {
  post: FacebookPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  
  return (
    <div className="ring-offset-2 p-5 rounded-md flex flex-col items-center xl:flex-row xl:divide-x-2 divide-zinc-400 xl:space-x-5 text-black">
      {post.attachments?.data[0].media.image.src ? (
        <Image
          quality={100}
          width={766}
          height={466}
          loading="lazy"
          src={post.attachments?.data[0].media.image.src}
          className="max-h-[466px] max-w-[766px] w-full h-full object-cover rounded-md"
          alt="facebookImage"
        />
      ) : (
        <Image
          width={300}
          loading="lazy"
          height={200}
          src={"/ddt-white.png"}
          className="max-w-[300px] max-h-[200px] w-full h-full rounded-md"
          alt="facebookImage"
        />
      )}
      <div className="max-h-[466px] max-w-[600px] break-words overflow-y-scroll xl:px-5 mt-5 xl:mt-0 w-full">
        <div className="flex items-center gap-5 mb-5">
          <Image src={"/logo.jpg"} loading="lazy" quality={100}  width={50} height={50} className="max-w-[50px] min-h-[50px] self-start rounded-full object-cover" alt="user"/>
          <div className="flex flex-col flex-1">
            <p className="font-semibold text-sm">Școala de dans Dum Dance Team</p>
            <p className="text-xs font-medium">{formatDateToDDMMYY(new Date(post.created_time))}</p>
            </div>
        </div>
        <p className="text-sm font-roboto tracking-wider break-words w-full">
          {post.message}
        </p>
        {post.attachments?.data[0].url &&
          post.attachments?.data[0].url.trim() !== "" && (
            <div className="flex-1 flex items-center justify-center my-5">
              <a
                href={post.attachments?.data[0].url}
                className=""
                target="_blank"
              >
                <Button
                  variant={"fill"}
                  className="border-2 border-[#0866ff] text-sm xs:text-[.9em] bg-[#0866ff] xs:whitespace-nowrap rounded-md w-full sm:w-fit p-1 xs:p-2 sm:p-4 md:p-5 text-ddtWhite flex items-center gap-3"
                >
                  Vezi Mai Mult <FaFacebook />
                </Button>
              </a>
            </div>
          )}
      </div>
    </div>
  );
};

export default Post;
