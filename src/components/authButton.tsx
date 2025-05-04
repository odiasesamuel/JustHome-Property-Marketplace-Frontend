"use client";

import { useAuth } from "@/context/authContext";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

type AuthButtonProps = {
  className?: string;
  onClick?: () => void;
};

const AuthButton: React.FC<AuthButtonProps> = ({ className, onClick }) => {
  const { isAuth, login, logout } = useAuth();

  const signoutHandler = () => {
    logout();
    onClick?.();
  };

  return (
    <>
      {isAuth ? (
        <div className={`${className} flex h-[30px] justify-end`}>
          <Button className="h-full w-[30px] rounded-full">
            <User className="w-4" />
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="ml-3 px-6 text-sm">
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
                <AlertDialogAction className="bg-destructive" onClick={signoutHandler}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ) : (
        <Button asChild variant="outline" className={`${className} ml-3 px-6 text-sm`} onClick={onClick}>
          <Link href="/auth?mode=signin">Sign in</Link>
        </Button>
      )}
    </>
  );
};

export default AuthButton;
