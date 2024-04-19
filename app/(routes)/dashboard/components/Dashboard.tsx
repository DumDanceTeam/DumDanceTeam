import EventManager from "./event/EventManager";
import EventsFeed from "./event/EventsFeed";
import prismadb from "@/lib/db";
import TestmonialsManager from "./testmonials/TestmonialsManager";
import Rules from "./rules/Rules";
import Partnership from "./parteneriat/Partnership";
import GalleryManager from "./gallery/GalleryManager";
import EditEventContainer from "./event/EditEventContainer";
import EditPartnershipContainer from "./parteneriat/EditPartnershipContainer";
import OnlineGallery from "./onlineGallery/OnlineGallery";
import Registrations from "./registrations/Registrations";
import { ToggleEvent } from "./toggle_event/ToggleEvent";

export const revalidate = 0;

const Dashboard = async ({ event }: { event: string }) => {
  const initialEvents = await prismadb.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  const showRules = await prismadb.rule.findFirst();
  const showEvent = await prismadb.eventToggle.findFirst();

  const initialPartnership = await prismadb.partnership.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const registrations = await prismadb.registration.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })

  return (
    <div className="">
      <h3 className="font-bold text-center text-[1.2em] sm:text-[1.3em] md:text-[1.5em] lg:text-[2em]">
        Bun <span className="text-lightRed">venit</span> în panoul de{" "}
        <span className="text-lightRed">administrare</span> !
      </h3>
      <div className="my-20">
        <EventManager />

        <div className="mt-10">
          <div className="flex flex-col">
            <div className="self-end mb-2.5"></div>
            <EventsFeed initialEvents={initialEvents} eventString={event} />
            <div className="mt-10">
              <EditEventContainer />
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <Partnership partnerships={initialPartnership} />
        <div className="mt-10">
          <EditPartnershipContainer />
        </div>
      </div>
      <div className="my-20">
        <OnlineGallery />
      </div>
      <div className="my-20">
        <GalleryManager />
      </div>

      <div className="my-20">
        <TestmonialsManager />
      </div>
      <div className="my-20">
        <Rules showRules={showRules!} />
      </div>
      <div className="my-20">
        <ToggleEvent showEvent={showEvent!}/>
      </div>

      <div className="my-20">
        <Registrations allRegistrations={registrations}/>
      </div>
    </div>
  );
};

export default Dashboard;
