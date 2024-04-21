"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { FaUserGroup } from "react-icons/fa6";
import { MdGroupOff } from "react-icons/md";

export function ProgressBar() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Increase progress by 25% every day
      setProgress((prevProgress) => Math.min(prevProgress + 25, 100));
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-5">
      <FaUserGroup className="text-xl" />
      <Progress value={progress} className="w-[60%] bg-[#27628d]" />
      <MdGroupOff className="text-xl" />
    </div>
  );
}