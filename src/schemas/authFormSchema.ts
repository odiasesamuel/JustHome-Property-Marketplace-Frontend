import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const signUpFormSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  accountType: z.enum(["Individual", "Property owner", "Property agent"], { message: "Invalid account type" }),
  password: z.string().trim().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().trim().min(6, { message: "Password must be at least 6 characters" }),
});

export const requestResetPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const resetPasswordSchema = z.object({
  password: z.string().trim().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().trim().min(6, { message: "Password must be at least 6 characters" }),
});
