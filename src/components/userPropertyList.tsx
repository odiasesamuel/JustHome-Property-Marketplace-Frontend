"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserListedProperty } from "@/api/propertyHttp";
import { useToast } from "@/hooks/use-toast";
import { PaginationComponent } from "./paginationComponent";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { LoadingBar } from "./ui/loader";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { generateSlug } from "@/utils/generateSlug";
import { PropertyListResponse } from "@/types/apiResponse";

const UserPropertyList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const perPage = Number(searchParams.get("perPage")) || 12;
  const page = Number(searchParams.get("page")) || 1;

  const [email, setEmail] = useState("");

  useEffect(() => {
    const userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      const parsedUser = JSON.parse(userInfo);
      setEmail(parsedUser.email);
    }
  }, []);

  const { data, isPending, isError, error } = useQuery<PropertyListResponse>({
    queryKey: ["userListedProperty", email, page, perPage],
    queryFn: ({ signal }) => getUserListedProperty({ signal, perPage, page }),
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
    }
  }, [isError, error, toast]);

  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const handleImageError = (id: string) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  if (isPending) return <LoadingBar />;

  if (data) {
    const pageCount = Math.ceil(data.totalProperties / perPage);
    const propertyList = data.properties;
    const navigateToPropertyDetails = (property: any) => {
      const id = generateSlug(property.name, property._id);
      router.push(`/listing/${id}`);
    };

    return (
      <>
        <CardContent className="my-5 flex w-full flex-wrap justify-center gap-5">
          {propertyList.map((property) => {
            const hasValidImage = property.imageUrls.length > 0 && !imageError[property._id];
            const backgroundImg = hasValidImage ? property.imageUrls[0] : "/images/image_placeholder.jpg";

            return (
              <Card className="relative h-[380px] w-full cursor-pointer border-none bg-cover bg-center bg-no-repeat text-sm text-black shadow-none sm:w-[48%] md:w-[31%] lg:w-[23%]" style={{ backgroundImage: `url(${backgroundImg})` }} key={property._id} onClick={() => navigateToPropertyDetails(property)}>
                {/* Fallback image trick */}
                <img src={backgroundImg} onError={() => handleImageError(property._id)} className="hidden" />

                <CardHeader>
                  <CardTitle className={`absolute rounded-full px-4 py-2 text-xs font-normal ${property.forSaleOrRent === "Sale" ? "bg-appGreen text-white" : property.forSaleOrRent === "Rent" ? "bg-appYellow text-appBlack" : "bg-appYellow text-appBlack"}`}>{property.forSaleOrRent === "Sale" ? "FOR SALE" : property.forSaleOrRent === "Rent" ? "FOR RENT" : "FOR RENT"}</CardTitle>
                </CardHeader>
                <CardContent className="absolute bottom-3 left-1/2 w-[90%] -translate-x-1/2 transform rounded-md bg-white p-3">
                  <p className="text-left font-semibold">{property.name}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <MapPin strokeWidth={1.5} size={20} />
                    <span className="text-xs font-light">{property.area}</span>
                  </div>
                  <div className="mt-3 flex justify-between">
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
                <CardFooter className="absolute bottom-3 flex w-full justify-between"></CardFooter>
              </Card>
            );
          })}
        </CardContent>

        <PaginationComponent page={page} perPage={perPage} pageCount={pageCount} />
      </>
    );
  }
};

export default UserPropertyList;
