import axios from "axios";
import apiClient from "./apiClient";
import { editPropertySchema } from "@/schemas/propertySchema";
import { z } from "zod";
import { handleApiError } from "@/lib/handleApiError";

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

type getUserListedPropertyParams = {
  signal?: AbortSignal;
  perPage: number | null;
  page: number | null;
};

type GetPropertyDetails = {
  signal?: AbortSignal;
  propertyId: string | undefined;
};

type editPropertyDetails = {
  formData: FormData;
  propertyId: string | undefined;
};

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

    const response = await apiClient.get(`/property?${params.toString()}`, { signal });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) return;
    throw error;
  }
};

export const getUserListedProperty = async ({ signal, page, perPage }: getUserListedPropertyParams) => {
  try {
    const params = new URLSearchParams();

    if (page !== null) params.append("page", String(page));
    if (perPage !== null) params.append("perPage", String(perPage));

    const response = await apiClient.get(`/property/my-listing?${params.toString()}`, { signal });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) return;
    throw error;
  }
};

export const getPropertyDetails = async ({ signal, propertyId }: GetPropertyDetails) => {
  try {
    const response = await apiClient.get(`/property/${propertyId}`, { signal });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) return;
    throw error;
  }
};

export const addProperty = async (addPropertyFormData: FormData) => {
  try {
    const response = await apiClient.post("/property", addPropertyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const deleteProperty = async (propertyId: string | undefined) => {
  try {
    const response = await apiClient.delete(`/property/${propertyId}`);

    return response.data;
  } catch (error) {
    console.log(error);
    throw handleApiError(error);
  }
};

export const editProperty = async ({ formData, propertyId }: editPropertyDetails) => {
  try {
    const response = await apiClient.patch(`/property/${propertyId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
