import Hero from "@/components/Hero"
import Feed from "./components/Feed"
import Link from "next/link"
import { FacebookIcon } from "lucide-react"

const Noutati: React.FC = () => {
  return (
    <div>
        <Hero label="Noi, de peste tot"/>
        <div className="container mx-auto max-w-full mt-5">
          <p className="font-bold text-[1.5em] sm:text-[1.7em] md:text-[2.1em] text-center">Ultimele <span className="text-lightRed">noutăți</span> despre noi le găsiți <span className="text-lightRed">aici</span></p>
          <Link target="_blank" href={"https://www.facebook.com/dumdanceteam"} >
            <p className="text-center flex items-center justify-center text-darkGray">sau pe pagina noastră de Facebook <FacebookIcon className="w-4 h-4"/></p></Link>
        </div>
        <div className="mt-10 mb-5 mx-auto container max-w-full">
            <Feed/>
        </div>
    </div>
  )
}

export default Noutati