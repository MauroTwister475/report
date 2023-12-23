"use client"
import { TitleSection } from "@/app/components/TitleSection";
import { PageRoot } from "@/app/components/PageRoot";
import { ContryItem } from "./ContryItem";

const ActionsLabel = [
  { label: "País"},
  { label: "Acção"},
];

export default function ListContry() {

  return (
    <PageRoot classeName="w-full px-16">
      <TitleSection title="Relatórios" />
      <div className="w-full h-full flex flex-col gap-10">
       
        <div className="w-full flex flex-col gap-2 mt-6">
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
      </div>
    </PageRoot>
  );
}