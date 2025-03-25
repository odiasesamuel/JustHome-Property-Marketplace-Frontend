type Property = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  state: string;
  LGA: string;
  city: string;
  area: string;
  description: string;
  numberOfRooms: number;
  propertyType: string;
  forSaleOrRent: string;
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
