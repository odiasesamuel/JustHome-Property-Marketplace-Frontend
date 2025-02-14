"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getPropertyDetails } from "@/api/propertyHttp";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Property = () => {
  // const param = useParams();
  // const slug = param.slug as string;
  // const propertyId = slug.split("-").pop();
  // console.log(propertyId);

  // const { data, isPending, isError, error } = useQuery({
  //   queryKey: ["property", propertyId],
  //   queryFn: ({ signal }) => getPropertyDetails({ signal, propertyId }),
  //   gcTime: 10 * 60 * 1000,
  // });

  // console.log(data);

  return (
    <div className="px-[3.5%]">
      <Card>
        <CardHeader className="">
          <CardTitle className="flex justify-between mb-2 text-lg">
            <span>4 Bedroom Luxury Penthouse Maisonettes</span>
            <span>#500,000</span>
          </CardTitle>

          <div className="flex items-center gap-x-1">
            <MapPin strokeWidth={1.5} size={20} />
            <span className="font-light text-sm"> Parkview, Ikoyi, Lagos</span>
          </div>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Property;
