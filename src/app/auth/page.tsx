import Link from "next/link";
import SignInForm from "@/components/form/signInForm";
import SignUpForm from "@/components/form/signUpForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

type AuthPageProps = {
  searchParams: SearchParams;
};

const AuthPage: React.FC<AuthPageProps> = async ({ searchParams }) => {
  const { mode = "signin" } = await searchParams;

  return (
    <>
      <div className="-mb-10 flex flex-col items-center px-[3.5%]">
        <Card className="w-[600px]">
          <CardHeader>
            <CardTitle>
              {mode === "signin" && "Sign in to your account"}
              {mode === "signup" && "Register your own account"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mode === "signin" && <SignInForm />}
            {mode === "signup" && <SignUpForm />}
          </CardContent>
        </Card>
        {mode === "signin" && (
          <p className="mt-6 text-center text-sm text-black">
            Don&apos;t have an account?
            <Link href="/auth?mode=signup" className="ml-1 cursor-pointer text-appGreen underline underline-offset-4">
              Register now and list properties
            </Link>
          </p>
        )}
        {mode === "signup" && (
          <p className="mt-6 text-center text-sm text-black">
            Already have an account?
            <Link href="/auth?mode=signin" className="ml-1 cursor-pointer text-appGreen underline underline-offset-4">
              Sign in
            </Link>
          </p>
        )}
      </div>
    </>
  );
};

export default AuthPage;
