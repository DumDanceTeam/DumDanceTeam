"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ToasterProvider from "./ToastProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <ToasterProvider/>
        {children}
    </QueryClientProvider>
  );
};

export default Provider;

