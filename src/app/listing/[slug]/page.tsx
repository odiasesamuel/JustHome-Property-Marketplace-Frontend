"use client";

import { Fragment, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { getPropertyDetails } from "@/api/propertyHttp";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ImageViewer from "@/components/imageViewer";
import { AnimatedHand } from "@/components/ui/loader";
import { MapPin } from "lucide-react";
import { formatCurrency } from "@/utils/formatCurrency";
import { PropertyResponse } from "@/types/apiResponse";
// import data from "@/api/property.json";

const Property = () => {
  const param = useParams();
  const slug = param.slug as string;
  const propertyId = slug.split("-").pop();
  console.log(propertyId);

  const { data, isPending, isError, error } = useQuery<PropertyResponse>({
    queryKey: ["property", propertyId],
    queryFn: ({ signal }) => getPropertyDetails({ signal, propertyId }),
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

  const router = useRouter();
  const navigateBackToPropertyList = () => router.back();

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AnimatedHand />
      </div>
    );
  }

  if (data) {
    return (
      <div className="px-[3.5%]">
        <Card className="">
          <CardHeader>
            <CardTitle className="flex justify-between mb-2 text-lg">
              <span>{data.property.name}</span>
              <span>{formatCurrency(data.property.price)}</span>
            </CardTitle>

            <div className="flex items-center gap-x-8">
              <div className="flex items-center gap-x-1">
                <MapPin strokeWidth={1.5} size={20} />
                <span className="font-light text-sm">Parkview, Ikoyi, Lagos</span>
              </div>
              <div className="flex gap-2">
                <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
                <span>{data.property.numberOfRooms}</span>
                <span className="text-[#E2E2E2]">|</span>
                <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
                <span>1</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex justify-center mb-3">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[95%]"
            >
              <CarouselContent>
                {data.property.imageUrls.map((imageUrl, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-0">
                      <Card className="border-none">
                        <CardContent className="p-0 cursor-pointer">
                          <ImageViewer currentImg={imageUrl} imageUrls={data.property.imageUrls}>
                            {/* Used img over Image for placeholder image on error */}
                            <div className="w-full h-[500px] overflow-hidden">
                              <img src={`${imageUrl}`} alt={`property image ${index}`} className="w-full h-full object-cover rounded-lg" onError={(e) => (e.currentTarget.src = "/images/image_placeholder.jpg")} />
                            </div>
                          </ImageViewer>
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

          <CardFooter className="flex-col items-start gap-y-8">
            <div>
              <h1 className="text-lg font-semibold leading-none tracking-tight mb-3">Description</h1>
              <DescriptionBody description={data.property.description} />
            </div>

            <div>
              <h1 className="text-lg font-semibold leading-none tracking-tight mb-3">Contact</h1>
              {data.property.email !== "xxxxxx@gmail.com" && <p>{`Email: ${data.property.email}`}</p>}
              <p>{`Phone Number: ${data.property.phoneNumber}`}</p>
            </div>
          </CardFooter>

          <Button variant="outline" className="rounded-lg m-6 text-sm" onClick={navigateBackToPropertyList}>
            Back to property list
          </Button>
        </Card>
      </div>
    );
  }
};

const DescriptionBody: React.FC<{ description: string }> = ({ description }) => {
  if (!description.includes("\n")) return <p>{description}</p>;

  return (
    <>
      {description.split("\n").map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ))}
    </>
  );
};

export default Property;
