import { CheckCircle } from "lucide-react"
import Image from "next/image"

const InscriereCuSucces = () => {
  return (
    <div className="flex lg:flex-row container mx-auto h-screen items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center">
            <div>
                <CheckCircle className="w-[100px] h-[100px] mx-auto text-green-500"/>
                <p>
                Mulțumim pentru înscrierea ta la evenimentul nostru extraordinar, "Ritmul DDT: Aradul dansează cu Mihai Petre și Dum Dance Team"! Suntem încântați să te avem alături de noi!

După încheierea perioadei de înscriere, vom lua legătura personal cu tine pentru a-ți oferi toate detaliile necesare privind desfășurarea evenimentului. Așteaptă cu încredere un e-mail, un mesaj sau un apel telefonic din partea noastră!

Până atunci, te rugăm să fii atent la comunicările noastre ulterioare și să te pregătești pentru o zi plină de distracție și dans!

Cu cele mai bune urări,
Echipa Dum Dance Team Arad
                </p>
            </div>
            <Image src={"/mihai.png"} width={1600} height={800} quality={100} className="w-full h-full max-w-[550px] max-h-[750px] rounded-[10px]" alt="event"/>
        </div>
    </div>
  )
}

export default InscriereCuSucces