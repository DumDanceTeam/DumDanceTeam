import prismadb from "@/lib/db";
import Partnership from "./Partnership";

const PartnershipsContainer = async () => {
    const partnerships = await prismadb.partnership.findMany({
        orderBy:{
          createdAt:"desc",
        },
      });

  return (
    <div>
      <div className="container mx-auto mb-10 mt-5">
        <div className="mt-12 flex flex-col gap-20">
          {!partnerships || partnerships.length === 0 ? (
            <p className="text-center text-[1.1em] xs:text-[1.2em] sm:text-[1.3em]">
              niciun <span className="text-lightRed">parteneriat</span> curent
            </p>
          ) : (
            partnerships.map((partnership, index) => (
                <Partnership index={index} key={index+1} partnership={partnership}/>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default PartnershipsContainer