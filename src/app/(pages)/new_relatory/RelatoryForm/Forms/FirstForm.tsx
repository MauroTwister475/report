'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/app/components/Form";
import { InputGroup } from "../InputGroup";
import { ErrorMessage } from "@/app/utils/FeedBack/Messages";
import { reportFormSchema, ReportFormData } from "@/app/@types/Schemas/reportSchema"
// import JsPdf  from "jspdf";
import { REFERENCES, POINTS } from "@/app/constants/ReferencesTypes";
import { useModal } from "@/app/hooks/useModal";
import { ModalAction } from "@/app/components/ModalAction";
import ListContry from "@/app/components/ListContry";

export function FirstForm() {
  const { onSetIsOpen, isOpen } = useModal();

  const { handleSubmit, reset, register, formState: { errors, isSubmitting } }
    = useForm<ReportFormData>({
      resolver: zodResolver(reportFormSchema),
    })

  async function onAddTeacher(data: ReportFormData) {
    try {
      console.log(data)
      // const pdf = new JsPdf();
      // // Configurações do PDF
      // pdf.setFont("Times", "12pt");
      // // pdf.setMargins(1.0, 1.0, 1.0, 1.0);
      // // pdf.setPageSize("A4");


      // // Conteúdo do PDF
      // pdf.text("Tema: ", 50, 20);
      // pdf.text("Título: ", 50, 40);
      // pdf.text("Referência: ", 50, 60);
      // pdf.text("Data: ", 50, 80);
      // pdf.text("Países: ", 50, 100);
      // pdf.text("Comentário: ", 50, 120);

      // const paises = ['angola', 'brasil', 'belgica']
      // // Adiciona os dados ao PDF
      // pdf.text(data.theme, 100, 20);
      // pdf.text(data.title, 100, 40);
      // pdf.text(data.reference, 100, 60);
      // pdf.text(data.data, 100, 80);
      // pdf.text(paises.join(", "), 100, 100);
      // pdf.text(data.comment, 100, 120);

      // // Salva o PDF
      // pdf.save("documento.pdf");
      // setIsLoading(false);

      reset();
    } catch (error) {
      ErrorMessage("Algo deu errado");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onAddTeacher)}
      className="w-[80rem] m-auto h-max text-left align-middle flex flex-col gap-2 items-center  py-6 px-10 rounded-md bg-white shadow2 mr-auto"
    >
      <h3 className="text-lg text-gray-500 mr-auto font-semibold">
        Novo Relatório
      </h3>
      <hr className="relactive mt-8 top-6 text-gray-400 w-full translate-y-[-1.2rem]" />
      <div className="w-full flex gap-4">
        <InputGroup>
          <input
            type="text"
            placeholder="Título"
            {...register('title')}
            className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2 focus:border-violet-700'
          />
          <input
            type="text"
            placeholder="Tema"
            {...register('theme')}
            className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2 focus:border-violet-700'
          />
          <input
            type="text"
            placeholder="Decisão"
            {...register('decision')}
            className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2 focus:border-violet-700'
          />

        </InputGroup>
        <InputGroup>
          <input
            type="text"
            placeholder="Participação de angola"
            {...register('participation_of_angola')}
            className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2 focus:border-violet-700'
          />
          <select
            className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2 focus:border-violet-700'
            {...register("point")}
          >
            {POINTS.map(({ point }) => (
              <option key={point}>
                {point}
              </option>
            ))}
          </select>
          <select
            className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2 focus:border-violet-700'
            {...register("reference")}
          >
            {REFERENCES.map(({ reference }) => (
              <option key={reference}>
                {reference}
              </option>
            ))}
          </select>
        </InputGroup>
        <InputGroup>
          <input
            id="Impressao"
            type="text"
            placeholder="Atribuição"
            {...register('atribuition')}
            className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2 focus:border-violet-700'
          />
          <input
            type="text"
            placeholder="Código do documento"
            {...register('cod_document')}
            className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2 focus:border-violet-700'
          />
          <input
            type="date"
            placeholder="Data"
            {...register('data')}
            className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2 focus:border-violet-700'
          />
          <Form.Button
            type="button"
            className="w-48 ml-auto"
            onClick={() => onSetIsOpen()}
          >
            Selecionar Países
          </Form.Button>
        </InputGroup>
      </div>
      <textarea
        placeholder="Comentário"
        className='w-full h-28 mt-2 bg-gray-50 border resize-none uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block p-2 focus:border-violet-700'
        {...register('comment')}
      >
      </textarea>
      <Form.Button
        className="w-max px-6 ml-auto rounded-md bg-main-500 disabled:cursor-not-allowed cursor-pointer"
      >
        Gerar
      </Form.Button>
      <ModalAction
        title="Selecionar Países"
        isOpen={isOpen}
        setIsOpen={onSetIsOpen}
        className="w-[60rem]"
      >
        <ListContry />
      </ModalAction>
    </form>
  );
}

