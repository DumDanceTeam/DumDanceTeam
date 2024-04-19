import { FC } from "react";
import { PersInfoEvent } from "../components/PersInfoEvent";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <div className="container relative mx-auto p-10">

      <h1 className="text-center font-bold text-4xl">
        Formular de înscriere
      </h1>
      <p className="text-center mb-5 font-bold">Completează formularul de mai jos. Locurile sunt limitate</p>
      <PersInfoEvent />
      
    </div>
  );
};

export default page;
