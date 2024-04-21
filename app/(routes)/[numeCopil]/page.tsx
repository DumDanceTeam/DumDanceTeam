import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }: { params: { numeCopil: string } }) => {
  return (
    <div className="relative container mx-auto flex justify-center items-center py-20">
      <div className="border-2 p-10 shadow-2xl rounded-[10px] w-fit">
        <p className=" text-xl text-center mb-5">
          Salut, ai primit o invitație de la <span className="underline font-bold underline-offset-2">
            {params.numeCopil.replace(/([a-z])([A-Z])/g, '$1 $2')}{" "}
          </span><br/>
          pentru evenimentul <span className="font-bold"> Ritmul DDT: Aradul dansează cu Mihai Petre și Dum Dance Team</span>
        </p>
        <p>
        Prin intermediul acestui link special, ai prioritate la eveniment și îți asiguri un loc la cea mai tare petrecere a anului alaturi de {params.numeCopil.replace(/([a-z])([A-Z])/g, '$1 $2')}<br/>
    <br/>
Dar asta nu e tot! Te așteaptă o zi plină de surprize: ore de dans distractive, ocazia de a dansa cu Mihai Petre în persoană, sesiuni foto deosebite și multe alte premii și momente speciale!
<br/>
<br/>
Avem și o tombolă specială în cadrul evenimentului!<br/>
Nu rata ocazia de a fi parte din această experiență unică!

Fii parte din aventură și adu-ți prietenii! Hai să facem această zi memorabilă împreună!

Let's dance together! 🎉💃🕺<br/><br/>
        </p>
        <Image
          src={"/mihai.png"}
          width={6000}
          height={3140}
          className="max-w-full max-h-full w-full"
          quality={100}
          alt="event"
        />
        <Link
          href={`/inscriere-eveniment?nume=${params.numeCopil}`}
          className={cn(
            buttonVariants({}),
            "bg-emerald-500 w-full mt-10 hover:bg-[#096c4b]"
          )}
        >
          Acceptă invitația!
        </Link>
      </div>
    </div>
  );
};

export default page;
