import { z } from "zod";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Cannot be empty" })
        .email({ message: "Invalid email" }),
    password: z.string().min(1, {message: "Cannot be empty"}).min(8, { message: "Too short" }),
});

export { FormSchema };
