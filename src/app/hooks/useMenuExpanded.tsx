"use client"

import { useContext } from "react";
import { MenuExpandedContext } from "../contexts/menuContext";

export function useMenuExpanded() {
  return useContext(MenuExpandedContext);
}