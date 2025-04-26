import Image from "next/image";
import AuthButton from "../authButton";
import { Menu } from "lucide-react";
import NavLink from "./navLink";
import MobileSideNavBar from "./mobileSideNavBar";

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
      <nav className="hidden lg:w-[20%] lg:h-[30px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex lg:items-center lg:justify-between font-medium">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/listing?page=1&perPage=12">Listing</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>

      <AuthButton className="hidden lg:block" />
      <MobileSideNavBar>
        <Menu className="block lg:hidden" />
      </MobileSideNavBar>
    </div>
  );
};

export default Header;
