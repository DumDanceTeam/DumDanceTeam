import EventManager from "./event/EventManager";
import EventsFeed from "./event/EventsFeed";
import prismadb from "@/lib/db";
import TestmonialsManager from "./testmonials/TestmonialsManager";
import SearchInput from "./SearchInput";
import Rules from "./rules/Rules";

export const revalidate = 0;

const Dashboard = async ({ event }: { event: string }) => {
  let searchedEvents;
  if (event !== "" && event !== undefined) {
    searchedEvents = await prismadb.event.findMany({
      where: {
        OR: [
          {
            title: {
              contains: event,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: event,
              mode: "insensitive",
            },
          },
        ],
      },
    });
  }

  const initialEvents = await prismadb.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  const showRules = await prismadb.rule.findFirst();

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
            <div className="self-end mb-2.5">
              <SearchInput />
            </div>
            <EventsFeed
              searchedEvents={searchedEvents}
              initialEvents={initialEvents}
              eventString={event}
            />
          </div>
        </div>
      </div>
      <div className="my-20">
        <TestmonialsManager />
      </div>
      <div className="my-20">
        <Rules showRules={showRules!}/>
      </div>
    </div>
  );
};

export default Dashboard;
