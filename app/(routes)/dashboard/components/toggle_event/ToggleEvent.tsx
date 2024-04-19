"use client"
import { EventToggle } from "@prisma/client";
import { Switch } from "@/components/ui/switch"
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface EventProps{
    showEvent: EventToggle;
}
export const ToggleEvent:React.FC<EventProps> = ({showEvent}) => {

    const {mutate: handleToggle, isLoading} = useMutation({
        mutationFn: async()=>{
            const res = await axios.post("/api/toggleEvent");
            return res;
        },
        onError:()=>{
            toast.error("Ceva a mers greșit. Încearcă mai tărziu !");
        },
        onSuccess:()=>{
            window.location.reload();
            toast.success(`Evenimentul a fost ${showEvent.show ? "dezactivat":"activat"}`);
        }
    })

  return (
    <div>
        <p>Activează / dezactivează evenimentul</p>
        <Switch disabled={isLoading} onClick={()=>handleToggle()} checked={showEvent.show}/>
    </div>
  )
}
