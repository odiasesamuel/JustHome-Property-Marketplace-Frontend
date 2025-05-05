"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/authContext";
import UserPropertyList from "@/components/userPropertyList";
import AddPropertyForm from "@/components/form/addPropertyForm";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const AddProperty = () => {
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      router.replace("/auth?mode=signin");
    }
  }, []);

  if (isAuth) {
    return (
      <div className="flex flex-col gap-3 px-[3.5%]">
        <Card className="flex flex-col items-center rounded-none border-none text-center text-appBlack shadow-none">
          <CardHeader className="flex items-center gap-y-3">
            <CardTitle className="text-2xl font-medium 2xs:text-3xl xs:text-4xl sm:text-[2.5rem] lg:text-5xl">
              Turn Your <span className="text-[#E7C873]">Property</span> into Profit
            </CardTitle>
            <CardDescription className="text-xs xs:text-sm">
              List your property on our marketplace and connect with buyers or renters effortlessly. <br /> Start earning from your property today!
            </CardDescription>

            <AddPropertyForm />
          </CardHeader>

          <UserPropertyList />
        </Card>
      </div>
    );
  }
};

export default AddProperty;
