import axios from "axios";
import { z } from "zod";
import { contactMessageSchema } from "@/schemas/contactMessageSchema";

export const BASE_URL = "http://localhost:5000";

export const sendMessage = async (message: z.infer<typeof contactMessageSchema>) => {
  try {
    const response = await axios.post(`${BASE_URL}/message`, message);

    return response.data;
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   console.error("Axios error:", error.response?.data || error.message);
    // } else {
    //   console.error("Unexpected error:", error);
    // }
    throw error;
  }
};
