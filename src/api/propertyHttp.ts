import axios from "axios";

type GetPropertyListParams = {
  signal?: AbortSignal;
  perPage: number | null;
  page: number | null;
  search: string | null;
  forSaleOrRent: string | null;
  propertyType: string | null;
  minPrice: string | null;
  maxPrice: string | null;
};

type GetPropertyDetails = {
  signal?: AbortSignal;
  propertyId: string | undefined;
};

export const BASE_URL = "http://localhost:5000";

export const getPropertyList = async ({ signal, page, perPage, search, forSaleOrRent, propertyType, minPrice, maxPrice }: GetPropertyListParams) => {
  try {
    const params = new URLSearchParams();

    if (page !== null) params.append("page", String(page));
    if (perPage !== null) params.append("perPage", String(perPage));
    if (search) params.append("search", search);
    if (forSaleOrRent) params.append("forSaleOrRent", forSaleOrRent);
    if (propertyType) params.append("propertyType", propertyType);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);

    const response = await axios.get(`${BASE_URL}/property?${params.toString()}`, { signal });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
      return;
    }
    // console.error("Error fetching properties:", error);
    throw error;
  }
};

export const getPropertyDetails = async ({ signal, propertyId }: GetPropertyDetails) => {
  try {
    const response = await axios.get(`${BASE_URL}/property/${propertyId}`, { signal });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
      return;
    }
    console.error("Error fetching properties:", error);
    throw error;
  }
};
