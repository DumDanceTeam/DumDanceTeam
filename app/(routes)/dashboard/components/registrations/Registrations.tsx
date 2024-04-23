import { Registration } from "@prisma/client";
import { FC } from "react";

interface RegistrationsProps {
  allRegistrations: Registration[];
}

export const Registrations: FC<RegistrationsProps> = ({ allRegistrations }) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex gap-10 font-bold text-sm overflow-auto max-w-full">
        <div className="flex flex-col gap-10">
          <p>nume_copil</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p>{reg.nume_copil}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <p>varsta_copil</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p>{reg.varsta_copil}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>școală_grădiniță</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p>{reg.scoala}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>grupa_copil</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p>{reg.grupa_copil}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>nume_parinte</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p>{reg.nume_parinte}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>telefon_parinte</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p>{reg.numar_telefon}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>nume_parinte_eveniment</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p>{reg.nume_parinte_eveniment}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>email_parinte</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p>{reg.email_parinte}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>sesiune_foto</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p>{reg.sesiune_foto}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>tombola</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p>{reg.tombola}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>inregistrat</p>
          <div className="space-y-5">
            {allRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="text-sm font-normal whitespace-nowrap border-b-2 border-black"
              >
                <p className="whitespace-nowrap">
                  {new Date(reg.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrations;
