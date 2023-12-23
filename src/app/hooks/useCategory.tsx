"use client";
import { useContext } from "react";
import { CategoryContext } from "../contexts/categoryContext";

export function useCategory() {
  return useContext(CategoryContext);
}