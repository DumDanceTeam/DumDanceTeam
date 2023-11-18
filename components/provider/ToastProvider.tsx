"use client"

import { useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"

const ToasterProvider = () =>{
    const [mounted,setMounted] = useState<boolean>(false);

    useEffect(()=>{
        setMounted(true);
    },[]);
    if(!mounted)
        return null;
    return (
        <Toaster position="bottom-right" toastOptions={{
            style:{
                background:"#000",
                color:"white",
                boxShadow:"0px 0px 10px 2px rgba(255,255,255,.2)"
              },
              iconTheme: {
                primary: '#ff3308',
                secondary: '#000',
              },
        }}/>
    )
}

export default ToasterProvider;