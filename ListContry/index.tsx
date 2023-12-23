"use client"
import { TitleSection } from "@/app/components/TitleSection";
import { PageRoot } from "@/app/components/PageRoot";
import { ContryItem } from "./ContryItem";

const ActionsLabel = [
  { label: "País"},
  { label: "Posição"},
];

export default function ListContry() {

  return (
    <PageRoot classeName="w-full">
        <div className="w-full h-auto flex flex-col gap-2 py-8">
          <div className="w-full flex justify-between items-center text-gray-500 px-6">
            {ActionsLabel.map(action => (
              <h1 key={action.label} className="font-semibold">
                {action.label}
              </h1>
            ))}
          </div>
          <ContryItem contryName="Angola"/>
          <ContryItem contryName="Egipto"/>
          <ContryItem contryName="Namíbia"/>
        </div>
    </PageRoot>
  );
}