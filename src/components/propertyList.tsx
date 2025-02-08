"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/queryClient";
import { useQuery } from "@tanstack/react-query";
import { getProperty } from "@/api/propertyHttp";
// import data from "@/api/propertyList.json";
import { BASE_URL } from "@/api/propertyHttp";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";

export const PropertyListContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PropertyList />
    </QueryClientProvider>
  );
};

export const PropertyList = () => {
  const searchParams = useSearchParams();
  const perPage = Number(searchParams.get("perPage")) || 12;
  const page = Number(searchParams.get("page")) || 1;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["propertyList", page, perPage],
    queryFn: ({ signal }) => getProperty({ signal, perPage, page }),
  });

  if (data) {
    const pageCount = Math.ceil(data.totalProperties / perPage);
    const propertyList = data.properties;

    return (
      <>
        <CardContent className="w-full flex justify-center flex-wrap gap-5 my-5">
          {propertyList.map((property: any) => {
            const backgroundImg = property.imageUrls[0];
            return (
              <Card className="w-[23%] h-[380px] bg-no-repeat bg-center bg-cover relative text-black text-sm border-none shadow-none" style={{ backgroundImage: `url(${backgroundImg})` }} key={property._id}>
                <CardHeader>
                  <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal text-white">{property.forSaleOrRent === "Sale" ? "FOR SALE" : property.forSaleOrRent === "Rent" ? "FOR RENT" : "FOR RENT"}</CardTitle>
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

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href={`?page=${Math.max(page - 1, 1)}&perPage=${perPage}`} />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href={`?page=1&perPage=${perPage}`} className={`px-3 py-2 rounded-md ${page === 1 ? "bg-appGreen text-white font-bold" : "hover:bg-gray-200"}`}>
                1
              </PaginationLink>
            </PaginationItem>

            {page > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {[...Array(pageCount)].map((_, index) => {
              const pageNum = index + 1;
              if (pageNum === 1 || pageNum === pageCount) return null; // Already handled above

              if (pageNum >= page - 2 && pageNum <= page + 2) {
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink href={`?page=${pageNum}&perPage=${perPage}`} className={`px-3 py-2 rounded-md ${pageNum === page ? "bg-appGreen text-white font-bold" : "hover:bg-gray-200"}`}>
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
            })}

            {page < pageCount - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink href={`?page=${pageCount}&perPage=${perPage}`} className={`px-3 py-2 rounded-md ${page === pageCount ? "bg-appGreen text-white font-bold" : "hover:bg-gray-200"}`}>
                {pageCount}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href={`?page=${Math.min(page + 1, pageCount)}&perPage=${perPage}`} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </>
    );
  }
};
