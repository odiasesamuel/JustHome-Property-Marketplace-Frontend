import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import data from "@/api/primeLocation.json";
import Link from "next/link";

const ExploreCities: React.FC<{ className: string }> = ({ className }) => {
  if (data) {
    return (
      <div className={className}>
        <Card className="flex flex-col items-center rounded-none border-none text-center text-appBlack shadow-none">
          <CardHeader className="p-4 text-center xs:p-6">
            <CardTitle className="text-2xl xs:text-3xl">Explore Cities</CardTitle>
            <CardDescription className="text-xs xs:text-sm">Explore a curated selection of properties across prime locations, tailored to meet your lifestyle and investment needs.</CardDescription>
          </CardHeader>
          <CardContent className="mt-5 flex h-fit w-full flex-wrap justify-center gap-x-10 gap-y-10 sm:pl-24">
            {data.location.map((city) => (
              <CityCard key={city._id} city={city.name} image={city.image} />
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }
};

const CityCard: React.FC<{ city: string; image: string }> = ({ city, image }) => {
  return (
    <Link href={`/listing?page=1&perPage=12&search=${city}`} className="flex h-[200px] w-full flex-col items-center gap-2 gap-x-3 font-medium sm:h-[100px] sm:w-[44%] sm:flex-row lg:w-[29%] xl:w-[22%]">
      <div className="h-full w-full rounded-xl bg-cover bg-center bg-no-repeat 2xs:w-3/4 sm:w-1/2" style={{ backgroundImage: `url(${image})` }}></div>
      <p className="text-left">{city}</p>
    </Link>
  );
};

export default ExploreCities;
