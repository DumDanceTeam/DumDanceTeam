import prismadb from "@/lib/db";
import Event from "./Event";

const EventsContainer = async () => {
  const events = await prismadb.event.findMany({
    orderBy:{
      createdAt:"desc",
    },
  });


  return (
    <div>
      <div className="container mx-auto mb-10 mt-5">
        <p className="font-bold text-[1.5em] sm:text-[1.7em] md:text-[2.1em] text-center">
          <span className="text-lightRed">Evenimentele</span> pe care le{" "}
          <span className="text-lightRed">organizăm</span> le găsiți aici
        </p>
        <div className="mt-12 flex flex-col gap-20">
          {!events || events.length === 0 ? (
            <p className="text-center text-[1.1em] xs:text-[1.2em] sm:text-[1.3em]">
              niciun <span className="text-lightRed">eveniment</span> curent
            </p>
          ) : (
            events.map((event, index) => (
              <Event key={index} fullLayout={false} index={index + 1} event={event} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsContainer;
