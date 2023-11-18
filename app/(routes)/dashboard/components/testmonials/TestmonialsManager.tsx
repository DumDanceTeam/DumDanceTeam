import { BsPersonSquare } from "react-icons/bs"
import ManagerInfo from "../ManagerInfo"
import TestmonialFeed from "./TestmonialFeed"

const TestmonialsManager = () => {
  return (
    <div>
        <ManagerInfo title="Testmonials" description="Schimbă secțiunea Ce spun clienții noștrii?" icon={<BsPersonSquare className="w-4 h-4 xs:w-6 xs:h-6"/>}/>
        <div className="mt-10">
            <TestmonialFeed/>
        </div>
    </div>
  )
}

export default TestmonialsManager