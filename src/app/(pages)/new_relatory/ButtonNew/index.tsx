"use client";

import { useState } from "react";
import { useModal } from "@/app/hooks/useModal";
import { Plus } from "lucide-react";

export function ButtonNew() {
  const [isHover, setIsHover] = useState(false);
  const { onSetIsOpen } = useModal();


  function generateReport() {
    onSetIsOpen();
  }

  return (
    <button
      onClick={generateReport}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className="w-16 h-16 flex items-center justify-center gap-2 text-white bg-main-500 anima absolute bottom-10 right-10 px-4 rounded-full overflow-hidden cursor-pointer hover:bg-violet-600 hover:w-56 transition-all text-sm"
    >
      <Plus  size={30} />
      {isHover && "Adicionar relatório"}
    </button>
  )
}
