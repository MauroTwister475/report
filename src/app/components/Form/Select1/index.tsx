"use client"
import { useState } from "react";
import { Select as SelectCustomized } from "@chakra-ui/react";

const classes = [
  { id: "1", classe: "10ª classe" },
  { id: "2", classe: "11ª classe" },
  { id: "3", classe: "12ª classe" },
];

export function Select() {
  const [selectedClass, setSelectedClass] = useState(classes[0]);

  return (
    <SelectCustomized 
      variant="filled"
      className="w-full py-2 px-4 bg-input-200 text-gray-500' outline-none border-none rounded-md cursor-pointer"
    >
      {classes.map(classe => (
        <option
          key={classe.id}
          value={classe.classe}
        >
          {classe.classe}
        </option>
      ))}
  </SelectCustomized>
  );
}
