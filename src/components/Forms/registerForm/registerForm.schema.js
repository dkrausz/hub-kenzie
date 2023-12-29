import {z} from "zod";

const registerFormSchema = z.object({
name: z.string().min(1),
email: z.string().email().min(1),
password: z.string().min(8) ,
bio: z.string().min(1) ,
contact: z.string().min(1) , 
module: z.string().min(1),


});

export {registerFormSchema};

