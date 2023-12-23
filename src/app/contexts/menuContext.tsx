"use client";
import { createContext, useState, ReactNode } from "react";

interface MenuExpandedContextData {
  isExpanded: boolean,
  handlerIsMenuExpanded: () => void,
  handlerNotMenuExpanded: () => void,
}

export const MenuExpandedContext = createContext(
  {} as MenuExpandedContextData );

interface MenuExpandedProviderProps {
  children: ReactNode,
}

export function MenuExpandedProvider({ children }: MenuExpandedProviderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handlerIsMenuExpanded() {
    setIsExpanded(true);
  }
  
  function handlerNotMenuExpanded() {
    setIsExpanded(false);
  }

  return (
    <MenuExpandedContext.Provider value={{ isExpanded, handlerIsMenuExpanded, handlerNotMenuExpanded }}>
      {children}
    </MenuExpandedContext.Provider>
  )
}