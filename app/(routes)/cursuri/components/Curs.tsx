import { FC } from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";


interface CursProps {
  imageUrl:string;
  title:string;
  description?:string;
  whatsappMessage: string;
}

const Curs: FC<CursProps> = ({ imageUrl, title, description, whatsappMessage }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imageUrl}
        width={8000}
        height={8000}
        quality={100}
        priority
        alt="curs"
        className="self-center mb-5 w-full max-h-[400px] object-cover rounded-[10px] hover:scale-105 transition-transform"
      />
      <p className="text-2xl font-bold text-black uppercase tracking-wider mb-5 text-center">{title}</p>
      <p className="md:hidden text-black tracking-tight leading-8 font-medium text-center sm:text-[1.25em] max-w-[400px] mb-2.5">
        {description}
      </p>
      <Link target="_blank" className={cn("self-center",buttonVariants({variant:"fill"}))} href={`https://wa.me/${process.env.PHONE_NUMBER}?text=${whatsappMessage}`}>
        Alege curs
      </Link>
    </div>
  );
};

export default Curs;
