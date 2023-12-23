import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { CategoryProvider } from "@/app/contexts/categoryContext";
import { ModalContextProvider } from "@/app/contexts/modalContext";
import "./globals.css";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "MED-Relatório",
  description: "Generated by create next app",
  icons: {
    icon: '/favicon.png',
  },
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-shape-100">
          <CategoryProvider>
            <ModalContextProvider>
              {children}
            </ModalContextProvider>
          </CategoryProvider>
      </body>
    </html>
  );
}