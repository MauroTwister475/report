'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/app/components/Form";
import { InputGroup } from "../InputGroup";
import { ErrorMessage } from "@/app/utils/FeedBack/Messages";
import { reportFormSchema, ReportFormData } from "@/app/@types/Schemas/reportSchema"

export function SecondForm() {

  const { handleSubmit, reset, register, formState: { errors, isSubmitting} }
   = useForm<ReportFormData>({
    resolver: zodResolver(reportFormSchema),
  })

  async function onAddTeacher(data: ReportFormData) {
    try {
      console.log(data);
      reset();
    } catch (error) {
       ErrorMessage("Algo deu errado");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onAddTeacher)} 
      className="w-[54rem] h-full flex flex-col gap-2 items-center justify-center"
    >
      <div className="w-full flex gap-4">
        <InputGroup>
          <input 
            id="Curso" 
            type="text"
            placeholder="teste"
            {...register('name')} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-violet-700"
          />
          <input
            id="classes"
            type="text"
            placeholder="teste"
            {...register('classes')}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-violet-700"
          />
          <input 
            id="Curso" 
            type="text"
            placeholder="teste"
            {...register('courses')}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-violet-700"
          />
        </InputGroup>
        <InputGroup>
          <input
            id="sigla"
            type="text"
            placeholder="teste"
            {...register('agent_number')}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-violet-700"
          />
          <input 
            id="Disponibilidade" 
            type="text"
            placeholder="teste"
            {...register('disponibilidade')}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-violet-700"
          />
          <input 
            id="Fotografia" 
            type="text"
            placeholder="teste"
            {...register('photograph')}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-violet-700"
          />
        </InputGroup>
      </div>
      <Form.Button
        type="submit" 
        className="w-40 ml-auto rounded-md bg-main-500 disabled:cursor-not-allowed cursor-pointer">
        Adicionar
      </Form.Button>
    </form>
  );
}