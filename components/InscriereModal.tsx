"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/Button";
import Link from "next/link";
import { X } from "lucide-react";

const InscriereModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const path = usePathname();

  useEffect(() => {
    if (path === "/") {
      const alreadyOpen = localStorage.getItem("eventOpen");

      if (!alreadyOpen || alreadyOpen === "false") {
        setIsOpen(true);
        localStorage.setItem("eventOpen", JSON.stringify(true));
      }
    }

    window.addEventListener("beforeunload", () => {
      localStorage.clear();
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.clear();
      });
    };
  }, [path]);

  return (
    <Link
      href={"/summer-school"}
      onClick={() => setIsOpen(false)}
      className="cursor-pointer"
    >
      <Dialog open={isOpen}>
        <DialogContent className="p-1 cursor-pointer">
          <X
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="w-7 h-7 text-black absolute right-0"
          />
          <Image
            src={"/pt site (1).png"}
            width={1600}
            height={800}
            className="max-w-full max-h-full"
            alt="event"
          />
          <Button className="bg-[#5485A7]">Află mai mult detalii</Button>
        </DialogContent>
      </Dialog>
    </Link>
  );
};

export default InscriereModal;
