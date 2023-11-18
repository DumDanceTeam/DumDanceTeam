import prismadb from "@/lib/db";
import Testmonial from "./Testmonial";

const TestmonialFeed = async () => {
  const testmonials = await prismadb.testmonial.findMany({
    orderBy:{
      createdAt:"asc",
    },
  });
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
        {!testmonials || testmonials.length === 0 ? (
          <div>
            <p className="text-center mt-6 lg:mt-2 text-[1.2em] xs:text-[1.5em] sm:text-[2em] md:text-[2.3em] lg:text-[2.6em] font-bold font-roboto">
              Nu există recenzii
            </p>
          </div>
        ) : (
          testmonials.map((t, index) => (
            <Testmonial
              key={index}
              id={t.id}
              name={t.name}
              description={t.description}
              profileUrl={t.profileUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TestmonialFeed;
