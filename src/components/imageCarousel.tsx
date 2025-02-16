import { ReactNode, useState } from "react";
import Image from "next/image";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ImageCarousel: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 border-none">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <Card className="border-none">
                    <CardContent className="p-0">
                      <Image src="/images/nigerian_house.jpg" alt={`property image ${index}`} width={500} height={500} className="w-full h-auto object-contain rounded-lg" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCarousel;
