import { z } from "zod";

export const exampleSchema = z.object({
  name: z
    .string({ required_error: "O nome é obrigatório" })
    .refine(value => value.trim().length > 0, {
      message: "O nome é obrigatório",
    })
    .refine(value => value.charCodeAt(0) !== 32, {
      message: "O nome não pode começar com espaço",
    }),
  description: z
    .string({ required_error: "A descrição é obrigatória" })
    .refine(value => value.trim().length > 0, {
      message: "A descrição é obrigatória",
    }),
});

export type ExampleFormValues = z.infer<typeof exampleSchema>;
