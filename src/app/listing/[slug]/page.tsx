"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { deleteProperty, getPropertyDetails } from "@/api/propertyHttp";
import { ApiError } from "next/dist/server/api-utils";
import EditPropertyForm from "@/components/form/editPropertyForm";
import DeleteProjectButton from "@/components/deleteProjectButton";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ImageViewer from "@/components/imageViewer";
import { AnimatedHand } from "@/components/ui/loader";
import {  MapPin } from "lucide-react";
import { formatCurrency } from "@/utils/formatCurrency";
import { PropertyResponse } from "@/types/apiResponse";
import { queryClient } from "@/api/queryClient";

const Property = () => {
  const param = useParams();
  const slug = param.slug as string;
  const propertyId = slug.split("-").pop();

  const [userId, setUserId] = useState("");

  useEffect(() => {
    const userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      const parsedUser = JSON.parse(userInfo);
      setUserId(parsedUser.userId);
    }
  }, []);

  const { data, isPending, isError, error } = useQuery<PropertyResponse>({
    queryKey: ["property", propertyId],
    queryFn: ({ signal }) => getPropertyDetails({ signal, propertyId }),
    gcTime: 10 * 60 * 1000,
  });

  const { mutate, isPending: isPendingDeletion } = useMutation({
    mutationFn: deleteProperty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userListedProperty"] });
      queryClient.invalidateQueries({ queryKey: ["property"] });
      router.push("/add-property");
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });
  const handlePropertyDeletion = () => mutate(propertyId);

  const { isAuth } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (isError) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error loading property data",
      });
    }
  }, [isError, error, toast]);

  const router = useRouter();
  const navigateBackToPropertyList = () => router.back();

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <AnimatedHand />
      </div>
    );
  }

  if (data) {
    return (
      <div className="px-[3.5%]">
        <Card className="">
          <CardHeader>
            <CardTitle className="mb-2 flex flex-col justify-between gap-y-3 text-lg sm:flex-row">
              <span>{data.property.name}</span>
              <span>{formatCurrency(data.property.price)}</span>
            </CardTitle>

            <div className="flex items-center gap-x-8">
              <div className="flex items-center gap-x-1">
                <MapPin strokeWidth={1.5} size={20} />
                <span className="text-sm font-light">{data.property.area}</span>
              </div>
              <span className="text-[#E2E2E2]">|</span>
              <div className="flex gap-2">
                <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
                <span>{data.property.numberOfRooms}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="mb-3 flex justify-center">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[95%]">
              <CarouselContent>
                {data.property.imageUrls.map((imageUrl, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-0">
                      <Card className="border-none">
                        <CardContent className="cursor-pointer p-0">
                          <ImageViewer currentImg={imageUrl} imageUrls={data.property.imageUrls}>
                            {/* Used img over Image for placeholder image on error */}
                            <div className="h-[500px] w-full overflow-hidden">
                              <img src={`${imageUrl}`} alt={`property image ${index}`} className="h-full w-full rounded-lg object-cover" onError={(e) => (e.currentTarget.src = "/images/image_placeholder.jpg")} />
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
              <h1 className="mb-3 text-base font-semibold leading-none tracking-tight sm:text-lg">Description</h1>
              <DescriptionBody description={data.property.description} />
            </div>

            <div>
              <h1 className="mb-3 text-base font-semibold leading-none tracking-tight sm:text-lg">Contact</h1>
              {data.property.email !== "xxxxxx@gmail.com" && <p className="text-sm sm:text-base">{`Email: ${data.property.email}`}</p>}
              <p className="text-sm sm:text-base">{`Phone Number: ${data.property.phoneNumber}`}</p>
            </div>
          </CardFooter>

          <div className="m-6 flex flex-col items-start justify-between gap-y-8 sm:flex-row">
            {isAuth && userId === data.property.propertyOwnerId && (
              <div className="flex flex-col gap-6 sm:flex-row">
                <EditPropertyForm propertyData={data.property} />
                <DeleteProjectButton isPendingDeletion={isPendingDeletion} handlePropertyDeletion={handlePropertyDeletion} />
              </div>
            )}
            <Button variant="outline" className="rounded-lg text-sm" onClick={navigateBackToPropertyList}>
              Back to property list
            </Button>
          </div>
        </Card>
      </div>
    );
  }
};

const DescriptionBody: React.FC<{ description: string }> = ({ description }) => {
  if (!description.includes("\n")) return <p className="text-sm sm:text-base">{description}</p>;

  return (
    <>
      {description.split("\n").map((line, index) => (
        <p className="text-sm sm:text-base" key={index}>
          {line}
          <br />
        </p>
      ))}
    </>
  );
};

export default Property;
