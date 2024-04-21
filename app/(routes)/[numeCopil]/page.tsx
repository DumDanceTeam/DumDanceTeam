import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }: { params: { numeCopil: string } }) => {
  return (
    <div className="relative container mx-auto flex justify-center items-center py-20">
      <div className="border-2 p-10 shadow-2xl rounded-[10px] w-fit">
        <p className="font-bold text-xl text-center mb-5">
          <span className="underline underline-offset-2">
            {decodeURIComponent(params.numeCopil)}{" "}
          </span>
          te-a invitat la eveniment!
        </p>
        <Image
          src={"/event.jpeg"}
          width={400}
          height={400}
          className="max-w-full max-h-full"
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
