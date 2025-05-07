import apiClient from "./apiClient";
import { z } from "zod";
import { contactMessageSchema, subscribeToNewsletterSchema } from "@/schemas/contactMessageSchema";
import { handleApiError } from "@/lib/handleApiError";

export const sendMessage = async (message: z.infer<typeof contactMessageSchema>) => {
  try {
    const response = await apiClient.post("/message", message);

    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const subscribeToNewsletter = async (subscriptionData: z.infer<typeof subscribeToNewsletterSchema>) => {
  try {
    const response = await apiClient.post("/message/subscribe", subscriptionData);

    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
