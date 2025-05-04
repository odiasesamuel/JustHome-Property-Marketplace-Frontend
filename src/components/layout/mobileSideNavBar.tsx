"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import NavLink from "./navLink";
import AuthButton from "../authButton";

const MobileSideNavBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openSheet, setOpenSheet] = useState(false);
  const closeSheetHandler = () => setOpenSheet(false);

  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="mx-auto flex">
            {" "}
            <div className="mb-10 flex h-[30px] items-center">
              <Image alt="Logo of the company" src="/images/logo.svg" width={100} height={100} className="mr-3 w-6" />
              <h1 className="text-lg font-medium">JustHome</h1>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center gap-y-10">
          <NavLink href="/" onClick={closeSheetHandler}>
            Home
          </NavLink>
          <NavLink href="/listing?page=1&perPage=12" onClick={closeSheetHandler}>
            Listing
          </NavLink>
          <NavLink href="/contact" onClick={closeSheetHandler}>
            Contact
          </NavLink>

          <AuthButton onClick={closeSheetHandler} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideNavBar;
