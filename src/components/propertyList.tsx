"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/queryClient";
import { useQuery } from "@tanstack/react-query";
import { getProperty } from "@/api/propertyHttp";
import propertyList from "@/api/propertyList.json";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";

export const PropertyListContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PropertyList />;
    </QueryClientProvider>
  );
};

export const PropertyList = () => {
  const searchParams = useSearchParams();
  const perPage = searchParams.get("perPage");
  const page = searchParams.get("page");

  // use Tankstack to fetch and manage
  // const { data, isPending, isError, error } = useQuery({
  //   queryKey: ["property"],
  //   queryFn: ({ signal }) => getProperty({ signal, page }),
  // });

  console.log(propertyList);

  return (
    <CardContent className="w-full flex justify-center flex-wrap gap-5 mt-5">
      <Card className="w-[23%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
        <CardHeader>
          <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
        </CardHeader>
        <CardContent className="absolute bottom-12">
          <p>Luxury Family Home</p>
          <div className="flex items-center gap-2 mt-2">
            <MapPin strokeWidth={1.5} size={20} />
            <span className="font-light text-xs">1800-1818 79th St</span>
          </div>
        </CardContent>
        <CardFooter className="absolute bottom-3 flex justify-between w-full">
          <div className="flex w-1/2 gap-2">
            <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
            <span>4</span>
            <span>|</span>
            <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
            <span>1</span>
          </div>
          <p className="font-semibold">$ 395,000</p>
        </CardFooter>
      </Card>
      <Card className="w-[23%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
        <CardHeader>
          <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
        </CardHeader>
        <CardContent className="absolute bottom-12">
          <p>Luxury Family Home</p>
          <div className="flex items-center gap-2 mt-2">
            <MapPin strokeWidth={1.5} size={20} />
            <span className="font-light text-xs">1800-1818 79th St</span>
          </div>
        </CardContent>
        <CardFooter className="absolute bottom-3 flex justify-between w-full">
          <div className="flex w-1/2 gap-2">
            <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
            <span>4</span>
            <span>|</span>
            <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
            <span>1</span>
          </div>
          <p className="font-semibold">$ 395,000</p>
        </CardFooter>
      </Card>
      <Card className="w-[23%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
        <CardHeader>
          <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
        </CardHeader>
        <CardContent className="absolute bottom-12">
          <p>Luxury Family Home</p>
          <div className="flex items-center gap-2 mt-2">
            <MapPin strokeWidth={1.5} size={20} />
            <span className="font-light text-xs">1800-1818 79th St</span>
          </div>
        </CardContent>
        <CardFooter className="absolute bottom-3 flex justify-between w-full">
          <div className="flex w-1/2 gap-2">
            <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
            <span>4</span>
            <span>|</span>
            <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
            <span>1</span>
          </div>
          <p className="font-semibold">$ 395,000</p>
        </CardFooter>
      </Card>
      <Card className="w-[23%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
        <CardHeader>
          <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
        </CardHeader>
        <CardContent className="absolute bottom-12">
          <p>Luxury Family Home</p>
          <div className="flex items-center gap-2 mt-2">
            <MapPin strokeWidth={1.5} size={20} />
            <span className="font-light text-xs">1800-1818 79th St</span>
          </div>
        </CardContent>
        <CardFooter className="absolute bottom-3 flex justify-between w-full">
          <div className="flex w-1/2 gap-2">
            <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
            <span>4</span>
            <span>|</span>
            <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
            <span>1</span>
          </div>
          <p className="font-semibold">$ 395,000</p>
        </CardFooter>
      </Card>
      <Card className="w-[23%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
        <CardHeader>
          <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
        </CardHeader>
        <CardContent className="absolute bottom-12">
          <p>Luxury Family Home</p>
          <div className="flex items-center gap-2 mt-2">
            <MapPin strokeWidth={1.5} size={20} />
            <span className="font-light text-xs">1800-1818 79th St</span>
          </div>
        </CardContent>
        <CardFooter className="absolute bottom-3 flex justify-between w-full">
          <div className="flex w-1/2 gap-2">
            <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
            <span>4</span>
            <span>|</span>
            <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
            <span>1</span>
          </div>
          <p className="font-semibold">$ 395,000</p>
        </CardFooter>
      </Card>
      <Card className="w-[23%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
        <CardHeader>
          <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
        </CardHeader>
        <CardContent className="absolute bottom-12">
          <p>Luxury Family Home</p>
          <div className="flex items-center gap-2 mt-2">
            <MapPin strokeWidth={1.5} size={20} />
            <span className="font-light text-xs">1800-1818 79th St</span>
          </div>
        </CardContent>
        <CardFooter className="absolute bottom-3 flex justify-between w-full">
          <div className="flex w-1/2 gap-2">
            <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
            <span>4</span>
            <span>|</span>
            <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
            <span>1</span>
          </div>
          <p className="font-semibold">$ 395,000</p>
        </CardFooter>
      </Card>
      <Card className="w-[23%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
        <CardHeader>
          <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
        </CardHeader>
        <CardContent className="absolute bottom-12">
          <p>Luxury Family Home</p>
          <div className="flex items-center gap-2 mt-2">
            <MapPin strokeWidth={1.5} size={20} />
            <span className="font-light text-xs">1800-1818 79th St</span>
          </div>
        </CardContent>
        <CardFooter className="absolute bottom-3 flex justify-between w-full">
          <div className="flex w-1/2 gap-2">
            <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
            <span>4</span>
            <span>|</span>
            <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
            <span>1</span>
          </div>
          <p className="font-semibold">$ 395,000</p>
        </CardFooter>
      </Card>
      <Card className="w-[23%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
        <CardHeader>
          <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
        </CardHeader>
        <CardContent className="absolute bottom-12">
          <p>Luxury Family Home</p>
          <div className="flex items-center gap-2 mt-2">
            <MapPin strokeWidth={1.5} size={20} />
            <span className="font-light text-xs">1800-1818 79th St</span>
          </div>
        </CardContent>
        <CardFooter className="absolute bottom-3 flex justify-between w-full">
          <div className="flex w-1/2 gap-2">
            <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
            <span>4</span>
            <span>|</span>
            <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
            <span>1</span>
          </div>
          <p className="font-semibold">$ 395,000</p>
        </CardFooter>
      </Card>
    </CardContent>
  );
};
