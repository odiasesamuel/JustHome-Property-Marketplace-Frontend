import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().trim().min(1, { message: "Your name is required" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  phoneNumber: z.string().trim().min(10, { message: "Phone number is too short" }).max(15, { message: "Phone number is too long" }),
  message: z.string().trim().min(1, { message: "Your message is required" }),
});

export const subscribeToNewsletterSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
});
