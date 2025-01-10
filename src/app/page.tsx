import Image from "next/image";
import NavBar from "@/components/layout/navBar";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="">
      <div className="bg-[url('/images/area-bg.png')] bg-no-repeat bg-center bg-cover w-full h-[600px] pt-[40px]">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col items-center">
          <NavBar className="mb-32" />

          <div className="w-1/2 h-[300px] flex flex-col items-center">
            <button className="w-fit px-4 py-2 border border-[#1F4B43] rounded-full text-xs text-[#1F4B43]">LET US GUIDE YOU HOME</button>

            <h1 className="text-5xl font-medium text-[#1F4B43] my-5">Believe in finding it</h1>

            <p className="text-sm text-[#1F4B43]">Search properties for sale and to rent in Nigeria</p>

            <div className="w-[90%] mt-10 bg-yellow-700 relative">
              <input type="text" className="w-full rounded-full px-5 py-4 text-sm" placeholder="Enter Name, Keywords..." />
              <div className="bg-[#E7C873] rounded-full absolute top-1/2 right-1 transform -translate-y-1/2 p-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
