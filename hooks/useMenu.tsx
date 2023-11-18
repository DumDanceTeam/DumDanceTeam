import {create} from "zustand";

interface Menu {
    isActive: boolean;
    setIsActive: (isOpen: boolean)=>void;
    fromMenu: boolean;
    setFromMenu: (open: boolean)=>void;
}

export const useMenu = create<Menu>((set)=>({
    isActive:false,
    setIsActive:(isOpen)=>set({isActive:isOpen}),
    fromMenu:false,
    setFromMenu:(open)=>set({fromMenu:open}),
}));

