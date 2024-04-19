import prismadb from "@/lib/db"
import InscriereModal from "./InscriereModal"

const InscriereContainer = async () => {

    const showEvent = await prismadb.eventToggle.findFirst();

    if(showEvent){
        if(!showEvent.show) return;
    }else return;

  return (
    <InscriereModal/>
  )
}

export default InscriereContainer