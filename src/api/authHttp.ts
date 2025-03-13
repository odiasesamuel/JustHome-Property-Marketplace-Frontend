import apiClient from "./apiClient";
import { BASE_URL } from "./apiClient";
import { z } from "zod";
import { signUpFormSchema, signInFormSchema, requestResetPasswordSchema, resetPasswordSchema } from "@/schemas/authFormSchema";

type VerifySignUpType = {
  signal: AbortSignal;
  token: string | null;
};

export const signUp = async (registrationData: z.infer<typeof signUpFormSchema>) => {
  try {
    const response = await apiClient.post(`${BASE_URL}/auth/signup`, registrationData);

    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};

export const verifySignUp = async ({ signal, token }: VerifySignUpType) => {
  try {
    const params = new URLSearchParams();
    if (token) params.append("token", token);

    const response = await apiClient.get(`${BASE_URL}/auth/verify?${params.toString()}`);

    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};

export const signIn = async (signInData: z.infer<typeof signInFormSchema>) => {
  try {
    const response = await apiClient.post(`${BASE_URL}/auth/login`, signInData);

    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};

export const requestResetPassword = async (requestResetPasswordData: z.infer<typeof requestResetPasswordSchema>) => {
  try {
    const response = await apiClient.post(`${BASE_URL}/auth/request-reset-password`, requestResetPasswordData);

    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};
export const resetPassword = async (resetPasswordData: z.infer<typeof resetPasswordSchema> & { token: string | null }) => {
  try {
    const response = await apiClient.post(`${BASE_URL}/auth/reset-password`, { ...resetPasswordData });

    return response.data;
  } catch (error: any) {
    throw error.message;
  }
};
