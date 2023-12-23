"use client"
import { PageRoot } from "@/app/components/PageRoot";
import { ButtonNew } from "./ButtonNew";
import { ModalAction } from "@/app/components/ModalAction";
import { useModal } from "@/app/hooks/useModal";
import { FirstForm } from "./RelatoryForm/Forms/FirstForm";

export default function NewRelatories() {
  const { isOpen, onSetIsOpen } = useModal();

  return (
    <>
      <PageRoot classeName="w-full flex items-center justify-center flex-col ">
      {/* <div className="w-full text-gray-500 text-center mb-20">
        <h1 className="text-3xl">
          Clique no botão abaixo para gerar um novo relatório
        </h1>
      </div> */}
        {/* <ButtonNew /> */}
        {/* <ModalAction 
          title="Novo relatório"
          isOpen={isOpen}
          setIsOpen={onSetIsOpen}
          className="w-[60rem]"
        > */}
        <FirstForm />
        {/* </ModalAction> */}
      </PageRoot>
    </>
  )
}
