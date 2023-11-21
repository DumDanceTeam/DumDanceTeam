import { Partnership } from "@prisma/client";
import {create} from "zustand";

interface usePartnershipProps{
    isOpen: boolean;
    editPartnership: Partnership | undefined;
    setPartnership: (partnership: Partnership)=>void;
    setIsOpen: (isOpen: boolean)=>void;
}

const useEditPartnership = create<usePartnershipProps>((set)=>({
    isOpen:false,
    editPartnership: undefined,
    setPartnership:(partnership)=>set({editPartnership:partnership}),
    setIsOpen:((isOpen)=>set({isOpen})),
}));

export default useEditPartnership;