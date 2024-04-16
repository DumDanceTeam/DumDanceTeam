import { FC } from "react";
import { PersInfoEvent } from "../components/PersInfoEvent";
import prismadb from "@/lib/db";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center font-bold text-4xl mb-5">
        Inscrie-te la eveniment
      </h1>
      <PersInfoEvent />
      
    </div>
  );
};

export default page;
