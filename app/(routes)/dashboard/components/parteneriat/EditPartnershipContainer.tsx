"use client"

import useEditPartnership from "@/hooks/useEditPartnership"
import EditPartnership from "./EditPartnership";

const EditPartnershipContainer = () => {
    const {isOpen, editPartnership} = useEditPartnership(state=>state);

    if(!isOpen) return null;

  return (
    <div>
        <EditPartnership partnership={editPartnership!}/>
    </div>
  )
}

export default EditPartnershipContainer