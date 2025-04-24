export type Property = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  state: "Lagos" | "Abuja";
  LGA: string;
  city: string;
  area: string;
  description: string;
  numberOfRooms: number;
  propertyType: "Duplex" | "Flat";
  forSaleOrRent: "Rent" | "Sale";
  price: number;
  propertyOwnerId: string;
  imageUrls: string[];
};

export type PropertyResponse = {
  message: string;
  property: Property;
};

export type PropertyListResponse = {
  message: string;
  properties: Property[];
  totalProperties: number;
};
