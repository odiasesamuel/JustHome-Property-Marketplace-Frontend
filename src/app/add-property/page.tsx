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
        <Card className="rounded-none  border-none shadow-none flex flex-col items-center text-center text-appBlack">
          <CardHeader className="flex items-center gap-y-3">
            <CardTitle className="text-5xl font-medium">
              {/* Your<span className="text-[#E7C873]"> Property</span>, Our Priority */}
              Turn Your <span className="text-[#E7C873]">Property</span> into Profit
            </CardTitle>
            <CardDescription>
              <p>List your property on our marketplace and connect with buyers or renters effortlessly.</p>
              <p>Start earning from your property today!</p>
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
