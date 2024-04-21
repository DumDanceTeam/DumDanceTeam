"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { FaUserGroup } from "react-icons/fa6";
import { MdGroupOff } from "react-icons/md";

export function ProgressBar() {
  const [progress, setProgress] = React.useState(0);

  const currentDate = new Date();

  React.useEffect(() => {
    if (currentDate.getDate() === 21) {
      setProgress(1);
    }
    if (currentDate.getDate() === 22) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 23) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 24) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 25) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 26) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 27) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 28) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 29) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 30) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 1) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() ===2) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 3) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 4) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 5) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 6) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 7) {
      setProgress((prevState)=>prevState+5.5);
    }
    if (currentDate.getDate() === 8) {
      setProgress((prevState)=>prevState+5.5);
    }
  }, []);

  return (
    <div className="flex items-center justify-center gap-5">
      <FaUserGroup className="text-xl" />
      <Progress value={progress} className="w-[60%] bg-[#27628d]" />
      <MdGroupOff className="text-xl" />
    </div>
  );
}
