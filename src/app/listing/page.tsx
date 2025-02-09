import { PropertyListContainer } from "@/components/propertyList";
import SearchBar from "@/components/searchBar";
import PropertyFilter from "@/components/propertyFilter";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

          <SearchBar />

          <PropertyFilter />
        </CardHeader>

        <PropertyListContainer />
      </Card>
    </div>
  );
};

export default Listing;
