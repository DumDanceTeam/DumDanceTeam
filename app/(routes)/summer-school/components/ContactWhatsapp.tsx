import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const ContactWhatsApp = () =>{
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center">
            <Link target="_blank" href={`https://wa.me/${process.env.phone_number}?text=Bună, aș dori mai multe informații despre Școala de Vară`} className={cn(buttonVariants({
                 variant:"default", 
            }),"bg-lightRed text-[1.6em] uppercase")}>Școala de Vară</Link>
            </div>
             </div>
    )
}