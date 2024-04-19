"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ToasterProvider from "./ToastProvider";
import { useEffect, useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
  },[]);

  if(!isMounted) return;

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <ToasterProvider/>
        {children}
    </QueryClientProvider>
  );
};

export default Provider;

