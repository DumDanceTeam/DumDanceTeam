"use client";
import { FC, useRef, useEffect, useState } from "react";
import { useIntersection } from "@mantine/hooks";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Event as EventDB } from "@prisma/client";
import axios from "axios";
import Event from "@/app/(routes)/evenimente/components/Event";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";

interface EventsFeedProps {
  initialEvents: EventDB[];
  searchedEvents?: EventDB[];
  eventString?: string;
}

const EventsFeed: FC<EventsFeedProps> = ({
  initialEvents,
  searchedEvents,
  eventString,
}) => {
  //use infinite-query
  const [toDeleteEvent, setToDeleteEvent] = useState<string | undefined>(
    undefined
  );
  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["infinite-query"],
    async ({ pageParam = 1 }) => {
      const query = `/api/event?limit=4&page=${pageParam}`;

      const { data } = await axios.get(query);

      return data as EventDB[];
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: { pages: [initialEvents], pageParams: [1] },
    }
  );

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry, fetchNextPage]);

  const events = data?.pages.flatMap((page) => page) ?? initialEvents;

  //delete event
  const { mutate: deleteEvent, isLoading } = useMutation({
    mutationFn: async function (id: string) {
      const res = await axios.delete(`/api/event/${id}`);
      return res;
    },
    onSuccess: () => {
      toast.success("Evenimentul a fost șters cu succes !");
      window.location.reload();
    },
    onError: () => {
      toast.error(
        "Evenimentul nu s-a putut șterge. Te ruugăm să încerci mai târziu !"
      );
    },
    onMutate: (id) => {
      setToDeleteEvent(id);
    },
  });

  return (
    <div className="flex flex-col gap-10 max-h-[800px] overflow-auto border-2 rounded-[5px] border-lightRed p-10">
      {searchedEvents &&
      searchedEvents.length === 0 &&
      eventString !== "" &&
      eventString !== undefined ? (
        <div className="flex items-center gap-3">
        <p className="text-black">
          Cam <span className="text-lightRed">gol</span> pe aici...
        </p>
        <Image src="/kiss.svg" width={8000} height={8000} quality={100} priority alt="kiss" className="object-cover max-w-[80px] max-h-[80px]"/>
        </div>
      ) : searchedEvents ? (
        searchedEvents.map((ev, i) => {
          return (
            <div key={ev.id} className="flex flex-col gap-3">
              <Event fullLayout={false} index={i + 1} event={ev} />
              <Trash
                onClick={() => deleteEvent(ev.id)}
                className={`w-6 h-6 text-lightRed cursor-pointer ${
                  isLoading && ev.id === toDeleteEvent
                    ? "pointer-events-none text-slate-600"
                    : null
                }`}
              />
            </div>
          );
        })
      ) : events ? (
        events?.map((ev, i) => {
          if (i === events.length - 1)
            return (
              <div ref={ref} key={ev.id} className="flex flex-col gap-3">
                <Event fullLayout={false} index={i + 1} event={ev} />
                <Trash
                  onClick={() => deleteEvent(ev.id)}
                  className={`w-6 h-6 text-lightRed cursor-pointer ${
                    isLoading && ev.id === toDeleteEvent
                      ? "pointer-events-none text-slate-600"
                      : null
                  }`}
                />
              </div>
            );
          else
            return (
              <div key={ev.id} className="flex flex-col gap-3">
                <Event fullLayout={false} index={i + 1} event={ev} />
                <Trash
                  onClick={() => deleteEvent(ev.id)}
                  className={`w-6 h-6 text-lightRed cursor-pointer ${
                    isLoading && ev.id === toDeleteEvent
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

export default EventsFeed;
