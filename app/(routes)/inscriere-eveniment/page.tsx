import { PersInfoEvent } from "../components/PersInfoEvent";
import prismadb from "@/lib/db";
import { redirect } from "next/navigation";
import { ProgressBar } from "../components/ProgressBar";

const page = async ({searchParams}:{searchParams:{nume: string}}) => {
  const showEvent = await prismadb.eventToggle.findFirst();
  
  if (showEvent) {
    if (!showEvent.show) return redirect("/");
  } else return redirect("/");

  return (
    <div className="container relative mx-auto p-10">
      <h1 className="text-center font-bold text-4xl">Formular de înscriere</h1>
      <p className="text-center font-bold mb-4">Ritmul DDT: Aradul dansează cu Mihai Petre și Dum Dance Team</p>
      <p className="text-center">
      Înscrierea la evenimentul ”Ritmul DDT: Aradul dansează cu Mihai Petre și Dum Dance Team” se realizează completând acest formular, pană în data de 08.05.2024, în limita locurilor disponibile. Locurile sunt limitate, deci nu rata șansa pentru prima dată în Arad. Înscrie-te acum pentru a fi sigur că ai parte de o experiență cultural-educativă minunată ! 🌟
      </p>
      <div className="my-10">
        <ProgressBar />
      </div>
      <PersInfoEvent />
    </div>
  );
};

export default page;
