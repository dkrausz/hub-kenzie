import {z} from "zod";

export const registerFormSchema = z.object({
name: z.string().min(1, "O campo nome é obrigatorio"),
email: z.string().email("Email invalido").min(1, "O campo nome é obrigatorio"),
password: z.string().min(8).regex(/[a-z]+/,"É necessario pelo menos uma letra minuscula")
.regex(/[A-Z]+/,"É necessario pelo menos uma letra maiuscula")
.regex(/[0-9]+/,"É necessario pelo menos um número"),
confirmPassword: z.string().min(8),
bio: z.string().min(1, "Este campo é obrigatorio") ,
contact: z.string().min(1 , "Este campo é obrigatorio") , 
course_module: z.string().min(1 ,"Este campo é obrigatorio"),


}).refine(({password,confirmPassword})=>(password===confirmPassword),
{message: "As senhas não correspondem", path: ["confirmPassword"]
});


