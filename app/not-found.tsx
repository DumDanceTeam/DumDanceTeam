import Hero from "@/components/Hero"
import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const NotFound: React.FC = () => {
  return (
    <div>
        <Hero/>
        <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row my-20 items-center justify-center gap-10">
                <p className="text-center mt-6 lg:mt-2 text-[1.2em] xs:text-[1.5em] sm:text-[2em] md:text-[2.3em] lg:text-[2.6em] font-bold font-roboto">Nu am putut găsi pagina. <br/> <span className="text-lightRed">404</span> - Not <span className="text-lightRed">Found</span></p>
                <Link prefetch={true} className={cn(buttonVariants({
                  variant:"outline",
                }))} href={"/"}><ArrowLeft className="w-4 h-4 mr-1"/> Înapoi Acasă</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound