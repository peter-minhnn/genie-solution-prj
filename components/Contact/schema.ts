import {ZodType, z} from "zod";
import {ContactType} from "@/types/contact";

export const ContactSchema: ZodType<ContactType | any> = z.object({
    name: z.string().min(1, {message: "Please enter your name"}),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    message: z.string().min(1, {message: "Please enter your message"}),
});