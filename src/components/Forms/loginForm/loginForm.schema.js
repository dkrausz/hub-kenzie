import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email().min(1, "Este campo é obrigatorio"),
  password: z.string().min(1, "Este campo é obrigatorio"),
});
