import { BsPeople } from "react-icons/bs"
import ManagerInfo from "../ManagerInfo"
import NewPartnership from "./NewPartnership"
import PartnerFeed from "./PartnershipFeed"
import { Partnership } from "@prisma/client"

interface PartnershipProps{
  partnerships: Partnership[];
}

const Partnership: React.FC<PartnershipProps> = ({partnerships}) => {
  
  return (
    <div>
        <ManagerInfo icon={<BsPeople className="w-4 h-4 xs:h-6"/>} title="Creează un parteneriat"/>
        <NewPartnership/>
        <div className="mt-10">
          <PartnerFeed initialPartnerships={partnerships}/>
        </div>
    </div>
  )
}

export default Partnership