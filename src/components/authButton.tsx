"use client";

import { useEffect, useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

const AuthButton = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(!!sessionStorage.getItem("userToken"));
    };

    checkAuth();

    window.addEventListener("authChanged", checkAuth);

    return () => window.removeEventListener("authChanged", checkAuth);
  }, []);

  const signOutHandler = () => {
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("userInfo");
    window.dispatchEvent(new Event("authChanged"));
  };

  return (
    <>
      {isAuth ? (
        <div className="w-[17%] h-[30px] flex justify-end">
          <Button className="w-[30px] h-full rounded-full">
            <User className="w-4" />
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="px-6 ml-3 text-sm">
                Sign out
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm sign out</AlertDialogTitle>
                <AlertDialogDescription>Are you sure you want to sign out?</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive" onClick={signOutHandler}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ) : (
        <Button asChild variant="outline" className="px-6 ml-3 text-sm">
          <Link href="/auth?mode=signin">Sign in</Link>
        </Button>
      )}
    </>
  );
};

export default AuthButton;
