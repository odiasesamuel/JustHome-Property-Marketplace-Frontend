"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency } from "@/utils/formatCurrency";
import { useSearchParams, useRouter } from "next/navigation";

const PropertyFilter: React.FC<{}> = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const propertyType = searchParams.get("propertyType");
  const forSaleOrRent = searchParams.get("forSaleOrRent");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const router = useRouter();
  let params = new URLSearchParams(searchParams);

  const showAllProperties = () => {
    router.push("/listing?page=1&perPage=12");
  };

  const filterPropertiesForSale = () => {
    if (forSaleOrRent === "Sale") {
      params.delete("forSaleOrRent");
    } else {
      params.set("page", "1");
      params.set("forSaleOrRent", "Sale");
    }
    router.push(`/listing?${params.toString()}`);
  };

  const filterPropertiesForRent = () => {
    if (forSaleOrRent === "Rent") {
      params.delete("forSaleOrRent");
    } else {
      params.set("page", "1");
      params.set("forSaleOrRent", "Rent");
    }
    router.push(`/listing?${params.toString()}`);
  };

  const filterDuplexProperties = () => {
    if (propertyType === "Duplex") {
      params.delete("propertyType");
    } else {
      params.set("page", "1");
      params.set("propertyType", "Duplex");
    }
    router.push(`/listing?${params.toString()}`);
  };

  const filterFlatProperties = () => {
    if (propertyType === "Flat") {
      params.delete("propertyType");
    } else {
      params.set("page", "1");
      params.set("propertyType", "Flat");
    }
    router.push(`/listing?${params.toString()}`);
  };

  const { toast } = useToast();

  const filterMinPriceProperties = (value: string) => {
    if (maxPrice !== null && maxPrice < value) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Minimum Price can't be greater than maximum price",
      });
      return;
    }
    params.set("minPrice", value);
    router.push(`/listing?${params.toString()}`);
  };

  const filterMaxPriceProperties = (value: string) => {
    if (minPrice !== null && minPrice > value) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Minimum Price can't be greater than maximum price",
      });
      return;
    }
    params.set("maxPrice", value);
    router.push(`/listing?${params.toString()}`);
  };

  return (
    <>
      <div className="w-3/4 flex justify-between text-xs">
        <Button variant="outline" className={`border px-3 py-1 rounded-full ${!search && !propertyType && !forSaleOrRent && !minPrice && !maxPrice ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`} onClick={showAllProperties}>
          All Properties
        </Button>
        <Button variant="outline" className={`border px-3 py-1 rounded-full ${forSaleOrRent === "Sale" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`} onClick={filterPropertiesForSale}>
          For Sale
        </Button>
        <Button variant="outline" className={`border px-3 py-1 rounded-full ${forSaleOrRent === "Rent" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`} onClick={filterPropertiesForRent}>
          For Rent
        </Button>
        <Button variant="outline" className={`border px-3 py-1 rounded-full ${propertyType === "Duplex" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`} onClick={filterDuplexProperties}>
          Duplex
        </Button>
        <Button variant="outline" className={`border px-3 py-1 rounded-full ${propertyType === "Flat" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`} onClick={filterFlatProperties}>
          Flat
        </Button>
      </div>

      <div className="w-3/4 flex justify-center text-xs gap-x-8">
        <div className="flex flex-col gap-2">
          <Label htmlFor="min-price" className="text-left text-xs">
            Min Price
          </Label>
          <Select value={minPrice ? minPrice : ""} onValueChange={filterMinPriceProperties}>
            <SelectTrigger id="min-price" className={`w-[180px] rounded-full border border-appBlack ${minPrice ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`}>
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
          <Select value={maxPrice ? maxPrice : ""} onValueChange={filterMaxPriceProperties}>
            <SelectTrigger id="max-price" className={`w-[180px] rounded-full border border-appBlack ${maxPrice ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`}>
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
    </>
  );
};

export default PropertyFilter;
