"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
  const pathname = usePathname();

  // Extract only the pathname from the href (removes query params)
  const hrefPathname = href.split("?")[0];

  return (
    <Link href={href} className={hrefPathname === pathname ? "text-appYellow" : "text-appGreen"}>
      {children}
    </Link>
  );
};

export default NavLink;
