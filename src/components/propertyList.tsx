"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPropertyList } from "@/api/propertyHttp";
// import data from "@/api/propertyList.json";
import { useToast } from "@/hooks/use-toast";
import { PaginationComponent } from "./paginationComponent";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { generateSlug } from "@/utils/generateSlug";

const PropertyList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const perPage = Number(searchParams.get("perPage")) || 12;
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search");
  const forSaleOrRent = searchParams.get("forSaleOrRent");
  const propertyType = searchParams.get("propertyType");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["propertyList", page, perPage, search, forSaleOrRent, propertyType, minPrice, maxPrice],
    queryFn: ({ signal }) => getPropertyList({ signal, perPage, page, search, forSaleOrRent, propertyType, minPrice, maxPrice }),
    gcTime: 10 * 60 * 1000,
  });

  const { toast } = useToast();

  useEffect(() => {
    if (isError) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message || "Error loading properties data",
      });
      console.log(error);
    }
  }, [isError, error, toast]);

  if (data) {
    const pageCount = Math.ceil(data.totalProperties / perPage);
    const propertyList = data.properties;
    const navigateToPropertyDetails = (property: any) => {
      const id = generateSlug(property.name, property._id);
      router.push(`/listing/${id}`);
    };

    return (
      <>
        <CardContent className="w-full flex justify-center flex-wrap gap-5 my-5">
          {propertyList.map((property: any) => {
            const backgroundImg = property.imageUrls[0];
            return (
              <Card className="w-[23%] h-[380px] bg-no-repeat bg-center bg-cover relative text-black text-sm border-none shadow-none cursor-pointer" style={{ backgroundImage: `url(${backgroundImg})` }} key={property._id} onClick={() => navigateToPropertyDetails(property)}>
                <CardHeader>
                  <CardTitle className={`absolute text-xs px-4 py-2 rounded-full font-normal ${property.forSaleOrRent === "Sale" ? "bg-appGreen text-white" : property.forSaleOrRent === "Rent" ? "bg-appYellow text-appBlack" : "bg-appYellow text-appBlack"}`}>{property.forSaleOrRent === "Sale" ? "FOR SALE" : property.forSaleOrRent === "Rent" ? "FOR RENT" : "FOR RENT"}</CardTitle>
                </CardHeader>
                <CardContent className="w-[90%] absolute left-1/2 transform -translate-x-1/2 bottom-3 bg-white rounded-md p-3">
                  <p className="text-left font-semibold">{property.name}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin strokeWidth={1.5} size={20} />
                    <span className="font-light text-xs">{property.area}</span>
                  </div>
                  <div className="flex justify-between mt-3">
                    <p className="font-semibold text-[#EB664E]">{formatCurrency(property.price)}</p>
                    <div className="flex gap-2">
                      <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
                      <span>{property.numberOfRooms}</span>
                      <span className="text-[#E2E2E2]">|</span>
                      <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
                      <span>1</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="absolute bottom-3 flex justify-between w-full"></CardFooter>
              </Card>
            );
          })}
        </CardContent>

        <PaginationComponent page={page} perPage={perPage} pageCount={pageCount} search={search} forSaleOrRent={forSaleOrRent} propertyType={propertyType} minPrice={minPrice} maxPrice={maxPrice} />
      </>
    );
  }
};

export default PropertyList;
