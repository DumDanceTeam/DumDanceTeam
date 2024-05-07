"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Registration } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export const Search = ({setRegistrations, registrations}: {setRegistrations: Dispatch<SetStateAction<Array<Registration>>>, registrations: Array<Registration>}) => {


  return (
    <Select defaultValue="toate" onValueChange={(e)=> {
        setRegistrations(rg=> {
            if(e!=="toate"){
                return registrations.filter(r=>r.grupa_copil===e);
            }else return registrations;
        })        
    }}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selectează o categorie de vârstă" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="4 - 7 ani">4 - 7 ani</SelectItem>
          <SelectItem value="8 - 13 ani">8 - 13 ani</SelectItem>
          <SelectItem value="14 - 18 ani">14 - 18 ani</SelectItem>
          <SelectItem defaultChecked value="toate">toate</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
