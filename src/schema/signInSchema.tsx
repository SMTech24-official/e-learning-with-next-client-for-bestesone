import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address.")
    .nonempty("Email is required."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .nonempty("Password is required."),
});

export const newPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .nonempty("Password is required."),
});
