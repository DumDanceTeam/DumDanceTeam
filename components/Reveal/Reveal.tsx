"use client";
import { FC, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode;
}

const Reveal: FC<RevealProps> = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

const mainControllers = useAnimation()

  useEffect(()=>{
    if(isInView){
        mainControllers.start("visible");
    }
  },[isInView])  

  return (
    <div ref={ref} className={cn(className,"overflow-hidden")}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControllers}
        transition={{ duration: 2.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
