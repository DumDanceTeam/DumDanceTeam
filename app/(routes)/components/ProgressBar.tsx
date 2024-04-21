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
      setProgress(25);
    }
    if (currentDate.getDate() === 22) {
      setProgress(50);
    }
    if (currentDate.getDate() === 23) {
      setProgress(75);
    }
    if (currentDate.getDate() === 24) {
      setProgress(100);
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
