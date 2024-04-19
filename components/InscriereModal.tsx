"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { setLazyProp } from "next/dist/server/api-utils";
import { useEffect, useState } from "react"

const InscriereModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>();
    
    useEffect(()=>{
        const alreadyOpen = localStorage.getItem("eventOpen");

        if(!alreadyOpen || alreadyOpen==="false"){
            setIsOpen(true);
            localStorage.setItem("eventOpen", JSON.stringify(true));
        }

        window.addEventListener("beforeunload", ()=>{
            localStorage.clear();
        });

        return () => {
            window.removeEventListener('beforeunload',()=>{
                localStorage.clear();
            });
          };
    },[]);

  return (
    <div>
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <button onClick={()=>setIsOpen(false)}>close</button>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>

  )
}

export default InscriereModal
