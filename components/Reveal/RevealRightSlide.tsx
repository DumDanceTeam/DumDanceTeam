"use client";
import { FC, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RevealRightSlideIn: FC<RevealProps> = ({ children, className,...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

const mainControllers = useAnimation()

  useEffect(()=>{
    if(isInView){
        mainControllers.start("visible")
    }
  },[isInView])  

  return (
    <div ref={ref} className={cn(className,"overflow-hidden")} {...props}>
      <motion.div
        className={cn(className,"h-full")}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControllers}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealRightSlideIn;
