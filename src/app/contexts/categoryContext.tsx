"use client";
import { createContext, useState, ReactNode } from "react";

interface CategoryContextData {
  Title: string,
  Category: string,
  onSetTitle: (title: string) => void,
  onSetCategory: (catefory: string) => void,
}

export const CategoryContext = createContext(
  {} as CategoryContextData );

interface CategoryProviderProps {
  children: ReactNode,
}

export function CategoryProvider({ children }: CategoryProviderProps) {
  const [Category, setCategory] = useState('');
  const [Title, setTitle] = useState('');

  function onSetCategory(category: string) {
    setCategory(category);
  }

  function onSetTitle(title: string) {
    setTitle(title);
  }

  return (
    <CategoryContext.Provider value={{ Category, onSetCategory, onSetTitle, Title }}>
      {children}
    </CategoryContext.Provider>
  )
}