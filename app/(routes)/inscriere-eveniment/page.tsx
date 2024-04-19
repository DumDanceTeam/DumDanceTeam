import { FC } from "react";
import { PersInfoEvent } from "../components/PersInfoEvent";
import prismadb from "@/lib/db";
import { redirect } from "next/navigation";
import { ProgressBar } from "../components/ProgressBar";
interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const showEvent = await prismadb.eventToggle.findFirst();

  if (showEvent) {
    if (!showEvent.show) return redirect("/");
  } else return redirect("/");

  return (
    <div className="container relative mx-auto p-10">
      <h1 className="text-center font-bold text-4xl">Formular de înscriere</h1>
      <p className="text-center mb-5 font-bold">
        Completează formularul de mai jos. Locurile sunt limitate
      </p>
      <div className="my-10">
        <ProgressBar />
      </div>
      <PersInfoEvent />
    </div>
  );
};

export default page;
