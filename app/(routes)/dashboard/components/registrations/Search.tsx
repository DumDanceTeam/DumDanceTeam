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

export const Search = ({setRegistrations}: {setRegistrations: Dispatch<SetStateAction<Array<Registration>>>}) => {
  return (
    <Select defaultValue="toate">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selectează o categorie de vârstă" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem defaultChecked value="4 - 7 ani">4 - 7 ani</SelectItem>
          <SelectItem value="8 - 13 ani">8 - 13 ani</SelectItem>
          <SelectItem value="14 - 18 ani">14 - 18 ani</SelectItem>
          <SelectItem value="toate">toate</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
