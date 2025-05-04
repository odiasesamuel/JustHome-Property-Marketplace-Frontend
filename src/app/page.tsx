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
        <div className="flex h-[320px] flex-col items-center bg-[url('/images/area-bg.png')] bg-cover bg-center bg-no-repeat text-appGreen xs:h-[350px] sm:h-[400px] md:h-[480px] lg:h-[530px]">
          <Card className="mt-[5px] flex w-full flex-col items-center border-none bg-inherit text-appGreen shadow-none xs:mt-[10px] sm:mt-[20px] md:w-4/5 lg:mt-[50px] lg:w-2/3 xl:w-1/2">
            <Button asChild variant="outline">
              <Link href="/listing?page=1&perPage=12">LET US GUIDE YOU HOME</Link>
            </Button>
            <CardHeader className="p-4 text-center xs:p-6">
              <CardTitle className="text-2xl font-medium 2xs:text-3xl xs:text-4xl sm:text-[2.5rem] lg:mb-2 lg:text-5xl">Find Your Perfect Home</CardTitle>
              <CardDescription className="text-xs text-appGreen xs:text-sm">Search properties for sale and to rent in Lagos and Abuja</CardDescription>
            </CardHeader>
            <CardContent className="mt-2 flex w-full flex-col items-center px-0 sm:px-6 lg:mt-5">
              <SearchBar className="mb-5 w-full sm:w-[80%] md:mb-8 lg:mb-10" />
              <div className="h-[150px] w-[80%] text-center xs:w-3/5 sm:w-[45%]">
                <p className="text-sm font-medium">Explore all things Property</p>
                <div className="mt-5 flex justify-between text-xs md:mt-8">
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

      <div className="mt-[40px] px-[3.5%] xs:mt-[60px] sm:mt-[75px] lg:mt-[100px]">
        <Card className="flex h-[180px] items-center border-none bg-appGreen px-2 xs:px-3 sm:h-[200px] lg:px-5 xl:px-10">
          <CardContent className="flex w-full flex-col items-center justify-between gap-4 p-2 text-center sm:p-5 sm:text-left md:flex-row">
            <div className="text-white">
              <h1 className="mb-2 text-base font-medium 2xs:text-lg xs:text-xl sm:text-2xl">Add Your Property & Connect with Buyers</h1>
              <p className="text-xs font-light sm:text-sm">Showcase your property, attract the right buyers, and manage inquiries with ease—all in one place.</p>
            </div>

            <Button asChild className="px-4 py-3 font-semibold text-appGreen sm:px-6 sm:py-4">
              <Link href="/add-property">
                Add your property
                <ArrowRight />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-[40px] hidden px-[3.5%] xs:mt-[60px] sm:mt-[75px] sm:block lg:mt-[100px]">
        <Card className="flex flex-col items-center rounded-none border-none text-center text-appBlack shadow-none">
          <CardHeader className="p-0 text-center xs:p-6">
            <CardTitle className="text-2xl md:text-3xl">Find Your Dream House as Easy as 1,2,3</CardTitle>
            <CardDescription className="text-xs xs:text-sm">Browse. Compare. Move in. Finding your ideal home has never been simpler.</CardDescription>
          </CardHeader>
          <CardContent className="mt-5 flex h-[200px] w-full justify-between lg:w-3/4 xl:w-2/3">
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

      <div className="mt-[40px] bg-[#FFF8F6] px-[3.5%] xs:mt-[60px] sm:mt-[75px] lg:mt-[100px]">
        <div className="mx-auto flex w-[90%] flex-col items-center gap-20 py-[50px] text-appBlack sm:py-[75px] md:flex-row lg:w-[75%]">
          <div className="relative hidden h-[500px] w-full sm:block md:w-[50%]">
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
          <div className="w-full sm:w-3/4 md:w-[43%]">
            <h1 className="mb-3 text-center text-2xl font-semibold sm:text-left sm:text-3xl md:mt-[150px]">Why You Should Work With Us</h1>
            <p className="text-center text-xs leading-5 sm:text-left">Partner with us for a seamless property experience! We connect you with exclusive listings to ensure your property journey is smooth, efficient, and successful.</p>
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

      <ExploreCities className="mt-[40px] px-[3.5%] xs:mt-[60px] sm:mt-[75px] lg:mt-[100px]" />
    </>
  );
};

export default Home;
