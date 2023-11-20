"use client"

import useEditEvent from "@/hooks/useEditEvent"
import EditEvent from "./EditEvent";

const EditEventContainer = () => {
    const {isOpen, editEv} = useEditEvent(state=>state);

    if(!isOpen) return null;

  return (
    <div>
        <EditEvent ev={editEv!}/>
    </div>
  )
}

export default EditEventContainer