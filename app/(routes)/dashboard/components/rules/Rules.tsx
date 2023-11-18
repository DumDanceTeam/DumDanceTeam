"use client"
import { Rule } from "@prisma/client";
import { Switch } from "@/components/ui/switch"
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface RulesProps{
    showRules: Rule;
}
const Rules:React.FC<RulesProps> = ({showRules}) => {

    const {mutate: handleToggle, isLoading} = useMutation({
        mutationFn: async()=>{
            const res = await axios.post("/api/rules");
            return res;
        },
        onError:()=>{
            toast.error("Ceva a mers greșit. Încearcă mai tărziu !");
        },
        onSuccess:()=>{
            window.location.reload();
            toast.success(`Regulamentul a fost ${showRules.show ? "dezactivat":"activat"}`);
        }
    })

  return (
    <div>
        <p>Activează / dezactivează regulamentul</p>
        <Switch disabled={isLoading} onClick={()=>handleToggle()} checked={showRules.show}/>
    </div>
  )
}

export default Rules