import apiClient from "./apiClient";
import { BASE_URL } from "./apiClient";
import { z } from "zod";
import { signUpFormSchema, signInFormSchema } from "@/schemas/authFormSchema";

export const signUp = async (registrationData: z.infer<typeof signUpFormSchema>) => {
  try {
    const response = await apiClient.post(`${BASE_URL}/auth/signup`, registrationData);

    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};
