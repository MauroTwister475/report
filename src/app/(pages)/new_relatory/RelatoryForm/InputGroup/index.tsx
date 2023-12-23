import { ReactNode } from "react";

interface InputGroupProps {
  children: ReactNode,
}

export function InputGroup({ children }: InputGroupProps) {
  return (
    <div className="w-full flex flex-col gap-3 mt-4">
      {children}
    </div>
  )
}


