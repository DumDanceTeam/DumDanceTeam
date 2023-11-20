import { Event } from "@prisma/client";
import {create} from "zustand";

interface useEditEventProps{
    isOpen: boolean;
    editEv: Event | undefined;
    setEv: (ev: Event)=>void;
    setIsOpen: (isOpen: boolean)=>void;
}

const useEditEvent = create<useEditEventProps>((set)=>({
    isOpen:false,
    editEv: undefined,
    setEv:(ev)=>set({editEv:ev}),
    setIsOpen:((isOpen)=>set({isOpen})),
}));

export default useEditEvent;