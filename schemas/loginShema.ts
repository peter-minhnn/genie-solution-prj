import {ZodType, z} from "zod";
import {LoginType} from "@/types/login";

export const LoginSchema: ZodType<LoginType> = z.object({
    username: z.string().min(1, {message: "Please enter your user name"}),
    password: z.string().min(1, {message: "Please enter your password"}),
});