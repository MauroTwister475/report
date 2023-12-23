"use client"
import { TitleSection } from "@/app/components/TitleSection";
import { PageRoot } from "@/app/components/PageRoot";
import { RelatoryItem } from "../view_relatories/RelatoryItem";
import { InputIcon } from "./Inputs";
import { Filter, Search } from "lucide-react";

const ActionsLabel = [
  { label: "Ficheiro"},
  { label: "Data"},
  { label: "Acção"},
];

export default function Dashboard() {


  return (
    <PageRoot classeName="w-full px-16">
      <TitleSection title="Relatórios" />
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full flex items-end gap-4 mt-14">
          <InputIcon
            icon={<Search className="text-gray-500" />}
            type="text"
            placeholder="Pesquisar um relatório..."
            onChange={(e) => console.log("bhfhd")}
          />
          <InputIcon
            icon={<Filter className="text-gray-500" />}
            type="text"
            placeholder="Filtrar um relatório..."
            onChange={(e) => console.log("hbhf")}
          />
        </div>
        <div className="w-full flex flex-col gap-2 mt-6">
          <div className="w-full flex justify-between items-center text-gray-500 px-6">
            {ActionsLabel.map(action => (
              <h1 key={action.label} className="font-semibold">
                {action.label}
              </h1>
            ))}
          </div>
          <RelatoryItem />
          <RelatoryItem />
          <RelatoryItem />
          <RelatoryItem />
        </div>
      </div>
    </PageRoot>
  );
}