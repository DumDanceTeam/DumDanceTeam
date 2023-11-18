import { BsPeople } from "react-icons/bs"
import ManagerInfo from "../ManagerInfo"
import NewPartnership from "./NewPartnership"

const Partnership = () => {
  return (
    <div>
        <ManagerInfo icon={<BsPeople className="w-4 h-4 xs:h-6"/>} title="Creează un parteneriat"/>
        <NewPartnership/>
    </div>
  )
}

export default Partnership