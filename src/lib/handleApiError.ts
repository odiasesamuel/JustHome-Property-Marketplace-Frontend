import axios from "axios";
import { ApiErrorType } from "@/types/apiResponse";

export const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const statusCode = error.response?.status || 500;
    const message = error.response?.data?.message || error.message;

    const apiError = new Error(message) as ApiErrorType;
    apiError.statusCode = statusCode;
    apiError.data = error.response?.data;

    return apiError;
  } else {
    return new Error("An unknown error occurred");
  }
};
