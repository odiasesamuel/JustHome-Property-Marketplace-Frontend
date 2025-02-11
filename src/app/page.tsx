import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchBar from "@/components/searchBar";
import { ArrowRight, House, MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="px-[3.5%]">
        <div className="bg-[url('/images/area-bg.png')] bg-no-repeat bg-center bg-cover h-[530px] flex flex-col items-center text-appGreen">
          <Card className="w-1/2 flex flex-col items-center mt-[50px] border-none shadow-none text-appGreen bg-inherit">
            <Button asChild variant="outline">
              <Link href="/listing?page=1&perPage=12">LET US GUIDE YOU HOME</Link>
            </Button>
            <CardHeader>
              <CardTitle className="text-5xl font-medium mb-4">Find Your Perfect Home</CardTitle>
              <CardDescription className="text-center text-appGreen">Search properties for sale and to rent in Lagos and Abuja</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center mt-5">
              <SearchBar className="w-[80%] mb-10" />
              <div className="h-[150px] text-center w-[45%]">
                <p className="text-sm font-medium">Explore all things Property</p>
                <div className="mt-8 flex justify-between text-xs">
                  <Button asChild variant="outline" className="border border-[#EBEBEB] px-3 py-1 rounded-full">
                    <Link href="/listing?page=1&perPage=12">All Properties</Link>
                  </Button>
                  <Button asChild variant="outline" className="border border-[#EBEBEB] px-3 py-1 rounded-full">
                    <Link href="/listing?page=1&perPage=12&forSaleOrRent=Sale">For Sale</Link>
                  </Button>
                  <Button asChild variant="outline" className="border border-[#EBEBEB] px-3 py-1 rounded-full">
                    <Link href="/listing?page=1&perPage=12&forSaleOrRent=Rent">For Rent</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-[100px] px-[3.5%]">
        <Card className="bg-appGreen h-[200px] flex items-center px-20 border-none">
          <CardContent className="w-full flex justify-between items-end">
            <div className="text-white">
              <h1 className="text-2xl font-medium mb-2">Sign in to streamline your search</h1>
              <p className="text-sm font-light">Save Properties, create alerts and keep track of enquires you send to agents.</p>
            </div>

            <Button className="text-appGreen font-semibold px-6 py-4">
              Sign in or create an account
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-[100px] px-[3.5%]">
        <Card className="rounded-none flex flex-col items-center text-center text-appBlack border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl">Find Your Dream House as Easy as 1,2,3</CardTitle>
            <CardDescription>Browse. Compare. Move in. Finding your ideal home has never been simpler.</CardDescription>
          </CardHeader>
          <CardContent className="w-2/3 h-[200px] flex justify-between mt-5">
            <div className="w-[32%] h-full flex flex-col items-center justify-between">
              <Image alt="Logo of the company" src="/images/find_house_img_1.svg" width={150} height={100} className="w-[55%] h-auto" />
              <p className="text-sm font-medium">1. Search for a house in your favorite location</p>
            </div>
            <div className="w-[32%] h-full flex flex-col items-center justify-between">
              <Image alt="Logo of the company" src="/images/find_house_img_2.svg" width={150} height={100} className="w-[55%] h-auto" />
              <p className="text-sm font-medium">2. Make a visit appointment with one of your agent</p>
            </div>
            <div className="w-[32%] h-full flex flex-col items-center justify-between">
              <Image alt="Logo of the company" src="/images/find_house_img_3.svg" width={150} height={100} className="w-[55%] h-auto" />
              <p className="text-sm font-medium">3. Get your dream house in a month, or less</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-3 mt-[100px] px-[3.5%]">
        <Card className="rounded-none  border-none shadow-none flex flex-col items-center text-center text-appBlack">
          <CardHeader className="flex items-center">
            <CardTitle className="text-3xl">Featured Properties</CardTitle>
            <CardDescription>Browse. Compare. Move in. Finding your ideal home has never been simpler.</CardDescription>
            <div className="w-3/4 flex justify-between text-xs pt-3">
              <Button variant="outline" className="border border-appBlack px-2 py-1 rounded-full">
                All Properties
              </Button>
              <Button variant="outline" className="border border-appBlack px-2 py-1 rounded-full">
                For Sale
              </Button>
              <Button variant="outline" className="border border-appBlack px-2 py-1 rounded-full">
                For Rent
              </Button>
              <Button variant="outline" className="border border-appBlack px-2 py-1 rounded-full">
                Duplex
              </Button>
              <Button variant="outline" className="border border-appBlack px-2 py-1 rounded-full">
                Flat
              </Button>
            </div>
          </CardHeader>
          <CardContent className="w-[80%] flex justify-center flex-wrap gap-5 mt-5">
            <Card className="w-[32%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
              <CardHeader>
                <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
              </CardHeader>
              <CardContent className="absolute bottom-12">
                <p>Luxury Family Home</p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin strokeWidth={1.5} size={20} />
                  <span className="font-light text-xs">1800-1818 79th St</span>
                </div>
              </CardContent>
              <CardFooter className="absolute bottom-3 flex justify-between w-full">
                <div className="flex w-1/2 gap-2">
                  <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
                  <span>4</span>
                  <span>|</span>
                  <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
                  <span>1</span>
                </div>
                <p className="font-semibold">$ 395,000</p>
              </CardFooter>
            </Card>
            <Card className="w-[32%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
              <CardHeader>
                <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
              </CardHeader>
              <CardContent className="absolute bottom-12">
                <p>Luxury Family Home</p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin strokeWidth={1.5} size={20} />
                  <span className="font-light text-xs">1800-1818 79th St</span>
                </div>
              </CardContent>
              <CardFooter className="absolute bottom-3 flex justify-between w-full">
                <div className="flex w-1/2 gap-2">
                  <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
                  <span>4</span>
                  <span>|</span>
                  <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
                  <span>1</span>
                </div>
                <p className="font-semibold">$ 395,000</p>
              </CardFooter>
            </Card>
            <Card className="w-[32%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
              <CardHeader>
                <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
              </CardHeader>
              <CardContent className="absolute bottom-12">
                <p>Luxury Family Home</p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin strokeWidth={1.5} size={20} />
                  <span className="font-light text-xs">1800-1818 79th St</span>
                </div>
              </CardContent>
              <CardFooter className="absolute bottom-3 flex justify-between w-full">
                <div className="flex w-1/2 gap-2">
                  <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
                  <span>4</span>
                  <span>|</span>
                  <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
                  <span>1</span>
                </div>
                <p className="font-semibold">$ 395,000</p>
              </CardFooter>
            </Card>
            <Card className="w-[32%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
              <CardHeader>
                <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
              </CardHeader>
              <CardContent className="absolute bottom-12">
                <p>Luxury Family Home</p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin strokeWidth={1.5} size={20} />
                  <span className="font-light text-xs">1800-1818 79th St</span>
                </div>
              </CardContent>
              <CardFooter className="absolute bottom-3 flex justify-between w-full">
                <div className="flex w-1/2 gap-2">
                  <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
                  <span>4</span>
                  <span>|</span>
                  <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
                  <span>1</span>
                </div>
                <p className="font-semibold">$ 395,000</p>
              </CardFooter>
            </Card>
            <Card className="w-[32%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
              <CardHeader>
                <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
              </CardHeader>
              <CardContent className="absolute bottom-12">
                <p>Luxury Family Home</p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin strokeWidth={1.5} size={20} />
                  <span className="font-light text-xs">1800-1818 79th St</span>
                </div>
              </CardContent>
              <CardFooter className="absolute bottom-3 flex justify-between w-full">
                <div className="flex w-1/2 gap-2">
                  <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
                  <span>4</span>
                  <span>|</span>
                  <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
                  <span>1</span>
                </div>
                <p className="font-semibold">$ 395,000</p>
              </CardFooter>
            </Card>
            <Card className="w-[32%] h-[380px] bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover relative text-white text-sm border-none shadow-none">
              <CardHeader>
                <CardTitle className="absolute text-xs bg-appGreen px-4 py-2 rounded-full font-normal">FOR SALE</CardTitle>
              </CardHeader>
              <CardContent className="absolute bottom-12">
                <p>Luxury Family Home</p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin strokeWidth={1.5} size={20} />
                  <span className="font-light text-xs">1800-1818 79th St</span>
                </div>
              </CardContent>
              <CardFooter className="absolute bottom-3 flex justify-between w-full">
                <div className="flex w-1/2 gap-2">
                  <Image alt="icon of bed" src="/images/bed.svg" width={20} height={20} className="" />
                  <span>4</span>
                  <span>|</span>
                  <Image alt="icon of bed" src="/images/shower.svg" width={20} height={20} className="" />
                  <span>1</span>
                </div>
                <p className="font-semibold">$ 395,000</p>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
        <Button className="text-appBlack font-semibold px-6 py-4 rounded-full self-center mx-auto">
          See All Listing
          <ArrowRight />
        </Button>
      </div>

      <div className="mt-[100px] bg-[#FFF8F6]">
        <div className="flex items-center justify-between text-appBlack h-[700px] w-[75%] mx-auto">
          <div className="relative w-[50%] h-[500px]">
            <div className="absolute bg-green-700 w-[43%] h-[50%] rounded-xl bg-[url('/images/family_photo.jpg')] bg-no-repeat bg-center bg-cover"></div>

            <div className="absolute bg-appYellow w-[30%] h-[30%] bottom-[15%] left-[13%] rounded-xl">
              <div className="bg-appGreen w-10 h-10 rounded-full flex items-center justify-center mt-6 ml-4">
                <House className="text-white" strokeWidth={1.5} size={20} />
              </div>
              <p className="mt-4 ml-4 text-xs">Properties for sale</p>
              <p className="mt-2 ml-4 font-semibold">14K</p>
            </div>

            <div className="absolute bg-[url('/images/nigerian_house.jpg')] bg-no-repeat bg-center bg-cover w-[53%] h-[65%] bottom-0 right-0 rounded-xl"></div>
          </div>
          <div className="w-[43%] h-[500px]">
            <h1 className="mt-[150px] mb-3 text-3xl font-semibold">
              Why You Should Work <br /> With Us
            </h1>
            <p className="text-xs leading-5">Partner with us for a seamless property experience! We connect you with exclusive listings to ensure your property journey is smooth, efficient, and successful.</p>
            <div className="w-full mt-5 flex justify-between text-xs font-semibold">
              <div className="flex items-center w-1/2">
                <span>
                  <Image alt="Logo of the company" src="/images/check.svg" width={150} height={100} className="w-6 mr-4 h-auto" />
                </span>
                <p>100% Secure</p>
              </div>
              <div className="flex items-center w-1/2">
                <span>
                  <Image alt="Logo of the company" src="/images/check.svg" width={150} height={100} className="w-6 mr-4 h-auto" />
                </span>
                <p>Wide Range of Properties</p>
              </div>
            </div>
            <div className="w-full mt-5 flex justify-between text-xs font-semibold">
              <div className="flex items-center w-1/2">
                <span>
                  <Image alt="Logo of the company" src="/images/check.svg" width={150} height={100} className="w-6 mr-4 h-auto" />
                </span>
                <p>Buy or Rent Homes</p>
              </div>
              <div className="flex items-center w-1/2">
                <span>
                  <Image alt="Logo of the company" src="/images/check.svg" width={150} height={100} className="w-6 mr-4 h-auto" />
                </span>
                <p>Trusted by Thousands</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[100px]">
        <Card className="rounded-none flex flex-col items-center text-center text-appBlack border-none shadow-none">
          <CardHeader className="">
            <CardTitle className="text-3xl">Explore Cities</CardTitle>
            <CardDescription>Explore a curated selection of properties across prime locations, tailored to meet your lifestyle and investment needs.</CardDescription>
          </CardHeader>
          <CardContent className="w-[80%] h-fit flex flex-wrap justify-center mt-5 gap-10">
            <div className="flex w-[18%] items-center gap-x-3 h-[100px] font-medium">
              <div className="w-1/2 h-full rounded-xl bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover "></div>
              <p>New York</p>
            </div>
            <div className="flex w-[18%] items-center gap-x-3 h-[100px] font-medium">
              <div className="w-1/2 h-full rounded-xl bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover "></div>
              <p>New York</p>
            </div>
            <div className="flex w-[18%] items-center gap-x-3 h-[100px] font-medium">
              <div className="w-1/2 h-full rounded-xl bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover "></div>
              <p>New York</p>
            </div>
            <div className="flex w-[18%] items-center gap-x-3 h-[100px] font-medium">
              <div className="w-1/2 h-full rounded-xl bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover "></div>
              <p>New York</p>
            </div>
            <div className="flex w-[18%] items-center gap-x-3 h-[100px] font-medium">
              <div className="w-1/2 h-full rounded-xl bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover "></div>
              <p>New York</p>
            </div>
            <div className="flex w-[18%] items-center gap-x-3 h-[100px] font-medium">
              <div className="w-1/2 h-full rounded-xl bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover "></div>
              <p>New York</p>
            </div>
            <div className="flex w-[18%] items-center gap-x-3 h-[100px] font-medium">
              <div className="w-1/2 h-full rounded-xl bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover "></div>
              <p>New York</p>
            </div>
            <div className="flex w-[18%] items-center gap-x-3 h-[100px] font-medium">
              <div className="w-1/2 h-full rounded-xl bg-[url('/images/property_img.png')] bg-no-repeat bg-center bg-cover "></div>
              <p>New York</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Home;
