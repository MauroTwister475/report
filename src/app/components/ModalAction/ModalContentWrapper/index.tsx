import { ReactNode } from "react";

interface ModalContentWrapperProps {
  children: ReactNode,
}
export function ModalContentWrapper({ children }: ModalContentWrapperProps) {
  return (
    <div className="w-full h-auto flex">
      {children}
    </div>
  )
}
