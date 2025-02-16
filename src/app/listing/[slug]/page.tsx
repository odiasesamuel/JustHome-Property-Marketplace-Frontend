"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getPropertyDetails } from "@/api/propertyHttp";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ImageCarousel from "@/components/imageCarousel";
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
      <Card className="">
        <CardHeader>
          <CardTitle className="flex justify-between mb-2 text-lg">
            <span>4 Bedroom Luxury Penthouse Maisonettes</span>
            <span>#500,000</span>
          </CardTitle>

          <div className="flex items-center gap-x-1">
            <MapPin strokeWidth={1.5} size={20} />
            <span className="font-light text-sm">Parkview, Ikoyi, Lagos</span>
          </div>
        </CardHeader>

        <CardContent className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[95%]"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-0">
                    <Card className="border-none">
                      <CardContent className="p-0 cursor-pointer">
                        <ImageCarousel>
                          <Image src="/images/nigerian_house.jpg" alt={`property image ${index}`} width={500} height={500} className="w-full h-auto object-contain rounded-lg" />
                        </ImageCarousel>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>

        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Property;
