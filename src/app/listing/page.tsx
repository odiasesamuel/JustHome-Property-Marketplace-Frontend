import PropertyList from "@/components/propertyList";
import SearchBar from "@/components/searchBar";
import PropertyFilter from "@/components/propertyFilter";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Listing = () => {
  return (
    <div className="flex flex-col gap-3 px-[3.5%]">
      <Card className="flex flex-col items-center rounded-none border-none text-center text-appBlack shadow-none">
        <CardHeader className="flex items-center gap-y-5">
          <CardTitle className="text-2xl font-medium 2xs:text-3xl xs:text-4xl sm:text-[2.5rem] lg:text-5xl">
            Your<span className="text-[#E7C873]"> Property</span>, Our Priority
          </CardTitle>
          <CardDescription className="text-xs xs:text-sm">Browse. Compare. Move in. Finding your ideal home has never been simpler.</CardDescription>

          <SearchBar className="w-full" />

          <PropertyFilter />
        </CardHeader>

        <PropertyList />
      </Card>
    </div>
  );
};

export default Listing;
