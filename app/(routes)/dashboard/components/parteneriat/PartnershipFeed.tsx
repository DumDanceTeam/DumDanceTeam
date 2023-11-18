"use client";
import { useState } from "react";
import {
  useMutation,
} from "@tanstack/react-query";
import { Partnership as PartnershipDB } from "@prisma/client";
import axios from "axios";
import Event from "@/app/(routes)/evenimente/components/Event";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import Partnership from "@/app/(routes)/sustine-performanta/components/Partnership";

interface PartnerFeedProps{
    initialPartnerships: PartnershipDB[];
}
const PartnerFeed: React.FC<PartnerFeedProps> = ({initialPartnerships}) => {
  //use infinite-query
  const [toDeletePartnership, setToDeletePartnership] = useState<string | undefined>(
    undefined
  );
 
  //delete event
  const { mutate: deletePartnership, isLoading } = useMutation({
    mutationFn: async function (id: string) {
      const res = await axios.delete(`/api/partnership/${id}`);
      return res;
    },
    onSuccess: () => {
      toast.success("Parteneriatul a fost șters cu succes !");
      window.location.reload();
    },
    onError: () => {
      toast.error(
        "Parteneriatul nu s-a putut șterge. Te rugăm să încerci mai târziu !"
      );
    },
    onMutate: (id) => {
      setToDeletePartnership(id);
    },
  });

  return (
    <div className="flex flex-col gap-10 max-h-[800px] overflow-auto border-2 rounded-[5px] border-lightRed p-10">
       {initialPartnerships ? (
        initialPartnerships?.map((partnership, i) => {
          if (i === initialPartnerships.length - 1)
            return (
              <div  key={partnership.id} className="flex flex-col gap-3">
                <Partnership index={i + 1} partnership={partnership} />
                <Trash
                  onClick={() => deletePartnership(partnership.id)}
                  className={`w-6 h-6 text-lightRed cursor-pointer ${
                    isLoading && partnership.id === toDeletePartnership
                      ? "pointer-events-none text-slate-600"
                      : null
                  }`}
                />
              </div>
            );
          else
            return (
              <div key={partnership.id} className="flex flex-col gap-3">
                <Event fullLayout={false} index={i + 1} event={partnership} />
                <Trash
                  onClick={() => deletePartnership(partnership.id)}
                  className={`w-6 h-6 text-lightRed cursor-pointer ${
                    isLoading && partnership.id === toDeletePartnership
                      ? "pointer-events-none text-slate-600"
                      : null
                  }`}
                />
              </div>
            );
        })
      ) : null}
    </div>
  );
};

export default PartnerFeed;
