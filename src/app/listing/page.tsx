import { PropertyListContainer } from "@/components/propertyList";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/utils/formatCurrency";

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
            <Button variant="outline" className="border border-appBlack px-3 py-1 rounded-full">
              All Properties
            </Button>
            <Button variant="outline" className="border border-appBlack px-3 py-1 rounded-full">
              For Sale
            </Button>
            <Button variant="outline" className="border border-appBlack px-3 py-1 rounded-full">
              For Rent
            </Button>
            <Button variant="outline" className="border border-appBlack px-3 py-1 rounded-full">
              Duplex
            </Button>
            <Button variant="outline" className="border border-appBlack px-3 py-1 rounded-full">
              Flat
            </Button>
          </div>

          <div className="w-3/4 flex justify-center text-xs gap-x-8">
            <div className="flex flex-col gap-2">
              <Label htmlFor="min-price" className="text-left text-xs">
                Min Price
              </Label>
              <Select>
                <SelectTrigger id="min-price" className="w-[180px]">
                  <SelectValue placeholder="No Min" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Min Price</SelectLabel>
                    <SelectItem value="100000">{formatCurrency(100000)}</SelectItem>
                    <SelectItem value="200000">{formatCurrency(200000)}</SelectItem>
                    <SelectItem value="300000">{formatCurrency(300000)}</SelectItem>
                    <SelectItem value="400000">{formatCurrency(400000)}</SelectItem>
                    <SelectItem value="500000">{formatCurrency(500000)}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="max-price" className="text-left text-xs">
                Max Price
              </Label>
              <Select>
                <SelectTrigger id="max-price" className="w-[180px]">
                  <SelectValue placeholder="No Max" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Max Price</SelectLabel>
                    <SelectItem value="100000">{formatCurrency(100000)}</SelectItem>
                    <SelectItem value="200000">{formatCurrency(200000)}</SelectItem>
                    <SelectItem value="300000">{formatCurrency(300000)}</SelectItem>
                    <SelectItem value="400000">{formatCurrency(400000)}</SelectItem>
                    <SelectItem value="500000">{formatCurrency(500000)}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        <PropertyListContainer />
      </Card>
    </div>
  );
};

export default Listing;
