import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, House, MapPin, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const Listing = () => {
  return (
    <div className="flex flex-col gap-3 px-[3.5%]">
      <Card className="rounded-none  border-none shadow-none flex flex-col items-center text-center text-appBlack">
        <CardHeader className="flex items-center gap-y-5">
          <CardTitle className="text-5xl font-medium">
            Your<span className="text-[#E7C873]"> Property</span>, Our Priority
          </CardTitle>
          <CardDescription>Browse. Compare. Move in. Finding your ideal home has never been simpler.</CardDescription>

          <div className="w-full relative">
            <Input type="text" className="w-full rounded-full px-5 py-4 text-sm  shadow-md focus:outline-none placeholder:text-appGreen" placeholder="Enter state, area, Keywords..." />
            <Button type="submit" className="bg-[#E7C873] rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center">
              <Search className="w-4 text-appGreen" />
            </Button>
          </div>

          <div className="w-3/4 flex justify-between text-xs">
            <Button variant="outline" className="border border-appBlack px-2 py-1 rounded-full">
              All Properties
            </Button>
            <Button variant="outline" className="border border-appBlack px-2 py-1 rounded-full">
              For Sale
            </Button>
            <Button variant="outline" className="border border-appBlack px-2 py-1 rounded-full">
              For Rent
            </Button>
            <Button variant="outline" className="border border-appBlack px-2 py-1 rounded-full">
              Duplex
            </Button>
            <Button variant="outline" className="border border-appBlack px-2 py-1 rounded-full">
              Flat
            </Button>
          </div>
        </CardHeader>
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
      </Card>
      <Button className="text-appBlack font-semibold px-6 py-4 rounded-full self-center mx-auto">
        See All Listing
        <ArrowRight />
      </Button>
    </div>
  );
};

export default Listing;
