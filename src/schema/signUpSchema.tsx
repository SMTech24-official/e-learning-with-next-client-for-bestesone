import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().nonempty("Name is required."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  referredId: z.string(),
  terms: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to the terms and privacy policy.",
    }),
  }),
});
