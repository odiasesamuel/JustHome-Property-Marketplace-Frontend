import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import data from "@/api/primeLocation.json";
import Link from "next/link";

const ExploreCities = () => {
  if (data) {
    return (
      <div className="mt-[100px]">
        <Card className="rounded-none flex flex-col items-center text-center text-appBlack border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl">Explore Cities</CardTitle>
            <CardDescription>Explore a curated selection of properties across prime locations, tailored to meet your lifestyle and investment needs.</CardDescription>
          </CardHeader>
          <CardContent className="w-full h-fit flex flex-wrap justify-center mt-5 gap-x-10  gap-y-10 pl-24">
            {data.location.map((city, index) => (
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
    <Link href={`/listing?page=1&perPage=12&search=${city}`} className="flex w-[22%] items-center gap-x-3 h-[100px] font-medium">
      <div className="w-1/2 h-full rounded-xl bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
      <p className="text-left">{city}</p>
    </Link>
  );
};

export default ExploreCities;
