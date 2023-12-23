"use client"
import { TitleSection } from "@/app/components/TitleSection";
import { PageRoot } from "@/app/components/PageRoot";
import { ContryItem } from "./ContryItem";
import { Form } from "../Form";

const ActionsLabel = [
  { label: "País" },
  { label: "Posição" },
];

export default function ListContry() {

  return (
    <PageRoot classeName="w-full">
      <div className="w-full h-[40rem] flex flex-col gap-2 py-8">
        <div className="w-full flex justify-between items-center text-gray-500 px-6">
          {ActionsLabel.map(action => (
            <h1 key={action.label} className="font-semibold">
              {action.label}
            </h1>
          ))}
        </div>
        <div className="w-full scrool flex flex-col gap-2 p-4">
          <ContryItem contryName="Angola" />
          <ContryItem contryName="Egipto" />
          <ContryItem contryName="Namíbia" />
          <ContryItem contryName="África do sul" />
          <ContryItem contryName="Bégica" />
          <ContryItem contryName="Estados Unidos da Ámerica" />
          <ContryItem contryName="Estados Unidos da Ámerica" />
          <ContryItem contryName="Estados Unidos da Ámerica" />
        
        <Form.Button className="w-32 ml-auto font-semibold">
          Ok
        </Form.Button>
        </div>
        
      </div>
    </PageRoot>
  );
}