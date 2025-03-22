"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserPropertyList from "@/components/userPropertyList";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AddProperty = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    if (!token) {
      router.replace("/auth?mode=signin");
    } else {
      setIsAuth(true);
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

            <Button asChild variant="outline" className="px-6 text-sm">
              <Link href="/add-property">List Property</Link>
            </Button>
          </CardHeader>

          <UserPropertyList />
        </Card>
      </div>
    );
  }
};

export default AddProperty;
