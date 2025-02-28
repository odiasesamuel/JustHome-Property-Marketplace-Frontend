import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import NavLink from "./navLink";

type HeaderType = {
  className: string;
};

const Header: React.FC<HeaderType> = ({ className }) => {
  return (
    <div className={`${className} w-full flex items-center justify-between relative text-appGreen px-[3.5%]`}>
      <div className="w-[10%] h-[30px] flex items-center">
        <Image alt="Logo of the company" src="/images/logo.svg" width={20} height={20} className="mr-3 w-6" />
        <h1 className="text-lg font-medium">JustHome</h1>
      </div>
      <nav className="w-[20%] h-[30px] absolute left-1/2 -translate-x-1/2 flex items-center justify-between font-medium ase">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/listing?page=1&perPage=12">Listing</NavLink>
        {/* <NavLink href="">Blog</NavLink> */}
        <NavLink href="/contact">Contact</NavLink>
      </nav>

      <div className="w-[17%] h-[30px] flex justify-end">
        <Button className="w-[30px] h-full rounded-full">
          <User className="w-4" />
        </Button>
        <Button variant="outline" className="px-6 ml-3 text-sm">
          Add Property
        </Button>
      </div>
    </div>
  );
};

export default Header;
