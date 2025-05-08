"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency } from "@/utils/formatCurrency";
import { useSearchParams, useRouter } from "next/navigation";

const PropertyFilter = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const propertyType = searchParams.get("propertyType");
  const forSaleOrRent = searchParams.get("forSaleOrRent");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const router = useRouter();
  const params = new URLSearchParams(searchParams);

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
      <div className="flex w-1/2 flex-col justify-between gap-y-3 text-xs xs:w-full xs:flex-row sm:w-3/4">
        <Button variant="outline" className={`rounded-full border px-3 py-1 ${!search && !propertyType && !forSaleOrRent && !minPrice && !maxPrice ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`} onClick={showAllProperties}>
          All Properties
        </Button>
        <Button variant="outline" className={`rounded-full border px-3 py-1 ${forSaleOrRent === "Sale" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`} onClick={filterPropertiesForSale}>
          For Sale
        </Button>
        <Button variant="outline" className={`rounded-full border px-3 py-1 ${forSaleOrRent === "Rent" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`} onClick={filterPropertiesForRent}>
          For Rent
        </Button>
        <Button variant="outline" className={`rounded-full border px-3 py-1 ${propertyType === "Duplex" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`} onClick={filterDuplexProperties}>
          Duplex
        </Button>
        <Button variant="outline" className={`rounded-full border px-3 py-1 ${propertyType === "Flat" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`} onClick={filterFlatProperties}>
          Flat
        </Button>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-x-8 gap-y-4 text-xs xs:flex-row sm:w-3/4">
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
                <SelectItem value="200000">{formatCurrency(200000)}</SelectItem>
                <SelectItem value="400000">{formatCurrency(400000)}</SelectItem>
                <SelectItem value="600000">{formatCurrency(600000)}</SelectItem>
                <SelectItem value="800000">{formatCurrency(800000)}</SelectItem>
                <SelectItem value="1000000">{formatCurrency(1000000)}</SelectItem>
                <SelectItem value="2000000">{formatCurrency(2000000)}</SelectItem>
                <SelectItem value="5000000">{formatCurrency(5000000)}</SelectItem>
                <SelectItem value="10000000">{formatCurrency(10000000)}</SelectItem>
                <SelectItem value="20000000">{formatCurrency(20000000)}</SelectItem>
                <SelectItem value="50000000">{formatCurrency(50000000)}</SelectItem>
                <SelectItem value="1000000000">{formatCurrency(100000000)}</SelectItem>
                <SelectItem value="2000000000">{formatCurrency(200000000)}</SelectItem>
                <SelectItem value="5000000000">{formatCurrency(500000000)}</SelectItem>
                <SelectItem value="10000000000">{formatCurrency(1000000000)}</SelectItem>
                <SelectItem value="50000000000">{formatCurrency(5000000000)}</SelectItem>
                <SelectItem value="100000000000">{formatCurrency(10000000000)}</SelectItem>
                <SelectItem value="200000000000">{formatCurrency(20000000000)}</SelectItem>
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
                <SelectItem value="200000">{formatCurrency(200000)}</SelectItem>
                <SelectItem value="400000">{formatCurrency(400000)}</SelectItem>
                <SelectItem value="600000">{formatCurrency(600000)}</SelectItem>
                <SelectItem value="800000">{formatCurrency(800000)}</SelectItem>
                <SelectItem value="1000000">{formatCurrency(1000000)}</SelectItem>
                <SelectItem value="2000000">{formatCurrency(2000000)}</SelectItem>
                <SelectItem value="5000000">{formatCurrency(5000000)}</SelectItem>
                <SelectItem value="10000000">{formatCurrency(10000000)}</SelectItem>
                <SelectItem value="20000000">{formatCurrency(20000000)}</SelectItem>
                <SelectItem value="50000000">{formatCurrency(50000000)}</SelectItem>
                <SelectItem value="1000000000">{formatCurrency(100000000)}</SelectItem>
                <SelectItem value="2000000000">{formatCurrency(200000000)}</SelectItem>
                <SelectItem value="5000000000">{formatCurrency(500000000)}</SelectItem>
                <SelectItem value="10000000000">{formatCurrency(1000000000)}</SelectItem>
                <SelectItem value="50000000000">{formatCurrency(5000000000)}</SelectItem>
                <SelectItem value="100000000000">{formatCurrency(10000000000)}</SelectItem>
                <SelectItem value="200000000000">{formatCurrency(20000000000)}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default PropertyFilter;
