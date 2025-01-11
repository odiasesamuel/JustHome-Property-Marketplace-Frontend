import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className=" bg-[url('/images/area-bg.png')] bg-no-repeat bg-center bg-cover h-[530px] flex flex-col items-center text-appGreen">
        <Card className="w-1/2 flex flex-col items-center mt-[50px] border-none shadow-none text-appGreen bg-inherit">
          <Button variant="outline">LET US GUIDE YOU HOME</Button>

          <CardHeader>
            <CardTitle className="text-5xl font-medium mb-4">Find Your Perfect Home</CardTitle>

            {/* <CardTitle className="text-5xl font-medium">
              Your<span className="text-[#E7C873]"> Property</span>, Our Priority
            </CardTitle> */}

            <CardDescription className="text-center text-appGreen">Search properties for sale and to rent in Nigerian</CardDescription>
          </CardHeader>

          <CardContent className="w-full flex flex-col items-center mt-5">
            <div className="w-[80%] mb-10 relative">
              <Input type="text" className="w-full rounded-full px-5 py-4 text-sm  shadow-md focus:outline-none placeholder:text-appGreen" placeholder="Enter Name, Keywords..." />
              <Button type="submit" className="bg-[#E7C873] rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center">
                <Search className="w-4 text-appGreen" />
              </Button>
            </div>

            <div className="h-[150px] text-center w-[38%]">
              <p className="text-sm font-medium">Explore all things Property</p>
              <div className="mt-8 flex justify-between text-xs">
                <Button variant="outline" className="border border-[#EBEBEB] px-2 py-1 rounded-full">
                  All Properties
                </Button>
                <Button variant="outline" className="border border-[#EBEBEB] px-2 py-1 rounded-full">
                  For Sale
                </Button>
                <Button variant="outline" className="border border-[#EBEBEB] px-2 py-1 rounded-full">
                  For Rent
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-[100px]">
        <Card className="bg-appGreen h-[200px] flex items-center px-20">
          <CardContent className="w-full flex justify-between items-end">
            <div className="text-white">
              <h1 className="text-2xl font-medium mb-2">Sign in to streamline your search</h1>
              <p className="text-sm font-light">Save Properties, create alerts and keep track of enquires you send to agents.</p>
            </div>

            <Button className="bg-appYellow text-appGreen font-semibold px-6 py-4">
              Sign in or create an account
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* <div className="bg-white w-full h-[400px] flex justify-center">
        <div className="w-1/2 h-[300px] flex flex-col items-center mt-[100px]">
          <h1 className="text-2xl font-medium">Find Your Dream House as Easy as 1,2,3</h1>
          <p></p>
          <div></div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
