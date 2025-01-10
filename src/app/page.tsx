import { Search } from "lucide-react";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className=" bg-[url('/images/area-bg.png')] bg-no-repeat bg-center bg-cover h-[530px] flex flex-col items-center text-appGreen">
        <div className="w-1/2 flex flex-col items-center mt-[50px]">
          <button className="w-fit px-4 py-2 border border-appGreen rounded-full text-xs ">LET US GUIDE YOU HOME</button>

          <h1 className="text-5xl font-medium  my-5">Find Your Perfect Home</h1>

          {/* <h1 className="text-5xl font-medium  my-5">
            Your<span className="text-[#E7C873]"> Property</span>, Our Priority
          </h1> */}

          <p className="text-sm ">Search properties for sale and to rent in Nigeria</p>

          <div className="w-[80%] my-10 relative">
            <input type="text" className="w-full rounded-full px-5 py-4 text-sm  shadow-md border focus:outline-none placeholder:text-appGreen" placeholder="Enter Name, Keywords..." />
            <div className="bg-[#E7C873] rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center">
              <Search className="w-4 " />
            </div>
          </div>

          <div className="h-[150px] text-center w-[35%]">
            <p className="text-sm font-medium">Explore all things Property</p>
            <div className="mt-8 flex justify-between text-xs">
              <button className="border border-[#EBEBEB] px-2 py-1 rounded-full">All Properties</button>
              <button className="border border-[#EBEBEB] px-2 py-1 rounded-full">For Sale</button>
              <button className="border border-[#EBEBEB] px-2 py-1 rounded-full">For Rent</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-[400px] flex justify-center">
        <div className="w-1/2 h-[300px] flex flex-col items-center mt-[100px]">
          <h1 className="text-2xl font-medium">Find Your Dream House as Easy as 1,2,3</h1>
          <p></p>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
