import ExploreCities from "@/components/exploreCities";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/searchBar";
import { ArrowRight, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="px-[3.5%]">
        <div className="flex h-[530px] flex-col items-center bg-[url('/images/area-bg.png')] bg-cover bg-center bg-no-repeat text-appGreen">
          <Card className="mt-[50px] flex w-1/2 flex-col items-center border-none bg-inherit text-appGreen shadow-none">
            <Button asChild variant="outline">
              <Link href="/listing?page=1&perPage=12">LET US GUIDE YOU HOME</Link>
            </Button>
            <CardHeader>
              <CardTitle className="mb-4 text-5xl font-medium">Find Your Perfect Home</CardTitle>
              <CardDescription className="text-center text-appGreen">Search properties for sale and to rent in Lagos and Abuja</CardDescription>
            </CardHeader>
            <CardContent className="mt-5 flex w-full flex-col items-center">
              <SearchBar className="mb-10 w-[80%]" />
              <div className="h-[150px] w-[45%] text-center">
                <p className="text-sm font-medium">Explore all things Property</p>
                <div className="mt-8 flex justify-between text-xs">
                  <Button asChild variant="outline" className="rounded-full border border-[#EBEBEB] px-3 py-1">
                    <Link href="/listing?page=1&perPage=12">All Properties</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border border-[#EBEBEB] px-3 py-1">
                    <Link href="/listing?page=1&perPage=12&forSaleOrRent=Sale">For Sale</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border border-[#EBEBEB] px-3 py-1">
                    <Link href="/listing?page=1&perPage=12&forSaleOrRent=Rent">For Rent</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-[100px] px-[3.5%]">
        <Card className="flex h-[200px] items-center border-none bg-appGreen px-20">
          <CardContent className="flex w-full items-end justify-between">
            <div className="text-white">
              <h1 className="mb-2 text-2xl font-medium">Add Your Property & Connect with Buyers</h1>
              <p className="text-sm font-light">Showcase your property, attract the right buyers, and manage inquiries with ease—all in one place.</p>
            </div>

            <Button asChild className="px-6 py-4 font-semibold text-appGreen">
              <Link href="/add-property">
                Add your property
                <ArrowRight />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-[100px] px-[3.5%]">
        <Card className="flex flex-col items-center rounded-none border-none text-center text-appBlack shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl">Find Your Dream House as Easy as 1,2,3</CardTitle>
            <CardDescription>Browse. Compare. Move in. Finding your ideal home has never been simpler.</CardDescription>
          </CardHeader>
          <CardContent className="mt-5 flex h-[200px] w-2/3 justify-between">
            <div className="flex h-full w-[32%] flex-col items-center justify-between">
              <Image alt="Logo of the company" src="/images/find_house_img_1.svg" width={150} height={100} className="h-auto w-[55%]" />
              <p className="text-sm font-medium">1. Search for a house in your favorite location</p>
            </div>
            <div className="flex h-full w-[32%] flex-col items-center justify-between">
              <Image alt="Logo of the company" src="/images/find_house_img_2.svg" width={150} height={100} className="h-auto w-[55%]" />
              <p className="text-sm font-medium">2. Make a visit appointment with one of your agent</p>
            </div>
            <div className="flex h-full w-[32%] flex-col items-center justify-between">
              <Image alt="Logo of the company" src="/images/find_house_img_3.svg" width={150} height={100} className="h-auto w-[55%]" />
              <p className="text-sm font-medium">3. Get your dream house in a month, or less</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-[100px] bg-[#FFF8F6]">
        <div className="mx-auto flex h-[700px] w-[75%] items-center justify-between text-appBlack">
          <div className="relative h-[500px] w-[50%]">
            <div className="absolute h-[50%] w-[43%] rounded-xl bg-green-700 bg-[url('/images/family_photo.jpg')] bg-cover bg-center bg-no-repeat"></div>

            <div className="absolute bottom-[15%] left-[13%] h-[30%] w-[30%] rounded-xl bg-appYellow">
              <div className="ml-4 mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-appGreen">
                <House className="text-white" strokeWidth={1.5} size={20} />
              </div>
              <p className="ml-4 mt-4 text-xs">Properties for sale</p>
              <p className="ml-4 mt-2 font-semibold">14K</p>
            </div>

            <div className="absolute bottom-0 right-0 h-[65%] w-[53%] rounded-xl bg-[url('/images/nigerian_house.jpg')] bg-cover bg-center bg-no-repeat"></div>
          </div>
          <div className="h-[500px] w-[43%]">
            <h1 className="mb-3 mt-[150px] text-3xl font-semibold">
              Why You Should Work <br /> With Us
            </h1>
            <p className="text-xs leading-5">Partner with us for a seamless property experience! We connect you with exclusive listings to ensure your property journey is smooth, efficient, and successful.</p>
            <div className="mt-5 flex w-full justify-between text-xs font-semibold">
              <div className="flex w-1/2 items-center">
                <span>
                  <Image alt="Logo of the company" src="/images/check.svg" width={150} height={100} className="mr-4 h-auto w-6" />
                </span>
                <p>100% Secure</p>
              </div>
              <div className="flex w-1/2 items-center">
                <span>
                  <Image alt="Logo of the company" src="/images/check.svg" width={150} height={100} className="mr-4 h-auto w-6" />
                </span>
                <p>Wide Range of Properties</p>
              </div>
            </div>
            <div className="mt-5 flex w-full justify-between text-xs font-semibold">
              <div className="flex w-1/2 items-center">
                <span>
                  <Image alt="Logo of the company" src="/images/check.svg" width={150} height={100} className="mr-4 h-auto w-6" />
                </span>
                <p>Buy or Rent Homes</p>
              </div>
              <div className="flex w-1/2 items-center">
                <span>
                  <Image alt="Logo of the company" src="/images/check.svg" width={150} height={100} className="mr-4 h-auto w-6" />
                </span>
                <p>Trusted by Thousands</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExploreCities />
    </>
  );
};

export default Home;
