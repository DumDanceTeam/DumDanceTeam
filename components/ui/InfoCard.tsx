import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface InfoCardProps extends HTMLAttributes<HTMLDivElement>{
    icon: React.ReactNode;
    label: string;
    description?: string;
}
//sm:w-[250px]
const InfoCard: React.FC<InfoCardProps> = ({icon,label,description,className}) => {
  return (
    <div className={cn("w-[120px] xsBig:w-[150px] border-[10px] border-black rounded-full sm:rounded-[8px] py-6 h-[155px]", className)}>
        <div className="flex h-full flex-col gap-1 items-center justify-center">
            <div className="">
                {icon}
            </div>
            <p className="font-bold tracking-wider text-sm whitespace-break-spaces lowercase font-roboto text-black sm:text-[1.15em] text-center">{label}</p>
        </div>
     
    </div>
    
  )
}

export default InfoCard
