import Hero from "@/components/Hero";
import { getAllEvents } from "@/lib/api/getAllEvents"
import prismadb from "@/lib/db"
import { Event as EventDB } from "@prisma/client"
import Event from "../components/Event";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { extractYouTubeVideoID } from "@/lib/utils";

const EventPage = async ({params}:{params:{id: string}}) => {
    const currentEvent = await prismadb.event.findFirst({
        where:{
            id: params.id,
        },
    });
    if(!currentEvent)
        redirect("/evenimente");

    const videoId = extractYouTubeVideoID(currentEvent.youtubeLink || "");

  return (
    <div>
        <Hero label={currentEvent?.title}/>
        <div className="mt-10 mb-20 container mx-auto">
            <Event index={1} event={currentEvent} fullLayout={true}/>
            <p className="text-[1.1em] mt-10 xsBig:text-[1.3em] sm:text-[1.5em] md:text-[1.7em]">Descrierea <span className="text-lightRed">Evenimentului</span></p>
            <p className="font-light text-[1em] max-h-[300px] overflow-auto break-words text-center lg:text-start">
                {currentEvent.description}
            </p> 
            {videoId && videoId.trim() !== "" ? (
                <iframe
                  className="w-full h-full max-w-[500px] max-h-[500px] min-w-[280px] min-h-[280px] mt-6"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allowFullScreen
                ></iframe>
              ) : null}
            <div className="">
                {currentEvent.secondImages && currentEvent.secondImages.length>0 ? (
                    <>
                    <p className="mt-10 text-[1.5em] font-bold"><span className="text-lightRed">Galeria</span> {currentEvent.title}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {currentEvent.secondImages.map((imgUrl, index)=>(
                        <Link key={index} href={imgUrl} target="_blank">
                            <Image src={imgUrl} width={8000} height={8000} quality={100} className="max-w-[700px] max-h-[600px] w-full h-full min-w-[230px] min-h-[230px] sm:min-w-[400px] sm:min-h-[400px] md:min-w-[500px] md:min-h-[500px] object-cover rounded-sm" priority alt="event image"/>
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
    try{
        const eventsData: EventDB[] = await getAllEvents();

        return eventsData.map(ev=>(
            {id:ev.id}
        ));
    }catch(err){
        console.log(err);
        
    }
}