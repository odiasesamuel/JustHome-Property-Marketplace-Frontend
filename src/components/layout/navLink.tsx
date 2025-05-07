"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ children, href, onClick }) => {
  const pathname = usePathname();
  const hrefPathname = href.split("?")[0];

  return (
    <Link href={href} className={hrefPathname === pathname ? "text-appYellow" : "text-appGreen"} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
