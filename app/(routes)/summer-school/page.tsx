import prismadb from "@/lib/db";
import { redirect } from "next/navigation";
import { ProgressBar } from "../components/ProgressBar";
import { SummerPersInfoEvent } from "../components/SummerPersInfoEvent";
import SummerImages from "./components/SummerImages";
import { ContactWhatsApp } from "./components/ContactWhatsapp";

const page = async () => {
  const showEvent = await prismadb.eventToggle.findFirst();

  if (showEvent) {
    if (!showEvent.show) return redirect("/");
  } else return redirect("/");

  return (
    <>
    <SummerImages/>
    <div className="container relative mx-auto p-10">
     
      {/* <div className="my-10">
        <ProgressBar />
      </div>
      <SummerPersInfoEvent /> */}
    </div>
    <ContactWhatsApp/>
    </>

  );
};

export default page;
