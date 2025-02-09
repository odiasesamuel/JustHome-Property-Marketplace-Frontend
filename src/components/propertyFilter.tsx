"use client";

import React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency } from "@/utils/formatCurrency";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PropertyFilter: React.FC<{}> = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const propertyType = searchParams.get("propertyType");
  const forSaleOrRent = searchParams.get("forSaleOrRent");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  return (
    <>
      <div className="w-3/4 flex justify-between text-xs">
        <Button asChild variant="outline" className={`border px-3 py-1 rounded-full ${!search && !propertyType && !forSaleOrRent && !minPrice && !maxPrice ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`}>
          <Link href="/listing?page=1&perPage=12">All Properties</Link>
        </Button>
        <Button variant="outline" className={`border px-3 py-1 rounded-full ${forSaleOrRent === "Sale" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`}>
          For Sale
        </Button>
        <Button variant="outline" className={`border px-3 py-1 rounded-full ${forSaleOrRent === "Rent" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`}>
          For Rent
        </Button>
        <Button variant="outline" className={`border px-3 py-1 rounded-full ${propertyType === "Duplex" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`}>
          Duplex
        </Button>
        <Button variant="outline" className={`border px-3 py-1 rounded-full ${propertyType === "Flat" ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`}>
          Flat
        </Button>
      </div>

      <div className="w-3/4 flex justify-center text-xs gap-x-8">
        <div className="flex flex-col gap-2">
          <Label htmlFor="min-price" className="text-left text-xs">
            Min Price
          </Label>
          <Select>
            <SelectTrigger id="min-price" className={`w-[180px] ${minPrice ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`}>
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
            <SelectTrigger id="max-price" className={`w-[180px] ${maxPrice ? "border-appYellow bg-appYellow hover:bg-appYellow" : "border-appBlack"}`}>
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
