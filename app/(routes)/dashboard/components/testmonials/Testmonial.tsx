"use client"
import UploadProfileImage from "./UploadProfileImage";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface TestmonialProps {
  id: string;
  name: string;
  description: string;
  profileUrl: string;
}

const Testmonial: React.FC<TestmonialProps> = ({
  id,
  name,
  description,
  profileUrl,
}) => {
    const [imageUrl, setImageUrl] = useState<string>(profileUrl);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [descriptionText, setDescriptionText] = useState<string>(description);
    const [nameText, setNameText] = useState<string>(name);
    const [changes, setChanges] = useState<boolean>(false);

    useEffect(()=>{
        if(imageUrl.trim()!=='' && descriptionText.trim()!=='' && nameText.trim()!==''){
      
            if(imageUrl!==profileUrl || nameText!==name || descriptionText!==description)
                setChanges(true);
            else setChanges(false);
        }else setChanges(false);
    },[imageUrl,descriptionText,nameText]);


    const {mutate: updateTestmonial, isLoading} = useMutation({
        mutationFn: async function(id: string){
            const res = await axios.patch(`/api/testmonials/${id}`,{newData:{
              name: nameText,
              description: descriptionText,
              profileUrl: imageUrl,
            }});

            return res;
        },
        onSuccess:()=>{
            toast.success("Schimbarea a fost facută cu succes !");
            window.location.reload();
        },
        onError:()=>{
            toast.error("Ceva a mers greșit. Te rugăm să încerci mai târziu !");
        }
    });

  return (
    <div>
      <UploadProfileImage imageUrl={imageUrl} setImageUrl={setImageUrl} uploadProgress={uploadProgress} setUploadProgress={setUploadProgress} isUploading={isUploading} setIsUploading={setIsUploading}/>
      <div className="w-full mt-3 shadow-[0px_0px_5px_rgba(255,51,8,.45)] group-hover:shadow-[0px_0px_5px_rgba(255,51,8,.75)] duration-150 p-3 rounded-md">
        <p className="tracking-tighter lg:max-w-[300px] break-words font-light text-[1.1em] xs:text-[1.5em] text-darkGray opacity-[.8]">
        &quot;<textarea value={descriptionText} onChange={(e)=>setDescriptionText(e.target.value)} cols={50} className="bg-transparent min-h-[300px] resize-none outline-none w-full max-w-fit whitespace-break-spaces h-full"></textarea>&quot;
        </p>
        <div className="flex justify-center">
            <input className="outline-none bg-transparent text-center font-roboto font-medium" value={nameText} onChange={(e)=>setNameText(e.target.value)}/>
        </div>
      </div>
      {changes ? <div className="flex justify-center">
        <Button isLoading={isLoading} className="my-3 bg-lightRed" onClick={()=>updateTestmonial(id)}>Salvează</Button>
      </div>  : null}
    </div>
  );
};

export default Testmonial;
