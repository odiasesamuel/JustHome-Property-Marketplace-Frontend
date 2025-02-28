import apiClient from "./apiClient";
import { BASE_URL } from "./apiClient";
import { z } from "zod";
import { contactMessageSchema, subscribeToNewsletterSchema } from "@/schemas/contactMessageSchema";

export const sendMessage = async (message: z.infer<typeof contactMessageSchema>) => {
  try {
    const response = await apiClient.post(`${BASE_URL}/message`, message);

    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};

export const subscribeToNewsletter = async (subscriptionData: z.infer<typeof subscribeToNewsletterSchema>) => {
  try {
    const response = await apiClient.post(`${BASE_URL}/message/subscribe`, subscriptionData);

    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};
