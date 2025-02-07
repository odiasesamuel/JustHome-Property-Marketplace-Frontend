import axios from "axios";

type GetPropertyParams = {
  signal?: AbortSignal;
  page: string | null;
};

export const getProperty = async ({ signal, page }: GetPropertyParams) => {
  try {
    const response = await axios.get(`http://localhost:5000/property?perPage=10&page=${page}`, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
