import { DASHITEMS } from "@/app/constants/DashItemsList";
import { TitleSection } from "@/app/components/TitleSection";
import { PageRoot } from "@/app/components/PageRoot";
import { DashItem } from "./DashItem";
import { RelatoryItem } from "../view_relatories/RelatoryItem";

export default function Dashboard() {

  return (
    <PageRoot classeName="w-full px-16">
      <TitleSection title="Dashboard" />
      <div className="w-full h-full flex flex-col gap-8 pt-6">
        <div className="w-full grid grid-cols-3 gap-6">
          {DASHITEMS.map((dashItem) => (
            <DashItem
              key={dashItem.title}
              title={dashItem.title}
              icon={dashItem.icon}
              totalStats={dashItem.totalStats}
            />
          ))}
        </div>
        <div className="w-full">
          <TitleSection title="Relatórios Recentes" />
          <div className="w-full flex flex-col gap-2 mt-6">
            <RelatoryItem />
            <RelatoryItem />
            <RelatoryItem />
            <RelatoryItem />
          </div>
        </div>
      </div>
    </PageRoot>
  );
}

/*
fazer o map e d
*/