import ForgotPassword from "@/components/form/forgetPasswordForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ForgetPassword = () => {
  return (
    <div className="px-[3.5%] flex flex-col items-center -mb-10">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>
            {/* {mode === "signin" && "Sign in to your account"}
              {mode === "signup" && "Register your own account"} */}
              Reset your password
          </CardTitle>
          <CardDescription>Enter your email address and we would send you instructions to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <ForgotPassword />
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgetPassword;
