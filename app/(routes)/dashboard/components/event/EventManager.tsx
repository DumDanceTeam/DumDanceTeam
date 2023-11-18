import { PartyPopperIcon } from "lucide-react"
import ManagerInfo from "../ManagerInfo"
import NewEvent from "./NewEvent"
import { cookies } from "next/headers";

const EventManager = () => {
  
  return (
    <div>
        <ManagerInfo icon={<PartyPopperIcon className="w-4 h-4 xs:w-6 xs:h-6"/>} title="Creează un eveniment" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat hic ea voluptates error fugiat dignissimos sequi facere voluptatum soluta blanditiis?"/>
        <NewEvent/>
    </div>
  )
}

export default EventManager