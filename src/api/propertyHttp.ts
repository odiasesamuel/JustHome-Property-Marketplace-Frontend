import axios from "axios";

type GetPropertyParams = {
  signal?: AbortSignal;
  perPage: number | null;
  page: number | null;
};

export const BASE_URL = "http://localhost:5000";

export const getProperty = async ({ signal, page, perPage }: GetPropertyParams) => {
  try {
    const response = await axios.get(`${BASE_URL}/property?perPage=${perPage}&page=${page}`, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
