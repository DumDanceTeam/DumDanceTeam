import { PartyPopperIcon } from "lucide-react"
import ManagerInfo from "../ManagerInfo"
import NewEvent from "./NewEvent"

const EventManager = () => {
  
  return (
    <div>
        <ManagerInfo icon={<PartyPopperIcon className="w-4 h-4 xs:w-6 xs:h-6"/>} title="Creează un eveniment"/>
        <NewEvent/>
    </div>
  )
}

export default EventManager