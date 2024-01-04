import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("digite um email valido").min(1, "Este campo é obrigatorio"),
  password: z.string().min(1, "Este campo é obrigatorio"),
});
