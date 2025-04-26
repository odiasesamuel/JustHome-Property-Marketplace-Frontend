import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import data from "@/api/primeLocation.json";
import Link from "next/link";

const ExploreCities = () => {
  if (data) {
    return (
      <div className="mt-[100px]">
        <Card className="flex flex-col items-center rounded-none border-none text-center text-appBlack shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl">Explore Cities</CardTitle>
            <CardDescription>Explore a curated selection of properties across prime locations, tailored to meet your lifestyle and investment needs.</CardDescription>
          </CardHeader>
          <CardContent className="mt-5 flex h-fit w-full flex-wrap justify-center gap-x-10 gap-y-10 pl-24">
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
    <Link href={`/listing?page=1&perPage=12&search=${city}`} className="flex h-[100px] w-[22%] items-center gap-x-3 font-medium">
      <div className="h-full w-1/2 rounded-xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}></div>
      <p className="text-left">{city}</p>
    </Link>
  );
};

export default ExploreCities;
