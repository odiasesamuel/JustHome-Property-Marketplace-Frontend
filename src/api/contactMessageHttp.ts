import axios from "axios";
import { z } from "zod";
import { contactMessageSchema, subscribeToNewsletterSchema } from "@/schemas/contactMessageSchema";

export const BASE_URL = "http://localhost:5000";

export const sendMessage = async (message: z.infer<typeof contactMessageSchema>) => {
  try {
    const response = await axios.post(`${BASE_URL}/message`, message);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const subscribeToNewsletter = async (subscriptionData: z.infer<typeof subscribeToNewsletterSchema>) => {
  try {
    const response = await axios.post(`${BASE_URL}/message/subscribe`, subscriptionData);

    return response.data;
  } catch (error) {
    throw error;
  }
};
