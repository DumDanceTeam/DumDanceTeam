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
      <h1 className="text-center font-bold text-4xl">Formular de înscriere</h1>
      <p className="text-center font-bold mb-4">Summer School 2024</p>
      <p className="text-center">
        Te rugam sa completezi datele tale de contact, numele si varsta
        copilului, perioada si te vom contacta in curand.
      </p>
      <div className="my-10">
        <ProgressBar />
      </div>
      <SummerPersInfoEvent />
    </div>
    <ContactWhatsApp/>
    </>

  );
};

export default page;
