import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().nonempty("Email is required").email(),
  password: z
    .string()
    .nonempty("Password is required")
    .min(1, { message: "Password can not be empty" }),
});

export type LoginInput = z.infer<typeof UserSchema>;
