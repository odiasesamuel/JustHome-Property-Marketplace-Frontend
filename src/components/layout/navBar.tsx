import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

type NavBarType = {
  className: string;
};

const NavBar: React.FC<NavBarType> = ({ className }) => {
  return (
    <div className={`${className} w-full flex items-center justify-between relative text-appGreen`}>
      <div className="w-[10%] h-[30px] flex items-center">
        <Image alt="Logo of the company" src="/images/logo.svg" width={20} height={20} className="mr-3 w-6" />
        <h1 className="text-lg font-medium">JustHome</h1>
      </div>
      <nav className="w-[30%] h-[30px] absolute left-1/2 -translate-x-1/2 flex items-center justify-between font-medium text-base">
        <Link href="">Home</Link>
        <Link href="">Listing</Link>
        <Link href="">Blog</Link>
        <Link href="">Contact</Link>
      </nav>

      <div className="w-[17%] h-[30px] flex justify-end">
        <button className="w-[30px] h-full rounded-full border border-appGreen flex items-center justify-center">
          <User className="w-4" />
        </button>
        <button className=" w-[150px] h-full rounded-full ml-3 flex items-center justify-center border border-appGreen text-sm">Add Property</button>
      </div>
    </div>
  );
};

export default NavBar;
