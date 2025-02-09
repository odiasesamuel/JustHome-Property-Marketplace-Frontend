import axios from "axios";

type GetPropertyParams = {
  signal?: AbortSignal;
  perPage: number | null;
  page: number | null;
  search?: string | null;
};

export const BASE_URL = "http://localhost:5000";

export const getProperty = async ({ signal, page, perPage, search }: GetPropertyParams) => {
  try {
    const params = new URLSearchParams();

    if (page !== null) params.append("page", String(page));
    if (perPage !== null) params.append("perPage", String(perPage));
    if (search) params.append("search", search);

    const response = await axios.get(`${BASE_URL}/property?${params.toString()}`, {
      signal,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
