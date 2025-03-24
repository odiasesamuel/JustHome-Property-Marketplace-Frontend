import { z } from "zod";

export const addPropertySchema = z.object({
  name: z.string().trim().min(1, { message: "Name of property is required" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  phoneNumber: z.string().trim().min(10, { message: "Phone number is too short" }).max(15, { message: "Phone number is too long" }),
  state: z.enum(["Lagos", "Abuja"], { message: "State where the property is located is required" }),
  LGA: z.string().trim().min(1, { message: "LGA where the property is located is required" }),
  city: z.string().trim().min(1, { message: "City where the property is located is required" }),
  description: z.string().trim().min(10, { message: "Description of the property is too short" }),
  numberOfRooms: z.string().trim().min(1, { message: "The property must have at least 1 room" }),
  propertyType: z.enum(["Duplex", "Flat"], { message: "Property type must be either 'Duplex' or 'Flat'" }),
  forSaleOrRent: z.enum(["Rent", "Sale"], { message: "Property must be either for sale or rent" }),
  price: z.string().trim().min(0, { message: "Price must be a positive number" }),
  imageFiles: z.custom<FileList>((val) => val instanceof FileList, { message: "You must upload at least one image file" }).refine((files) => files.length > 0, { message: "At least one image file is required" }),
});

export const editPropertySchema = z.object({
  name: z.string().trim().min(1, { message: "Name of property is required" }).optional(),
  email: z.string().trim().email({ message: "Invalid email address" }).optional(),
  phoneNumber: z.string().trim().min(10, { message: "Phone number is too short" }).max(15, { message: "Phone number is too long" }).optional(),
  state: z.string().trim().min(1, { message: "State where the property is located is required" }).optional(),
  LGA: z.string().trim().min(1, { message: "LGA where the property is located is required" }).optional(),
  city: z.string().trim().min(1, { message: "City where the property is located is required" }).optional(),
  area: z.string().trim().min(1, { message: "Area where the property is located is required" }).optional(),
  description: z.string().trim().min(10, { message: "Description of the property is too short" }).optional(),
  numberOfRooms: z.number().int().min(1, { message: "The property must have at least 1 room" }).optional(),
  propertyType: z.enum(["Duplex", "Flat"], { message: "Property type must be either 'Duplex' or 'Flat'" }).optional(),
  forSaleOrRent: z.enum(["Rent", "Sale"], { message: "Property must be either for sale or rent" }).optional(),
  price: z.number().int().min(0, { message: "Price must be a positive number" }).optional(),
});
