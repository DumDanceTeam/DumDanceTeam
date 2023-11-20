import Hero from "@/components/Hero";
import getAllEvents from "@/lib/api/getAllEvents"
import prismadb from "@/lib/db"
import { Event as EventDB } from "@prisma/client"
import Event from "../components/Event";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const EventPage = async ({params}:{params:{id: string}}) => {
    const currentEvent = await prismadb.event.findFirst({
        where:{
            id: params.id,
        },
    });
    if(!currentEvent)
        redirect("/evenimente");


  return (
    <div>
        <Hero label={currentEvent?.title}/>
        <div className="mt-10 mb-20 container mx-auto">
            <Event showInfoButton={false} index={1} event={currentEvent}/>
            <p className="text-[1.1em] mt-10 xsBig:text-[1.3em] sm:text-[1.5em] md:text-[1.7em]">Descrierea <span className="text-lightRed">Evenimentului</span></p>
            <p className="font-light text-[1em] max-h-[300px] overflow-auto break-words text-center lg:text-start">
                {currentEvent.description}
            </p> 
            
            <div className="">
                {currentEvent.secondImages && currentEvent.secondImages.length>0 ? (
                    <>
                    <p className="mt-10 mb-2.5 text-[1.5em] font-bold"><span className="text-lightRed">Galeria</span> {currentEvent.title}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {currentEvent.secondImages.map((imgUrl, index)=>(
                        <Link key={index} href={imgUrl} target="_blank">
                            <Image src={imgUrl} loading="lazy" width={700} height={600} quality={100} className="max-w-[700px] max-h-[600px] w-full h-full min-w-[230px] min-h-[230px] sm:min-w-[400px] sm:min-h-[400px] md:min-w-[500px] md:min-h-[500px] object-cover rounded-sm"  alt="event image"/>
                        </Link>
                    ))}
                </div>
                </>
                ):null}
                
            </div>
        </div>
    </div>
  )
}

export default EventPage

export async function generateStaticParams(){
 
        const eventsData = await getAllEvents();
        if(eventsData.allEvents.length===0) return [];

        return eventsData.allEvents.map((ev: EventDB)=>(
            {
                id:ev.id.toString(),
            }
        ));
  
}