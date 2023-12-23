import { z } from "zod";

type Contries = {
  contries: string[]
}

export const reportFormSchema = z.object({
  title: z.string().nonempty(), 
  theme: z.string().nonempty(), 
  data: z.string().nonempty(), 
  participation_of_angola: z.string().nonempty(), 
  decision: z.string().nonempty(), 
  point: z.string().nonempty(), 
  reference: z.string().nonempty(), 
  cod_document: z.string().nonempty(), 
  atribuition: z.string().nonempty(), 
  comment: z.string().nonempty(),
  contries: z.string().nonempty(),
});

export type ReportFormData = z.infer<typeof reportFormSchema>;