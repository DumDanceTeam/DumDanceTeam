import prismadb from "@/lib/db";
import { redirect } from "next/navigation";
import SummerImages from "./components/SummerImages";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import { FaWhatsapp } from "react-icons/fa";
const page = async () => {
  const showEvent = await prismadb.eventToggle.findFirst();

  if (showEvent) {
    if (!showEvent.show) return redirect("/");
  } else return redirect("/");

  return (
    <>
      <SummerImages />
      <div className="container relative mx-auto p-10">
        {/* <div className="my-10">
        <ProgressBar />
      </div>
      <SummerPersInfoEvent /> */}
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Link
            target="_blank"
            href="https://forms.gle/FsNicx1ULBC9PUMY9"
            className={cn(
              buttonVariants({}),
              "bg-[#29b9e3] hover:bg-[#1b7a96] text-lg uppercase w-full sm:w-1/2 whitespace-nowrap p-5"
            )}
          >
            Înscrie-te acum
          </Link>
        </div>
      </div>{" "}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-2.5 mb-5">
        <p className="text-center text-foreground my-2.5">
          Daca simți că ai nevoie de mai multe informații, te scrie-ne{" "}
          <Link
            href={`https://wa.me/${process.env.phone_number}?text=Bună, aș dori mai multe informații despre Școala de Vară`}
            className="underline underline-offset-4 decoration-[#25d366] hover:decoration-[#178641]"
          >
            aici.
          </Link>
        </p>
        <FaWhatsapp className="text-[#25d366]" />
      </div>
    </>
  );
};

export default page;
